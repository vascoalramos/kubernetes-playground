(this["webpackJsonpsalogic-front"]=this["webpackJsonpsalogic-front"]||[]).push([[0],{215:function(n,e,t){"use strict";t.r(e);var o=t(0),i=t(19),r=t.n(i),a=t(33),c=t(34),s=t(36),l=t(35),u=(t(87),t(80)),h=t.n(u),d=t(81),f=t.n(d),p=t(82),j=t.n(p),v=t(57),y=t.n(v),b=t(3),g=function(n){Object(s.a)(t,n);var e=Object(l.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var n=Math.round(128*(this.props.polarity+1)),e={backgroundColor:"rgb("+(255-n)+", "+n+", 0)",padding:"15px"};return Object(b.jsxs)("div",{style:e,children:['"',this.props.sentence,'" has polarity of ',this.props.polarity," "]})}}]),t}(o.Component),w={marginLeft:12},O=function(n){Object(s.a)(t,n);var e=Object(l.a)(t);function t(n){var o;return Object(a.a)(this,t),(o=e.call(this,n)).onEnterPress=function(n){"Enter"===n.key&&o.analyzeSentence()},o.state={sentence:"",polarity:void 0},o}return Object(c.a)(t,[{key:"analyzeSentence",value:function(){var n=this;fetch("http://34.82.192.72/sentiment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sentence:this.textField.getValue()})}).then((function(n){return n.json()})).then((function(e){return n.setState(e)}))}},{key:"render",value:function(){var n=this,e=void 0!==this.state.polarity?Object(b.jsx)(g,{sentence:this.state.sentence,polarity:this.state.polarity}):null;return Object(b.jsx)(h.a,{children:Object(b.jsx)("div",{className:"centerize",children:Object(b.jsxs)(y.a,{zDepth:1,className:"content",children:[Object(b.jsx)("h2",{children:"Sentiment Analyser"}),Object(b.jsx)(f.a,{ref:function(e){return n.textField=e},onKeyUp:this.onEnterPress.bind(this),hintText:"Type your sentence."}),Object(b.jsx)(j.a,{label:"Send",style:w,onClick:this.analyzeSentence.bind(this)}),e]})})})}}]),t}(o.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}r.a.render(Object(b.jsx)(O,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");m?function(n){fetch(n).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):k(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n):k(n)}))}}()},87:function(n,e,t){}},[[215,1,2]]]);
//# sourceMappingURL=main.a9bf032f.chunk.js.map