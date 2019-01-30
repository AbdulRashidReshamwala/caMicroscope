parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"WDG/":[function(require,module,exports) {
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function t(){function t(e,t){var n=JSON.parse(window.localStorage.getItem(e));return n?n.filter(function(e){var n=!0;for(var r in t)n=n&&Object.byString(e,r)==t[r];return n}):[]}function n(e,t){var n=JSON.parse(window.localStorage.getItem(e));return n?n.filter(function(e){return e._id==t})[0]:{}}function r(e,t){var n=JSON.parse(window.localStorage.getItem(e));return(n=n||[]).push(t),window.localStorage.setItem(e,JSON.stringify(n)),t}function o(e,t){var n=JSON.parse(window.localStorage.getItem(e));return n=n||[],newData=n.filter(function(e){return e._id!==t}),window.localStorage.setItem(e,JSON.stringify(n)),newData}console.warn("{localstore mods enabled}"),Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=n.length;r<o;++r){var a=n[r];if(!(a in e))return;e=e[a]}return e},Store.prototype.findMarkTypes=function(n,r){return new Promise(function(o,a){var i={};r&&(i["provenance.analysis.execution_id"]=r),n&&(i["provenance.image.slide"]=n);var c=t("mark",i);c?o([].concat(e(new Set(c.map(function(e){return Object.byString(e,"provenance")}))))):o([])})},Store.prototype.findMark=function(e,n,r,o,a,i,c,p,s,u){return new Promise(function(a,c){var p={};n&&(p["provenance.image.slide"]=e),e&&(p["provenance.analysis.execution_id"]=n),i&&(p["provenance.analysis.source"]=i),r&&(p["provenance.image.specimen"]=r),o&&(p["provenance.image.study"]=o),a(t("mark",p))})},Store.prototype.getMarkByIds=function(n,r,o,a,i,c,p,s,u,l){return new Promise(function(o,a){var i=[];for(var c in n)i.push.apply(i,e(t("mark",{"provenance.analysis.execution_id":n[c],"provenance.image.slide":r})));o(i)})},Store.prototype.getMark=function(e){return new Promise(function(t,r){t(n("mark",e))})},Store.prototype.addMark=function(e){return new Promise(function(t,n){e._id=e._id||Date.now(),t(r("mark",e))})},Store.prototype.deleteMark=function(e,t){return new Promise(function(t,n){t(o("mark",e))})},Store.prototype.findHeatmap=function(e,n){return new Promise(function(r,o){var a={};n&&(a["provenance.image.slide"]=e),e&&(a["provenance.analysis.execution_id"]=n),r(t("heatmap",a))})},Store.prototype.getHeatmap=function(e){return new Promise(function(t,r){t(n("heatmap",e))})},Store.prototype.addHeatmap=function(e){return e._id=e._id||Date.now(),new Promise(function(t,n){t(r("heatmap",e))})},Store.prototype.deleteHeatmap=function(e,t){return new Promise(function(t,n){t(o("heatmap",e))})},Store.prototype.export=function(e){return new Promise(function(t,n){t(window.localStorage.getItem(e))})},Store.prototype.import=function(e,t){return new Promise(function(n,r){n(window.localStorage.setItem(e,t))})},Store.prototype.findSlide=function(e,t,n,r){return new Promise(function(e,t){e([{id:new URLSearchParams(document.location.search.substring(1)).get("id")||"local",mpp:"0.001",study:"",specimen:""}])})},Store.prototype.getSlide=function(e){return new Promise(function(e,t){var n=new URLSearchParams(document.location.search.substring(1)),r=n.get("id")||"local";console.log(n),e({id:r,mpp:"0.001",study:"",specimen:""})})},Store.prototype.findTemplate=function(e,n){var r={};return e&&(r.name=e),n&&(r.type=n),new Promise(function(e,n){e(t("template",r))})},Store.prototype.getTemplate=function(e){return new Promise(function(t,r){t(n("template",e))})},Store.prototype.DownloadMarksToFile=function(){var e=$D.params.id;e=decodeURIComponent(e);var t={};t["provenance.image.slide"]=e;var n=JSON.parse(window.localStorage.getItem("mark")),r="";n&&(r=JSON.stringify(n.filter(function(e){var n=!0;for(var r in t)n=n&&Object.byString(e,r)==t[r];return n})));var o=document.createElement("a");o.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(r)),o.setAttribute("download","markups.json"),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)},Store.prototype.LoadMarksFromFile=function(){var e=$D.params.id,t=document.createElement("input");t.setAttribute("type","file"),t.style.display="position: fixed; top: -100em",t.onchange=function(t){var n=t.target,r=new FileReader;r.onload=function(){var t=r.result;try{var n=JSON.parse(t);console.log(n),n.forEach(function(t){t.provenance.image.slide=e});var o=JSON.parse(window.localStorage.getItem("mark"));o=(o=o||[]).concat(n),console.log(o),window.localStorage.setItem("mark",JSON.stringify(o)),window.location.reload()}catch(e){console.error(e)}console.log(t.substring(0,200))},r.readAsText(n.files[0])},t.click(),document.body.removeChild(t)}}Object.defineProperty(exports,"__esModule",{value:!0});var n={_id:"0",type:"object",id:"annotation-form",name:"AnnotSchema",description:"",links:[],additionalProperties:!1,properties:{name:{id:"a0",title:"Identity Name",type:"string",required:!0,description:"note name"},notes:{id:"a1",title:"Notes: ",type:"string",format:"textarea",maxLength:128}}},r=JSON.parse(window.localStorage.getItem("template"));r||((r=[]).push(n),window.localStorage.setItem("template",JSON.stringify(r))),exports.default=t;
},{}],"5g62":[function(require,module,exports) {
"use strict";function e(){console.warn("{imgbox mods enabled}"),CaMic.prototype.default_loadImg=CaMic.prototype.loadImg,CaMic.prototype.loadImg=function(e){var i=this,t=new URLSearchParams(window.location.search).get("id");console.log("image ID : "+t);var o=t;this.slideId=o,this.slideName=o,this.study="",this.specimen="",fetch(t+"/info.json").then(function(e){return e.json()}).then(function(o){var n={"@context":"http://iiif.io/api/image/2/context.json","@id":t,height:o.height,width:o.width,profile:["http://iiif.io/api/image/2/level2.json"],protocol:"http://iiif.io/api/image",tiles:[{scaleFactors:[1,2,4,8,16,32],width:256}]};i.viewer.open(n),i.mpp=o["mpp-x"]||o["mpp-y"]||1,i.createScalebar(i.mpp),new OpenSeadragonImaging.ImagingHelper({viewer:i.viewer}).setMaxZoom(1);var a={_id:"0"};a.name=i.slideName,a.study=i.study,a.specimen=i.specimen,a.mpp=1,a.location=t,a.url=n,console.log(e),console.log(a),e&&"function"==typeof e&&e.call(null,a),Loading.text.textContent="loading slide's tiles..."})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"lM4v":[function(require,module,exports) {
"use strict";var e=require("./LocalStore.js"),r=t(e),o=require("./ImgBoxMods.js"),s=t(o);function t(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,s.default)(),console.warn("This setup is intended for imagebox");
},{"./LocalStore.js":"WDG/","./ImgBoxMods.js":"5g62"}]},{},["lM4v"], null)
//# sourceMappingURL=/imgbox_package.map