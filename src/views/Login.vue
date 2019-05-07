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
        
        <template>
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
function initialState() {
    return {
        email: '',
        password: '',
        

    }
}

export default {
    name: 'Login',
    data() {
        return {
            email : '',
            password: '',
        }

    },

    methods: {
        login: function() {
            let email = this.email;
            let password = this.password;
            console.log(email, password)
            this.$store
              .dispatch("login", { email, password })
              .then(() => this.$router.push("/"))
              .catch(err => console.log(err));
            },
            
    }
}
</script>

