(function(){"use strict";var t={4913:function(t,n,r){var e=r(6369),o=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"country-grid"},t._l(t.countries,(function(r){return n("div",{key:r.code,staticClass:"country-card"},[n("div",{staticClass:"country-info"},[n("div",{staticClass:"image-container"},[n("img",{staticClass:"country-image",attrs:{src:"/imagen.jpg",alt:"Country Image"}})]),n("div",{staticClass:"text-container"},[n("div",{staticClass:"flag-container"},[n("img",{staticClass:"flag",attrs:{src:t.getFlagUrl(r.code),alt:"Flag"}})]),n("div",{staticClass:"text-content"},[n("h2",[t._v(t._s(r.name))]),n("p",{staticClass:"continent-name"},[t._v(t._s(r.continent.name))])])])])])})),0)},c=[],s={data(){return{countries:[]}},mounted(){this.fetchCountries()},methods:{async fetchCountries(){try{const t=await fetch("https://countries.trevorblades.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n              {\n                countries {\n                  code\n                  name\n                  continent {\n                    name\n                  }\n                }\n              }\n            "})}),{data:n}=await t.json();this.countries=n.countries}catch(t){console.error("Error fetching countries:",t)}},getFlagUrl(t){return`https://flagcdn.com/w20/${t.toLowerCase()}.png`}}},u=s,l=r(1001),f=(0,l.Z)(u,a,c,!1,null,"47a8488a",null),d=f.exports,p={name:"App",components:{HelloWorld:d}},v=p,h=(0,l.Z)(v,o,i,!1,null,null,null),g=h.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t(g)}).$mount("#app")}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(n,e,o,i){if(!e){var a=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,s=0;s<e.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[s])}))?e.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var u=o();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,o,i]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,i,a=e[0],c=e[1],s=e[2],u=0;if(a.some((function(n){return 0!==t[n]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var l=s(r)}for(n&&n(e);u<a.length;u++)i=a[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},e=self["webpackChunknuevoproyecto"]=self["webpackChunknuevoproyecto"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(4913)}));e=r.O(e)})();
//# sourceMappingURL=app.f91a65e7.js.map