if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),d={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"c8d366f1610ac175e9055f455bc7b318"},{url:"/_next/static/_-io95p8_zy0uwvsqZL6O/_buildManifest.js",revision:"dbae9cdd0987eb4bbe18b0810a34f464"},{url:"/_next/static/_-io95p8_zy0uwvsqZL6O/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/17007de1-74e666818071edd8.js",revision:"74e666818071edd8"},{url:"/_next/static/chunks/191-d7ecc43b628c98fa.js",revision:"d7ecc43b628c98fa"},{url:"/_next/static/chunks/483-7991818ab87b0d01.js",revision:"7991818ab87b0d01"},{url:"/_next/static/chunks/628.659f67e021a34d21.js",revision:"659f67e021a34d21"},{url:"/_next/static/chunks/664-66fa3cecf1c21497.js",revision:"66fa3cecf1c21497"},{url:"/_next/static/chunks/72fdc299.652e8aa61990d2d4.js",revision:"652e8aa61990d2d4"},{url:"/_next/static/chunks/799.177ea54bd74cc59c.js",revision:"177ea54bd74cc59c"},{url:"/_next/static/chunks/837.3eeeea0d1fb959be.js",revision:"3eeeea0d1fb959be"},{url:"/_next/static/chunks/93.772372a71caae195.js",revision:"772372a71caae195"},{url:"/_next/static/chunks/949.8cc5c137ecb68d65.js",revision:"8cc5c137ecb68d65"},{url:"/_next/static/chunks/bd1a647f.d91caec749a4923e.js",revision:"d91caec749a4923e"},{url:"/_next/static/chunks/d0447323-d83bbf8c5997abd0.js",revision:"d83bbf8c5997abd0"},{url:"/_next/static/chunks/d64684d8-82514fd1a5ecfcc4.js",revision:"82514fd1a5ecfcc4"},{url:"/_next/static/chunks/de71a805-1e49a5aa6f2a3d64.js",revision:"1e49a5aa6f2a3d64"},{url:"/_next/static/chunks/framework-0ba0ddd33199226d.js",revision:"0ba0ddd33199226d"},{url:"/_next/static/chunks/main-1650d22d4924a534.js",revision:"1650d22d4924a534"},{url:"/_next/static/chunks/pages/_app-6bfc6278d091b192.js",revision:"6bfc6278d091b192"},{url:"/_next/static/chunks/pages/_error-240922f05f34e33d.js",revision:"240922f05f34e33d"},{url:"/_next/static/chunks/pages/docs-d82f25677b27470e.js",revision:"d82f25677b27470e"},{url:"/_next/static/chunks/pages/editor-a50f6a483d273aea.js",revision:"a50f6a483d273aea"},{url:"/_next/static/chunks/pages/index-95e25431035f06a6.js",revision:"95e25431035f06a6"},{url:"/_next/static/chunks/pages/pricing-2e862f3177c9819f.js",revision:"2e862f3177c9819f"},{url:"/_next/static/chunks/pages/widget-7019f76dd95aebe8.js",revision:"7019f76dd95aebe8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-744588b16152a8d0.js",revision:"744588b16152a8d0"},{url:"/_next/static/css/a6b892c47b6bc490.css",revision:"a6b892c47b6bc490"},{url:"/assets/192.png",revision:"9bae114806230d82d4f098452088bb91"},{url:"/assets/404.svg",revision:"469237b2e81ebae51c1963b3b5e80344"},{url:"/assets/512.png",revision:"92b778e2e356b4765cad396d7bcf0166"},{url:"/assets/Mona-Sans.woff2",revision:"64d781dba84a902256fa2dd72309ddda"},{url:"/assets/icon.png",revision:"f190425f93aec0c36303bf8e1a941ff0"},{url:"/assets/jsoncrack-screenshot.webp",revision:"fdf46db3dd8825c3b6c44dac44db5dda"},{url:"/assets/jsoncrack.png",revision:"7885e659d10034d26b20cc20cdebf70d"},{url:"/assets/undraw_qa_engineers_dg-5-p.svg",revision:"e2b83a67cb67936b470f3c94876d96ff"},{url:"/favicon.ico",revision:"6864e7778805bb89123fe3fc7187ae4d"},{url:"/manifest.json",revision:"2ba94487dc1c70b6bfbba4a587e0804a"},{url:"/robots.txt",revision:"889cb00f522a611bc710e481c32a87c2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
