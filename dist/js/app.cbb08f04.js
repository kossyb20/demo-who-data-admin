(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0b0025ca":"23d69425","chunk-1120bd09":"3c6032f6","chunk-2d0c0651":"696ff070","chunk-2d0d63f1":"12f93a7d","chunk-2d0d9f67":"acf98e2e","chunk-2d0dea78":"5909f237","chunk-2d0e492d":"cfc99332","chunk-2d0e5c20":"e6f17387","chunk-2d0e8f94":"d5c63db7","chunk-2d0f09f3":"4340bd78","chunk-2d207bd1":"32b909ff","chunk-2d2086b7":"c56743b7","chunk-2d23822a":"29daff36","chunk-4e5e7fa8":"c4cce686"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-0b0025ca":1,"chunk-1120bd09":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-0b0025ca":"c1e6d6c2","chunk-1120bd09":"41a4938a","chunk-2d0c0651":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-2d0d9f67":"31d6cfe0","chunk-2d0dea78":"31d6cfe0","chunk-2d0e492d":"31d6cfe0","chunk-2d0e5c20":"31d6cfe0","chunk-2d0e8f94":"31d6cfe0","chunk-2d0f09f3":"31d6cfe0","chunk-2d207bd1":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-4e5e7fa8":"31d6cfe0"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0a2d":function(t){t.exports={needHelp:"Need Help?"}},1196:function(t,e,r){"use strict";var n=r("1d1c"),a=r.n(n);a.a},"173d":function(t){t.exports={facebook:"Facebook",footer:"Footer",github:"Github",twitter:"Twitter"}},"1a5d":function(t,e,r){var n={"./AnnualSummaries.vue":["a28b","chunk-2d207bd1"],"./CenterManager.vue":["6a28","chunk-2d0d9f67"],"./CreateCenter.vue":["969f","chunk-2d0e5c20"],"./CreateUser.vue":["5635","chunk-4e5e7fa8"],"./Dashboard.vue":["7277","chunk-2d0d63f1"],"./DashboardOLD.vue":["8725","chunk-2d0dea78"],"./Entries.vue":["4230","chunk-2d0c0651"],"./Icons.vue":["9cc6","chunk-2d0f09f3"],"./Login.vue":["a55b","chunk-2d2086b7"],"./Maps.vue":["daba","chunk-0b0025ca"],"./Notifications.vue":["fda7","chunk-2d23822a"],"./Typography.vue":["547e","chunk-1120bd09"],"./Upgrade.vue":["9198","chunk-2d0e492d"],"./UserManager.vue":["8c0c","chunk-2d0e8f94"]};function a(t){var e=n[t];return e?r.e(e[1]).then(function(){var t=e[0];return r(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(n)},a.id="1a5d",t.exports=a},"1d1c":function(t,e,r){},"25f5":function(t,e,r){"use strict";var n=r("453f"),a=r.n(n);a.a},2609:function(t,e,r){"use strict";r.r(e),e["default"]={drawer:null,color:"blue",image:"./img/sidebar.png"}},"2a74":function(t,e,r){"use strict";r.r(e);r("28a5");var n=r("768b"),a=(r("a481"),r("ac6a"),r("c653")),o={};a.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/(\.\/|\.js)/g,""),r=e.split("/"),i=Object(n["a"])(r,2),s=i[0],c=i[1];o[s]||(o[s]={namespaced:!0}),o[s][c]=a(t).default}}),e["default"]=o},"2c37":function(t,e,r){},4025:function(t,e,r){},4072:function(t,e,r){"use strict";var n=r("721f"),a=r.n(n);a.a},"41c0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{id:"app-drawer",app:"",dark:"",floating:"",persistent:"","mobile-break-point":"991",width:"260"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[r("v-img",{attrs:{src:t.image,height:"100%"}},[r("v-layout",{staticClass:"fill-height",attrs:{tag:"v-list",column:""}},[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar",{attrs:{color:"white"}},[r("v-img",{attrs:{src:t.logo,height:"34",contain:""}})],1),r("v-list-tile-title",{staticClass:"title"},[t._v("\n          Admin\n        ")])],1),r("v-divider"),t.responsive?r("v-list-tile",[r("v-text-field",{staticClass:"purple-input search-input",attrs:{label:"Search...",color:"purple"}})],1):t._e(),t._l(t.links,function(e,n){return r("v-list-tile",{key:n,staticClass:"v-list-item",attrs:{to:e.to,"active-class":t.color,avatar:""}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)}),t.isLoggedIn?r("v-btn",{attrs:{color:"warning"},on:{click:t.logout}},[t._v("Logout")]):t._e()],2)],1)],1)},a=[],o=r("cebc"),i=r("2f62"),s={data:function(){return{logo:"./img/logo.png",links:[{to:"/dashboard",icon:"mdi-view-dashboard",text:"Dashboard"},{to:"/annual-summaries",icon:"mdi-calendar",text:"Annual Summaries"},{to:"/user-manager",icon:"mdi-account",text:"User Manager"},{to:"/center-manager",icon:"mdi-hospital",text:"Center Manager"},{to:"/entries",icon:"mdi-clipboard-outline",text:"Entries"}],responsive:!1}},computed:Object(o["a"])({},Object(i["c"])("app",["image","color"]),{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},items:function(){return this.$t("Layout.View.items")},isLoggedIn:function(){return this.$store.getters.isLoggedIn}}),mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(o["a"])({},Object(i["b"])("app",["setDrawer","toggleDrawer"]),{onResponsiveInverted:function(){window.innerWidth<991?this.responsive=!0:this.responsive=!1},logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/login")})}})},c=s,u=(r("ff57"),r("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=l.exports},"42e7":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("material-card",t._g(t._b({staticClass:"v-card--material-stats"},"material-card",t.$attrs,!1),t.$listeners),[r("v-card",{staticClass:"pa-4",class:"elevation-"+t.elevation,attrs:{slot:"offset",color:t.color,dark:""},slot:"offset"},[r("v-icon",{attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")])],1),r("div",{staticClass:"text-xs-right"},[r("p",{staticClass:"category grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),r("h3",{staticClass:"title display-1 font-weight-light"},[t._v("\n      "+t._s(t.value)+" "),r("small",[t._v(t._s(t.smallValue))])])]),r("template",{slot:"actions"},[r("v-icon",{staticClass:"mr-2",attrs:{color:t.subIconColor,size:"20"}},[t._v("\n      "+t._s(t.subIcon)+"\n    ")]),r("span",{staticClass:"caption font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)],2)},a=[],o=r("cebc"),i=r("e3a9"),s={inheritAttrs:!1,props:Object(o["a"])({},i["default"].props,{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},c=s,u=(r("4d79"),r("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=l.exports},"453f":function(t,e,r){},4999:function(t,e,r){var n={"./en/Common.json":"0a2d","./en/Core/Footer.json":"173d","./en/Core/Toolbar.json":"f26b","./en/Home.json":"5cc6"};function a(t){var e=o(t);return r(e)}function o(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="4999"},"4d79":function(t,e,r){"use strict";var n=r("803b"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=(r("bf40"),r("a481"),r("ac6a"),r("8103")),o=r.n(a),i=r("bba4"),s=r.n(i),c=r("ffe0");c.keys().forEach(function(t){var e=c(t),r=o()(s()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));n["default"].component(r,e.default||e)});var u=r("bc3a"),l=r.n(u);n["default"].prototype.$http=l.a;r("4633");n["default"].use(r("84b5"));var d=r("ce5b"),f=r.n(d),p={primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"};r("5363");n["default"].use(f.a,{iconfont:"mdi",theme:p});var h=r("31bd"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("core-drawer"),r("core-view")],1)},m=[],g=(r("5c0b"),r("2877")),b={},y=Object(g["a"])(b,v,m,!1,null,null,null),k=y.exports,_=r("a925"),w=(r("28a5"),r("5d73")),x=r.n(w),C=r("4999"),O={},j=!0,E=!1,S=void 0;try{for(var A,I=function(){var t=A.value;if("./index.js"===t)return"continue";var e=t.replace(/(\.\/|\.json$)/g,"").split("/");e.reduce(function(r,n,a){return r[n]?r[n]:(r[n]=a+1===e.length?C(t):{},r[n])},O)},$=x()(C.keys());!(j=(A=$.next()).done);j=!0)I()}catch(rt){E=!0,S=rt}finally{try{j||null==$.return||$.return()}finally{if(E)throw S}}var L=O;n["default"].use(_["a"]);var U=new _["a"]({locale:"en",fallbackLocale:"en",messages:L}),D=U,N=(r("7f7f"),r("0284")),T=r.n(N),P=r("8c4f"),M=r("0a89"),B=r.n(M),F=r("2f62"),V=r("795b"),q=r.n(V),R={login:function(t,e){var r=t.commit;return new q.a(function(t,n){r("auth_request"),l()({url:"https://demo-childbirth-survey.herokuapp.com/users/login-admin",data:e,method:"POST"}).then(function(e){if("Success"!==e.data.result)alert(e.data.result);else{var n=e.data.token,a=e.data.admin;a.token=n,localStorage.setItem("token",n),localStorage.setItem("email",a.email),localStorage.setItem("userid",a._id),l.a.defaults.headers.common["Authorization"]=n,r("auth_success",a),t(e)}}).catch(function(t){r("auth_error"),localStorage.removeItem("token"),n(t)})})},logout:function(t){var e=t.commit;return new q.a(function(t,r){e("logout"),localStorage.removeItem("token"),localStorage.removeItem("userid"),localStorage.removeItem("email"),delete l.a.defaults.headers.common["Authorization"],t()})},getSiteUser:function(t,e){var r=t.commit;return new q.a(function(t,n){r("siteUser",e),t()})}},H={isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status},getUser:function(t){return t.admin},retSiteUser:function(t){return t.siteUser}},z=r("2a74"),W={auth_request:function(t){t.status="loading"},auth_success:function(t,e){t.status="success",t.token=e.token,t.admin=e},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token=""},siteUser:function(t,e){t.siteUser=e}},Y={status:"",token:localStorage.getItem("token")||"",admin:{},siteUser:{}};n["default"].use(F["a"]);var G=new F["a"].Store({actions:R,getters:H,modules:z["default"],mutations:W,state:Y}),J=G,K=[{path:"/dashboard",view:"Dashboard",meta:{requiresAuth:!0}},{path:"/annual-summaries",name:"Annual Summaries",view:"AnnualSummaries",meta:{requiresAuth:!0}},{path:"/user-manager",name:"User Manager",view:"UserManager"},{path:"/center-manager",name:"Center Manager",view:"CenterManager",meta:{requiresAuth:!0}},{path:"/create-center",name:"Create Center",view:"CreateCenter",meta:{requiresAuth:!0}},{path:"/entries",name:"Entries",view:"Entries",meta:{requiresAuth:!0}},{path:"/login",name:"Login",view:"Login",meta:{requiresAuth:!0}},{path:"/create-user",name:"Create User",view:"CreateUser",meta:{requiresAuth:!0}}];function Q(t,e,n){return{name:n||e,path:t,component:function(t){return r("1a5d")("./".concat(e,".vue")).then(t)}}}n["default"].use(P["a"]);var X=new P["a"]({mode:"history",routes:K.map(function(t){return Q(t.path,t.view,t.name)}).concat([{path:"*",redirect:"/dashboard"}]),scrollBehavior:function(t,e,r){return r||(t.hash?{selector:t.hash}:{x:0,y:0})}});n["default"].use(B.a),Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://demo-childbirth-survey.herokuapp.com",BASE_URL:"/"}).GOOGLE_ANALYTICS&&n["default"].use(T.a,{id:Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://demo-childbirth-survey.herokuapp.com",BASE_URL:"/"}).GOOGLE_ANALYTICS,router:X,autoTracking:{page:!0}}),X.beforeEach(function(t,e,r){if("/login"!==t.path){if(J.getters.isLoggedIn)return void r();r("/login")}else r()});var Z=X,tt=r("50cf");n["default"].prototype.$http=l.a,n["default"].use(tt["a"]);var et=localStorage.getItem("token");et&&(n["default"].prototype.$http.defaults.headers.common["Authorization"]=et),Object(h["sync"])(J,Z),n["default"].config.productionTip=!1,n["default"].mixin({data:function(){return{urls:{getAllEntries:"https://demo-childbirth-survey.herokuapp.com/api/get-all",postEntry:"https://demo-childbirth-survey.herokuapp.com/api/save-entry",createCenter:"https://demo-childbirth-survey.herokuapp.com/api/create-center",getCenters:"https://demo-childbirth-survey.herokuapp.com/api/get-centers",register:"https://demo-childbirth-survey.herokuapp.com/users/register",login:"https://demo-childbirth-survey.herokuapp.com/users/login-admin",registerAdmin:"https://demo-childbirth-survey.herokuapp.com/users/register-admin",getCenterEntries:"https://demo-childbirth-survey.herokuapp.com/api/get-center-entries",getDateFilteredEntries:"https://demo-childbirth-survey.herokuapp.com/api/get-entries-by-date",getDateRangeFilteredEntries:"https://demo-childbirth-survey.herokuapp.com/api/get-entries-by-daterange",getYearFilteredEntries:"https://demo-childbirth-survey.herokuapp.com/api/get-entries-by-year",getAllUsers:"https://demo-childbirth-survey.herokuapp.com/users/get-users",getAllAdmins:"https://demo-childbirth-survey.herokuapp.com/users/get-admins",editUser:"https://demo-childbirth-survey.herokuapp.com/users/edit-user",editAdmin:"https://demo-childbirth-survey.herokuapp.com/users/edit-admin"}}}}),new n["default"]({i18n:D,router:Z,store:J,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5cc6":function(t){t.exports={title:"Vuetify Alpha",footer:"2018 Vuetify LLC",drawerItems:["Inspire"],needHelp:"Need help?"}},"5e27":function(t,e,r){},"602c":function(t,e,r){"use strict";var n=r("84b6"),a=r.n(n);a.a},6096:function(t,e,r){"use strict";r.r(e);var n=function(t){return function(e,r){return e[t]=r}},a=function(t){return function(e){return e[t]=!e[t]}};e["default"]={setDrawer:n("drawer"),setImage:n("image"),setColor:n("color"),toggleDrawer:a("drawer")}},"703d":function(t,e,r){},"721f":function(t,e,r){},"78d5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("material-card",t._g(t._b({staticClass:"v-card--material-chart"},"material-card",t.$attrs,!1),t.$listeners),[r("chartist",{attrs:{slot:"header",data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type},slot:"header"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},a=[],o=(r("6762"),r("2fdb"),{inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),i=o,s=(r("e536"),r("2877")),c=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=c.exports},"7a74":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{id:"core-footer",absolute:"",height:"82"}},[r("div",{staticClass:"footer-items"},t._l(t.links,function(e){return r("span",{key:e.name},[r("a",{staticClass:"tertiary--text footer-links",attrs:{href:e.Link}},[t._v(t._s(e.name))])])}),0),r("v-spacer"),r("span",{staticClass:"font-weight-light copyright"},[t._v("\n    ©\n    "+t._s((new Date).getFullYear())+"\n    "),r("a",{attrs:{href:"https://www.heliumhealthcare.com/",target:"_blank"}},[t._v("Helium Health")])])],1)},a=[],o={data:function(){return{links:[{name:"Home",Link:"/dashboard"},{name:"Helium Health",Link:"https://www.heliumhealthcare.com"}]}}},i=o,s=(r("602c"),r("2877")),c=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=c.exports},"803b":function(t,e,r){},"84b6":function(t,e,r){},"8f36":function(t,e,r){},9306:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("div",{attrs:{id:"core-view"}},[r("v-fade-transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1),"Maps"!==t.$route.name?r("core-footer"):t._e()],1)},a=[],o={metaInfo:function(){return{title:"Admin Dashboard"}}},i=o,s=(r("ee4f"),r("2877")),c=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=c.exports},"9cbf":function(t,e,r){"use strict";var n=r("8f36"),a=r.n(n);a.a},"9d6c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",t._g(t._b({staticClass:"v-alert--notification",class:["elevation-"+t.elevation],attrs:{value:t.value}},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},a=[],o=(r("c5f6"),{inheritAttrs:!1,props:{elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}}),i=o,s=(r("4072"),r("2877")),c=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=c.exports},b2ab:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[r("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[r("v-icon",[t._v("mdi-settings")])],1),r("v-card",[r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Sidebar Filters")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.colors,function(e){return r("v-avatar",{key:e,class:[e===t.color?"color-active color-"+e:"color-"+e],attrs:{size:"23"},on:{click:function(r){return t.setColor(e)}}})}),1),r("v-divider",{staticClass:"mt-3"})],1),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Images")])]),t._l(t.images,function(e){return r("v-flex",{key:e,attrs:{xs3:""}},[r("v-img",{class:[t.image===e?"image-active":""],attrs:{src:e,height:"120"},nativeOn:{click:function(r){return t.setImage(e)}}})],1)})],2)],1)],1)],1)},a=[],o=r("cebc"),i=r("2f62"),s={data:function(){return{colors:["primary","info","success","warning","danger"],images:["https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"]}},computed:Object(o["a"])({},Object(i["c"])("app",["image","color"]),{color:function(){return this.$store.state.app.color}}),methods:Object(o["a"])({},Object(i["b"])("app",["setImage"]),{setColor:function(t){this.$store.state.app.color=t}})},c=s,u=(r("9cbf"),r("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=l.exports},bdca:function(t,e,r){},c653:function(t,e,r){var n={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74"};function a(t){var e=o(t);return r(e)}function o(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="c653"},c6cc:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)},a=[],o=(r("c5f6"),{props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}}),i=o,s=(r("1196"),r("2877")),c=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=c.exports},cb2c:function(t,e,r){"use strict";var n=r("4025"),a=r.n(n);a.a},d23b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{staticStyle:{background:"#eee"},attrs:{id:"core-toolbar",flat:"",prominent:""}},[r("div",{staticClass:"v-toolbar-title"},[r("v-toolbar-title",{staticClass:"tertiary--text font-weight-light"},[t.responsive?r("v-btn",{staticClass:"default v-btn--simple",attrs:{dark:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClickBtn(e)}}},[r("v-icon",[t._v("mdi-view-list")])],1):t._e(),t._v("\n      "+t._s(t.title)+"\n    ")],1)],1),r("v-spacer"),r("v-toolbar-items",[r("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[t.responsiveInput?r("v-text-field",{staticClass:"mr-4 mt-2 purple-input",attrs:{label:"Search...","hide-details":"",color:"purple"}}):t._e(),r("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/"}},[r("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-view-dashboard")])],1),r("v-menu",{attrs:{bottom:"",left:"","content-class":"dropdown-menu","offset-y":"",transition:"slide-y-transition"}},[r("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{slot:"activator",to:"/notifications"},slot:"activator"},[r("v-badge",{attrs:{color:"error",overlap:""}},[r("template",{slot:"badge"},[t._v("\n              "+t._s(t.notifications.length)+"\n            ")]),r("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-bell")])],2)],1),r("v-card",[r("v-list",{attrs:{dense:""}},t._l(t.notifications,function(e){return r("v-list-tile",{key:e,on:{click:t.onClick}},[r("v-list-tile-title",{domProps:{textContent:t._s(e)}})],1)}),1)],1)],1),r("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/user-profile"}},[r("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-account")])],1)],1)],1)],1)},a=[],o=r("cebc"),i=(r("7f7f"),r("2f62")),s={data:function(){return{notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:null,responsive:!1,responsiveInput:!1}},watch:{$route:function(t){this.title=t.name}},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(o["a"])({},Object(i["b"])("app",["setDrawer","toggleDrawer"]),{onClickBtn:function(){this.setDrawer(!this.$store.state.app.drawer)},onClick:function(){},onResponsiveInverted:function(){window.innerWidth<991?(this.responsive=!0,this.responsiveInput=!1):(this.responsive=!1,this.responsiveInput=!0)}})},c=s,u=(r("25f5"),r("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=l.exports},e3a9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?r("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):r("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?r("span",[r("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),r("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),r("v-card-text",[t._t("default")],2),t.$slots.actions?r("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?r("v-card-actions",[t._t("actions")],2):t._e()],1)},a=[],o=(r("c5f6"),{inheritAttrs:!1,props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}}),i=o,s=(r("cb2c"),r("2877")),c=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=c.exports},e536:function(t,e,r){"use strict";var n=r("bdca"),a=r.n(n);a.a},ee4f:function(t,e,r){"use strict";var n=r("703d"),a=r.n(n);a.a},f26b:function(t){t.exports={title:"Title"}},ff57:function(t,e,r){"use strict";var n=r("2c37"),a=r.n(n);a.a},ffe0:function(t,e,r){var n={"./core/Drawer.vue":"41c0","./core/Filter.vue":"b2ab","./core/Footer.vue":"7a74","./core/Toolbar.vue":"d23b","./core/View.vue":"9306","./helper/Offset.vue":"c6cc","./material/Card.vue":"e3a9","./material/ChartCard.vue":"78d5","./material/Notification.vue":"9d6c","./material/StatsCard.vue":"42e7"};function a(t){var e=o(t);return r(e)}function o(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="ffe0"}});
//# sourceMappingURL=app.cbb08f04.js.map