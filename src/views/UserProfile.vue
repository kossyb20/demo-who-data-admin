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
            <v-form v-on:submit.prevent action="" v-on:keyup.enter="doNothing">
                <v-switch v-model="formData.isAdmin" label="Is Admin"></v-switch>
                <template v-if="formData.isAdmin == false">
                <v-text-field v-model="formData.name" label="Name "  ></v-text-field>
                <v-text-field v-model="formData.phone" label="Phone Number" type="number"  ></v-text-field>
                <v-text-field v-model="formData.role" label="Role"  ></v-text-field>
                <v-select :items="centers" v-model="formData.careCenter" box label="Center"></v-select>
                </template>
                <v-text-field v-else v-model="formData.email" label="Email" type="email"  ></v-text-field>
                <v-text-field required v-model="formData.password" label="Password"  type="password"></v-text-field>
                <v-text-field required v-model="formData.password2" label="Repeat Password"  type="password"></v-text-field>
                
                <v-btn @click="submitData" color="blue">Register</v-btn>

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
            <template v-if="formData.isAdmin == false">
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Name: </span>{{formData.name}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Phone Number: </span>{{formData.phone}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Role: </span>{{formData.role}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Facility: </span>{{formData.careCenter}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Password: </span>{{formData.password}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Password Repeat: </span>{{formData.password2}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Is Admin: </span>{{formData.isAdmin}}</h4>
            </template>
            <template v-else>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Email: </span>{{formData.email}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Password: </span>{{formData.password}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Password Repeat: </span>{{formData.password2}}</h4>
              <h4 class="card-title font-weight-light"><span class="font-weight-bold">Is Admin: </span>{{formData.isAdmin}}</h4>
            </template>
            

          </v-card-text>
        </material-card>
      </v-flex>
      <v-flex
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
      </v-flex>
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
                password: '',
                password2: '',
                isAdmin: false,
                email: '',
   
            }
}



export default {
    name: 'Register',
    data() {
        return {formData : initialState(),
        centers: [],
        email: '',
        password: ''}

    },

    methods: {

        submitData() {

            if (this.formData.password === this.formData.password2) {

                this.formData.careCenter = this.formData.careCenter

                axios.post(this.urls.register, this.formData)
                .then(res => {

                if (res.data.result === 'User Created'){
                    this.$alertify.success('SUCCESSFULLY CREATED USER. NOW LOGIN.')
                    this.$router.push('login')
                }
                else{
                    this.$alertify.error('UNABLE TO CREATE USER')
                }


                })
                .catch(err => this.$alertify.error('FAILED: ' + err));
                
                
                this.formData = initialState()

            }
            else{
                this.$alertify.error('Passwords do not match')
            }
            
            
        },

        login: function() {
            let email = this.email;
            let password = this.password;
            console.log(email, password)
            this.$store
              .dispatch("login", { email, password })
              .then(() => this.$router.push("/"))
              .catch(err => console.log(err));
            },
            
        logout: function() {
          this.$store.dispatch("logout").then(() => {
            this.$router.push("/user-profile");
          });
        },

        doNothing() {console.log('do nothing')},

    },

    created() {
      axios.get(this.urls.getCenters)
      .then(res => {
          for (let i = 0; i < res.data.center.length; i++) {
            this.centers.push(res.data.center[i].name)
          }
      })
      .catch(err => this.$alertify.error('FAILED: ' + err));
      console.log(this.centers)
 
      
      
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

