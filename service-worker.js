if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const a=e=>l(e,r),o={module:{uri:r},exports:t,require:a};s[r]=Promise.all(i.map((e=>o[e]||a(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"d421068673e14b63da1badf11285718c"},{url:"assets/404.7f7e2d1d.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.2c1c96b3.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/contact-author.html.a9e40f14.js",revision:null},{url:"assets/contact-author.html.eb7bdaab.js",revision:null},{url:"assets/HTTP报文的结构.html.387ee110.js",revision:null},{url:"assets/HTTP报文的结构.html.70b0b69d.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.1724dfad.js",revision:null},{url:"assets/index.html.5f7017fe.js",revision:null},{url:"assets/index.html.6b7c5767.js",revision:null},{url:"assets/index.html.7f93277b.js",revision:null},{url:"assets/index.html.a98acc94.js",revision:null},{url:"assets/index.html.f23251d8.js",revision:null},{url:"assets/Layout.97d65746.js",revision:null},{url:"assets/one.html.ba9080d7.js",revision:null},{url:"assets/one.html.bca4fc68.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.e8047172.css",revision:null},{url:"assets/two.html.6c815423.js",revision:null},{url:"assets/two.html.e802b4f3.js",revision:null},{url:"bar/contact-author.html",revision:"8db536e6612c7206fb6640bf117b2c57"},{url:"blog/gojs/index.html",revision:"69e79ea6022b16941694637784d7aa2f"},{url:"blog/http/HTTP报文的结构.html",revision:"531eb627f58f46fad11acea5cbe0280e"},{url:"images/logo.jpg",revision:"1ab10c04c225eaa3fa878c5821454667"},{url:"index.html",revision:"975a5bfbcf20e04e64ec8d79a7ccf301"},{url:"pwa/android-chrome-192x192.png",revision:"5eb92f3849f2c3511974a6cf784bdd29"},{url:"pwa/android-chrome-384x384.png",revision:"b2809d069d81698c4fd115dab7ca82c5"},{url:"pwa/apple-touch-icon.png",revision:"bd8a672c542c23d50c4ec83edfaf8c51"},{url:"pwa/favicon-16x16.png",revision:"a806ec7dec37de7c9ea511b6a1fb3850"},{url:"pwa/favicon-32x32.png",revision:"5dc4695d2d8a72be866596673e927188"},{url:"pwa/mstile-150x150.png",revision:"cec0e4ecbb406f31e022dae1711eaecb"},{url:"pwa/safari-pinned-tab.svg",revision:"522408ad2b19d5f4b6eb5c219b651610"},{url:"test/index.html",revision:"63d30de1c7bdfe223293df0bda4a237d"},{url:"test/one.html",revision:"b8162eb775cdd0115ba68a5d07dd4e12"},{url:"test/two.html",revision:"b802db4d37ba520358efcbbc19ba94bc"}],{})}));
