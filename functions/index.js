parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"cUx7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.api=void 0;const e=require("firebase-admin"),t=require("firebase-functions"),s=require("express"),o=require("cors"),r=require("os"),i=require(`${r.homedir()}/.firebase/keyfile.json`),a={credential:e.credential.cert(i),databaseURL:"https://blackjynxy.firebaseio.com"},n=process.env.LOCAL_TEST?a:t.config().firebase;e.initializeApp(n);const c=e.firestore(),l=require("apollo-server-express"),p=require("graphql/utilities/schemaPrinter"),u=s();u.options("*",o()),u.use((e,t,s)=>(t.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),s())),u.get("/celebrate",(e,t)=>{c.collection("provisions").doc("food").get().then(e=>{e.exists?console.log("Document data:",e.data()):console.log("No such document!")}).catch(e=>{console.log("Error getting document",e)});t.send("Yaaaaay it was Christmas!")}),u.get("/home",(e,t)=>{t.set("Content-Type","text/plain"),t.send("Keep the change you stinkin animal!")}),u.use("/",(e,t)=>{t.set("Content-Type","text/plain"),t.send("Merry Christmas and a Happy New Year")}),process.env.LOCAL_TEST&&u.listen(3e3,()=>console.log("Example app listening on port 3000"));const d=t.https.onRequest((e,t)=>(e.path||(e.url=`/${e.url}`),u(e,t)));exports.api=d;
},{}]},{},["cUx7"], null)
//# sourceMappingURL=/index.map