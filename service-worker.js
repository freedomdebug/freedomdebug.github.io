if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const t=e=>l(e,n),o={module:{uri:n},exports:a,require:t};s[n]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"93c04d360652bcbade59373a7e71c6e0"},{url:"assets/404.77c69b3d.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.5a48ae05.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/contact-author.html.6979b8a3.js",revision:null},{url:"assets/contact-author.html.a58f33be.js",revision:null},{url:"assets/crlf.html.66438fc8.js",revision:null},{url:"assets/crlf.html.f36770f3.js",revision:null},{url:"assets/HTTP1.1.html.04ea2f4e.js",revision:null},{url:"assets/HTTP1.1.html.a63e6388.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.20e1872d.js",revision:null},{url:"assets/index.html.21f98ad2.js",revision:null},{url:"assets/index.html.42fa0ca0.js",revision:null},{url:"assets/index.html.4bacbc1e.js",revision:null},{url:"assets/index.html.9fe67246.js",revision:null},{url:"assets/index.html.e36d8476.js",revision:null},{url:"assets/Layout.18102938.js",revision:null},{url:"assets/one.html.501ad03d.js",revision:null},{url:"assets/one.html.ba9080d7.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.e8047172.css",revision:null},{url:"assets/two.html.61d509d8.js",revision:null},{url:"assets/two.html.e802b4f3.js",revision:null},{url:"bar/contact-author.html",revision:"a70016b0fb40916f9842f1d451e1db73"},{url:"blog/gojs/index.html",revision:"591c2ec2beb3df527194500098d0d21f"},{url:"blog/http/crlf.html",revision:"31b9a72206827f457981a57d1233bb36"},{url:"blog/http/HTTP1.1.html",revision:"a67bb6d838a6bb51697f5d24fb31a3ac"},{url:"images/crlf.png",revision:"286da453402eaef48107c9c6ea169f0d"},{url:"images/girl.jpg",revision:"a86eaf906229af4e5b6aa31182a096c7"},{url:"images/logo.jpg",revision:"1ab10c04c225eaa3fa878c5821454667"},{url:"images/print.png",revision:"985ab7ad81dd4b73d87da7b3355d1a9f"},{url:"images/screen.jpg",revision:"3ae011925208ce91f749931c44387f23"},{url:"index.html",revision:"3b09960b18e8ca3dbd3fe2d18a09e4ca"},{url:"pwa/android-chrome-192x192.png",revision:"5eb92f3849f2c3511974a6cf784bdd29"},{url:"pwa/android-chrome-384x384.png",revision:"b2809d069d81698c4fd115dab7ca82c5"},{url:"pwa/apple-touch-icon.png",revision:"bd8a672c542c23d50c4ec83edfaf8c51"},{url:"pwa/favicon-16x16.png",revision:"a806ec7dec37de7c9ea511b6a1fb3850"},{url:"pwa/favicon-32x32.png",revision:"5dc4695d2d8a72be866596673e927188"},{url:"pwa/mstile-150x150.png",revision:"cec0e4ecbb406f31e022dae1711eaecb"},{url:"pwa/safari-pinned-tab.svg",revision:"522408ad2b19d5f4b6eb5c219b651610"},{url:"test/index.html",revision:"b0477afafefa2451b0f398a411ed1792"},{url:"test/one.html",revision:"71be69b1e61b08ec2924ac1b86e8d6ef"},{url:"test/two.html",revision:"0eaa9590a4d853749b1a44f3154223b0"}],{})}));
