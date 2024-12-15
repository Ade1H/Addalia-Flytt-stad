"use strict";(self.webpackChunkbygg_flytt_stad=self.webpackChunkbygg_flytt_stad||[]).push([[446],{5446:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var a=r(2555),i=r(7565),s=r(2319),o=r(7929);const n=()=>{const[e,t]=(0,i.useState)({name:"",email:"",message:""}),[r,n]=(0,i.useState)(""),l=r=>{const{name:i,value:s}=r.target;t((0,a.A)((0,a.A)({},e),{},{[i]:s}))};return(0,o.jsxs)("div",{className:"container my-5",children:[(0,o.jsxs)("div",{className:"services-section py-5 px-4 shadow-sm rounded",style:{marginTop:"120px",backgroundColor:"#f9f9f9",borderRadius:"10px",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"},children:[(0,o.jsx)("h3",{className:"text-center mb-4",style:{fontWeight:"bold",color:"#004085",textShadow:"1px 1px 5px rgba(0, 0, 0, 0.1)"},children:"V\xe5ra Tj\xe4nster"}),(0,o.jsx)("p",{style:{fontSize:"1.2rem",lineHeight:"1.8",textAlign:"justify"},children:"Hos oss p\xe5 Addalia erbjuder vi ett brett utbud av professionella tj\xe4nster f\xf6r b\xe5de st\xe4dning och flytt. Vi \xe4r dedikerade till att underl\xe4tta v\xe5ra kunders vardag genom att erbjuda p\xe5litliga och effektiva l\xf6sningar. H\xe4r \xe4r en \xf6versikt \xf6ver de tj\xe4nster vi erbjuder:"}),(0,o.jsx)("h4",{style:{color:"#28a745",fontWeight:"bold",marginTop:"20px"},children:"St\xe4dtj\xe4nster"}),(0,o.jsx)("p",{style:{fontSize:"1.2rem",lineHeight:"1.8",textAlign:"justify"},children:"Vi erbjuder ett brett spektrum av st\xe4dtj\xe4nster som passar alla typer av bost\xe4der och lokaler. Vi utf\xf6r regelbundna hemst\xe4dningar f\xf6r att h\xe5lla ditt hem fr\xe4scht och flyttst\xe4dningar f\xf6r att s\xe4kerst\xe4lla att din gamla bostad l\xe4mnas i perfekt skick."}),(0,o.jsx)("h4",{style:{color:"#28a745",fontWeight:"bold",marginTop:"20px"},children:"Flyttj\xe4nster"}),(0,o.jsx)("p",{style:{fontSize:"1.2rem",lineHeight:"1.8",textAlign:"justify"},children:"Vid flytt hj\xe4lper vi dig att g\xf6ra hela processen smidig och stressfri. Vi erbjuder hj\xe4lp med bohagsflytt, kontorsflytt, packning och uppackning, samt transport av specialgods som konstverk eller antikviteter."}),(0,o.jsx)("p",{style:{fontSize:"1.2rem",lineHeight:"1.8",textAlign:"justify"},children:"Vi p\xe5 Addalia str\xe4var alltid efter att ge v\xe5ra kunder b\xe4sta m\xf6jliga service. V\xe5r erfarna personal \xe4r h\xe4r f\xf6r att underl\xe4tta din vardag, s\xe5 att du kan fokusera p\xe5 det som verkligen betyder n\xe5got f\xf6r dig."})]}),(0,o.jsx)("h2",{className:"text-center mb-4",style:{fontWeight:"bold",color:"#004085",textShadow:"1px 1px 5px rgba(0, 0, 0, 0.1)"},children:"Kontakta Oss"}),r&&(0,o.jsx)("div",{className:"alert ".concat(r.includes("framg\xe5ngsrikt")?"alert-success":"alert-danger"," text-center"),role:"alert",children:r}),(0,o.jsxs)("form",{onSubmit:r=>{r.preventDefault(),s.Ay.send("service_zs1rvlc","template_lwt6fbd",{name:e.name,email:e.email,message:e.message},"Kgzm3fkD__CsILSig").then((e=>{console.log("SUCCESS!",e.status,e.text),n("Ditt meddelande har skickats framg\xe5ngsrikt!"),t({name:"",email:"",message:""})}),(e=>{console.error("FAILED...",e),n("N\xe5got gick fel. F\xf6rs\xf6k igen senare.")}))},className:"shadow p-4 rounded bg-light",style:{maxWidth:"600px",margin:"0 auto"},children:[(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"name",className:"form-label",style:{fontWeight:"bold"},children:"Namn"}),(0,o.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:e.name,onChange:l,placeholder:"Skriv ditt namn",required:!0})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"email",className:"form-label",style:{fontWeight:"bold"},children:"Email"}),(0,o.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:e.email,onChange:l,placeholder:"Skriv din email",required:!0})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"message",className:"form-label",style:{fontWeight:"bold"},children:"Meddelande"}),(0,o.jsx)("textarea",{className:"form-control",id:"message",name:"message",rows:"4",value:e.message,onChange:l,placeholder:"Skriv ditt meddelande h\xe4r",required:!0})]}),(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg",style:{backgroundColor:"#004085",borderColor:"#004085",borderRadius:"30px",fontWeight:"bold"},children:"Skicka Meddelande"})})]})]})}},2319:(e,t,r)=>{r.d(t,{Ay:()=>b});class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},s=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{};var o=r(2555);const n=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=await fetch(i.origin+e,{method:"POST",headers:r,body:t}),o=await s.text(),n=new a(s.status,o);if(s.ok)return n;throw n},l=(e,t,r)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!==typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},c=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new a(451,"Unavailable For Headless Browser"),m=(e,t)=>{if((e=>{var t;return!(null!==(t=e.list)&&void 0!==t&&t.length)||!e.watchVariable})(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const r=(a=t,i=e.watchVariable,a instanceof FormData?a.get(i):a[i]);var a,i;return"string"===typeof r&&e.list.includes(r)},h=()=>new a(403,"Forbidden"),p=async(e,t,r)=>{if(!t.throttle||!r)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const a=t.id||e,i=await(async(e,t,r)=>{const a=Number(await r.get(e)||0);return t-Date.now()+a})(a,t.throttle,r);return i>0||(await r.set(a,Date.now().toString()),!1)},u=()=>new a(429,"Too Many Requests"),b={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;const r=s(e);i.publicKey=r.publicKey,i.blockHeadless=r.blockHeadless,i.storageProvider=r.storageProvider,i.blockList=r.blockList,i.limitRate=r.limitRate,i.origin=r.origin||t},send:async(e,t,r,a)=>{const b=s(a),g=b.publicKey||i.publicKey,f=b.blockHeadless||i.blockHeadless,y=b.storageProvider||i.storageProvider,v=(0,o.A)((0,o.A)({},i.blockList),b.blockList),j=(0,o.A)((0,o.A)({},i.limitRate),b.limitRate);if(f&&c(navigator))return Promise.reject(d());if(l(g,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(r),r&&m(v,r))return Promise.reject(h());if(await p(location.pathname,j,y))return Promise.reject(u());const k={lib_version:"4.4.1",user_id:g,service_id:e,template_id:t,template_params:r};return n("/api/v1.0/email/send",JSON.stringify(k),{"Content-type":"application/json"})},sendForm:async(e,t,r,a)=>{const b=s(a),g=b.publicKey||i.publicKey,f=b.blockHeadless||i.blockHeadless,y=i.storageProvider||b.storageProvider,v=(0,o.A)((0,o.A)({},i.blockList),b.blockList),j=(0,o.A)((0,o.A)({},i.limitRate),b.limitRate);if(f&&c(navigator))return Promise.reject(d());const k=(e=>"string"===typeof e?document.querySelector(e):e)(r);l(g,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(k);const x=new FormData(k);return m(v,x)?Promise.reject(h()):await p(location.pathname,j,y)?Promise.reject(u()):(x.append("lib_version","4.4.1"),x.append("service_id",e),x.append("template_id",t),x.append("user_id",g),n("/api/v1.0/email/send-form",x))},EmailJSResponseStatus:a}},2555:(e,t,r)=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}function s(e,t,r){return(t=i(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{A:()=>n})}}]);
//# sourceMappingURL=446.9ac03039.chunk.js.map