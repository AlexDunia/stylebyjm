if(!self.define){let e,l={};const s=(s,i)=>(s=new URL(s+".js",i).href,l[s]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=l,document.head.appendChild(e)}else e=s,importScripts(s),l()})).then((()=>{let e=l[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let t={};const o=e=>s(e,r),u={module:{uri:r},exports:t,require:o};l[r]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"stylebyjm"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/stylebyjm/css/app.224535bb.css",revision:null},{url:"/stylebyjm/img/aritop.339f0cc2.jpg",revision:null},{url:"/stylebyjm/img/bennybubu.b34f798b.jpg",revision:null},{url:"/stylebyjm/img/flady.eae65cb7.jpg",revision:null},{url:"/stylebyjm/img/fladylong2.af6f919e.jpg",revision:null},{url:"/stylebyjm/img/orange.ffeaca4d.jpg",revision:null},{url:"/stylebyjm/img/rubygown.861a4233.jpg",revision:null},{url:"/stylebyjm/img/sbjwhite.e1577abc.png",revision:null},{url:"/stylebyjm/index.html",revision:"f6dfd8bce5068addb8dc47d0ed953cfe"},{url:"/stylebyjm/js/about.8ba8df6a.js",revision:null},{url:"/stylebyjm/js/app.1823d879.js",revision:null},{url:"/stylebyjm/js/chunk-vendors.d1f262a7.js",revision:null},{url:"/stylebyjm/manifest.json",revision:"0e0dad0db1b54e2b7f90e612149b3992"},{url:"/stylebyjm/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
