(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[t("v-layout",{attrs:{"justify-center":"",wrap:""}},[t("v-flex",{attrs:{sm12:"",xs12:"",md12:"",lg12:""}},[t("v-form",[t("v-btn",{attrs:{color:"blue",block:""},on:{click:a.refresh}},[a._v("Refresh")])],1)],1),t("v-flex",{attrs:{sm4:"",xs12:"",md4:"",lg4:""}},[t("v-form",[t("v-text-field",{attrs:{label:"Date From","prepend-icon":"mdi-calendar",type:"date"},model:{value:a.fromDate,callback:function(e){a.fromDate=e},expression:"fromDate"}})],1)],1),t("v-flex",{attrs:{sm4:"",xs12:"",md4:"",lg4:""}},[t("v-form",[t("v-text-field",{attrs:{label:"Date To","prepend-icon":"mdi-calendar",type:"date"},model:{value:a.toDate,callback:function(e){a.toDate=e},expression:"toDate"}})],1)],1),t("v-flex",{attrs:{sm4:"",xs12:"",md4:"",lg4:""}},[t("v-btn",{attrs:{color:"blue",block:""},on:{click:a.setDateRange}},[a._v("Filter")])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"X-Deliveries - Total"}},[t("h2",[a._v(a._s(a.getTotalDeliveries()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Deliveries - Normal"}},[t("h2",[a._v(a._s(a.getNormalDelivery()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Deliveries - Caesarian section"}},[t("h2",[a._v(a._s(a.getCesareanSection()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Deliveries - Assisted "}},[t("h2",[a._v(a._s(a.getAssistedDelivery()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"X-Live births (Total)"}},[t("h2",[a._v(a._s(a.getLiveBirths()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"X_Still birth"}},[t("h2",[a._v(a._s(a.getStillBirths()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Still birth - Fresh"}},[t("h2",[a._v(a._s(a.getFreshStillBirths()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Preterm deliveries "}},[t("h2",[a._v(a._s(a.getPreterm()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Newborn placed on KMC"}},[t("h2",[a._v(a._s(a.getKMC()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Mothers who received uterotonic"}},[t("h2",[a._v(a._s(a.uterotonicReceived()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Babies breastfed within 1hr of delivery"}},[t("h2",[a._v(a._s(a.breastfed()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Babies weighed at birth (live & still births) "}},[t("h2",[a._v(a._s(a.babiesWeighted()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Live Birth Female, <2.5kg"}},[t("h2",[a._v(a._s(a.femaleLess2_5()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Live Birth Female, >2.5kg"}},[t("h2",[a._v(a._s(a.femaleMore2_5()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Live Birth Male, <2.5kg"}},[t("h2",[a._v(a._s(a.maleLess2_5()))])])],1),t("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[t("material-card",{attrs:{color:"blue",title:"Live Birth Male, >2.5kg"}},[t("h2",[a._v(a._s(a.maleMore2_5()))])])],1),t("v-flex",{attrs:{md12:""}},[t("material-card",{attrs:{color:"blue",title:a.title,text:""}},[t("v-btn",{attrs:{color:"blue"},on:{click:a.csvExport}},[a._v("Download")]),t("v-data-table",{attrs:{headers:a.headers,items:a.dhisData,"hide-actions":""},scopedSlots:a._u([{key:"headerCell",fn:function(e){var s=e.header;return[t("span",{staticClass:"font-weight-light text-info text--darken-3",domProps:{textContent:a._s(s.text)}})]}},{key:"items",fn:function(e){return[t("tr",[t("td",[a._v(a._s(e.item.element))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.jan))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.feb))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.mar))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.apr))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.may))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.jun))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.jul))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.aug))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.sep))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.oct))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.nov))]),t("td",{staticClass:"text-xs-right"},[a._v(a._s(e.item.dec))])])]}}])})],1)],1)],1)],1)},i=[],r=(t("ac6a"),t("bc3a")),h=t.n(r);function n(a,e){var t,s;t=new Blob([a],{type:"text/csv"}),s=document.createElement("a"),s.download=e,s.href=window.URL.createObjectURL(t),s.style.display="none",document.body.appendChild(s),s.click()}function c(a,e){for(var t=[],s=document.querySelectorAll("table tr"),i=0;i<s.length;i++){for(var r=[],h=s[i].querySelectorAll("td, th"),c=0;c<h.length;c++)r.push(h[c].innerText);t.push(r.join(","))}n(t.join("\n"),e)}var l={data:function(){return{entries:[],search:"",headers:[{text:"DHIS - Data Elements",sortable:!1},{text:"January",sortable:!1},{text:"February",sortable:!1},{text:"March",sortable:!1},{text:"April",sortable:!1},{text:"May",sortable:!1},{text:"June",sortable:!1},{text:"July",sortable:!1},{text:"August",sortable:!1},{text:"September",sortable:!1},{text:"October",sortable:!1},{text:"November",sortable:!1},{text:"December",sortable:!1}],date:(new Date).toISOString().substr(0,10),fromDate:(new Date).toISOString().substr(0,10),toDate:(new Date).toISOString().substr(0,10),menu:!1,title:"DHIS Data Elements "+(new Date).getFullYear(),dhisData:[{element:"X-Deliveries - Total",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Deliveries - Normal",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Deliveries - Caesarian section",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Deliveries - Assisted ",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"X_Live births (total)",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"X_Still birth",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Still birth - Fresh",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Preterm deliveries",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Mothers who received uterotonic",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Babies who are breatfed within one hour of delivery",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Babies who are weighed at birth",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Live Birth Female <2.5kg",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Live Birth Female >2.5kg",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Live Birth Male <2.5kg",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"},{element:"Live Birth Male >2.5kg",jan:"6",feb:"4",mar:"6",apr:"7",may:"2",jun:"9",jul:"1",aug:"8",sep:"5",oct:"10",nov:"11",dec:"12"}]}},methods:{getAllData:function(){var a=this;h.a.get(this.urls.getAllEntries).then(function(e){return a.entries=e.data.entries}).catch(function(e){return a.$alertify.error("FAILED: "+e)})},getTotalDeliveries:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0;return this.entries.forEach(function(b,D){for(var u in b)if("dateOfBirth"===u){var f=b[u],v=new Date(f).getFullYear();if(v===(new Date).getFullYear())switch(new Date(f).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}),this.dhisData[0].jan=a,this.dhisData[0].feb=e,this.dhisData[0].mar=t,this.dhisData[0].apr=s,this.dhisData[0].may=i,this.dhisData[0].jun=r,this.dhisData[0].jul=h,this.dhisData[0].aug=n,this.dhisData[0].sep=c,this.dhisData[0].oct=l,this.dhisData[0].nov=d,this.dhisData[0].dec=o,this.entries.length},getNormalDelivery:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("deliveryType"===f){var v=D[f];if("Cesarean Section"!==v&&"Assisted delivery (forceps or vent use)"!==v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[1].jan=a,this.dhisData[1].feb=e,this.dhisData[1].mar=t,this.dhisData[1].apr=s,this.dhisData[1].may=i,this.dhisData[1].jun=r,this.dhisData[1].jul=h,this.dhisData[1].aug=n,this.dhisData[1].sep=c,this.dhisData[1].oct=l,this.dhisData[1].nov=d,this.dhisData[1].dec=o,b.length},getCesareanSection:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("deliveryType"===f){var v=D[f];if("Cesarean Section"===v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[2].jan=a,this.dhisData[2].feb=e,this.dhisData[2].mar=t,this.dhisData[2].apr=s,this.dhisData[2].may=i,this.dhisData[2].jun=r,this.dhisData[2].jul=h,this.dhisData[2].aug=n,this.dhisData[2].sep=c,this.dhisData[2].oct=l,this.dhisData[2].nov=d,this.dhisData[2].dec=o,b.length},getAssistedDelivery:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("deliveryType"===f){var v=D[f];if("Assisted delivery (forceps or vent use)"===v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[3].jan=a,this.dhisData[3].feb=e,this.dhisData[3].mar=t,this.dhisData[3].apr=s,this.dhisData[3].may=i,this.dhisData[3].jun=r,this.dhisData[3].jul=h,this.dhisData[3].aug=n,this.dhisData[3].sep=c,this.dhisData[3].oct=l,this.dhisData[3].nov=d,this.dhisData[3].dec=o,b.length},getLiveBirths:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("babyAlive"===f){var v=D[f];if(!0===v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[4].jan=a,this.dhisData[4].feb=e,this.dhisData[4].mar=t,this.dhisData[4].apr=s,this.dhisData[4].may=i,this.dhisData[4].jun=r,this.dhisData[4].jul=h,this.dhisData[4].aug=n,this.dhisData[4].sep=c,this.dhisData[4].oct=l,this.dhisData[4].nov=d,this.dhisData[4].dec=o,b.length},getStillBirths:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("babyAlive"===f){var v=D[f];if(!1===v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[5].jan=a,this.dhisData[5].feb=e,this.dhisData[5].mar=t,this.dhisData[5].apr=s,this.dhisData[5].may=i,this.dhisData[5].jun=r,this.dhisData[5].jul=h,this.dhisData[5].aug=n,this.dhisData[5].sep=c,this.dhisData[5].oct=l,this.dhisData[5].nov=d,this.dhisData[5].dec=o,b.length},getFreshStillBirths:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("babyAlive"===f){var v=D[f];if(!1===v&&"before labour"!==D["babyTimeOfDeath"]){b.push(D["babyTimeOfDeath"]);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[6].jan=a,this.dhisData[6].feb=e,this.dhisData[6].mar=t,this.dhisData[6].apr=s,this.dhisData[6].may=i,this.dhisData[6].jun=r,this.dhisData[6].jul=h,this.dhisData[6].aug=n,this.dhisData[6].sep=c,this.dhisData[6].oct=l,this.dhisData[6].nov=d,this.dhisData[6].dec=o,b.length},getPreterm:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("isPreterm"===f){var v=D[f];if(!0===v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[7].jan=a,this.dhisData[7].feb=e,this.dhisData[7].mar=t,this.dhisData[7].apr=s,this.dhisData[7].may=i,this.dhisData[7].jun=r,this.dhisData[7].jul=h,this.dhisData[7].aug=n,this.dhisData[7].sep=c,this.dhisData[7].oct=l,this.dhisData[7].nov=d,this.dhisData[7].dec=o,b.length},getKMC:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("skinToSkin"===f){var v=D[f];if(!0===v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[8].jan=a,this.dhisData[8].feb=e,this.dhisData[8].mar=t,this.dhisData[8].apr=s,this.dhisData[8].may=i,this.dhisData[8].jun=r,this.dhisData[8].jul=h,this.dhisData[8].aug=n,this.dhisData[8].sep=c,this.dhisData[8].oct=l,this.dhisData[8].nov=d,this.dhisData[8].dec=o,b.length},uterotonicReceived:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("uterotonicAdmin"===f){var v=D[f];if(!0===v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[8].jan=a,this.dhisData[8].feb=e,this.dhisData[8].mar=t,this.dhisData[8].apr=s,this.dhisData[8].may=i,this.dhisData[8].jun=r,this.dhisData[8].jul=h,this.dhisData[8].aug=n,this.dhisData[8].sep=c,this.dhisData[8].oct=l,this.dhisData[8].nov=d,this.dhisData[8].dec=o,b.length},breastfed:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("breastfeedingTime"===f){var v=D[f];if(""!==v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[9].jan=a,this.dhisData[9].feb=e,this.dhisData[9].mar=t,this.dhisData[9].apr=s,this.dhisData[9].may=i,this.dhisData[9].jun=r,this.dhisData[9].jul=h,this.dhisData[9].aug=n,this.dhisData[9].sep=c,this.dhisData[9].oct=l,this.dhisData[9].nov=d,this.dhisData[9].dec=o,b.length},babiesWeighted:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("babyWeight"===f){var v=D[f];if(0!==v){b.push(v);var k=new Date(D["dateOfBirth"]).getFullYear();if(k===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}),this.dhisData[10].jan=a,this.dhisData[10].feb=e,this.dhisData[10].mar=t,this.dhisData[10].apr=s,this.dhisData[10].may=i,this.dhisData[10].jun=r,this.dhisData[10].jul=h,this.dhisData[10].aug=n,this.dhisData[10].sep=c,this.dhisData[10].oct=l,this.dhisData[10].nov=d,this.dhisData[10].dec=o,b.length},femaleLess2_5:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("gender"===f){var v=D[f],k=D["babyAlive"];if("female"===v&&!0===k){var m=D["babyWeight"];if(m<=2.5){b.push(m);var g=new Date(D["dateOfBirth"]).getFullYear();if(g===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}}),this.dhisData[11].jan=a,this.dhisData[11].feb=e,this.dhisData[11].mar=t,this.dhisData[11].apr=s,this.dhisData[11].may=i,this.dhisData[11].jun=r,this.dhisData[11].jul=h,this.dhisData[11].aug=n,this.dhisData[11].sep=c,this.dhisData[11].oct=l,this.dhisData[11].nov=d,this.dhisData[11].dec=o,b.length},femaleMore2_5:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("gender"===f){var v=D[f],k=D["babyAlive"];if("female"===v&&!0===k){var m=D["babyWeight"];if(m>2.5){b.push(m);var g=new Date(D["dateOfBirth"]).getFullYear();if(g===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}}),this.dhisData[12].jan=a,this.dhisData[12].feb=e,this.dhisData[12].mar=t,this.dhisData[12].apr=s,this.dhisData[12].may=i,this.dhisData[12].jun=r,this.dhisData[12].jul=h,this.dhisData[12].aug=n,this.dhisData[12].sep=c,this.dhisData[12].oct=l,this.dhisData[12].nov=d,this.dhisData[12].dec=o,b.length},maleLess2_5:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("gender"===f){var v=D[f],k=D["babyAlive"];if("male"===v&&!0===k){var m=D["babyWeight"];if(m<=2.5){b.push(m);var g=new Date(D["dateOfBirth"]).getFullYear();if(g===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}}),this.dhisData[13].jan=a,this.dhisData[13].feb=e,this.dhisData[13].mar=t,this.dhisData[13].apr=s,this.dhisData[13].may=i,this.dhisData[13].jun=r,this.dhisData[13].jul=h,this.dhisData[13].aug=n,this.dhisData[13].sep=c,this.dhisData[13].oct=l,this.dhisData[13].nov=d,this.dhisData[13].dec=o,b.length},maleMore2_5:function(){var a=0,e=0,t=0,s=0,i=0,r=0,h=0,n=0,c=0,l=0,d=0,o=0,b=[];return this.entries.forEach(function(D,u){for(var f in D)if("gender"===f){var v=D[f],k=D["babyAlive"];if("male"===v&&!0===k){var m=D["babyWeight"];if(m>2.5){b.push(m);var g=new Date(D["dateOfBirth"]).getFullYear();if(g===(new Date).getFullYear())switch(new Date(D["dateOfBirth"]).getUTCMonth()){case 0:a+=1;break;case 1:e+=1;break;case 2:t+=1;break;case 3:s+=1;break;case 4:i+=1;break;case 5:r+=1;break;case 6:h+=1;break;case 7:n+=1;break;case 8:c+=1;break;case 9:l+=1;break;case 10:d+=1;break;case 11:o+=1;break}}}}}),this.dhisData[14].jan=a,this.dhisData[14].feb=e,this.dhisData[14].mar=t,this.dhisData[14].apr=s,this.dhisData[14].may=i,this.dhisData[14].jun=r,this.dhisData[14].jul=h,this.dhisData[14].aug=n,this.dhisData[14].sep=c,this.dhisData[14].oct=l,this.dhisData[14].nov=d,this.dhisData[14].dec=o,b.length},setDate:function(){var a=this;h.a.get(this.urls.getDateFilteredEntries+"/?dateFilter="+this.date).then(function(e){return a.entries=e.data.entries}).catch(function(e){return a.$alertify.error("FAILED: "+e)})},setDateRange:function(){var a=this;console.log(this.fromDate),console.log(this.toDate),h.a.get(this.urls.getDateRangeFilteredEntries+"/?fromDate="+this.fromDate+"&toDate="+this.toDate).then(function(e){return a.entries=e.data.entries}).catch(function(e){return a.$alertify.error("FAILED: "+e)})},csvExport:function(){var a=document.querySelector("table").outerHTML;c(a,"DHIS Data Elements.csv")},refresh:function(){this.getAllData()}},created:function(){console.log("production"),console.log("https://ngwho-data.herokuapp.com"),this.getAllData()}},d=l,o=t("2877"),b=Object(o["a"])(d,s,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0d63f1.06b770a2.js.map