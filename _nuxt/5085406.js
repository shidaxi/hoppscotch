(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1829:function(t,e,n){"use strict";n.r(e);n(56);var l=n(3),a=Object(l.c)({props:{show:Boolean},data:function(){return{name:null}},methods:{addNewCollection:function(){this.name?(this.$emit("submit",this.name),this.hideModal()):this.$toast.error(this.$t("collection.invalid_name"))},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),o=n(23),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("SmartModal",{attrs:{dialog:"",title:t.$t("collection.new")},on:{close:t.hideModal},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelAdd",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewCollection.apply(null,arguments)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"selectLabelAdd"}},[t._v("\n        "+t._s(t.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:t.$t("action.save")},nativeOn:{click:function(e){return t.addNewCollection.apply(null,arguments)}}}),t._v(" "),n("ButtonSecondary",{attrs:{label:t.$t("action.cancel")},nativeOn:{click:function(e){return t.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,4224854759)}):t._e()}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{ButtonPrimary:n(172).default,ButtonSecondary:n(106).default,SmartModal:n(112).default})}}]);