(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{104:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":14,"1":8,"2":34,"3":229,"4":174,"5":247,"6":190,"7":174,"8":136,"9":2,"10":74,"11":193,"12":100,"13":77,"14":185,"15":213,"16":192,"17":228,"18":106,"19":60,"20":75,"21":209,"22":27,"23":150,"24":88,"25":50,"26":77,"27":182,"28":239,"29":195,"30":158,"31":87},"secretKey":{"0":49,"1":209,"2":174,"3":132,"4":124,"5":245,"6":50,"7":158,"8":161,"9":61,"10":34,"11":129,"12":239,"13":252,"14":137,"15":207,"16":103,"17":143,"18":92,"19":174,"20":64,"21":173,"22":195,"23":207,"24":25,"25":211,"26":184,"27":58,"28":154,"29":130,"30":150,"31":212,"32":14,"33":8,"34":34,"35":229,"36":174,"37":247,"38":190,"39":174,"40":136,"41":2,"42":74,"43":193,"44":100,"45":77,"46":185,"47":213,"48":192,"49":228,"50":106,"51":60,"52":75,"53":209,"54":27,"55":150,"56":88,"57":50,"58":77,"59":182,"60":239,"61":195,"62":158,"63":87}}}')},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t){},115:function(e,t){},144:function(e,t){},145:function(e,t){},169:function(e,t,n){"use strict";n.r(t);var r=n(25),c=n.n(r),a=n(100),s=n.n(a),i=(n(110),n(1)),o=n.n(i),u=n(3),l=n(9),p=n.p+"static/media/twitter-logo.d89d9a86.svg",b=(n(111),n(43)),f=n(8),d=n(22),m=n(104),j=n(13),g=d.e.SystemProgram,v=(d.e.Keypair,Object.values(m._keypair.secretKey)),h=new Uint8Array(v),x=d.e.Keypair.fromSecretKey(h),y=new f.PublicKey(b.metadata.address),w=Object(f.clusterApiUrl)("devnet"),O="processed",k="_buildspace",S="https://twitter.com/".concat(k),K=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),i=s[0],m=s[1],v=Object(r.useState)([]),h=Object(l.a)(v,2),K=h[0],N=h[1],A=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom connected"),e.next=7,n.connect();case 7:r=e.sent,console.log("Connected with Pub Key",r.publicKey.toString()),c(r.publicKey.toString());case 10:e.next=13;break;case 12:alert("Solana object not found! Get Phantom Wallet");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){var t=e.target.value;m(t)},I=function(){var e=new f.Connection(w,O);return new d.c(e,window.solana,O)},M=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=I(),r=new d.b(b,y,n),e.next=5,r.rpc.upVote(new d.a(t),{accounts:{baseAccount:x.publicKey,user:n.wallet.publicKey}});case 5:L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Upvote error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Gif link:",i),e.prev=1,t=I(),n=new d.b(b,y,t),e.next=6,n.rpc.addGif(i,{accounts:{baseAccount:x.publicKey,user:t.wallet.publicKey}});case 6:return console.log("GIF successfully sent to program",i),e.next=9,L();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error sending GIF:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]);var L=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=I(),n=new d.b(b,y,t),e.next=5,n.account.baseAccount.fetch(x.publicKey);case 5:r=e.sent,N(r.gifList),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error in getGifList ",e.t0),N(null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=I(),n=new d.b(b,y,t),e.next=5,n.rpc.startStuffOff({accounts:{baseAccount:x.publicKey,user:t.wallet.publicKey,systemProgram:g.programId},signers:[x]});case 5:return console.log("Created a new BaseAccount w/ address:",x.publicKey.toString()),e.next=8,L();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n&&(console.log("Fetching GIF"),L())}),[n]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:n?"authed-container":"container",children:[Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)("p",{className:"header",children:"\ud83d\uddbc GIF Portal"}),Object(j.jsx)("p",{className:"sub-text",children:"View your GIF collection in the metaverse \u2728"})]}),n?null===K?Object(j.jsx)("div",{className:"connected-container",children:Object(j.jsx)("button",{className:"cta-button submit-gif-button",onClick:P,children:"Do One-Time Initialization For GIF Program Account"})}):Object(j.jsxs)("div",{className:"connected-container",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C()},children:[Object(j.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:i,onChange:G}),Object(j.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(j.jsx)("div",{className:"gif-grid",children:K.map((function(e,t){return Object(j.jsxs)("div",{className:"gif-item",children:[Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:16},children:[Object(j.jsxs)("span",{style:{color:"white"},children:["Likes: ",e.likes.toNumber()]}),Object(j.jsx)("div",{style:{color:"white",margin:"0 8px",cursor:"pointer"},onClick:function(){return M(t)},children:"Up"})]}),Object(j.jsx)("img",{src:e.gifLink,alt:t}),Object(j.jsxs)("span",{style:{color:"white"},children:["contributor: ",e.userAddress.toString()]})]},t)}))})]}):Object(j.jsx)("button",{className:"cta-button connect-wallet-button",onClick:E,children:"Connect to Wallet"}),Object(j.jsxs)("div",{className:"footer-container",children:[Object(j.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:p}),Object(j.jsx)("a",{className:"footer-text",href:S,target:"_blank",rel:"noreferrer",children:"built on @".concat(k)})]})]})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root"))},43:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"myepicproject","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]},{"name":"upVote","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"idx","type":"u64"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"},{"name":"likes","type":"u64"}]}}],"metadata":{"address":"EUr6N65Da5rXE3C2dKvWRMnoEMujrcxYWpvM8872B5tn"}}')}},[[169,1,2]]]);
//# sourceMappingURL=main.118c832b.chunk.js.map