<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="blue"
          title="All Entries"
          text=""
        >
        <v-text-field
          v-model="search"
          append-icon="mdi-search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-data-table
            :headers="headers"
            :items="entries"
            :search="search"
          >
            <template v-slot:items="props">
              <tr>
              <td>{{ props.item.babyMama }}</td>
              <td class="text-xs-right">{{ props.item.gender }}</td>
              <td class="text-xs-right">{{ props.item.dateOfBirth }}</td>
              <td class="text-xs-right">{{ props.item.timeOfBirth }}</td>
              <td class="text-xs-right">{{ props.item.motherAlive }}</td>
              <td class="text-xs-right">{{ props.item.rhNegative }}</td>
              <td class="text-xs-right">{{ props.item.deliveryType }}</td>
              <td class="text-xs-right">{{ props.item.isPreterm }}</td>
              <td class="text-xs-right">{{ props.item.babyAlive }}</td>
              <td class="text-xs-right">{{ props.item.babyTimeOfDeath }}</td>
              <td class="text-xs-right">{{ props.item.babyCry }}</td>
              <td class="text-xs-right">{{ props.item.tempTaken }}</td>
              <td class="text-xs-right">{{ props.item.babyTemp }}</td>
              <td class="text-xs-right">{{ props.item.babyWeight }}</td>
              <td class="text-xs-right">{{ props.item.apgar }}</td>
              <td class="text-xs-right">{{ props.item.vitaminK }}</td>
              <td class="text-xs-right">{{ props.item.babyWiped }}</td>
              <td class="text-xs-right">{{ props.item.placentaDelivered }}</td>
              <td class="text-xs-right">{{ props.item.uterotonicAdmin }}</td>
              <td class="text-xs-right">{{ props.item.timeOfUterotonic }}</td>
              <td class="text-xs-right">{{ props.item.skinToSkin }}</td>
              <td class="text-xs-right">{{ props.item.skinToSkinDuration }}</td>
              <td class="text-xs-right">{{ props.item.breastfeedingTime }}</td>
              <td class="text-xs-right">{{ props.item.bleedingNorm }}</td>
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
    data () {
      return {
        entries: [],
        search: '',
        headers: [
          {
            text: 'Name of Mother',
            align: 'left',
            sortable: false,
            value: 'babyMama'
          },
          { text: 'Gender', value: 'gender' },
          { text: 'Date of Birth', value: 'dateOfBirth' },
          { text: 'Time of Birth', value: 'timeOfBirth' },
          { text: 'Mother Alive?', value: 'motherAlive' },
          { text: 'Rh Negative', value: 'rhNegative' },
          { text: 'Delivery Type', value: 'deliveryType' },
          { text: 'Is Preterm?', value: 'isPreterm' },
          { text: 'Baby Alive?', value: 'babyAlive' },
          { text: 'Baby Died?', value: 'babyTimeOfDeath' },
          { text: 'Baby Cried?', value: 'babyCry' },
          { text: 'Temperature Taken?', value: 'tempTaken' },
          { text: '°C', value: 'babyTemp' },
          { text: 'Baby Weight', value: 'babyWeight' },
          { text: 'APGAR Score', value: 'apgar' },
          { text: 'Vitamin K?', value: 'vitaminK' },
          { text: 'Baby Wiped?', value: 'babyWiped' },
          { text: 'Placenta Delivered?', value: 'placentaDelivered' },
          { text: 'Admin Uterotonic?', value: 'uterotonicAdmin' },
          { text: 'Time of Utereotonic Admin', value: 'timeOfUterotonic' },
          { text: 'Skin To Skin?', value: 'skinToSkin' },
          { text: 'Duration of Skin to Skin', value: 'skinToSkinDuration' },
          { text: 'Breastfeeding Start Time', value: 'breastfeedingTime' },
          { text: 'Bleeding Normal', value: 'bleedingNorm' },


        ],
        
      }
    },
    methods: {
      showAlert(a){
        if (event.target.classList.contains('btn__content')) return;
        alert('Alert! \n' + a.babyMama);
      }
    },

    created() {
      console.log(process.env.NODE_ENV)
      console.log(process.env.VUE_APP_BASE_URL)
      
      axios.get(this.urls.getAllEntries)
      .then(res => this.entries = res.data.entries)
      .catch(err => this.$alertify.error('FAILED: ' + err));
      

      
      
    },
    

  }
</script>