(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1833:function(e,t,a){"use strict";a.r(t);a(56);var n=a(3),l=Object(n.c)({props:{show:Boolean,editingRequestName:{type:String,default:null}},data:function(){return{requestUpdateData:{name:null}}},watch:{editingRequestName:function(e){this.requestUpdateData.name=e}},methods:{saveRequest:function(){this.requestUpdateData.name?(this.$emit("submit",this.requestUpdateData),this.hideModal()):this.$toast.error(this.$t("request.invalid_name"))},hideModal:function(){this.requestUpdateData={name:null},this.$emit("hide-modal")}}}),o=a(23),s=Object(o.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("SmartModal",{attrs:{dialog:"",title:e.$t("modal.edit_request")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[a("div",{staticClass:"flex flex-col px-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.requestUpdateData.name,expression:"requestUpdateData.name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelEditReq",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.requestUpdateData.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveRequest.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.requestUpdateData,"name",t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"selectLabelEditReq"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[a("span",[a("ButtonPrimary",{attrs:{label:e.$t("action.save")},nativeOn:{click:function(t){return e.saveRequest.apply(null,arguments)}}}),e._v(" "),a("ButtonSecondary",{attrs:{label:e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1130573779)}):e._e()}),[],!1,null,null,null);t.default=s.exports;installComponents(s,{ButtonPrimary:a(172).default,ButtonSecondary:a(106).default,SmartModal:a(112).default})}}]);