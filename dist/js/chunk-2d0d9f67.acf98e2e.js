(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d9f67"],{"6a28":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md12:""}},[r("material-card",{attrs:{color:"blue",title:"Centers",text:""}},[r("v-btn",{attrs:{color:"blue",to:"/create-center"}},[t._v("Create New Center")]),r("v-text-field",{attrs:{"append-icon":"mdi-table-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),r("v-data-table",{attrs:{headers:t.Headers,items:t.centers,search:t.search},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[r("span",{staticClass:"font-weight-light text-info text--darken-3",domProps:{textContent:t._s(a.text)}})]}},{key:"items",fn:function(e){return[r("tr",[r("td",[t._v(t._s(e.item.name))]),r("td",[t._v(t._s(e.item.phone))]),r("td",[t._v(t._s(e.item.type))]),r("td",[t._v(t._s(e.item.address))]),r("td",[t._v(t._s(e.item.city))]),r("td",[t._v(t._s(e.item.lga))]),r("td",[t._v(t._s(e.item.district))]),r("td",[t._v(t._s(e.item.state))]),r("td",[t._v(t._s(e.item.country))])])]}}])},[r("v-alert",{attrs:{value:!0,color:"error",icon:"warning"},scopedSlots:t._u([{key:"no-results",fn:function(){return[t._v('\n            Your search for "'+t._s(t.search)+'" found no results.\n          ')]},proxy:!0}])})],1)],1)],1)],1)],1)},s=[],n=r("bc3a"),l=r.n(n),i={name:"Register",data:function(){return{centers:[],search:"",Headers:[{text:"Name",align:"left",sortable:!1,value:"name"},{text:"Phone",value:"phone",sortable:!1},{text:"Type",value:"type",sortable:!1},{text:"Address",value:"address",sortable:!1},{text:"City",value:"city",sortable:!1},{text:"LGA",value:"lga",sortable:!1},{text:"District",value:"district",sortable:!1},{text:"State",value:"state",sortable:!1},{text:"Country",value:"country",sortable:!1}]}},methods:{},created:function(){var t=this;l.a.get(this.urls.getCenters).then(function(e){return t.centers=e.data.center}).catch(function(e){return t.$alertify.error("FAILED: "+e)})}},o=i,c=r("2877"),u=Object(c["a"])(o,a,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d9f67.acf98e2e.js.map