parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"c2nQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const t=[{id:1,firstName:"Tom",lastName:"Coleman"},{id:2,firstName:"Sashko",lastName:"Stubailo"}],o=[{id:1,authorId:1,title:"Introduction to GraphQL",votes:2},{id:2,authorId:2,title:"GraphQL Rocks",votes:3},{id:3,authorId:2,title:"Advanced GraphQL",votes:1}],e={Query:{posts:()=>o,author:(o,{id:e})=>t.find(t=>t.id===e)},Mutation:{upvotePost(t,{postId:e}){const d=o.find(t=>t.id===e);if(!d)throw new Error(`Couldn't find post with id ${e}`);return d.votes+=1,d}},Author:{posts:t=>o.filter(o=>o.authorId===t.id)},Post:{author:o=>t.find(t=>t.id===o.authorId)}};var d=e;exports.default=d;
},{}],"dmRD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("graphql-tools"),e=n(require("./resolvers"));function n(t){return t&&t.__esModule?t:{default:t}}const o="\ntype Author {\n  id: Int! # the ! means that every author object _must_ have an id\n  firstName: String\n  lastName: String\n  posts: [Post] # the list of Posts by this author\n}\ntype Post {\n  id: Int!\n  title: String\n  author: Author\n  votes: Int\n}\n# the schema allows the following query:\ntype Query {\n  posts: [Post]\n  author(id: Int!): Author\n}\n# this schema allows the following mutation:\ntype Mutation {\n  upvotePost (\n    postId: Int!\n  ): Post\n}\n";var s=(0,t.makeExecutableSchema)({typeDefs:o,resolvers:e.default});exports.default=s;
},{"./resolvers":"c2nQ"}],"cUx7":[function(require,module,exports) {
"use strict";function e(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(s,o){try{var i=r[s](o),a=i.value}catch(c){return void t(c)}if(!i.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});e(a)}("next")})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.api=void 0;const r=require("firebase-admin"),t=require("firebase-functions"),n=require("express"),s=require("cors"),o=require("os");function i(){const e=require(`${o.homedir()}/.firebase/keyfile.json`);return{credential:r.credential.cert(e),databaseURL:"https://blackjynxy.firebaseio.com"}}const a=process.env.LOCAL_TEST?i():t.config().firebase;r.initializeApp(a);const c=r.firestore(),p=require("apollo-server-express"),u=require("graphql/utilities/schemaPrinter"),l=require("./graphql/schema"),f=n();f.options("*",s()),f.use((e,r,t)=>(r.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),t())),f.use("/graphql",p.graphqlExpress({schema:l,context:{}})),f.use("/graphiql",p.graphiqlExpress({endpointURL:"/api/graphql"})),f.use("/schema",(e,r)=>{r.set("Content-Type","text/plain"),r.send(u(l))}),f.get("/provisions/food",(()=>{var r=e(function*(e,r){const t=c.collection("provisions").doc("food"),n=yield t.get().catch(function(e){r.status(500),r.render("error",{message:e.message,error:e})});r.setHeader("Content-Type","application/json"),r.json(n.data())});return function(e,t){return r.apply(this,arguments)}})()),f.use("/",(e,r)=>{r.set("Content-Type","text/plain"),r.send("Welcome to data fetcher 3000!")}),process.env.LOCAL_TEST&&f.listen(3e3,()=>console.log("Example app listening on port 3000"));const h=t.https.onRequest((e,r)=>(e.path||(e.url=`/${e.url}`),f(e,r)));exports.api=h;
},{"./graphql/schema":"dmRD"}]},{},["cUx7"], null)
//# sourceMappingURL=/index.map