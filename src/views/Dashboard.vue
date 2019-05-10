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

      <!-- <v-flex
        sm6
        xs12
        md6
        lg6
      >
      <v-form>
        <v-text-field v-model="date" label="Filter By Date of Birth" prepend-icon="mdi-calendar" type="date"  @input="setDate"></v-text-field>
      </v-form>

      </v-flex> -->
      <v-flex
        sm12
        xs12
        md12
        lg12
      >
      <v-form>
         <v-btn @click="allTime" color="blue" block>All Time</v-btn>
      </v-form>

      </v-flex>
      <v-flex
        sm4
        xs12
        md4
        lg4
      >
      <v-form>
        <v-text-field v-model="fromDate" label="Date From" prepend-icon="mdi-calendar" type="date"></v-text-field>
      </v-form>

      </v-flex>
       <v-flex
        sm4
        xs12
        md4
        lg4
      >
      <v-form>
        <v-text-field v-model="toDate" label="Date To" prepend-icon="mdi-calendar" type="date"></v-text-field>
      </v-form>

      </v-flex>
      <v-flex      
        sm4
        xs12
        md4
        lg4
      >
      <v-btn @click="setDateRange" color="blue" block>Apply</v-btn>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="X-Deliveries - Total">
          <h2>{{ getTotalDeliveries() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Deliveries - Normal">
          <h2>{{ getNormalDelivery() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Deliveries - C- section">
          <h2>{{ getCesareanSection() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Deliveries - Assisted ">
          <h2>{{ getAssistedDelivery() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="X-Live births (Total)">
          <h2>{{ getLiveBirths() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="X_Still birth">
          <h2>{{ getStillBirths() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Still birth - Fresh">
          <h2>{{ getFreshStillBirths() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Preterm deliveries ">
          <h2>{{ getPreterm() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Newborns who had Skin to Skin">
          <h2>{{ getKMC() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Mothers who received uterotonic">
          <h2>{{ uterotonicReceived() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Babies breastfed within 1hr of delivery">
          <h2>{{ breastfed() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Babies weighed at birth (live & still births) ">
          <h2>{{ babiesWeighted() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Live Birth Female, <2.5kg">
          <h2>{{ femaleLess2_5() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Live Birth Female, >2.5kg">
          <h2>{{ femaleMore2_5() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Live Birth Male, <2.5kg">
          <h2>{{ maleLess2_5() }}</h2>
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-card color="blue" title="Live Birth Male, >2.5kg">
          <h2>{{ maleMore2_5() }}</h2>
        </material-card>
      </v-flex>
      <!-- <v-flex
        md12
      >
        <material-card
          color="blue"
          :title="title"
          text=""
        >
        <v-btn color="blue" @click="csvExport">Download</v-btn>
        <v-data-table
        :headers="headers"
        :items="dhisData"
        hide-actions
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
            <tr>
            <td>{{ props.item.element }}</td>
            <td class="text-xs-right">{{ props.item.jan }}</td>
            <td class="text-xs-right">{{ props.item.feb }}</td>
            <td class="text-xs-right">{{ props.item.mar }}</td>
            <td class="text-xs-right">{{ props.item.apr }}</td>
            <td class="text-xs-right">{{ props.item.may }}</td>
            <td class="text-xs-right">{{ props.item.jun }}</td>
            <td class="text-xs-right">{{ props.item.jul }}</td>
            <td class="text-xs-right">{{ props.item.aug }}</td>
            <td class="text-xs-right">{{ props.item.sep }}</td>
            <td class="text-xs-right">{{ props.item.oct }}</td>
            <td class="text-xs-right">{{ props.item.nov }}</td>
            <td class="text-xs-right">{{ props.item.dec }}</td>
            </tr>
          </template>
  
        </v-data-table>
        </material-card>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'


// const moment = require('moment');

  function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");
	
    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
		
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
		csv.push(row.join(","));		
	}

    // Download CSV
    download_csv(csv.join("\n"), filename);
}




export default {
    data () {
      return {
        entries: [],
        search: '',
        headers: [
          {text: 'DHIS - Data Elements', sortable: false},
          {text: 'January', sortable: false},
          {text: 'February', sortable: false},
          {text: 'March', sortable: false},
          {text: 'April', sortable: false},
          {text: 'May', sortable: false},
          {text: 'June', sortable: false},
          {text: 'July', sortable: false},
          {text: 'August', sortable: false},
          {text: 'September', sortable: false},
          {text: 'October', sortable: false},
          {text: 'November', sortable: false},
          {text: 'December', sortable: false},
          
     

        ],
        date: new Date().toISOString().substr(0, 10),
        //fromDate: new Date().toISOString().substr(0, 10),
        fromDate: new Date(new Date().getFullYear(), new Date().getMonth(), 2).toISOString().substr(0, 10),
        toDate: new Date().toISOString().substr(0, 10),
        menu: false,
        title: 'DHIS Data Elements ' + new Date().getFullYear(),
        dhisData: [
          { element: 'X-Deliveries - Total', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Deliveries - Normal', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Deliveries - Caesarian section', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Deliveries - Assisted ', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'X_Live births (total)', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'X_Still birth', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Still birth - Fresh', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Preterm deliveries', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Mothers who received uterotonic', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Babies who are breatfed within one hour of delivery', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Babies who are weighed at birth', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Live Birth Female <2.5kg', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Live Birth Female >2.5kg', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Live Birth Male <2.5kg', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          { element: 'Live Birth Male >2.5kg', jan: '6', feb: '4', mar: '6', apr: '7', may: '2', jun: '9', jul: '1', aug: '8', sep: '5', oct: '10', nov: '11', dec: '12'},
          ]
        
      }
    },
    methods: {
      getAllData(){
          axios.get(this.urls.getAllEntries)
          .then(res => this.entries = res.data.entries)
          .catch(err => this.$alertify.error('FAILED: ' + err));
      },
      
      getTotalDeliveries(){
        
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'dateOfBirth'){
              let value = entry[key]
              let year = new Date(value).getFullYear()
              if (year ===  new Date().getFullYear()){
                switch (new Date(value).getUTCMonth()){
                  case 0:
                    janCount += 1
                    break
                  case 1:
                    febCount += 1
                    break
                  case 2:
                    marCount += 1
                    break
                  case 3:
                    aprCount += 1
                    break
                  case 4:
                    mayCount += 1
                    break
                  case 5:
                    junCount += 1
                    break
                  case 6:
                    julCount += 1
                    break
                  case 7:
                    augCount += 1
                    break
                  case 8:
                    sepCount += 1
                    break
                  case 9:
                    octCount += 1
                    break
                  case 10:
                    novCount += 1
                    break
                  case 11:
                    decCount += 1
                    break
                }
              }
            }
          }
        })
        this.dhisData[0].jan = janCount
        this.dhisData[0].feb = febCount
        this.dhisData[0].mar = marCount
        this.dhisData[0].apr = aprCount
        this.dhisData[0].may = mayCount
        this.dhisData[0].jun = junCount
        this.dhisData[0].jul = julCount
        this.dhisData[0].aug = augCount
        this.dhisData[0].sep = sepCount
        this.dhisData[0].oct = octCount
        this.dhisData[0].nov = novCount
        this.dhisData[0].dec = decCount
        return this.entries.length
      },
      getNormalDelivery(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'deliveryType'){
              let value = entry[key]
              if (value !== 'Cesarean Section' && value !== 'Assisted delivery (forceps or vent use)'){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[1].jan = janCount
        this.dhisData[1].feb = febCount
        this.dhisData[1].mar = marCount
        this.dhisData[1].apr = aprCount
        this.dhisData[1].may = mayCount
        this.dhisData[1].jun = junCount
        this.dhisData[1].jul = julCount
        this.dhisData[1].aug = augCount
        this.dhisData[1].sep = sepCount
        this.dhisData[1].oct = octCount
        this.dhisData[1].nov = novCount
        this.dhisData[1].dec = decCount

        return vals.length
      },
      getCesareanSection(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0

        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'deliveryType'){
              let value = entry[key]
              if (value === 'Cesarean Section'){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[2].jan = janCount
        this.dhisData[2].feb = febCount
        this.dhisData[2].mar = marCount
        this.dhisData[2].apr = aprCount
        this.dhisData[2].may = mayCount
        this.dhisData[2].jun = junCount
        this.dhisData[2].jul = julCount
        this.dhisData[2].aug = augCount
        this.dhisData[2].sep = sepCount
        this.dhisData[2].oct = octCount
        this.dhisData[2].nov = novCount
        this.dhisData[2].dec = decCount

        return vals.length
      },
      getAssistedDelivery(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0

        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'deliveryType'){
              let value = entry[key]
              if (value === 'Assisted delivery (forceps or vent use)'){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[3].jan = janCount
        this.dhisData[3].feb = febCount
        this.dhisData[3].mar = marCount
        this.dhisData[3].apr = aprCount
        this.dhisData[3].may = mayCount
        this.dhisData[3].jun = junCount
        this.dhisData[3].jul = julCount
        this.dhisData[3].aug = augCount
        this.dhisData[3].sep = sepCount
        this.dhisData[3].oct = octCount
        this.dhisData[3].nov = novCount
        this.dhisData[3].dec = decCount
        return vals.length
      },
      getLiveBirths(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0

        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'babyAlive'){
              let value = entry[key]
              if (value === true){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[4].jan = janCount
        this.dhisData[4].feb = febCount
        this.dhisData[4].mar = marCount
        this.dhisData[4].apr = aprCount
        this.dhisData[4].may = mayCount
        this.dhisData[4].jun = junCount
        this.dhisData[4].jul = julCount
        this.dhisData[4].aug = augCount
        this.dhisData[4].sep = sepCount
        this.dhisData[4].oct = octCount
        this.dhisData[4].nov = novCount
        this.dhisData[4].dec = decCount
        return vals.length
      },
      getStillBirths(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0

        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'babyAlive'){
              let value = entry[key]
              if (value === false){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[5].jan = janCount
        this.dhisData[5].feb = febCount
        this.dhisData[5].mar = marCount
        this.dhisData[5].apr = aprCount
        this.dhisData[5].may = mayCount
        this.dhisData[5].jun = junCount
        this.dhisData[5].jul = julCount
        this.dhisData[5].aug = augCount
        this.dhisData[5].sep = sepCount
        this.dhisData[5].oct = octCount
        this.dhisData[5].nov = novCount
        this.dhisData[5].dec = decCount
        
        return vals.length
      },
      getFreshStillBirths(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'babyAlive'){
              let value = entry[key]
              if (value === false){
                if (entry['babyTimeOfDeath'] !== 'before labour'){
                  vals.push(entry['babyTimeOfDeath'])
                  let year = new Date(entry['dateOfBirth']).getFullYear()
                  if (year === new Date().getFullYear()){
                    
                    
                    switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                      case 0:
                        janCount += 1
                        break
                      case 1:
                        febCount += 1
                        break
                      case 2:
                        marCount += 1
                        break
                      case 3:
                        aprCount += 1
                        break
                      case 4:
                        mayCount += 1
                        break
                      case 5:
                        junCount += 1
                        break
                      case 6:
                        julCount += 1
                        break
                      case 7:
                        augCount += 1
                        break
                      case 8:
                        sepCount += 1
                        break
                      case 9:
                        octCount += 1
                        break
                      case 10:
                        novCount += 1
                        break
                      case 11:
                        decCount += 1
                        break
                    }
                  }
                }
              }
            }
          }
        })

        this.dhisData[6].jan = janCount
        this.dhisData[6].feb = febCount
        this.dhisData[6].mar = marCount
        this.dhisData[6].apr = aprCount
        this.dhisData[6].may = mayCount
        this.dhisData[6].jun = junCount
        this.dhisData[6].jul = julCount
        this.dhisData[6].aug = augCount
        this.dhisData[6].sep = sepCount
        this.dhisData[6].oct = octCount
        this.dhisData[6].nov = novCount
        this.dhisData[6].dec = decCount
        
        return vals.length
      },
      getPreterm(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'isPreterm'){
              let value = entry[key]
              if (value === true){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[7].jan = janCount
        this.dhisData[7].feb = febCount
        this.dhisData[7].mar = marCount
        this.dhisData[7].apr = aprCount
        this.dhisData[7].may = mayCount
        this.dhisData[7].jun = junCount
        this.dhisData[7].jul = julCount
        this.dhisData[7].aug = augCount
        this.dhisData[7].sep = sepCount
        this.dhisData[7].oct = octCount
        this.dhisData[7].nov = novCount
        this.dhisData[7].dec = decCount

        return vals.length
      },
      getKMC(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'skinToSkin'){
              let value = entry[key]
              if (value === true){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[8].jan = janCount
        this.dhisData[8].feb = febCount
        this.dhisData[8].mar = marCount
        this.dhisData[8].apr = aprCount
        this.dhisData[8].may = mayCount
        this.dhisData[8].jun = junCount
        this.dhisData[8].jul = julCount
        this.dhisData[8].aug = augCount
        this.dhisData[8].sep = sepCount
        this.dhisData[8].oct = octCount
        this.dhisData[8].nov = novCount
        this.dhisData[8].dec = decCount
        return vals.length
      },
      uterotonicReceived(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'uterotonicAdmin'){
              let value = entry[key]
              if (value === true){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[8].jan = janCount
        this.dhisData[8].feb = febCount
        this.dhisData[8].mar = marCount
        this.dhisData[8].apr = aprCount
        this.dhisData[8].may = mayCount
        this.dhisData[8].jun = junCount
        this.dhisData[8].jul = julCount
        this.dhisData[8].aug = augCount
        this.dhisData[8].sep = sepCount
        this.dhisData[8].oct = octCount
        this.dhisData[8].nov = novCount
        this.dhisData[8].dec = decCount
        return vals.length
      },
      breastfed(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'breastfeedingTime'){
              let value = entry[key]
              if (value !== ''){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[9].jan = janCount
        this.dhisData[9].feb = febCount
        this.dhisData[9].mar = marCount
        this.dhisData[9].apr = aprCount
        this.dhisData[9].may = mayCount
        this.dhisData[9].jun = junCount
        this.dhisData[9].jul = julCount
        this.dhisData[9].aug = augCount
        this.dhisData[9].sep = sepCount
        this.dhisData[9].oct = octCount
        this.dhisData[9].nov = novCount
        this.dhisData[9].dec = decCount
        return vals.length
      },
      babiesWeighted(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if (key === 'babyWeight'){
              let value = entry[key]
              if (value !== 0){
                vals.push(value)
                let year = new Date(entry['dateOfBirth']).getFullYear()
                if (year === new Date().getFullYear()){
                  
                  
                  switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                    case 0:
                      janCount += 1
                      break
                    case 1:
                      febCount += 1
                      break
                    case 2:
                      marCount += 1
                      break
                    case 3:
                      aprCount += 1
                      break
                    case 4:
                      mayCount += 1
                      break
                    case 5:
                      junCount += 1
                      break
                    case 6:
                      julCount += 1
                      break
                    case 7:
                      augCount += 1
                      break
                    case 8:
                      sepCount += 1
                      break
                    case 9:
                      octCount += 1
                      break
                    case 10:
                      novCount += 1
                      break
                    case 11:
                      decCount += 1
                      break
                  }
                }
              }
            }
          }
        })

        this.dhisData[10].jan = janCount
        this.dhisData[10].feb = febCount
        this.dhisData[10].mar = marCount
        this.dhisData[10].apr = aprCount
        this.dhisData[10].may = mayCount
        this.dhisData[10].jun = junCount
        this.dhisData[10].jul = julCount
        this.dhisData[10].aug = augCount
        this.dhisData[10].sep = sepCount
        this.dhisData[10].oct = octCount
        this.dhisData[10].nov = novCount
        this.dhisData[10].dec = decCount
        return vals.length
      },
      femaleLess2_5(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if ( key === 'gender'){
              let gender = entry[key]
              let life = entry['babyAlive']
              if (gender === 'female' && life === true){
                
                let weight = entry['babyWeight']
                if (weight <= 2.5){
                  vals.push(weight)
                  let year = new Date(entry['dateOfBirth']).getFullYear()
                  if (year === new Date().getFullYear()){
                    
                    
                    switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                      case 0:
                        janCount += 1
                        break
                      case 1:
                        febCount += 1
                        break
                      case 2:
                        marCount += 1
                        break
                      case 3:
                        aprCount += 1
                        break
                      case 4:
                        mayCount += 1
                        break
                      case 5:
                        junCount += 1
                        break
                      case 6:
                        julCount += 1
                        break
                      case 7:
                        augCount += 1
                        break
                      case 8:
                        sepCount += 1
                        break
                      case 9:
                        octCount += 1
                        break
                      case 10:
                        novCount += 1
                        break
                      case 11:
                        decCount += 1
                        break
                    }
                  }
                }
              }
            }
          }
        })
        this.dhisData[11].jan = janCount
        this.dhisData[11].feb = febCount
        this.dhisData[11].mar = marCount
        this.dhisData[11].apr = aprCount
        this.dhisData[11].may = mayCount
        this.dhisData[11].jun = junCount
        this.dhisData[11].jul = julCount
        this.dhisData[11].aug = augCount
        this.dhisData[11].sep = sepCount
        this.dhisData[11].oct = octCount
        this.dhisData[11].nov = novCount
        this.dhisData[11].dec = decCount
        return vals.length
      },
      femaleMore2_5(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if ( key === 'gender'){
              let gender = entry[key]
              let life = entry['babyAlive']
              if (gender === 'female' && life === true){
                
                let weight = entry['babyWeight']
                if (weight > 2.5){
                  vals.push(weight)
                  let year = new Date(entry['dateOfBirth']).getFullYear()
                  if (year === new Date().getFullYear()){
                    
                    
                    switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                      case 0:
                        janCount += 1
                        break
                      case 1:
                        febCount += 1
                        break
                      case 2:
                        marCount += 1
                        break
                      case 3:
                        aprCount += 1
                        break
                      case 4:
                        mayCount += 1
                        break
                      case 5:
                        junCount += 1
                        break
                      case 6:
                        julCount += 1
                        break
                      case 7:
                        augCount += 1
                        break
                      case 8:
                        sepCount += 1
                        break
                      case 9:
                        octCount += 1
                        break
                      case 10:
                        novCount += 1
                        break
                      case 11:
                        decCount += 1
                        break
                    }
                  }
                }
              }
            }
          }
        })
        this.dhisData[12].jan = janCount
        this.dhisData[12].feb = febCount
        this.dhisData[12].mar = marCount
        this.dhisData[12].apr = aprCount
        this.dhisData[12].may = mayCount
        this.dhisData[12].jun = junCount
        this.dhisData[12].jul = julCount
        this.dhisData[12].aug = augCount
        this.dhisData[12].sep = sepCount
        this.dhisData[12].oct = octCount
        this.dhisData[12].nov = novCount
        this.dhisData[12].dec = decCount
        return vals.length
      },
      maleLess2_5(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if ( key === 'gender'){
              let gender = entry[key]
              let life = entry['babyAlive']
              if (gender === 'male' && life === true){
                
                let weight = entry['babyWeight']
                if (weight <= 2.5){
                  vals.push(weight)
                  let year = new Date(entry['dateOfBirth']).getFullYear()
                  if (year === new Date().getFullYear()){
                    
                    
                    switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                      case 0:
                        janCount += 1
                        break
                      case 1:
                        febCount += 1
                        break
                      case 2:
                        marCount += 1
                        break
                      case 3:
                        aprCount += 1
                        break
                      case 4:
                        mayCount += 1
                        break
                      case 5:
                        junCount += 1
                        break
                      case 6:
                        julCount += 1
                        break
                      case 7:
                        augCount += 1
                        break
                      case 8:
                        sepCount += 1
                        break
                      case 9:
                        octCount += 1
                        break
                      case 10:
                        novCount += 1
                        break
                      case 11:
                        decCount += 1
                        break
                    }
                  }
                }
              }
            }
          }
        })

        this.dhisData[13].jan = janCount
        this.dhisData[13].feb = febCount
        this.dhisData[13].mar = marCount
        this.dhisData[13].apr = aprCount
        this.dhisData[13].may = mayCount
        this.dhisData[13].jun = junCount
        this.dhisData[13].jul = julCount
        this.dhisData[13].aug = augCount
        this.dhisData[13].sep = sepCount
        this.dhisData[13].oct = octCount
        this.dhisData[13].nov = novCount
        this.dhisData[13].dec = decCount
        return vals.length
      },
      maleMore2_5(){
        let janCount = 0
        let febCount = 0
        let marCount = 0
        let aprCount = 0
        let mayCount = 0
        let junCount = 0
        let julCount = 0
        let augCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0
        let vals = []
        this.entries.forEach((entry, index) => {
          for (const key in entry){
            if ( key === 'gender'){
              let gender = entry[key]
              let life = entry['babyAlive']
              if (gender === 'male' && life === true){
                
                let weight = entry['babyWeight']
                if (weight > 2.5){
                  vals.push(weight)
                  let year = new Date(entry['dateOfBirth']).getFullYear()
                  if (year === new Date().getFullYear()){
                    
                    
                    switch (new Date(entry['dateOfBirth']).getUTCMonth()){
                      case 0:
                        janCount += 1
                        break
                      case 1:
                        febCount += 1
                        break
                      case 2:
                        marCount += 1
                        break
                      case 3:
                        aprCount += 1
                        break
                      case 4:
                        mayCount += 1
                        break
                      case 5:
                        junCount += 1
                        break
                      case 6:
                        julCount += 1
                        break
                      case 7:
                        augCount += 1
                        break
                      case 8:
                        sepCount += 1
                        break
                      case 9:
                        octCount += 1
                        break
                      case 10:
                        novCount += 1
                        break
                      case 11:
                        decCount += 1
                        break
                    }
                  }
                }
              }
            }
          }
        })

        this.dhisData[14].jan = janCount
        this.dhisData[14].feb = febCount
        this.dhisData[14].mar = marCount
        this.dhisData[14].apr = aprCount
        this.dhisData[14].may = mayCount
        this.dhisData[14].jun = junCount
        this.dhisData[14].jul = julCount
        this.dhisData[14].aug = augCount
        this.dhisData[14].sep = sepCount
        this.dhisData[14].oct = octCount
        this.dhisData[14].nov = novCount
        this.dhisData[14].dec = decCount
        return vals.length
      },
      setDate() {

        axios.get(this.urls.getDateFilteredEntries+'/?dateFilter='+this.date)
        .then(res => this.entries = res.data.entries)
        .catch(err => this.$alertify.error('FAILED: ' + err));
      },
      setDateRange(){
        console.log(this.fromDate)
        console.log(this.toDate)
        axios.get(this.urls.getDateRangeFilteredEntries+'/?fromDate='+this.fromDate+'&toDate='+this.toDate)
        .then(res => this.entries = res.data.entries)
        .catch(err => this.$alertify.error('FAILED: ' + err));
        
      },

      csvExport() {
          var html = document.querySelector("table").outerHTML;
          export_table_to_csv(html, "DHIS Data Elements.csv");
      },
      allTime(){
        this.getAllData()

      }

    },

    created() {
      console.log(process.env.NODE_ENV)
      console.log(process.env.VUE_APP_BASE_URL)

      this.setDateRange()


      
      
    },
    

  }

  

</script>