if(!self.define){let e,l={};const s=(s,i)=>(s=new URL(s+".js",i).href,l[s]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=l,document.head.appendChild(e)}else e=s,importScripts(s),l()})).then((()=>{let e=l[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let t={};const b=e=>s(e,r),o={module:{uri:r},exports:t,require:b};l[r]=Promise.all(i.map((e=>o[e]||b(e)))).then((e=>(n(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"stylebyjm"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/stylebyjm/css/app.0b05f4ca.css",revision:null},{url:"/stylebyjm/img/aritop.339f0cc2.jpg",revision:null},{url:"/stylebyjm/img/bennybubu.b34f798b.jpg",revision:null},{url:"/stylebyjm/img/flady.eae65cb7.jpg",revision:null},{url:"/stylebyjm/img/fladylong2.af6f919e.jpg",revision:null},{url:"/stylebyjm/img/orange.ffeaca4d.jpg",revision:null},{url:"/stylebyjm/img/rubygown.861a4233.jpg",revision:null},{url:"/stylebyjm/img/sb.eb63d43e.png",revision:null},{url:"/stylebyjm/img/sbjwhite.e1577abc.png",revision:null},{url:"/stylebyjm/index.html",revision:"90798390db25d9ade6d1bb03b8644416"},{url:"/stylebyjm/js/about.bbb07eb5.js",revision:null},{url:"/stylebyjm/js/app.f109eb32.js",revision:null},{url:"/stylebyjm/js/chunk-vendors.9b7af38d.js",revision:null},{url:"/stylebyjm/manifest.json",revision:"0e0dad0db1b54e2b7f90e612149b3992"},{url:"/stylebyjm/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
