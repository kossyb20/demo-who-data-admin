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
          title="Centers"
          text=""
        >
            <v-btn  color="blue" to="/create-center">Create New Center</v-btn>
            <v-text-field
            v-model="search"
            append-icon="mdi-table-search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-data-table
            :headers="Headers"
            :items="centers"
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
              <tr >
              <td >{{ props.item.name }}</td>
              <td >{{ props.item.phone }}</td>
              <td >{{ props.item.type }}</td>
              <td >{{ props.item.address }}</td>
              <td >{{ props.item.city }}</td>
              <td >{{ props.item.lga }}</td>
              <td >{{ props.item.district }}</td>
              <td >{{ props.item.state }}</td>
              <td >{{ props.item.country }}</td>
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
        centers: [],
        search: '',
        Headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Phone', value: 'phone' ,  sortable: false,},
          { text: 'Type', value: 'type' ,  sortable: false,},
          { text: 'Address', value: 'address',  sortable: false, },
          { text: 'City', value: 'city',  sortable: false, },
          { text: 'LGA', value: 'lga',  sortable: false, },
          { text: 'District', value: 'district',  sortable: false, },
          { text: 'State', value: 'state' ,  sortable: false,},
          { text: 'Country', value: 'country' ,  sortable: false,},
          
          


        ],
        }

    },

    methods: {
    //   getSiteUser(siteUser){
    //     if (event.target.classList.contains('btn__content')) return;
    //     console.log(siteUser)
        
    //     this.$store
    //           .dispatch("getSiteUser", siteUser)
    //           .then(() => this.$router.push("/create-user"))
    //           .catch(err => console.log(err));
    //   },
    },

    created() {
      axios.get(this.urls.getCenters)
      .then(res => this.centers = res.data.center)
      .catch(err => this.$alertify.error('FAILED: ' + err));
      


 
      
      
    },
    
    

}
</script>

<style>

</style>

