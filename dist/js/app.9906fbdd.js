(function(e){function t(t){for(var a,s,r=t[0],u=t[1],o=t[2],p=0,v=[];p<r.length;p++)s=r[p],i[s]&&v.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(v.length)v.shift()();return l.push.apply(l,o||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(a=!1)}a&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},l=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var c=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"163b":function(e,t,n){},"1f8c":function(e,t,n){"use strict";var a=n("9a48"),i=n.n(a);i.a},2856:function(e,t,n){},"47c8":function(e,t,n){"use strict";var a=n("7767"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("header",[n("app-logo")],1),n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col s12"},[n("div",{staticClass:"input-component"},[n("app-textarea",{attrs:{id:"input-text",label:"Type Something..."},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)]),n("div",{staticClass:"col s6"},[n("div",{staticClass:"input-component"},[n("app-range",{attrs:{label:"Rate",min:"0.5",max:"2",step:"0.1"},model:{value:e.rate,callback:function(t){e.rate=t},expression:"rate"}})],1)]),n("div",{staticClass:"col s6"},[n("div",{staticClass:"input-component"},[n("app-range",{attrs:{label:"Pitch",min:"0",max:"2",step:"0.1"},model:{value:e.pitch,callback:function(t){e.pitch=t},expression:"pitch"}})],1)]),n("div",{staticClass:"col s12"},[n("div",{staticClass:"input-component"},[n("app-range",{attrs:{label:"Volume",min:"0",max:"1",step:"0.1"},model:{value:e.volume,callback:function(t){e.volume=t},expression:"volume"}})],1)]),n("div",{staticClass:"col s12"},[n("div",{staticClass:"input-component"},[e.languages?[n("app-select",{attrs:{id:"languages",label:"Language",options:e.languages},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})]:e._e()],2)]),n("div",{staticClass:"col s12"},[n("div",{staticClass:"submit-component center"},[n("button",{staticClass:"waves-effect waves-light btn",on:{click:function(t){return t.preventDefault(),e.speak(t)}}},[e._v("\n              Speak!\n            ")])])])])])])])},l=[],s=(n("96cf"),n("3040")),r=n("6885"),u=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-textarea"},[n("div",{staticClass:"input-field"},[e.label?n("label",{attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),n("textarea",{staticClass:"materialize-textarea",attrs:{id:e.id,spellcheck:"false"},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value)}}})])])},c=[],p={name:"input-textarea",props:{id:{type:String,required:!0},label:{type:String,default:null},value:{default:null}}},v=p,f=(n("1f8c"),n("2877")),d=Object(f["a"])(v,o,c,!1,null,"7a412185",null);d.options.__file="InputTextarea.vue";var m=d.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-select"},[n("div",{staticClass:"input-field"},[n("select",{attrs:{id:e.id},domProps:{value:e.value},on:{change:function(t){e.$emit("input",t.target.value)}}},[n("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Please select one")]),e.options?e._l(e.options,function(t,a){return n("option",{directives:[{name:"init",rawName:"v-init",value:{key:a,array:e.options,callback:e.mInit},expression:"{key: index, array: options, callback: mInit}"}],key:a,domProps:{value:t.value}},[e._v(e._s(t.name)+"\n        ")])}):e._e()],2),e.label?n("label",[e._v(e._s(e.label))]):e._e()])])},h=[],b={name:"input-select",props:{id:{type:String},label:{type:String,default:null},options:{type:Array,required:!0},value:{type:String,default:null}},directives:{init:function(e,t){var n=t.value.key,a=t.value.array.length;n==a-1&&"function"===typeof t.value.callback&&t.value.callback()}},methods:{mInit:function(){var e=document.querySelector("#".concat(this.id));u.a.FormSelect.init(e,{})}},mounted:function(){this.mInit()},updated:function(){this.mInit()}},_=b,y=(n("cfd6"),Object(f["a"])(_,g,h,!1,null,"e69cd8bc",null));y.options.__file="InputSelect.vue";var x=y.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-range"},[e.label?n("label",[n("div",[e._v(e._s(e.label)),n("span",{staticClass:"right"},[e._v(e._s(e.value))])])]):e._e(),n("input",{attrs:{type:"range",min:e.min,max:e.max,step:e.step},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value)}}})])},k=[],w={name:"input-range",props:{label:{type:String,default:null},min:{default:0,required:!0},max:{default:10,required:!0},step:{default:1,required:!0},value:{default:5,required:!0}}},S=w,O=(n("9046"),Object(f["a"])(S,C,k,!1,null,"3ff41ca0",null));O.options.__file="InputRange.vue";var j=O.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("span",{staticClass:"logo-blue"},[e._v("Type")]),n("span",{staticClass:"logo-white"},[e._v("N")]),n("span",{staticClass:"logo-red"},[e._v("Speak")])])}],$={name:"logo"},E=$,T=(n("47c8"),Object(f["a"])(E,P,I,!1,null,"d885e3e6",null));T.options.__file="Logo.vue";var q=T.exports,V={name:"app",data:function(){return{synth:window.speechSynthesis,synthVoices:null,text:null,rate:1,pitch:1,volume:.5,language:null,languages:[{name:"English",value:"en-GB"},{name:"Italian",value:"it-IT"},{name:"French",value:"fr-FR"},{name:"Spanish",value:"es-ES"}]}},computed:{},components:{appTextarea:m,appSelect:x,appRange:j,appLogo:q},methods:{getVoices:function(){var e=this;return new Promise(function(t){var n=e.synth.getVoices();n.length?t(n):e.synth.onvoiceschanged=function(){n=e.synth.getVoices(),t(n)}})},speak:function(){if(this.text&&this.language){if(this.synth.speaking)return;var e=new SpeechSynthesisUtterance(this.text);e.rate=this.rate,e.pitch=this.pitch,e.volume=this.volume,e.lang=this.language,this.synth.speak(e)}}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getVoices();case 2:this.synthVoices=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},R=V,M=(n("5c0b"),Object(f["a"])(R,i,l,!1,null,null,null));M.options.__file="App.vue";var F=M.exports;n("33cb");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(F)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("2856"),i=n.n(a);i.a},7767:function(e,t,n){},"870d":function(e,t,n){},9046:function(e,t,n){"use strict";var a=n("163b"),i=n.n(a);i.a},"9a48":function(e,t,n){},cfd6:function(e,t,n){"use strict";var a=n("870d"),i=n.n(a);i.a}});
//# sourceMappingURL=app.9906fbdd.js.map