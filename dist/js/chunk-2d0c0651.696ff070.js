(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0651"],{4230:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{"justify-center":"",wrap:""}},[i("v-flex",{attrs:{md12:""}},[i("material-card",{attrs:{color:"blue",title:"All Entries",text:""}},[i("v-text-field",{attrs:{"append-icon":"mdi-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-data-table",{attrs:{headers:t.headers,items:t.entries,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[i("tr",[i("td",[t._v(t._s(e.item.babyMama))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.gender))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.dateOfBirth))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.timeOfBirth))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.motherAlive))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.rhNegative))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.deliveryType))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.isPreterm))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.babyAlive))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.babyTimeOfDeath))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.babyCry))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.tempTaken))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.babyTemp))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.babyWeight))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.apgar))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.vitaminK))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.babyWiped))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.placentaDelivered))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.uterotonicAdmin))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.timeOfUterotonic))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.skinToSkin))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.skinToSkinDuration))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.breastfeedingTime))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.bleedingNorm))])])]}}])},[i("v-alert",{attrs:{value:!0,color:"error",icon:"warning"},scopedSlots:t._u([{key:"no-results",fn:function(){return[t._v('\n            Your search for "'+t._s(t.search)+'" found no results.\n          ')]},proxy:!0}])})],1)],1)],1)],1)],1)},s=[],r=(i("ac6a"),i("bc3a")),l=i.n(r),n={data:function(){return{entries:[],search:"",headers:[{text:"Name of Mother",align:"left",sortable:!1,value:"babyMama"},{text:"Gender",value:"gender"},{text:"Date of Birth",value:"dateOfBirth"},{text:"Time of Birth",value:"timeOfBirth"},{text:"Mother Alive?",value:"motherAlive"},{text:"Rh Negative",value:"rhNegative"},{text:"Delivery Type",value:"deliveryType"},{text:"Is Preterm?",value:"isPreterm"},{text:"Baby Alive?",value:"babyAlive"},{text:"Baby Died?",value:"babyTimeOfDeath"},{text:"Baby Cried?",value:"babyCry"},{text:"Temperature Taken?",value:"tempTaken"},{text:"°C",value:"babyTemp"},{text:"Baby Weight",value:"babyWeight"},{text:"APGAR Score",value:"apgar"},{text:"Vitamin K?",value:"vitaminK"},{text:"Baby Wiped?",value:"babyWiped"},{text:"Placenta Delivered?",value:"placentaDelivered"},{text:"Admin Uterotonic?",value:"uterotonicAdmin"},{text:"Time of Utereotonic Admin",value:"timeOfUterotonic"},{text:"Skin To Skin?",value:"skinToSkin"},{text:"Duration of Skin to Skin",value:"skinToSkinDuration"},{text:"Breastfeeding Start Time",value:"breastfeedingTime"},{text:"Bleeding Normal",value:"bleedingNorm"}]}},methods:{showAlert:function(t){event.target.classList.contains("btn__content")||alert("Alert! \n"+t.babyMama)}},created:function(){var t=this;console.log("production"),console.log("https://demo-childbirth-survey.herokuapp.com"),l.a.get(this.urls.getAllEntries).then(function(e){return t.entries=e.data.entries}).catch(function(e){return t.$alertify.error("FAILED: "+e)})}},o=n,c=i("2877"),v=Object(c["a"])(o,a,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0c0651.696ff070.js.map