(window.webpackJsonp=window.webpackJsonp||[]).push([[30,31,32,33,34,35,36,38],{1871:function(e,t,n){"use strict";n.r(t);n(496);var o=n(3),i=n(124),l=Object(o.c)({props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},collectionIndex:{type:Number,default:null},collection:{type:Object,default:function(){}},doc:Boolean,isFiltered:Boolean},setup:function(){return{tippyActions:Object(o.o)(null),options:Object(o.o)(null),folderAction:Object(o.o)(null),edit:Object(o.o)(null),deleteAction:Object(o.o)(null)}},data:function(){return{showChildren:!1,dragging:!1,selectedFolder:{},confirmRemove:!1}},computed:{isSelected:function(){return this.picked&&"gql-my-collection"===this.picked.pickedType&&this.picked.collectionIndex===this.collectionIndex},getCollectionIcon:function(){return this.isSelected?"check-circle":(this.showChildren||this.isFiltered)&&(this.showChildren||this.isFiltered)?"folder-open":"folder"}},methods:{pick:function(){this.$emit("select",{picked:{pickedType:"gql-my-collection",collectionIndex:this.collectionIndex}})},toggleShowChildren:function(){this.savingMode&&this.pick(),this.showChildren=!this.showChildren},removeCollection:function(){this.picked&&"gql-my-collection"===this.picked.pickedType&&this.picked.collectionIndex===this.collectionIndex&&this.$emit("select",{picked:null}),Object(i.r)(this.collectionIndex),this.$toast.success("".concat(this.$t("state.deleted")))},dropEvent:function(e){var t=e.dataTransfer;this.dragging=!this.dragging;var n=t.getData("folderPath"),o=t.getData("requestIndex");Object(i.p)(n,o,"".concat(this.collectionIndex))}}}),r=n(23),a=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[n("div",{staticClass:"flex items-stretch group",on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent.apply(null,arguments)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.toggleShowChildren()}}},[n("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.getCollectionIcon}})],1),e._v(" "),n("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.toggleShowChildren()}}},[n("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.collection.name)+"\n      ")])]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"folder-plus",title:e.$t("folder.new")},nativeOn:{click:function(t){return e.$emit("add-folder",{path:""+e.collectionIndex})}}}),e._v(" "),n("span",[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"n",void 0,t.key,void 0)?null:e.folderAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"folderAction",attrs:{svg:"folder-plus",label:""+e.$t("folder.new"),shortcut:["N"]},nativeOn:{click:function(t){return function(){e.$emit("add-folder",{path:""+e.collectionIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:""+e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-collection"),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:""+e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),e.showChildren||e.isFiltered?n("div",{staticClass:"flex"},[n("div",{staticClass:"bg-dividerLight cursor-nsResize flex ml-5.5 transform transition w-1 hover:bg-dividerDark hover:scale-x-125",on:{click:function(t){return e.toggleShowChildren()}}}),e._v(" "),n("div",{staticClass:"flex flex-col flex-1 truncate"},[e._l(e.collection.folders,(function(t,o){return n("CollectionsGraphqlFolder",{key:"folder-"+String(o),attrs:{picked:e.picked,"saving-mode":e.savingMode,folder:t,"folder-index":o,"folder-path":e.collectionIndex+"/"+String(o),"collection-index":e.collectionIndex,doc:e.doc,"is-filtered":e.isFiltered},on:{"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)}}})})),e._v(" "),e._l(e.collection.requests,(function(t,o){return n("CollectionsGraphqlRequest",{key:"request-"+String(o),attrs:{picked:e.picked,"saving-mode":e.savingMode,request:t,"collection-index":e.collectionIndex,"folder-index":-1,"folder-name":e.collection.name,"folder-path":""+e.collectionIndex,"request-index":o,doc:e.doc},on:{"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)}}})})),e._v(" "),0===e.collection.folders.length&&0===e.collection.requests.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 mb-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:""+e.$t("empty.collection")}}),e._v(" "),n("span",{staticClass:"text-center"},[e._v("\n          "+e._s(e.$t("empty.collection"))+"\n        ")])]):e._e()],2)]):e._e(),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:""+e.$t("confirm.remove_collection")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeCollection}})],1)}),[],!1,null,null,null);t.default=a.exports;installComponents(a,{SmartIcon:n(111).default,ButtonSecondary:n(106).default,SmartItem:n(123).default,CollectionsGraphqlFolder:n(1229).default,CollectionsGraphqlRequest:n(1225).default,SmartConfirmModal:n(360).default})},1872:function(e,t,n){"use strict";n.r(t);n(56);var o=n(3),i=n(74),l=n(124),r=Object(o.c)({props:{show:Boolean},data:function(){return{name:null}},methods:{addNewCollection:function(){this.name?(Object(l.a)(Object(i.makeCollection)({name:this.name,folders:[],requests:[]})),this.hideModal()):this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),a=n(23),c=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.$t("collection.new")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlAdd",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addNewCollection.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlAdd"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.addNewCollection.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1521622023)}):e._e()}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{ButtonPrimary:n(172).default,ButtonSecondary:n(106).default,SmartModal:n(112).default})},1873:function(e,t,n){"use strict";n.r(t);var o=n(34),i=(n(496),n(56),n(11),n(10),n(12),n(5),n(15),n(8),n(14),n(3)),l=n(124);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Object(i.c)({props:{show:Boolean,editingCollection:{type:Object,default:function(){}},editingCollectionIndex:{type:Number,default:null},editingCollectionName:{type:String,default:null}},data:function(){return{name:null}},watch:{editingCollectionName:function(e){this.name=e}},methods:{saveCollection:function(){if(this.name){var e=a(a({},this.editingCollection),{},{name:this.name});Object(l.g)(this.editingCollectionIndex,e),this.hideModal()}else this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),s=n(23),d=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.$t("collection.edit")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEdit",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveCollection.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlEdit"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.saveCollection.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,2641254919)}):e._e()}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{ButtonPrimary:n(172).default,ButtonSecondary:n(106).default,SmartModal:n(112).default})},1874:function(e,t,n){"use strict";n.r(t);n(496),n(56);var o=n(3),i=Object(o.c)({props:{show:Boolean,folderPath:{type:String,default:null},collectionIndex:{type:Number,default:null}},data:function(){return{name:null}},methods:{addFolder:function(){this.$emit("add-folder",{name:this.name,path:this.folderPath||"".concat(this.collectionIndex)}),this.hideModal()},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),l=n(23),r=Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:e.$t("folder.new")},on:{close:function(t){return e.$emit("hide-modal")}},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlAddFolder",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addFolder.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlAddFolder"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:e.$t("action.save")},nativeOn:{click:function(t){return e.addFolder.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3721494695)}):e._e()}),[],!1,null,null,null);t.default=r.exports;installComponents(r,{ButtonPrimary:n(172).default,ButtonSecondary:n(106).default,SmartModal:n(112).default})},1875:function(e,t,n){"use strict";n.r(t);n(11),n(10),n(12),n(5),n(15),n(8),n(14);var o=n(34),i=(n(56),n(3)),l=n(124);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Object(i.c)({props:{show:Boolean,folder:{type:Object,default:function(){}},folderPath:{type:String,default:null},editingFolderName:{type:String,default:null}},data:function(){return{name:""}},watch:{editingFolderName:function(e){this.name=e}},methods:{editFolder:function(){this.name?(Object(l.h)(this.folderPath,a(a({},this.folder),{},{name:this.name})),this.hideModal()):this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal:function(){this.name="",this.$emit("hide-modal")}}}),s=n(23),d=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.$t("folder.edit")},on:{close:function(t){return e.$emit("hide-modal")}},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEditFolder",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.editFolder.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlEditFolder"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.editFolder.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3376791847)}):e._e()}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{ButtonPrimary:n(172).default,ButtonSecondary:n(106).default,SmartModal:n(112).default})},1876:function(e,t,n){"use strict";n.r(t);var o=n(34),i=(n(496),n(56),n(11),n(10),n(12),n(5),n(15),n(8),n(14),n(3)),l=n(124);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Object(i.c)({props:{show:Boolean,folderPath:{type:String,default:null},request:{type:Object,default:function(){}},requestIndex:{type:Number,default:null},editingRequestName:{type:String,default:null}},data:function(){return{requestUpdateData:{name:null}}},watch:{editingRequestName:function(e){this.requestUpdateData.name=e}},methods:{saveRequest:function(){if(this.requestUpdateData.name){var e=a(a({},this.$props.request),{},{name:this.$data.requestUpdateData.name||this.$props.request.name});Object(l.i)(this.folderPath,this.requestIndex,e),this.hideModal()}else this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal:function(){this.requestUpdateData={name:null},this.$emit("hide-modal")}}}),s=n(23),d=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.$t("modal.edit_request")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.requestUpdateData.name,expression:"requestUpdateData.name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEditReq",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.requestUpdateData.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveRequest.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.requestUpdateData,"name",t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlEditReq"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.saveRequest.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1119729043)}):e._e()}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{ButtonPrimary:n(172).default,ButtonSecondary:n(106).default,SmartModal:n(112).default})},1877:function(e,t,n){"use strict";n.r(t);var o=n(54),i=n(20),l=(n(62),n(5),n(133),n(60),n(145),n(501),n(11),n(78),n(72),n(902),n(296),n(114),n(3)),r=n(22),a=n(24),c=n(124),s={};s.props={show:{key:"show",required:!0,type:Boolean}},s.setup=function(e,t){var n=t.emit,s=Object(a.b)(),d=Object(a.j)(),u=Object(a.d)(),p=Object(a.g)(c.o,[]),f=Object(a.g)(r.c,null),h=Object(l.o)(),m=Object(l.o)(),v=Object(l.a)((function(){return JSON.stringify(p.value,null,2)})),y=function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.value){e.next=3;break}return d.error(u("profile.no_permission").toString()),e.abrupt("return");case 3:return e.prev=3,e.next=6,s.$post("https://api.github.com/gists",{files:{"hoppscotch-collections.json":{content:v.value}}},{headers:{Authorization:"token ".concat(f.value.accessToken),Accept:"application/vnd.github.v3+json"}});case 6:t=e.sent,d.success(u("export.gist_created").toString()),window.open(t.html_url),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),d.error(u("error.something_went_wrong").toString()),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),g=function(){d.success(u("state.file_imported").toString())},b=function(){d.error(u("import.failed").toString())},x=function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){var t,n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=prompt(u("import.gist_url").toString())){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,s.$get("https://api.github.com/gists/".concat(t.split("/").pop()),{headers:{Accept:"application/vnd.github.v3+json"}});case 6:n=e.sent,o=n.files,i=JSON.parse(Object.values(o)[0].content),Object(c.B)(i),g(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),b(),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();return{t:u,currentUser:f,options:h,inputChooseFileToImportFrom:m,createCollectionGist:y,readCollectionGist:x,hideModal:function(){n("hide-modal")},openDialogChooseFileToImportFrom:function(){m.value&&m.value.click()},importFromJSON:function(){if(m.value)if(m.value.files&&0!==m.value.files.length){var e=new FileReader;e.onload=function(e){var t=e.target.result;if(t){var n=JSON.parse(t);if(n[0]){var i=Object.keys(n[0]),l=Object(o.a)(i,3);l[0],l[1],l[2];Object(c.e)(n),g()}else b()}else d.show(u("action.choose_file").toString())},e.readAsText(m.value.files[0]),m.value.value=""}else d.show(u("action.choose_file").toString())},exportJSON:function(){var e=v.value,t=new Blob([e],{type:"application/json"}),n=document.createElement("a"),o=URL.createObjectURL(t);n.href=o,n.download="".concat(o.split("/").pop().split("#")[0].split("?")[0],".json"),document.body.appendChild(n),n.click(),d.success(u("state.download_started").toString()),setTimeout((function(){document.body.removeChild(n),URL.revokeObjectURL(o)}),1e3)}}};var d=s,u=n(23),p=Object(u.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.t("modal.collections"),"max-width":"sm:max-w-md"},on:{close:e.hideModal},scopedSlots:e._u([{key:"actions",fn:function(){return[n("span",[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,3953414183)},[e._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[n("SmartItem",{attrs:{icon:"assignment_returned",label:e.t("import.from_gist")},nativeOn:{click:function(t){return function(){e.readCollectionGist(),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.currentUser?"github.com"!==e.currentUser.provider?""+e.t("export.require_github"):void 0:""+e.t("export.require_github")}},[n("SmartItem",{attrs:{disabled:!e.currentUser||"github.com"!==e.currentUser.provider,icon:"assignment_turned_in",label:e.t("export.create_secret_gist")},nativeOn:{click:function(t){return function(){e.createCollectionGist(),e.options.tippy().hide()}.apply(null,arguments)}}})],1)],1)])],1)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2 space-y-2"},[n("SmartItem",{attrs:{svg:"folder-plus",label:e.t("import.from_json")},nativeOn:{click:function(t){return e.openDialogChooseFileToImportFrom.apply(null,arguments)}}}),e._v(" "),n("input",{ref:"inputChooseFileToImportFrom",staticClass:"input",attrs:{type:"file",accept:"application/json"},on:{change:e.importFromJSON}}),e._v(" "),n("hr"),e._v(" "),n("SmartItem",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.download_file"),svg:"download",label:e.t("export.as_json")},nativeOn:{click:function(t){return e.exportJSON.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3839700765)}):e._e()}),[],!1,null,null,null);t.default=p.exports;installComponents(p,{ButtonSecondary:n(106).default,SmartItem:n(123).default,SmartModal:n(112).default})},1917:function(e,t,n){"use strict";n.r(t);n(92),n(5),n(98),n(78),n(60),n(10),n(97),n(99),n(72),n(11),n(12),n(15),n(8),n(14);var o=n(34),i=(n(117),n(125),n(56),n(13),n(3)),l=n(497),r=n.n(l),a=n(233),c=n.n(a),s=n(24),d=n(124);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){a=!0,l=e},f:function(){try{r||null==n.return||n.return()}finally{if(a)throw l}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m=Object(i.c)({props:{savingMode:{type:Boolean,default:!1},doc:{type:Boolean,default:!1},picked:{type:Object,default:null},showCollActions:{type:Boolean,default:!0}},setup:function(){return{collections:Object(s.g)(d.o,[])}},data:function(){return{showModalAdd:!1,showModalEdit:!1,showModalImportExport:!1,showModalAddFolder:!1,showModalEditFolder:!1,showModalEditRequest:!1,editingCollection:void 0,editingCollectionIndex:void 0,editingFolder:void 0,editingFolderName:void 0,editingFolderIndex:void 0,editingFolderPath:void 0,editingRequest:void 0,editingRequestIndex:void 0,filterText:""}},computed:{filteredCollections:function(){var e=c()(this.collections);if(!this.filterText)return e;var t,n=this.filterText.toLowerCase(),o=[],i=f(e);try{for(i.s();!(t=i.n()).done;){var l,r=t.value,a=[],s=[],d=f(r.requests);try{for(d.s();!(l=d.n()).done;){var u=l.value;u.name.toLowerCase().includes(n)&&a.push(u)}}catch(e){d.e(e)}finally{d.f()}var p,h=f(r.folders);try{for(h.s();!(p=h.n()).done;){var m,v=p.value,y=[],g=f(v.requests);try{for(g.s();!(m=g.n()).done;){var b=m.value;b.name.toLowerCase().includes(n)&&y.push(b)}}catch(e){g.e(e)}finally{g.f()}if(y.length>0){var x=Object.assign({},v);x.requests=y,s.push(x)}}}catch(e){h.e(e)}finally{h.f()}if(a.length+s.length>0){var O=Object.assign({},r);O.requests=a,O.folders=s,o.push(O)}}}catch(e){i.e(e)}finally{i.f()}return o}},methods:{displayModalAdd:function(e){this.showModalAdd=e},displayModalEdit:function(e){this.showModalEdit=e,e||this.resetSelectedData()},displayModalImportExport:function(e){this.showModalImportExport=e},displayModalAddFolder:function(e){this.showModalAddFolder=e,e||this.resetSelectedData()},displayModalEditFolder:function(e){this.showModalEditFolder=e,e||this.resetSelectedData()},displayModalEditRequest:function(e){this.showModalEditRequest=e,e||this.resetSelectedData()},editCollection:function(e,t){this.$data.editingCollection=e,this.$data.editingCollectionIndex=t,this.displayModalEdit(!0)},onAddFolder:function(e){var t=e.name,n=e.path;Object(d.b)(t,n),this.displayModalAddFolder(!1)},addFolder:function(e){var t=e.path;this.$data.editingFolderPath=t,this.displayModalAddFolder(!0)},editFolder:function(e){var t=e.folder,n=e.folderPath;this.editingFolder=t,this.editingFolderPath=n,this.displayModalEditFolder(!0)},editRequest:function(e){var t=e.collectionIndex,n=e.folderIndex,o=e.folderName,i=e.request,l=e.requestIndex,r=e.folderPath;this.$data.editingFolderPath=r,this.$data.editingCollectionIndex=t,this.$data.editingFolderIndex=n,this.$data.editingFolderName=o,this.$data.editingRequest=i,this.$data.editingRequestIndex=l,this.displayModalEditRequest(!0)},resetSelectedData:function(){this.$data.editingCollection=void 0,this.$data.editingCollectionIndex=void 0,this.$data.editingFolder=void 0,this.$data.editingFolderIndex=void 0,this.$data.editingRequest=void 0,this.$data.editingRequestIndex=void 0},duplicateRequest:function(e){var t=e.folderPath,n=e.request;Object(d.z)(t,p(p({},r()(n)),{},{name:"".concat(n.name," - ").concat(this.$t("action.duplicate"))}))}}}),v=n(23),y=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"rounded border border-divider":e.savingMode}},[n("div",{staticClass:"sticky top-0 z-10 flex flex-col border-b divide-dividerLight divide-y border-dividerLight",class:{"bg-primary":!e.savingMode}},[e.showCollActions?n("input",{directives:[{name:"model",rawName:"v-model",value:e.filterText,expression:"filterText"}],staticClass:"flex px-4 py-2 bg-transparent",attrs:{type:"search",autocomplete:"off",placeholder:e.$t("action.search")},domProps:{value:e.filterText},on:{input:function(t){t.target.composing||(e.filterText=t.target.value)}}}):e._e(),e._v(" "),n("div",{staticClass:"flex justify-between flex-1"},[n("ButtonSecondary",{staticClass:"!rounded-none",attrs:{svg:"plus",label:e.$t("action.new")},nativeOn:{click:function(t){return e.displayModalAdd(!0)}}}),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/collections",blank:"",title:e.$t("app.wiki"),svg:"help-circle"}}),e._v(" "),e.showCollActions?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("modal.import_export"),svg:"archive"},nativeOn:{click:function(t){return e.displayModalImportExport(!0)}}}):e._e()],1)],1)]),e._v(" "),n("div",{staticClass:"flex-col"},e._l(e.filteredCollections,(function(t,o){return n("CollectionsGraphqlCollection",{key:"collection-"+o,attrs:{picked:e.picked,name:t.name,"collection-index":o,collection:t,doc:e.doc,"is-filtered":e.filterText.length>0,"saving-mode":e.savingMode},on:{"edit-collection":function(n){return e.editCollection(t,o)},"add-folder":function(t){return e.addFolder(t)},"edit-folder":function(t){return e.editFolder(t)},"edit-request":function(t){return e.editRequest(t)},"duplicate-request":function(t){return e.duplicateRequest(t)},"select-collection":function(n){return e.$emit("use-collection",t)},select:function(t){return e.$emit("select",t)}}})})),1),e._v(" "),0===e.collections.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:e.$t("empty.collections")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v("\n      "+e._s(e.$t("empty.collections"))+"\n    ")]),e._v(" "),n("ButtonSecondary",{attrs:{label:e.$t("add.new"),filled:""},nativeOn:{click:function(t){return e.displayModalAdd(!0)}}})],1):e._e(),e._v(" "),0===e.filteredCollections.length&&0!==e.collections.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("i",{staticClass:"pb-2 opacity-75 material-icons"},[e._v("manage_search")]),e._v(" "),n("span",{staticClass:"my-2 text-center"},[e._v("\n      "+e._s(e.$t("state.nothing_found"))+' "'+e._s(e.filterText)+'"\n    ')])]):e._e(),e._v(" "),n("CollectionsGraphqlAdd",{attrs:{show:e.showModalAdd},on:{"hide-modal":function(t){return e.displayModalAdd(!1)}}}),e._v(" "),n("CollectionsGraphqlEdit",{attrs:{show:e.showModalEdit,"editing-collection":e.editingCollection,"editing-collection-index":e.editingCollectionIndex,"editing-collection-name":e.editingCollection?e.editingCollection.name:""},on:{"hide-modal":function(t){return e.displayModalEdit(!1)}}}),e._v(" "),n("CollectionsGraphqlAddFolder",{attrs:{show:e.showModalAddFolder,"folder-path":e.editingFolderPath},on:{"add-folder":function(t){return e.onAddFolder(t)},"hide-modal":function(t){return e.displayModalAddFolder(!1)}}}),e._v(" "),n("CollectionsGraphqlEditFolder",{attrs:{show:e.showModalEditFolder,"collection-index":e.editingCollectionIndex,folder:e.editingFolder,"folder-index":e.editingFolderIndex,"folder-path":e.editingFolderPath,"editing-folder-name":e.editingFolder?e.editingFolder.name:""},on:{"hide-modal":function(t){return e.displayModalEditFolder(!1)}}}),e._v(" "),n("CollectionsGraphqlEditRequest",{attrs:{show:e.showModalEditRequest,"folder-path":e.editingFolderPath,request:e.editingRequest,"request-index":e.editingRequestIndex,"editing-request-name":e.editingRequest?e.editingRequest.name:""},on:{"hide-modal":function(t){return e.displayModalEditRequest(!1)}}}),e._v(" "),n("CollectionsGraphqlImportExport",{attrs:{show:e.showModalImportExport},on:{"hide-modal":function(t){return e.displayModalImportExport(!1)}}})],1)}),[],!1,null,null,null);t.default=y.exports;installComponents(y,{ButtonSecondary:n(106).default,CollectionsGraphqlCollection:n(1871).default,CollectionsGraphqlAdd:n(1872).default,CollectionsGraphqlEdit:n(1873).default,CollectionsGraphqlAddFolder:n(1874).default,CollectionsGraphqlEditFolder:n(1875).default,CollectionsGraphqlEditRequest:n(1876).default,CollectionsGraphqlImportExport:n(1877).default})}}]);