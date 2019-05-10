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
          title="Create Center"
          text=""
        >
            <v-form v-on:submit.prevent action="" v-on:keyup.enter="doNothing">
                <v-text-field v-model="formData.name" label="Name "  ></v-text-field>
                <v-text-field v-model="formData.phone" label="Phone Number" type="number"  ></v-text-field>
                <v-text-field v-model="formData.address" label="Address"></v-text-field>
                <v-select :items="states" v-model="formData.state" box label="State"></v-select>
                <v-text-field v-if="formData.state == 'FCT'" v-model="formData.district" label="District"  ></v-text-field>
                <template v-else>
                <v-text-field v-model="formData.lga" label="LGA"  ></v-text-field>
                <v-text-field v-model="formData.city" label="City"  ></v-text-field>
                </template>
                <v-text-field v-model="formData.country" label="Country"  ></v-text-field>
                <v-select v-model="formData.type" :items="types" box label="Type"  ></v-select>
                <v-btn @click="submitData" color="blue">Create</v-btn>

            </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card     
          color="blue"
          title="Center Preview"
          text="">
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Name: </span>{{formData.name}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Phone Number: </span>{{formData.phone}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Address: </span>{{formData.address}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">State: </span>{{formData.state}}</h4>
            <h4 v-if="formData.state == 'FCT'" class="card-title font-weight-light"><span class="font-weight-bold">District: </span>{{formData.district}}</h4>
            <template v-else>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">LGA: </span>{{formData.lga}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">City: </span>{{formData.city}}</h4>
            </template>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Country: </span>{{formData.country}}</h4>
            <h4 class="card-title font-weight-light"><span class="font-weight-bold">Type: </span>{{formData.type}}</h4>
            

          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
function initialState() {
            return {
                name: '',
                phone: '',
                address: '',
                city: '',
                lga: '',
                district: '',
                state: '',
                country: 'Nigeria',
                type: '',
   
            }
}


export default {
    name: 'Form',
    data() {
        return {formData : initialState(),
                types: ['PHC', 'General Hospital'],
                states: [
                        "Abia",
                        "Adamawa",
                        "Anambra",
                        "Akwa Ibom",
                        "Bauchi",
                        "Bayelsa",
                        "Benue",
                        "Borno",
                        "Cross River",
                        "Delta",
                        "Ebonyi",
                        "Enugu",
                        "Edo",
                        "Ekiti",
                        "FCT",
                        "Gombe",
                        "Imo",
                        "Jigawa",
                        "Kaduna",
                        "Kano",
                        "Katsina",
                        "Kebbi",
                        "Kogi",
                        "Kwara",
                        "Lagos",
                        "Nasarawa",
                        "Niger",
                        "Ogun",
                        "Ondo",
                        "Osun",
                        "Oyo",
                        "Plateau",
                        "Rivers",
                        "Sokoto",
                        "Taraba",
                        "Yobe",
                        "Zamfara"
                        ]}

    },

    methods: {

        submitData() {

            axios.post(this.urls.createCenter, this.formData)
            .then(res => this.$alertify.success('SUCCESS!!!'))
            .catch(err => this.$alertify.error('FAILED: ' + err));
            
            this.formData = initialState()
            
            
        },
        doNothing() {console.log('do nothing')}
    },

    created(){
        console.log(process.env.NODE_ENV)
        console.log(process.env.VUE_APP_BASE_URL)
    }

}
</script>

<style>

</style>


