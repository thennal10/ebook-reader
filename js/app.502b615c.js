(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ebook-reader/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("AppBar",{attrs:{onViewer:Boolean(e.currentBook)},on:{upload:e.fileUpload,back:function(t){e.currentBook=null},bookmark:e.setBookmark,settings:function(t){e.settingsDialog=!0},bookmarklist:function(t){e.bookmarkDialog=!0}}}),n("v-main",[n("Settings",{attrs:{settings:e.settings},on:{"change-theme":function(t){e.settings.theme=t},"change-fontsize":function(t){e.settings.fontSize=t}},model:{value:e.settingsDialog,callback:function(t){e.settingsDialog=t},expression:"settingsDialog"}}),e.currentBook?n("BookmarkList",{attrs:{bookmarks:e.currentBook.bookmarks},on:{"delete-bookmark":function(t){return e.deleteBookmark(t)},"update-bookmark":function(t){return e.updateBookmark(t)}},model:{value:e.bookmarkDialog,callback:function(t){e.bookmarkDialog=t},expression:"bookmarkDialog"}}):e._e(),e.currentBook?n("Viewer",{ref:"viewer",attrs:{book:e.currentBook.file,bookmarks:e.currentBook.bookmarks,settings:e.settings},on:{"delete-bookmark":function(t){return e.deleteBookmark(t)}}}):n("Library",{attrs:{books:e.books},on:{"open-viewer":function(t){return e.openViewer(t)},"delete-book":function(t){return e.deleteBook(t)}}})],1)],1)},a=[],i=n("3835"),s=n("1da1"),c=(n("96cf"),n("d81d"),n("4de4"),n("4dec")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"gray",flat:"","hide-on-scroll":""}},[e.onViewer?e._e():n("v-file-input",{attrs:{"hide-input":"",clearable:"","prepend-icon":"mdi-file-plus",accept:".epub"},on:{change:function(t){return e.$emit("upload",t)}}}),e.onViewer?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("back")}}},[n("v-icon",[e._v(" mdi-book-multiple ")])],1):e._e(),n("v-spacer"),e.onViewer?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("bookmarklist")}}},[n("v-icon",[e._v(" mdi-bookmark-multiple ")])],1):e._e(),e.onViewer?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("bookmark")}}},[n("v-icon",[e._v(" mdi-bookmark-plus ")])],1):e._e(),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("settings")}}},[n("v-icon",[e._v(" mdi-cog ")])],1)],1)},l=[],d={props:{onViewer:Boolean}},m=d,k=n("2877"),f=n("6544"),p=n.n(f),v=n("40dc"),h=n("8336"),b=n("23a7"),g=n("132d"),w=n("2fa4"),x=Object(k["a"])(m,u,l,!1,null,null,null),B=x.exports;p()(x,{VAppBar:v["a"],VBtn:h["a"],VFileInput:b["a"],VIcon:g["a"],VSpacer:w["a"]});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Navigator",{attrs:{noNext:e.noNext,noPrev:e.noPrev},on:{next:function(t){return e.rendition.next()},prev:function(t){return e.rendition.prev()}}}),e._l(e.bookmarkStyles,(function(t,r){return n("Bookmark",{key:t.top,style:t,on:{delete:function(t){return e.deleteBookmark(r)}}})})),n("div",{attrs:{id:"viewer"}}),n("Navigator",{attrs:{noNext:e.noNext,noPrev:e.noPrev},on:{next:function(t){return e.rendition.next()},prev:function(t){return e.rendition.prev()}}}),n("v-footer",{staticClass:"px-2 caption text--disabled font-weight-bold",attrs:{fixed:"",padless:""}},[n("span",{on:{click:function(t){e.startTime=+new Date}}},[e._v(" "+e._s(e.timeSpent())+"m ")]),n("v-spacer"),e.rendition?n("span",[e._v(" "+e._s(Math.round(1e4*e.rendition.location.start.percentage)/100)+"% ")]):e._e()],1)],2)},_=[],S=(n("c19f"),n("d3b7"),n("a211")),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",disabled:e.noPrev},on:{click:function(t){return t.preventDefault(),e.$emit("prev")}}},[n("v-icon",[e._v("mdi-chevron-left")])],1),n("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",disabled:e.noNext},on:{click:function(t){return t.preventDefault(),e.$emit("next")}}},[n("v-icon",[e._v("mdi-chevron-right")])],1)],1)],1)},O=[],j={name:"Navigator",props:{noNext:Boolean,noPrev:Boolean}},$=j,R=n("a523"),C=n("0fd9"),D=Object(k["a"])($,V,O,!1,null,null,null),T=D.exports;p()(D,{VBtn:h["a"],VContainer:R["a"],VIcon:g["a"],VRow:C["a"]});var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("div",{on:{click:function(t){return e.$emit("delete")}}})])},N=[],M={name:"Bookmark",methods:{}},P=M,A=(n("86d6"),Object(k["a"])(P,I,N,!1,null,"752333de",null)),E=A.exports,z={name:"Viewer",components:{Navigator:T,Bookmark:E},props:{book:ArrayBuffer,bookmarks:Array,settings:Object},data:function(){return{rendition:null,iframeDoc:null,currentSectionIndex:0,startTime:0,noNext:!1,noPrev:!1}},mounted:function(){var e=Object(S["a"])();e.open(this.book,"binary"),e.ready.then((function(){e.locations.generate(1)})),this.rendition=e.renderTo("viewer",{flow:"scrolled-doc",width:"100%",fullsize:!0}),this.rendition.themes.register("light",{p:{color:"black"},html:{background:"white"}}),this.rendition.themes.register("dark",{p:{color:"white"},html:{background:"black"}}),this.rendition.themes.select(this.settings.theme),this.rendition.themes.fontSize("".concat(this.settings.fontSize,"%"));var t=window.localStorage.getItem("currentBookLocation"),n=this.bookmarks.length?this.bookmarks[this.bookmarks.length-1].cfi:0;this.rendition.display(null!=t?t:n),this.rendition.on("rendered",this.onSectionChange);var r=window.localStorage.getItem("currentStartTime");this.startTime=r||+new Date},methods:{timeSpent:function(){return Math.round((new Date-this.startTime)/6e4)},onSectionChange:function(e){this.noNext=!e.next(),this.noPrev=!e.prev(),this.iframeDoc=document.getElementsByTagName("iframe")[0].contentWindow.document,this.currentSectionIndex=e.index},newBookmark:function(){var e=this.rendition.currentLocation().start,t=this.timeSpent();return this.startTime=+new Date,{cfi:e.cfi,location:e.location,percentage:e.percentage,time:t,timestamp:+new Date}},deleteBookmark:function(e){this.$emit("delete-bookmark",this.currentBookmarks[e])}},computed:{currentBookmarks:function(){var e=this;return this.bookmarks.filter((function(t){if(e.currentSectionIndex){var n=new S["a"].CFI(t.cfi);return n.spinePos==e.currentSectionIndex}}))},bookmarkStyles:function(){var e=this;return this.currentBookmarks.map((function(t){var n=new S["a"].CFI(t.cfi),r=n.toRange(e.iframeDoc),o=r.getBoundingClientRect();return{top:"".concat(o.top,"px")}}))}},watch:{"settings.theme":function(){this.rendition.themes.select(this.settings.theme)},"settings.fontSize":function(){this.rendition.themes.fontSize("".concat(this.settings.fontSize,"%"))},"rendition.location.start.cfi":function(e){window.localStorage.setItem("currentBookLocation",e),window.localStorage.setItem("currentStartTime",this.startTime)}}},L=z,F=n("553a"),K=Object(k["a"])(L,y,_,!1,null,null,null),J=K.exports;p()(K,{VFooter:F["a"],VSpacer:w["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",e._l(e.books,(function(t,r){return n("v-col",{key:r,attrs:{cols:"6",sm:"4"}},[n("LibraryEntry",{attrs:{book:t,metadata:e.bookMetadata[r]},on:{"open-viewer":function(n){return e.$emit("open-viewer",t)},delete:function(n){return e.$emit("delete-book",t)}}})],1)})),1)],1)},q=[],H=n("b85c"),W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.metadata?n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return[n("v-card",{class:{"on-hover":r},attrs:{elevation:r?12:2}},[n("v-img",{attrs:{src:e.metadata.cover,"aspect-ratio":"0.625"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-dialog",{attrs:{"max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-icon",e._g(e._b({staticClass:"align-self-start "},"v-icon",o,!1),r),[e._v(" mdi-close ")])]}}],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(' Delete "'+e._s(e.metadata.title)+'"? ')]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" No ")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.$emit("delete"),e.dialog=!1}}},[e._v(" Yes ")])],1)],1)],1),n("v-row",{staticClass:"fill-height",attrs:{align:"center"},on:{click:function(t){return e.$emit("open-viewer")}}},[e.metadata.cover?e._e():n("p",{staticClass:"text-sm-h4 text-h5 pa-4"},[e._v(" "+e._s(e.metadata.title)+" ")])])],1)],1)],1)]}}],null,!1,2046185134)}):e._e()},Y=[],G={name:"LibraryEntry",props:{book:ArrayBuffer,metadata:Object},data:function(){return{dialog:!1}}},Q=G,X=n("b0af"),Z=n("99d9"),ee=n("169a"),te=n("ce87"),ne=n("adda"),re=Object(k["a"])(Q,W,Y,!1,null,null,null),oe=re.exports;p()(re,{VBtn:h["a"],VCard:X["a"],VCardActions:Z["a"],VCardTitle:Z["c"],VContainer:R["a"],VDialog:ee["a"],VHover:te["a"],VIcon:g["a"],VImg:ne["a"],VRow:C["a"],VSpacer:w["a"]});var ae={name:"Library",props:{books:Array},data:function(){return{bookMetadata:[]}},components:{LibraryEntry:oe},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.populateMetadata(this.books);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{populateMetadata:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,a,i,s,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.bookMetadata=[],r=Object(H["a"])(e),n.prev=2,r.s();case 4:if((o=r.n()).done){n.next=19;break}return a=o.value,i=Object(S["a"])(),n.next=9,i.open(a,"binary");case 9:return n.next=11,i.coverUrl();case 11:return s=n.sent,n.next=14,i.loaded.metadata;case 14:c=n.sent,u=c.title,t.bookMetadata.push({cover:s,title:u});case 17:n.next=4;break;case 19:n.next=24;break;case 21:n.prev=21,n.t0=n["catch"](2),r.e(n.t0);case 24:return n.prev=24,r.f(),n.finish(24);case 27:case"end":return n.stop()}}),n,null,[[2,21,24,27]])})))()}},watch:{books:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.populateMetadata(t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},ie=ae,se=n("62ad"),ce=Object(k["a"])(ie,U,q,!1,null,null,null),ue=ce.exports;p()(ce,{VCol:se["a"],VContainer:R["a"],VRow:C["a"]});var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,"max-width":"500"},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",[n("v-card-title",[e._v(" Settings ")]),n("v-card-text",[n("v-select",{attrs:{value:e.settings.theme,items:e.themes,label:"Theme",hint:"Viewer reload might be required","persistent-hint":"",outlined:""},on:{input:function(t){return e.$emit("change-theme",t)}}}),n("v-slider",{attrs:{value:e.settings.fontSize,label:"Font Size",max:"150",min:"50"},on:{input:function(t){return e.$emit("change-fontsize",t)}},scopedSlots:e._u([{key:"append",fn:function(){return[n("p",[e._v(" "+e._s(e.settings.fontSize+"%")+" ")])]},proxy:!0}])})],1)],1)],1)},de=[],me={props:{value:Boolean,settings:Object},data:function(){return{themes:[{text:"Light",value:"light"},{text:"Dark",value:"dark"}]}}},ke=me,fe=n("b974"),pe=n("ba0d"),ve=Object(k["a"])(ke,le,de,!1,null,null,null),he=ve.exports;p()(ve,{VCard:X["a"],VCardText:Z["b"],VCardTitle:Z["c"],VDialog:ee["a"],VSelect:fe["a"],VSlider:pe["a"]});var be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,"max-width":"800"},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",[n("v-card-title",[e._v(" Bookmarks "),n("v-spacer"),n("v-btn",{attrs:{href:"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e.bookmarks)),download:"bookmarkdata.json",icon:""}},[n("v-icon",[e._v(" mdi-download ")])],1)],1),n("v-card-text",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.computedStats},scopedSlots:e._u([{key:"item.actions",fn:function(t){var r=t.item;return[n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteBookmark(r)}}},[e._v(" mdi-delete ")])]}},{key:"item.time",fn:function(t){var r=t.item;return[n("v-edit-dialog",{attrs:{"return-value":r.time,large:""},on:{"update:returnValue":function(t){return e.$set(r,"time",t)},"update:return-value":function(t){return e.$set(r,"time",t)},save:function(t){return e.updateBookmark(r)}},scopedSlots:e._u([{key:"input",fn:function(){return[n("div",{staticClass:"mt-4 text-h6"},[e._v(" Update Time ")]),n("v-text-field",{attrs:{rules:[e.timeRules],type:"number",label:"Edit",autofocus:""},model:{value:r.time,callback:function(t){e.$set(r,"time",t)},expression:"item.time"}})]},proxy:!0}],null,!0)},[n("div",[e._v(e._s(r.time))])])]}}])})],1)],1)],1)},ge=[],we=(n("a9e3"),n("fb6a"),{props:{value:Boolean,bookmarks:Array},data:function(){return{headers:[{text:"Location %",value:"percentage"},{text:"Characters Read",value:"charas"},{text:"Time Taken (m)",value:"time"},{text:"Reading Speed (ch/h)",value:"speed"},{text:"Time Stamp",value:"timestamp"},{text:"Actions",value:"actions"}],timeRules:function(e){return e>0}}},methods:{deleteBookmark:function(e){var t=this.computedStats.indexOf(e);this.$emit("delete-bookmark",this.bookmarks[this.bookmarks.length-t-1])},updateBookmark:function(e){var t=this.computedStats.indexOf(e);this.$emit("update-bookmark",[this.bookmarks[this.bookmarks.length-t-1],Number(e.time)])}},computed:{computedStats:function(){var e=this.bookmarks.slice().reverse();return e.map((function(t,n){var r=e[n+1]?e[n+1]:{location:0};return{percentage:"".concat(Math.round(1e4*t.percentage)/100,"%"),charas:t.location-r.location,time:t.time,speed:t.time?Math.round(60*(t.location-r.location)/t.time):"­­—",timestamp:new Date(t.timestamp).toDateString()}}))}}}),xe=we,Be=n("8fea"),ye=n("7679"),_e=n("8654"),Se=Object(k["a"])(xe,be,ge,!1,null,null,null),Ve=Se.exports;p()(Se,{VBtn:h["a"],VCard:X["a"],VCardText:Z["b"],VCardTitle:Z["c"],VDataTable:Be["a"],VDialog:ee["a"],VEditDialog:ye["a"],VIcon:g["a"],VSpacer:w["a"],VTextField:_e["a"]});var Oe=new c["a"]("Books");Oe.version(1).stores({books:"++id, file, bookmarks"});var je={name:"App",components:{AppBar:B,Viewer:J,Library:ue,Settings:he,BookmarkList:Ve},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Oe.books.toArray();case 2:t=e.sent,this.books=t.map((function(e){return e.file})),n=JSON.parse(window.localStorage.getItem("settings")),n&&(this.settings=n),r=window.sessionStorage.getItem("currentBookIndex"),"null"!=r&&this.openViewer(this.books[r]);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{books:[],currentBook:null,settingsDialog:!1,bookmarkDialog:!1,settings:{theme:"light",fontSize:100}}},methods:{fileUpload:function(e){var t=new FileReader;t.onload=this.loadBook,t.readAsArrayBuffer(e)},loadBook:function(e){var t=e.target.result;this.books.push(t),Oe.books.put({file:t,bookmarks:[]})},openViewer:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e,n.next=3,t.getBookKey(e);case 3:return o=n.sent,n.next=6,Oe.books.get(o);case 6:a=n.sent,t.currentBook={file:r,bookmarks:a.bookmarks};case 8:case"end":return n.stop()}}),n)})))()},deleteBook:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.books=t.books.filter((function(t){return t!=e})),n.next=3,t.getBookKey(e);case 3:r=n.sent,Oe.books.delete(r);case 5:case"end":return n.stop()}}),n)})))()},setBookmark:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs.viewer.newBookmark(),e.currentBook.bookmarks.push(n),t.next=4,e.getBookKey(e.currentBook.file);case 4:r=t.sent,Oe.books.update(r,{bookmarks:e.currentBook.bookmarks});case 6:case"end":return t.stop()}}),t)})))()},deleteBookmark:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.currentBook.bookmarks=t.currentBook.bookmarks.filter((function(t){return t!=e})),n.next=3,t.getBookKey(t.currentBook.file);case 3:r=n.sent,Oe.books.update(r,{bookmarks:t.currentBook.bookmarks});case 5:case"end":return n.stop()}}),n)})))()},updateBookmark:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,a,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=Object(i["a"])(e,2),o=r[0],a=r[1],s=t.currentBook.bookmarks.indexOf(o),t.currentBook.bookmarks[s].time=a,n.next=5,t.getBookKey(t.currentBook.file);case 5:c=n.sent,Oe.books.update(c,{bookmarks:t.currentBook.bookmarks});case 7:case"end":return n.stop()}}),n)})))()},getBookKey:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Oe.books.where("file").equals(e).primaryKeys();case 2:return n=t.sent,t.abrupt("return",n[0]);case 4:case"end":return t.stop()}}),t)})))()}},watch:{currentBook:function(e){var t=null;e&&(t=this.books.indexOf(e.file)),window.sessionStorage.setItem("currentBookIndex",t)},"settings.theme":function(){this.$vuetify.theme.dark="dark"==this.settings.theme},settings:{handler:function(e){window.localStorage.setItem("settings",JSON.stringify(e))},deep:!0}}},$e=je,Re=(n("034f"),n("7496")),Ce=n("f6c4"),De=Object(k["a"])($e,o,a,!1,null,null,null),Te=De.exports;p()(De,{VApp:Re["a"],VMain:Ce["a"]});var Ie=n("f309");r["a"].use(Ie["a"]);var Ne=new Ie["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:Ne,render:function(e){return e(Te)}}).$mount("#app")},"85ec":function(e,t,n){},"86d6":function(e,t,n){"use strict";n("e11d")},e11d:function(e,t,n){}});
//# sourceMappingURL=app.502b615c.js.map