"use strict";var precacheConfig=[["/index.html","ecd61a2ab3c13f498de2f9cf8a4c2f71"],["/static/css/main.abefb765.css","71549ce5adcb1b16a794b75d4ee151c6"],["/static/js/main.d866a051.js","d26a3da6df1d5621c13a56eb1858d5d1"],["/static/media/ethan.8cd181a2.jpg","8cd181a29b84da663addfd792f567730"],["/static/media/flipphone.20f4ea63.png","20f4ea63de8c9f26c56f06bd29ed363c"],["/static/media/hugs_background.759c9f55.png","759c9f556cfdf43312adf9f157d4fe3d"],["/static/media/image-gallery.ccb8941d.scss","ccb8941de617aa44c6244f412a0d4608"],["/static/media/john.1f56b73d.jpg","1f56b73d4e494f05b6a75d294261b4ac"],["/static/media/loading.a6245576.gif","a6245576ba42cadecad5032b026fa4eb"],["/static/media/mustafa.5b5bcd34.jpg","5b5bcd341b5c2252c376b95c49b3c385"],["/static/media/pixel.7555763f.jpg","7555763ffb5eed3665163f1ece15b318"],["/static/media/pranav.0e4ef690.png","0e4ef6908228d9d0dce47b8791047a6b"],["/static/media/screenshot.79dd7cf9.jpg","79dd7cf9fe226f713ed0669d7381ee8b"],["/static/media/shiri.956556e8.jpg","956556e8f8b635d587bc445a2406b002"],["/static/media/smartphone.4b2e576c.png","4b2e576c47573030ad8b5545ce98328d"],["/static/media/team.c4113777.jpg","c4113777870bd9cc47dd2d0cb4642cb9"],["/static/media/vinculum_logo.ef0583d3.png","ef0583d379cbd7041f7a38d7da8442fa"],["/static/media/vinculum_logo_white.ca35ca12.png","ca35ca1247583589ee7e49e1f4777689"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});