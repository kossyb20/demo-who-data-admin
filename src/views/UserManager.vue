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
        md12
      >
        <material-card
          color="blue"
          title="Users"
          text=""
        >
            <v-btn  color="blue" to="/create-user">Create New User</v-btn>
            <v-text-field
            v-model="search"
            append-icon="mdi-account-search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-data-table
            :headers="userHeaders"
            :items="users"
            :search="search"
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
            <span
                class="font-weight-light text-info text--darken-3"
                v-text="header.text"
              />
            </template>
            <template v-slot:items="props">
              <tr @dblclick="getSiteUser(props.item)">
              <td >{{ props.item.name }}</td>
              <td >{{ props.item.phone }}</td>
              <td >{{ props.item.careCenter }}</td>
              <td >{{ props.item.role }}</td>
              <td >{{ props.item.isActive }}</td>
              </tr>
            </template>
            <v-alert v-slot:no-results :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </material-card>
      </v-flex>

      <v-flex
        xs12
        md12
      >
        <material-card
          color="blue"
          title="Admins"
          text=""
        >
            <v-btn  color="blue" to="/create-user">Create New Admin</v-btn>
            <v-text-field
            v-model="search"
            append-icon="mdi-account-search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-data-table
            :headers="adminHeaders"
            :items="admins"
            :search="search"
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
            <span
                class="font-weight-light text-info text--darken-3"
                v-text="header.text"
              />
            </template>
            <template v-slot:items="props">
              <tr @dblclick="getSiteUser(props.item)">
              <td >{{ props.item.name }}</td>
              <td >{{ props.item.email }}</td>
              <td >{{ props.item.phone }}</td>
              <td >{{ props.item.organisation }}</td>
              <td >{{ props.item.role }}</td>
              <td >{{ props.item.isActive }}</td>
              <!-- <td hidden>{{ props.item._id }}</td> -->
              </tr>
            </template>
            <v-alert v-slot:no-results :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'





export default {
    name: 'Register',
    data() {
        return {
        users: [],
        admins: [],
        search: '',
        userHeaders: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Phone', value: 'phone' ,  sortable: false,},
          { text: 'Facility', value: 'careCenter',  sortable: false, },
          { text: 'Role', value: 'role' ,  sortable: false,},
          { text: 'Is Active', value: 'isActive' ,  sortable: true,},
          


        ],
        adminHeaders: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Email', value: 'email' ,  sortable: false,},
          { text: 'Phone', value: 'phone' ,  sortable: false,},
          { text: 'Organisation', value: 'organisation',  sortable: false, },
          { text: 'Role', value: 'role' ,  sortable: false,},
          { text: 'Is Active', value: 'isActive' ,  sortable: true,},
          


        ],
        }

    },

    methods: {
      getSiteUser(siteUser){
        if (event.target.classList.contains('btn__content')) return;
        console.log(siteUser)
        
        this.$store
              .dispatch("getSiteUser", siteUser)
              .then(() => this.$router.push("/create-user"))
              .catch(err => console.log(err));
      },
    },

    created() {
      axios.get(this.urls.getAllUsers)
      .then(res => this.users = res.data.users)
      .catch(err => this.$alertify.error('FAILED: ' + err));

      axios.get(this.urls.getAllAdmins)
      .then(res => this.admins = res.data.admins)
      .catch(err => this.$alertify.error('FAILED: ' + err));
      
 
      
      
    },
    
    

}
</script>

<style>

</style>

