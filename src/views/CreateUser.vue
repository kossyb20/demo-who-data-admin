<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="blue"
          title="Create Profile"
          text=""
        >
            <v-btn @click="clearForm" color="blue">RESET</v-btn>
            <v-form v-on:submit.prevent action="" v-on:keyup.enter="doNothing">
                <v-switch v-model="user.isAdmin" label="Is Admin"></v-switch>
                
                <v-text-field v-model="user.name" label="Name "  ></v-text-field>
                <template v-if="user.isAdmin == false">
                <v-text-field v-model="user.phone" label="Phone Number" type="number"  ></v-text-field>
                <v-select :items="centers" v-model="user.careCenter" box label="Center"></v-select>
                <v-select :items="roles" v-model="user.role" box label="Role"  ></v-select>
                </template>
                <template v-else>
                <v-text-field v-model="user.email" label="Email" type="email"  ></v-text-field>
                <v-text-field v-model="user.phone" label="Phone Number" type="number"  ></v-text-field>
                <v-select :items="orgs" v-model="user.organisation" box label="Organisation"></v-select>
                <v-select :items="roles" v-model="user.role" box label="Role"  ></v-select>
                </template>
                <v-text-field required v-model="user.password" label="Password"  type="password"></v-text-field>
                <v-text-field required v-model="user.password2" label="Repeat Password"  type="password"></v-text-field>
                <!-- <v-checkbox v-model="user.isActive" label="Change Password"></v-checkbox> -->
                <template v-if="isEdit === false">
                <v-btn v-if="user.password === user.password2" @click="submitData" color="blue">Register</v-btn>
                </template>
                <template v-else>
                <v-checkbox v-model="isPasswordChange" @change="changePassword" label="Change Password"></v-checkbox>
                <v-btn @click="editUser" color="primary">Save Edit</v-btn><br><br>
                <v-btn v-if="user.isActive === true" @click="userStatus" color="error">DEACTIVATE</v-btn>
                <v-btn v-else @click="userStatus" color="green">ACTIVATE</v-btn>
                </template>

                

            </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card     
          color="blue"
          title="Profile Preview"
          text="">
          <v-card-text class="text-xs-center">
            <template v-if="user.isAdmin == false">
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Name: </span>{{user.name}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Phone Number: </span>{{user.phone}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Role: </span>{{user.role}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Facility: </span>{{user.careCenter}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Password: </span>{{user.password}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Password Repeat: </span>{{user.password2}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Is Admin: </span>{{user.isAdmin}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Is Active: </span>{{user.isActive}}</h4>
            </template>
            <template v-else>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Name: </span>{{user.name}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Email: </span>{{user.email}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Phone Number: </span>{{user.phone}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Organisation: </span>{{user.organisation}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Role: </span>{{user.role}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Password: </span>{{user.password}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Password Repeat: </span>{{user.password2}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Is Admin: </span>{{user.isAdmin}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Is Active: </span>{{user.isActive}}</h4>
            </template>
            

          </v-card-text>
        </material-card>
      </v-flex>
      <!-- <v-flex
        xs12
        md8
      >
        <v-btn v-if="isLoggedIn" @click="logout" color="blue">Logout</v-btn>
        <template v-else>
        <material-card
          color="blue"
          title="Login"
          text=""
        >
            
            <v-form v-on:submit.prevent action="" v-on:keyup.enter="doNothing">
                <v-text-field required v-model="email" label="Email" type="email"  ></v-text-field>
                <v-text-field required v-model="password" label="Password"  type="password"></v-text-field>
                <v-btn @click="login" color="blue">Login</v-btn>
            </v-form>
        </material-card>
        </template>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import { constants } from 'crypto';


function initialState() {
            return {
                name: '',
                phone: '',
                role: '',
                careCenter: '',
                organisation: '',
                password: '',
                password2: '',
                isAdmin: false,
                email: '',
                isActive: true
   
            }
}



export default {
    name: 'Register',
    data() {
        return {user : initialState(),
        centers: [],
        orgs: ['WHO', 'GOVERNMENT', 'HELIUM HEALTH'],
        roles: ['Facility User', 'Coordinator'],
        isEdit: false,
        isPasswordChange: false}

    },

    methods: {

        submitData() {

            if (this.user.password === this.user.password2) {

                //this.user.careCenter = this.user.careCenter
                if (this.user.isAdmin === false){

                  axios.post(this.urls.register, this.user)
                  .then(res => {

                  if (res.data.result === 'User Created'){
                      this.$alertify.success('SUCCESSFULLY CREATED USER')
                      
                  }
                  else{
                      this.$alertify.error('UNABLE TO CREATE USER')
                  }


                  })
                  .catch(err => this.$alertify.error('FAILED: ' + err));
                  
                  
                  this.user = initialState()
                  
                }
                else{
                    axios.post(this.urls.registerAdmin, this.user)
                    .then(res => {

                    if (res.data.result === 'Admin Created'){
                        this.$alertify.success('SUCCESSFULLY CREATED ADMIN')
                        
                    }
                    else{
                        this.$alertify.error('UNABLE TO CREATE ADMIN')
                    }


                    })
                    .catch(err => this.$alertify.error('FAILED: ' + err));
                    
                    
                    this.user = initialState()
                    
                }
                this.$router.push('/user-manager')

            }
            else{
                this.$alertify.error('Passwords do not match')
            }
            
            
        },

        doNothing() {console.log('do nothing')},
        clearForm(){
          this.user = initialState()
          this.isEdit = false
          this.isPasswordChange = false
        },
        changePassword(){
          console.log(this.isPasswordChange)
          if(this.isPasswordChange === true){
            this.user.password = ''
            this.user.password2 = ''
          }
        },

        userStatus(){
              if (this.user.isAdmin === false){
                  console.log(this.user._id)
                  if (this.user.isActive === true){
                    this.user.isActive = false
                  }
                  else{
                    this.user.isActive = true
                  }

                  axios.post(this.urls.editUser, this.user)
                  .then(res => {

                  if (res.data === 'SUCCESS'){
                      this.$alertify.success('SUCCESSFULLY EDITED USER')
                      
                  }
                  else{
                      this.$alertify.error('UNABLE TO EDIT USER')
                  }


                  })
                  .catch(err => this.$alertify.error('FAILED: ' + err));
                  
                  
                 
                  
                }
                else{
                    this.user.isActive = false
                    axios.post(this.urls.editAdmin, this.user)
                    .then(res => {

                    if (res.data === 'SUCCESS'){
                        this.$alertify.success('SUCCESSFULLY EDITED ADMIN')
                        
                    }
                    else{
                        this.$alertify.error('UNABLE TO EDIT ADMIN')
                    }


                    })
                    .catch(err => this.$alertify.error('FAILED: ' + err));
                    
           
                }
        },

        editUser() {
            if (this.isPasswordChange === true) {

                //this.user.careCenter = this.user.careCenter
                if (this.user.isAdmin === false){
                  console.log(this.user._id)
                  this.user.isPasswordChange = this.isPasswordChange

                  axios.post(this.urls.editUser, this.user)
                  .then(res => {

                  if (res.data === 'SUCCESS'){
                      this.$alertify.success('SUCCESSFULLY EDITED USER')
                      
                  }
                  else{
                      this.$alertify.error('UNABLE TO EDIT USER')
                  }


                  })
                  .catch(err => this.$alertify.error('FAILED: ' + err));
                  
                  
                  this.user = initialState()
                  
                }
                else{
                    this.user.isPasswordChange = this.isPasswordChange
                    axios.post(this.urls.editAdmin, this.user)
                    .then(res => {

                    if (res.data === 'SUCCESS'){
                        this.$alertify.success('SUCCESSFULLY EDITED ADMIN')
                        
                    }
                    else{
                        this.$alertify.error('UNABLE TO EDIT ADMIN')
                    }


                    })
                    .catch(err => this.$alertify.error('FAILED: ' + err));
                    
                    
                    this.user = initialState()
                    
                }
                this.$router.push('/user-manager')

            }
            else{
                if (this.user.isAdmin === false){
                  console.log(this.user._id)
                  this.user.isPasswordChange = this.isPasswordChange

                  axios.post(this.urls.editUser, this.user)
                  .then(res => {

                  if (res.data === 'SUCCESS'){
                      this.$alertify.success('SUCCESSFULLY EDITED USER')
                      
                  }
                  else{
                      this.$alertify.error('UNABLE TO EDIT USER')
                  }


                  })
                  .catch(err => this.$alertify.error('FAILED: ' + err));
                  
                  
                  this.user = initialState()
                  
                }
                else{
                    this.user.isPasswordChange = this.isPasswordChange
                    axios.post(this.urls.editAdmin, this.user)
                    .then(res => {

                    if (res.data === 'SUCCESS'){
                        this.$alertify.success('SUCCESSFULLY EDITED ADMIN')
                        
                    }
                    else{
                        this.$alertify.error('UNABLE TO EDIT ADMIN')
                    }


                    })
                    .catch(err => this.$alertify.error('FAILED: ' + err));
                    
                    
                    this.user = initialState()
                    
                }
                this.$router.push('/user-manager')
            }
            
        }

    },

    created() {
      axios.get(this.urls.getCenters)
      .then(res => {
          for (let i = 0; i < res.data.center.length; i++) {
            this.centers.push(res.data.center[i].name)
          }
      })
      .catch(err => this.$alertify.error('FAILED: ' + err));
      

      const siteUser = this.$store.getters.retSiteUser
      
      if (siteUser.name !== undefined){
        
        // this.user = siteUser
        // console.log(this.user.email)
        if (siteUser.email === undefined){
          
          this.user = siteUser
          this.user.isAdmin = false
          this.user.password2 = this.user.password
          
          
          this.isEdit = true
        }
        else{
          this.user = siteUser
          this.user.isAdmin = true
          this.user.password2 = this.user.password
          
          
          this.isEdit = true
        }
       
        
    }
 
      
      
    },

    computed: {
        isLoggedIn: function() {
          return this.$store.getters.isLoggedIn;
        }
      },
    
    

}
</script>

<style>

</style>

