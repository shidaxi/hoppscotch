(window.webpackJsonp=window.webpackJsonp||[]).push([[54,56,57],{1971:function(t,e,n){"use strict";n.r(e);n(243);var o=n(3),i=n(84),r=Object(o.c)({props:{environment:{type:Object,default:()=>{}},environmentIndex:{type:[Number,String],default:null}},setup:()=>({tippyActions:Object(o.o)(null),options:Object(o.o)(null),edit:Object(o.o)(null),duplicate:Object(o.o)(null),deleteAction:Object(o.o)(null)}),data:()=>({confirmRemove:!1}),methods:{removeEnvironment(){"Global"!==this.environmentIndex&&Object(i.e)(this.environmentIndex),this.$toast.success("".concat(this.$t("state.deleted")))},duplicateEnvironment(){"Global"===this.environmentIndex?(Object(i.d)("Global - ".concat(this.$t("action.duplicate"))),Object(i.q)(i.h.value.environments.length-1,Object(i.l)().reduce(((t,e)=>(t.push({key:e.key,value:e.value}),t)),[]))):Object(i.f)(this.environmentIndex)}}}),a=n(16),l=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-stretch group",on:{contextmenu:function(e){e.preventDefault(),t.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(e){return t.$emit("edit-environment")}}},[n("SmartIcon",{staticClass:"svg-icons",attrs:{name:"layers"}})],1),t._v(" "),n("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(e){return t.$emit("edit-environment")}}},[n("span",{staticClass:"truncate"},[t._v("\n      "+t._s(t.environment.name)+"\n    ")])]),t._v(" "),n("span",[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return t.tippyActions.focus()}},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[t._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"e",void 0,e.key,void 0)?null:t.edit.$el.click()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"d",void 0,e.key,void 0)?null:t.duplicate.$el.click()},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"]))return null;"Global"!==t.environmentIndex&&t.deleteAction.$el.click()},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0))return null;t.options.tippy().hide()}]}},[n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:""+t.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(e){return function(){t.$emit("edit-environment"),t.options.tippy().hide()}.apply(null,arguments)}}}),t._v(" "),n("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:""+t.$t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(e){return function(){t.duplicateEnvironment(),t.options.tippy().hide()}.apply(null,arguments)}}}),t._v(" "),"Global"!==t.environmentIndex?n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:""+t.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(e){return function(){t.confirmRemove=!0,t.options.tippy().hide()}.apply(null,arguments)}}}):t._e()],1)])],1),t._v(" "),n("SmartConfirmModal",{attrs:{show:t.confirmRemove,title:""+t.$t("confirm.remove_environment")},on:{"hide-modal":function(e){t.confirmRemove=!1},resolve:t.removeEnvironment}})],1)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{SmartIcon:n(90).default,ButtonSecondary:n(86).default,SmartItem:n(100).default,SmartConfirmModal:n(304).default})},1972:function(t,e,n){"use strict";n.r(e);var o=n(13),i=(n(109),n(63),n(121),n(37),n(42),n(831),n(241),n(3)),r=n(15),a=n(17),l=n(84),s={};s.props={show:{key:"show",required:!0,type:Boolean}},s.setup=(t,e)=>{var n=e.emit,s=Object(a.b)(),c=Object(a.j)(),p=Object(a.d)(),d=Object(a.g)(l.g,[]),u=Object(a.g)(r.c,null),v=Object(i.o)(),m=Object(i.o)(),f=Object(i.a)((()=>JSON.stringify(d.value,null,2))),h=function(){var t=Object(o.a)((function*(){if(u.value)try{var t=yield s.$post("https://api.github.com/gists",{files:{"hoppscotch-environments.json":{content:f.value}}},{headers:{Authorization:"token ".concat(u.value.accessToken),Accept:"application/vnd.github.v3+json"}});c.success(p("export.gist_created").toString()),window.open(t.html_url)}catch(t){c.error(p("error.something_went_wrong").toString()),console.error(t)}else c.error(p("profile.no_permission").toString())}));return function(){return t.apply(this,arguments)}}(),y=()=>{c.success(p("state.file_imported").toString())},b=()=>{c.error(p("import.failed").toString())},x=function(){var t=Object(o.a)((function*(){var t=prompt(p("import.gist_url").toString());if(t)try{var{files:e}=yield s.$get("https://api.github.com/gists/".concat(t.split("/").pop()),{headers:{Accept:"application/vnd.github.v3+json"}}),n=JSON.parse(Object.values(e)[0].content);Object(l.n)(n),y()}catch(t){b(),console.error(t)}}));return function(){return t.apply(this,arguments)}}(),g=t=>{Object(l.c)(t),y()},_=t=>{var{name:e,values:n}=t,o={name:e,variables:[]};n.forEach((t=>{var{key:e,value:n}=t;return o.variables.push({key:e,value:n})})),g([o])};return{t:p,currentUser:u,options:v,inputChooseFileToImportFrom:m,createEnvironmentGist:h,readEnvironmentGist:x,hideModal:()=>{n("hide-modal")},openDialogChooseFileToImportFrom:()=>{m.value&&m.value.click()},importFromJSON:()=>{if(m.value)if(m.value.files&&0!==m.value.files.length){var t=new FileReader;t.onload=t=>{var{target:e}=t,n=e.result;if(n){var o=JSON.parse(n);if("environment"===o._postman_variable_scope||"globals"===o._postman_variable_scope)_(o);else if(o[0]){var[i,r]=Object.keys(o[0]);g(o)}else b()}else c.show(p("action.choose_file").toString())},t.readAsText(m.value.files[0]),m.value.value=""}else c.show(p("action.choose_file").toString())},exportJSON:()=>{var t=f.value,e=new Blob([t],{type:"application/json"}),n=document.createElement("a"),o=URL.createObjectURL(e);n.href=o,n.download="".concat(o.split("/").pop().split("#")[0].split("?")[0],".json"),document.body.appendChild(n),n.click(),c.success(p("state.download_started").toString()),setTimeout((()=>{document.body.removeChild(n),URL.revokeObjectURL(o)}),1e3)}}};var c=s,p=n(16),d=Object(p.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("SmartModal",{attrs:{dialog:"",title:""+t.t("environment.title"),"max-width":"sm:max-w-md"},on:{close:t.hideModal},scopedSlots:t._u([{key:"actions",fn:function(){return[n("span",[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,3953414183)},[t._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[n("SmartItem",{attrs:{icon:"assignment_returned",label:t.t("import.from_gist")},nativeOn:{click:function(e){return function(){t.readEnvironmentGist(),t.options.tippy().hide()}.apply(null,arguments)}}}),t._v(" "),n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.currentUser?"github.com"!==t.currentUser.provider?""+t.t("export.require_github"):void 0:""+t.t("export.require_github")}},[n("SmartItem",{attrs:{disabled:!t.currentUser||"github.com"!==t.currentUser.provider,icon:"assignment_turned_in",label:t.t("export.create_secret_gist")},nativeOn:{click:function(e){return function(){t.createEnvironmentGist(),t.options.tippy().hide()}.apply(null,arguments)}}})],1)],1)])],1)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2 space-y-2"},[n("SmartItem",{attrs:{svg:"folder-plus",label:t.t("import.from_json")},nativeOn:{click:function(e){return t.openDialogChooseFileToImportFrom.apply(null,arguments)}}}),t._v(" "),n("input",{ref:"inputChooseFileToImportFrom",staticClass:"input",attrs:{type:"file",accept:"application/json"},on:{change:t.importFromJSON}}),t._v(" "),n("hr"),t._v(" "),n("SmartItem",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("action.download_file"),svg:"download",label:t.t("export.as_json")},nativeOn:{click:function(e){return t.exportJSON.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,2754836477)}):t._e()}),[],!1,null,null,null);e.default=d.exports;installComponents(d,{ButtonSecondary:n(86).default,SmartItem:n(100).default,SmartModal:n(91).default})},2165:function(t,e,n){"use strict";n.r(e);var o=n(3),i=n(17),r=n(84),a=Object(o.c)({setup(){var t=Object(i.g)(r.m,[]),e=Object(o.a)((()=>({name:"Global",variables:t.value})));return{environments:Object(i.g)(r.g,[]),globalEnvironment:e,selectedEnvironmentIndex:Object(i.h)(r.o,-1,r.p)}},data:()=>({showModalImportExport:!1,showModalDetails:!1,action:"edit",editingEnvironmentIndex:void 0}),methods:{displayModalAdd(t){this.action="new",this.showModalDetails=t},displayModalEdit(t){this.action="edit",this.showModalDetails=t,t||this.resetSelectedData()},displayModalImportExport(t){this.showModalImportExport=t},editEnvironment(t){this.$data.editingEnvironmentIndex=t,this.action="edit",this.displayModalEdit(!0)},resetSelectedData(){this.$data.editingEnvironmentIndex=void 0}}}),l=n(16),s=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sticky top-0 z-10 flex flex-col rounded-t bg-primary"},[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"flex-1 bg-transparent border-b border-dividerLight select-wrapper",attrs:{title:""+t.$t("environment.select")}},[-1!==t.selectedEnvironmentIndex?n("ButtonSecondary",{staticClass:"flex-1 !justify-start pr-8 rounded-none",attrs:{label:t.environments[t.selectedEnvironmentIndex].name}}):n("ButtonSecondary",{staticClass:"flex-1 !justify-start pr-8 rounded-none",attrs:{label:""+t.$t("environment.select")}})],1)]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[n("SmartItem",{attrs:{label:""+t.$t("environment.no_environment"),"info-icon":-1===t.selectedEnvironmentIndex?"done":"","active-info-icon":-1===t.selectedEnvironmentIndex},nativeOn:{click:function(e){return function(){t.selectedEnvironmentIndex=-1,t.$refs.options.tippy().hide()}.apply(null,arguments)}}}),t._v(" "),t.environments.length>0?n("hr"):t._e(),t._v(" "),t._l(t.environments,(function(e,o){return n("SmartItem",{key:"gen-"+o,attrs:{label:e.name,"info-icon":o===t.selectedEnvironmentIndex?"done":"","active-info-icon":o===t.selectedEnvironmentIndex},nativeOn:{click:function(e){return function(){t.selectedEnvironmentIndex=o,t.$refs.options.tippy().hide()}.apply(null,arguments)}}})}))],2)]),t._v(" "),n("div",{staticClass:"flex justify-between flex-1 border-b border-dividerLight"},[n("ButtonSecondary",{staticClass:"!rounded-none",attrs:{svg:"plus",label:""+t.$t("action.new")},nativeOn:{click:function(e){return t.displayModalAdd(!0)}}}),t._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/environments",blank:"",title:t.$t("app.wiki"),svg:"help-circle"}}),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{svg:"archive",title:t.$t("modal.import_export")},nativeOn:{click:function(e){return t.displayModalImportExport(!0)}}})],1)],1)],1),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("EnvironmentsEnvironment",{staticClass:"border-b border-dashed border-dividerLight",attrs:{"environment-index":"Global",environment:t.globalEnvironment},on:{"edit-environment":function(e){return t.editEnvironment("Global")}}}),t._v(" "),t._l(t.environments,(function(e,o){return n("EnvironmentsEnvironment",{key:"environment-"+o,attrs:{"environment-index":o,environment:e},on:{"edit-environment":function(e){return t.editEnvironment(o)}}})}))],2),t._v(" "),0===t.environments.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+t.$colorMode.value+"/blockchain.svg",loading:"lazy",alt:""+t.$t("empty.environments")}}),t._v(" "),n("span",{staticClass:"pb-4 text-center"},[t._v("\n      "+t._s(t.$t("empty.environments"))+"\n    ")]),t._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+t.$t("add.new"),filled:""},nativeOn:{click:function(e){return t.displayModalAdd(!0)}}})],1):t._e(),t._v(" "),n("EnvironmentsDetails",{attrs:{show:t.showModalDetails,action:t.action,"editing-environment-index":t.editingEnvironmentIndex},on:{"hide-modal":function(e){return t.displayModalEdit(!1)}}}),t._v(" "),n("EnvironmentsImportExport",{attrs:{show:t.showModalImportExport},on:{"hide-modal":function(e){return t.displayModalImportExport(!1)}}})],1)}),[],!1,null,null,null);e.default=s.exports;installComponents(s,{ButtonSecondary:n(86).default,SmartItem:n(100).default,EnvironmentsEnvironment:n(1971).default,EnvironmentsDetails:n(1911).default,EnvironmentsImportExport:n(1972).default})}}]);