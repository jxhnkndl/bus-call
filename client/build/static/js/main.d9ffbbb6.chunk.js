(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{115:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},120:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(26),i=c.n(n),s=c(49),r=c(15),l=(c(92),c(29)),o=c(61),d=c.n(o),j=function(){return d.a.get("/api/gigs")},m=function(e){return d.a.post("/api/gigs",e)},b=function(e){return d.a.delete("/api/gigs/"+e)},h=c(14),u=(c(81),c(9),c(1));var O=c(67),x=c(79),p=c(16);function v(){var e=Object(r.b)().loginWithRedirect;return Object(u.jsxs)(p.a,{className:"m-2 px-4 py-2",variant:"primary",onClick:function(){return e()},children:[Object(u.jsx)("i",{className:"fas fa-sign-in-alt mr-2"}),"Log In"]})}function g(){var e=Object(r.b)().logout;return Object(u.jsxs)(p.a,{className:"m-2 px-4 py-2",variant:"primary",onClick:function(){return e()},children:["Log Out",Object(u.jsx)("i",{className:"fas fa-sign-out-alt ml-2"})]})}c(115);function f(){var e=Object(r.b)(),t=e.isAuthenticated,c=e.user;return console.log(c),Object(u.jsxs)(O.a,{variant:"dark",expand:"lg",children:[Object(u.jsx)(O.a.Brand,{href:"/",children:"Bus Call"}),Object(u.jsx)(x.a,{className:"ml-auto",children:t?Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("img",{src:c.picture,className:"avatar mr-3 rounded-circle",alt:"Profile image"}),Object(u.jsx)("div",{className:"media-body mr-3",children:Object(u.jsx)("p",{className:"h6 my-0",children:"Hi ".concat(c.given_name,"!")})}),Object(u.jsx)(g,{})]}):Object(u.jsx)(v,{})})]})}var N=c(140),S={initial:{opacity:0,scale:.8},in:{opacity:1,scale:1},out:{opacity:0,scale:1.2}},y={type:"tween",ease:"anticipate",duration:.3};c(117);function w(e){return Object(u.jsx)("div",{className:"dash-card ".concat(e.spacing," ").concat(e.flex),children:e.children})}c(118);function k(){var e=Object(r.b)().loginWithRedirect;return Object(u.jsx)("header",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-12 col-md-10 mx-auto",children:[Object(u.jsx)("h1",{className:"headline",children:"Never miss a beat"}),Object(u.jsxs)("h3",{className:"sub-headline",children:[Object(u.jsx)("span",{className:"d-block d-sm-inline-block mr-sm-2",children:"You play the gigs."}),Object(u.jsx)("span",{className:"d-block d-sm-inline-block",children:"We'll handle the details."})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)(p.a,{variant:"primary",className:"mt-3 px-4 py-2",onClick:function(){return e()},children:[Object(u.jsx)("i",{className:"fas fa-headphones-alt mr-2"}),"Get Started"]})]})})})}var C=c(35),_=c.n(C),T=c(52),D=c(45),E=c(139),A=c(39);c(120);function I(e){return Object(u.jsx)("div",{className:"row mb-2 dashboard-nav",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)(w,{flex:"d-flex align-items-center justify-content-between",spacing:"px-4 py-2 m-2 m-md-0",children:[Object(u.jsxs)(A.a,{className:"d-inline-block",children:[Object(u.jsx)(A.a.Toggle,{id:"dropdown-basic",children:"Options"}),Object(u.jsxs)(A.a.Menu,{children:[Object(u.jsx)(A.a.Item,{onSelect:function(t){return e.handleView("gig")},children:"View Gigs"}),Object(u.jsx)(A.a.Item,{onSelect:function(t){return e.handleView("tour")},children:"View Tour"}),Object(u.jsx)(A.a.Item,{onSelect:function(t){return e.handleView("form")},children:"Add/Edit Gig"})]})]}),"gig"===e.view&&Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"nav-icon mb-0 mr-2",onClick:e.prev,children:Object(u.jsx)("i",{className:"fas fa-arrow-circle-left"})}),Object(u.jsx)("p",{className:"nav-icon mb-0 ml-2",onClick:e.next,children:Object(u.jsx)("i",{className:"fas fa-arrow-circle-right"})})]})]})})})}var P=c(30),L=c(64),R=c.n(L);c(122);function G(e){var t=[{name:"Lounge",icon:"fas fa-couch",value:e.greenrooms},{name:"Catering",icon:"fas fa-pizza-slice",value:e.catering},{name:"Internet",icon:"fas fa-wifi",value:e.internet},{name:"Parking",icon:"fas fa-parking",value:e.parking},{name:"Showers",icon:"fas fa-shower",value:e.showers},{name:"Full Rider",icon:"fas fa-cocktail",value:e.rider}],c="".concat(e.street," ").concat(e.city,", ").concat(e.state," ").concat(e.zip);return console.log(c),Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsxs)("p",{className:"h5 mb-1 small-heading",children:[Object(u.jsx)("i",{className:"far fa-calendar mr-2"}),"Today is"]}),Object(u.jsx)("p",{className:"h2",children:e.date})]}),Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsxs)("p",{className:"h5 mb-1 small-heading",children:[Object(u.jsx)("i",{className:"fas fa-map-marker-alt mr-2"}),"You are in"]}),Object(u.jsx)("p",{className:"h2",children:"".concat(e.city,", ").concat(e.state,".")})]}),Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsxs)("p",{className:"h5 mb-1 small-heading",children:[Object(u.jsx)("i",{className:"fas fa-headphones-alt mr-2"}),"Tonight's show"]}),Object(u.jsx)("p",{className:"h2",children:e.venue}),Object(u.jsx)("p",{className:"h5 mb-1",children:e.street}),Object(u.jsx)("p",{className:"h5 mb-1",children:"".concat(e.city,", ").concat(e.state,". ").concat(e.zip)})]}),Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsxs)("p",{className:"h5 mb-1 small-heading",children:[Object(u.jsx)("i",{className:"fas fa-ticket-alt mr-2"}),"Presale / Capacity"]}),Object(u.jsxs)("p",{className:"h2",children:[e.presale," / ",e.capacity]})]}),Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsx)("p",{className:"h5 mb-3 small-heading",children:"Amenities"}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(P.a,{variant:"flush",children:t.map((function(e,t){if(e.value)return Object(u.jsx)(P.a.Item,{className:"daysheet-item",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-3 col-md-2",children:Object(u.jsx)("p",{className:"list-item text-center mb-1",children:Object(u.jsx)("i",{className:"amenity-icon mr-2 ".concat(e.icon)})})}),Object(u.jsx)("div",{className:"col-9 col-md-10 daysheet-item",children:Object(u.jsx)("p",{className:"list-item mb-1",children:e.name})})]})},"".concat(t,"-").concat(e.name))}))},"amenities")})})]}),Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsx)("p",{className:"h5 mb-1 small-heading",children:"Venue Map"}),Object(u.jsx)("iframe",{className:"map rounded",loading:"lazy",src:"https://www.google.com/maps/embed/v1/place?key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GOOGLE_API_KEY,"\n        &q=").concat(c)})]}),Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsxs)("p",{className:"h5 mb-1 small-heading",children:[Object(u.jsx)("i",{className:"fas fa-road mr-2"}),"Next up"]}),Object(u.jsx)("p",{className:"h2 mb-1",children:e.nextVenue}),Object(u.jsx)("p",{className:"h5 mb-1",children:e.nextDate}),Object(u.jsx)("p",{className:"h5 mb-1",children:"".concat(e.nextCity,", ").concat(e.nextState,".")}),Object(u.jsx)("p",{className:"h4 mb-1",children:e.distance})]})]})}c(123);function H(e){return Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsx)("p",{className:"dashboard-heading small-heading h5 mb-2",children:"Day Schedule"}),e.schedule.length?Object(u.jsx)(P.a,{variant:"flush",children:e.schedule.map((function(e,t){return Object(u.jsx)(P.a.Item,{className:"daysheet-item",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12 col-lg-12",children:Object(u.jsx)("p",{className:"list-label pt-2 mb-1",children:e.timeString})}),Object(u.jsx)("div",{className:"col-12 col-lg-12",children:Object(u.jsx)("p",{className:"list-item mb-1",children:e.event})})]})},"".concat(t,"-").concat(e._id))}))},"schedule"):Object(u.jsx)("p",{className:"h2",children:"NOTHING SCHEDULED"})]})}c(124);function V(e){return Object(u.jsx)(E.a.div,{initial:"initial",animate:"in",exit:"out",variants:S,transition:y,children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12 col-md-6 mb-4",children:Object(u.jsx)(w,{spacing:"p-4 p-md-4 m-2 m-md-0",children:Object(u.jsx)(G,{date:e.date,city:e.city,state:e.state,venue:e.venue,street:e.street,zip:e.zip,capacity:e.capacity,presale:e.presale,greenrooms:e.greenrooms,catering:e.catering,showers:e.showers,internet:e.internet,nextDate:e.nextDate,nextCity:e.nextCity,nextState:e.nextState,nextVenue:e.nextVenue,distance:e.distance})})}),Object(u.jsx)("div",{className:"col-12 col-md-6 mb-4",children:Object(u.jsx)(w,{spacing:"p-4 p-md-4 m-2 m-md-0",children:Object(u.jsx)(H,{schedule:e.schedule})})})]})})})}c(125);function W(e){return Object(u.jsx)(E.a.div,{initial:"initial",animate:"in",exit:"out",variants:S,transition:y,children:Object(u.jsx)("div",{className:"info-container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12 mb-4",children:Object(u.jsx)(w,{spacing:"p-4 p-md-4 m-2 m-md-0",children:Object(u.jsxs)("div",{className:"container-lg p-0",children:[Object(u.jsx)("h3",{className:"heading",children:"Full Tour Dates"}),Object(u.jsx)("p",{children:"Click a date to view show details"}),e.gigs.length?Object(u.jsx)(P.a,{variant:"",children:e.gigs.map((function(t,c){var a=t.schedule[3].timeString.split(" ")[0];return Object(u.jsx)(P.a.Item,{className:"tour-date row",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-12 col-md-8 mx-auto",children:[Object(u.jsxs)("p",{className:"small-heading pt-2 mb-1",children:[Object(u.jsx)("i",{className:"fas fa-calendar mr-2"}),e.handleDate(t.date)]}),Object(u.jsxs)("p",{className:"list-item mb-1 d-lg-inline-block",children:["".concat(t.venue.city,", ").concat(t.venue.state,". "),Object(u.jsx)("span",{className:"d-block d-lg-inline-block",children:"@ ".concat(t.venue.name)})]})]}),Object(u.jsx)("div",{className:"col-12 col-md-8 mx-auto",children:Object(u.jsxs)("p",{className:"list-label mb-1",children:["Doors @ ".concat(t.schedule[2].timeString),Object(u.jsx)("span",{className:"d-none d-md-inline-block mx-2",children:"/"}),Object(u.jsx)("span",{className:"d-block d-md-inline-block",children:"Show @ ".concat(a," PM")})]})}),Object(u.jsx)("div",{className:"col-12 col-md-8 mx-auto",children:Object(u.jsx)("p",{className:"list-label mb-1",children:"w/ Cartel, This Providence, Anarbor"})}),Object(u.jsxs)("div",{className:"col-12 col-md-8 mx-auto",children:[Object(u.jsxs)(p.a,{id:t._id,variant:"primary",className:"my-2 mr-2",onClick:function(t){e.gigs.length?e.handleSelect(t):l.b.error("Oh no! Something went wrong. Try again!")},children:[Object(u.jsx)("i",{className:"fas fa-info-circle mr-2"}),"View Details"]}),Object(u.jsxs)(p.a,{id:t._id,variant:"danger",className:"my-2 mr-2",onClick:function(){return e.handleDelete(t._id)},children:[Object(u.jsx)("i",{className:"fas fa-trash-alt mr-2"}),"Delete Gig"]})]})]})},"".concat(c,"-").concat(t._id))}))},"tour"):Object(u.jsx)("p",{className:"h2",children:"NO TOUR DATES TO DISPLAY"})]})})})})})})}var z=c(80),B=c(44),U={date:"",venue:{name:"",street:"",city:"",state:"",zip:"",capacity:"0",presale:"0"},catering:!1,internet:!1,showers:!1,greenrooms:!1,parking:!1,rider:!1,distance:"N/A",schedule:[{timeString:"",event:"Load In"},{timeString:"",event:"Soundcheck"},{timeString:"",event:"Doors"},{timeString:"",event:"Opener"},{timeString:"",event:"Second"},{timeString:"",event:"Direct"},{timeString:"",event:"Headliner"},{timeString:"",event:"Curfew"},{timeString:"",event:"Bus Call"}]},q=c(31);c(126);function F(e){var t=Object(a.useState)(U),c=Object(D.a)(t,2),n=c[0],i=c[1],s=[{timeString:"",event:"Load In"},{timeString:"",event:"Soundcheck"},{timeString:"",event:"Doors"},{timeString:"",event:"Opener"},{timeString:"",event:"Second"},{timeString:"",event:"Direct"},{timeString:"",event:"Headliner"},{timeString:"",event:"Curfew"},{timeString:"",event:"Bus Call"}],r=function(){var e=Object(T.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(n);case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(e){var t=e.target,c=t.name,a=t.value,s=n.venue;i("date"!==c?Object(h.a)(Object(h.a)({},n),{},{venue:Object(h.a)(Object(h.a)({},s),{},Object(B.a)({},c,a))}):Object(h.a)(Object(h.a)({},n),{},Object(B.a)({},c,a)))},d=function(e){var t=e.target,c=t.name,a=t.checked;i(Object(h.a)(Object(h.a)({},n),{},Object(B.a)({},c,a)))},j=function(e){var t=e.target,c=(t.name,t.value),a=e.target.dataset.index,s=Object(z.a)(n.schedule),r=s[a];r.timeString=c,s.splice(a,1,r),i(Object(h.a)(Object(h.a)({},n),{},{schedule:s}))},b=function(e){return e.slice(0,1).toUpperCase()+e.slice(1)};return Object(u.jsx)(E.a.div,{initial:"initial",animate:"in",exit:"out",variants:S,transition:y,children:Object(u.jsx)("section",{children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)(w,{spacing:"p-4 p-md-4 m-2 m-md-0",children:[Object(u.jsx)("p",{className:"h2 heading",children:"Add/Edit Gig"}),Object(u.jsxs)(q.a,{children:[Object(u.jsxs)("div",{className:"row",children:[[{name:"name",col:12,required:!0},{name:"street",col:12,required:!1},{name:"city",col:6,required:!0},{name:"state",col:6,required:!0},{name:"zip",col:6,required:!1},{name:"date",col:6,required:!0},{name:"capacity",col:6,required:!1},{name:"presale",col:6,required:!1}].map((function(e,t){return Object(u.jsx)("div",{className:"col-".concat(e.col),children:Object(u.jsxs)(q.a.Group,{controlId:"".concat(e.name,"InputGroup"),children:[Object(u.jsx)(q.a.Label,{children:0===t?"Venue Name":"".concat(b(e.name))}),Object(u.jsx)(q.a.Control,{name:e.name,type:"date"===e.name?"date":"text",placeholder:"date"===e.name?"mm/dd/yyyy":"Enter ".concat(b(e.name)),value:n[e.name],onChange:o})]})},"inputField-".concat(t))})),Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("p",{className:"small-heading",children:"Amenities (Select all that apply):"})}),["catering","internet","showers","greenrooms","parking","rider"].map((function(e,t){return Object(u.jsx)("div",{className:"col-6 col-md-4",children:Object(u.jsx)(q.a.Check,{type:"checkbox",name:e,label:"".concat(b(e)),checked:n[e],onChange:d})},"checkbox-".concat(t))})),Object(u.jsx)("div",{className:"col-12 pt-3",children:Object(u.jsx)("p",{className:"small-heading",children:"Insert time strings for each block:"})}),s.map((function(e,t){return Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)(q.a.Group,{children:[Object(u.jsx)(q.a.Label,{children:e.event}),Object(u.jsx)(q.a.Control,{"data-index":t,name:e.event,type:"text",placeholder:"Enter ".concat(e.event," start time"),value:n.schedule.timeString,onChange:j,onSubmit:function(){return i(Object(h.a)(Object(h.a)({},n),{},{schedule:s}))}})]})},"block-".concat(e.event))}))]}),Object(u.jsx)("div",{className:"row pt-3",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(p.a,{type:"submit",variant:"primary",className:"py-2 px-3",onClick:function(t){t.preventDefault(),n.date&&(console.log(n),r(),Object(l.b)("Gig created!"),Array.from(document.querySelectorAll("input")).forEach((function(e){return e.value=""})),i(U),setTimeout((function(){e.fetchGigs()}),250))},children:"Add Gig"})})})]})]})})})})})}c(127);function K(){var e=Object(a.useState)([]),t=Object(D.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(0),s=Object(D.a)(i,2),r=s[0],o=s[1],d=Object(a.useState)("tour"),m=Object(D.a)(d,2),h=m[0],O=m[1];Object(a.useEffect)((function(){x()}),[]);var x=function(){var e=Object(T.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching gigs..."),e.prev=1,e.next=4,j();case 4:t=e.sent,n(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(T.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Deleting gig..."),e.prev=1,e.next=4,b(t);case 4:e.sent,x(),Object(l.b)("Gig deleted!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return R()(e).format("ddd. MMMM D, YYYY")},g=function(){r===c.length-1?o(0):(console.log(c),o(r+1))},f=function(){o(0===r?c.length-1:r-1)};return Object(u.jsx)(E.a.div,{initial:"initial",animate:"in",exit:"out",variants:S,transition:y,children:Object(u.jsx)("section",{className:"p-2 px-md-4 px-lg-5",children:c.length?Object(u.jsxs)("div",{children:[Object(u.jsx)(I,{prev:f,next:g,gigs:c,view:h,handleView:function(e){O(e)}}),"gig"===h&&Object(u.jsx)(V,{date:v(c[r].date),city:c[r].venue.city,state:c[r].venue.state,venue:c[r].venue.name,street:c[r].venue.street,zip:c[r].venue.zip,capacity:c[r].venue.capacity,presale:c[r].venue.presale,greenrooms:c[r].greenrooms,catering:c[r].catering,showers:c[r].showers,internet:c[r].internet,nextDate:c[r+1]?v(c[r+1].date):"N/A",nextCity:c[r+1]?c[r+1].venue.city:"N/A",nextState:c[r+1]?c[r+1].venue.state:"N/A",nextVenue:c[r+1]?c[r+1].venue.name:"N/A",distance:"315 miles",schedule:c[r].schedule,prev:f,next:g}),"tour"===h&&Object(u.jsx)(W,{gigs:c,handleDate:v,handleSelect:function(e){e.preventDefault();var t=e.target.id,a=c.findIndex((function(e){return e._id===t}));if(-1===a)return l.b.error("Something went wrong! Please try again."),void console.log(e.target);console.log("Accessing gig..."),o(a),O("gig"),window.scrollTo(0,0)},handleDelete:p}),"form"===h&&Object(u.jsx)(F,{fetchGigs:x,gigs:c})]}):Object(u.jsx)("p",{className:"h2",children:"LOADING"})})})}var M={main:{backgroundImage:"url(".concat("/imgs/stage.jpg",")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden",position:"relative"},overlay:{background:"linear-gradient(0deg, rgba(33,33,33,1) 20%, rgba(118,118,118,0.3883928571428571) 100%)",position:"absolute",minHeight:"100%",minWidth:"100vw",display:"flex",alignItems:"center"}};function Y(){var e=Object(r.b)(),t=e.isLoading,c=e.isAuthenticated;return c||t?t?Object(u.jsx)("main",{style:{overflow:"hidden"},children:Object(u.jsx)(N.a,{exitBeforeEnter:!0,children:Object(u.jsx)("h3",{className:"text-center",children:"Loading dashboard..."})})}):c?Object(u.jsx)("main",{style:{overflow:"hidden"},children:Object(u.jsx)(N.a,{exitBeforeEnter:!0,children:Object(u.jsx)(K,{})})}):void 0:Object(u.jsx)("main",{style:M.main,children:Object(u.jsx)("div",{style:M.overlay,children:Object(u.jsx)(N.a,{exitBeforeEnter:!0,children:Object(u.jsx)(k,{})})})})}c(128);function J(){return Object(u.jsx)("footer",{children:Object(u.jsx)("p",{children:"Powered by jxhnkndl"})})}c(129),c(130);function Q(){var e=Object(r.b)(),t=e.isAuthenticated;e.isLoading;return console.log(t),Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsx)(f,{}),Object(u.jsx)(Y,{}),Object(u.jsx)(J,{}),Object(u.jsx)(l.a,{position:"top-right",autoClose:3e3,hideProgressionBar:!1,newestOnTop:!0,closeOnClick:!0})]})}var X=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH0_DOMAIN,Z=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH0_CLIENT_ID;i.a.render(Object(u.jsx)(r.a,{domain:X,clientId:Z,redirectUri:window.location.origin,children:Object(u.jsx)(s.a,{children:Object(u.jsx)(Q,{})})}),document.getElementById("root"))},92:function(e,t,c){}},[[131,1,2]]]);
//# sourceMappingURL=main.d9ffbbb6.chunk.js.map