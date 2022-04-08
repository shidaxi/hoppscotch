(window.webpackJsonp=window.webpackJsonp||[]).push([[13,84,85,86,87,112],{1872:function(t,e,s){"use strict";s.r(e);var a=s(3),n={};n.props={testResults:{type:Object,required:!0,expectResults:[]}},n.setup=(t,e)=>{var s=t;return{totalTests:Object(a.a)((()=>s.testResults.expectResults.length)),failedTests:Object(a.a)((()=>s.testResults.expectResults.filter((t=>"fail"===t.status)).length)),passedTests:Object(a.a)((()=>s.testResults.expectResults.filter((t=>"pass"===t.status)).length))}};var l=n,i=s(16),r=Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center p-2"},[s("SmartProgressRing",{staticClass:"text-red-500",attrs:{radius:16,stroke:4,progress:t.failedTests/t.totalTests*100}}),t._v(" "),s("div",{staticClass:"ml-2"},[t.failedTests?s("span",{staticClass:"text-red-500"},[t._v("\n      "+t._s(t.failedTests)+" failing,\n    ")]):t._e(),t._v(" "),t.passedTests?s("span",{staticClass:"text-green-500"},[t._v("\n      "+t._s(t.passedTests)+" successful,\n    ")]):t._e(),t._v(" "),s("span",[t._v(" out of "+t._s(t.totalTests)+" tests. ")])])],1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{SmartProgressRing:s(1882).default})},1882:function(t,e,s){"use strict";s.r(e);var a=s(3),n=Object(a.c)({props:{radius:{type:Number,default:12},progress:{type:Number,default:50},stroke:{type:Number,default:4}},data(){var t=this.radius-2*this.stroke;return{normalizedRadius:t,circumference:2*t*Math.PI}},computed:{strokeDashoffset(){return this.circumference-this.progress/100*this.circumference}}}),l=s(16),i=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{height:2*t.radius,width:2*t.radius}},[s("circle",{staticClass:"stroke-green-500",attrs:{"stroke-width":t.stroke,fill:"transparent",r:t.normalizedRadius,cx:t.radius,cy:t.radius}}),t._v(" "),s("circle",{style:{strokeDashoffset:t.strokeDashoffset},attrs:{"stroke-width":t.stroke,stroke:"currentColor",fill:"transparent",r:t.normalizedRadius,cx:t.radius,cy:t.radius,"stroke-dasharray":t.circumference+" "+t.circumference}})])}),[],!1,null,null,null);e.default=i.exports},1969:function(t,e,s){"use strict";s.r(e);var a=s(17),n={};n.props={env:{key:"env",required:!0,type:Object},status:{key:"status",required:!0,type:null},global:{key:"global",required:!1,type:Boolean,default:!1}},n.setup=(t,e)=>({t:Object(a.d)(),getIcon:t=>{switch(t){case"additions":return"add_circle";case"updations":return"check_circle";case"deletions":return"remove_circle"}},getStyle:t=>{switch(t){case"additions":return"text-green-500";case"updations":return"text-yellow-500";case"deletions":return"text-red-500"}},getTooltip:t=>{switch(t){case"additions":return"environment.added";case"updations":return"environment.updated";case"deletions":return"environment.deleted"}}});var l=n,i=s(16),r=Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center justify-between px-4 py-2"},[s("div",{staticClass:"flex items-center"},[s("i",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"mr-4 material-icons cursor-help",class:t.getStyle(t.status),attrs:{title:""+t.t(t.getTooltip(t.status))}},[t._v("\n      "+t._s(t.getIcon(t.status))+"\n    ")]),t._v(" "),s("span",{staticClass:"text-secondaryDark"},[t._v("\n      "+t._s(t.env.key)+"\n    ")]),t._v(" "),s("span",{staticClass:"text-secondaryDark"},[t._v("\n      "+t._s("   —   "+t.env.value)+"\n    ")]),t._v(" "),"updations"===t.status?s("span",{staticClass:"text-secondaryLight"},[t._v("\n      "+t._s("   ←   "+t.env.previousValue)+"\n    ")]):t._e()]),t._v(" "),t.global?s("span",{staticClass:"px-1 rounded bg-accentLight text-accentContrast text-tiny"},[t._v("\n    Global\n  ")]):t._e()])}),[],!1,null,null,null);e.default=r.exports},1970:function(t,e,s){"use strict";s.r(e);var a={};a.props={testResults:{type:Object,required:!0}},a.setup=(t,e)=>({});var n=a,l=s(16),i=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.testResults.description?s("span",{staticClass:"flex items-center px-4 py-2 font-bold text-secondaryDark"},[t._v("\n    "+t._s(t.testResults.description)+"\n  ")]):t._e(),t._v(" "),t.testResults.expectResults?s("div",{staticClass:"divide-y divide-dividerLight"},[t.testResults.expectResults.length?s("HttpTestResultReport",{attrs:{"test-results":t.testResults}}):t._e(),t._v(" "),t._l(t.testResults.expectResults,(function(e,a){return s("div",{key:"result-"+a,staticClass:"flex items-center px-4 py-2"},[s("i",{staticClass:"mr-4 material-icons",class:"pass"===e.status?"text-green-500":"text-red-500"},[t._v("\n        "+t._s("pass"===e.status?"check":"close")+"\n      ")]),t._v(" "),e.message?s("span",{staticClass:"text-secondaryDark"},[t._v("\n        "+t._s(e.message)+"\n      ")]):t._e(),t._v(" "),s("span",{staticClass:"text-secondaryLight"},[t._v("\n        "+t._s("   —   "+("pass"===e.status?t.$t("test.passed"):t.$t("test.failed")))+"\n      ")])])}))],2):t._e()])}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{HttpTestResultReport:s(1872).default})},2149:function(t,e,s){"use strict";s.r(e);s(37),s(42);var a=s(3),n=s(305),l=s.n(n),i=s(17),r=s(84),o=s(92),c={setup:(t,e)=>{var s=Object(i.d)(),n=Object(a.o)(!1),c=Object(i.g)(o.r,null),d=Object(a.a)((()=>!!c.value&&(c.value.envDiff.global.additions.length||c.value.envDiff.global.updations.length||c.value.envDiff.global.deletions.length||c.value.envDiff.selected.additions.length||c.value.envDiff.selected.updations.length||c.value.envDiff.selected.deletions.length))),u=Object(i.h)(r.o,-1,r.p),v=Object(i.g)(r.m,[]),p=Object(a.a)((()=>-1===u.value)),f=Object(a.a)((()=>{var t,e;return!!(null===(t=c.value)||void 0===t?void 0:t.envDiff.selected.additions)&&(null!==(e=c.value.envDiff.selected.additions.every((t=>-1!==v.value.findIndex((e=>l()(t,e))))))&&void 0!==e&&e)}));return{t:s,showModalDetails:n,displayModalAdd:t=>{n.value=t},testResults:c,getAdditionVars:()=>{var t,e,s;return(null===(s=null===(e=null===(t=null==c?void 0:c.value)||void 0===t?void 0:t.envDiff)||void 0===e?void 0:e.selected)||void 0===s?void 0:s.additions)?c.value.envDiff.selected.additions:[]},clearContent:()=>Object(o.z)(null),haveEnvVariables:d,noEnvSelected:p,globalHasAdditions:f,addEnvToGlobal:()=>{var t;(null===(t=c.value)||void 0===t?void 0:t.envDiff.selected.additions)&&Object(r.r)([...v.value,...c.value.envDiff.selected.additions])}}}},d=c,u=s(16),v=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.testResults&&(t.testResults.expectResults.length||t.testResults.tests.length||t.haveEnvVariables)?s("div",[s("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},[s("label",{staticClass:"font-semibold text-secondaryLight"},[t._v("\n        "+t._s(t.t("test.report"))+"\n      ")]),t._v(" "),s("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("action.clear"),svg:"trash-2"},nativeOn:{click:function(e){return t.clearContent()}}})],1),t._v(" "),s("div",{staticClass:"border-b divide-y-4 divide-dividerLight border-dividerLight"},[t.haveEnvVariables?s("div",{staticClass:"flex flex-col"},[s("details",{staticClass:"flex flex-col divide-y divide-dividerLight",attrs:{open:""}},[s("summary",{staticClass:"flex items-center justify-between flex-1 min-w-0 cursor-pointer transition focus:outline-none text-secondaryLight text-tiny group"},[s("span",{staticClass:"px-4 py-2 truncate transition group-hover:text-secondary capitalize-first"},[t._v("\n              "+t._s(t.t("environment.title"))+"\n            ")])]),t._v(" "),s("div",{staticClass:"divide-y divide-dividerLight"},[t.noEnvSelected&&!t.globalHasAdditions?s("div",{staticClass:"flex p-4 bg-error text-secondaryDark",attrs:{role:"alert"}},[s("i",{staticClass:"mr-4 material-icons"},[t._v(" warning ")]),t._v(" "),s("div",{staticClass:"flex flex-col"},[s("p",[t._v("\n                  "+t._s(t.t("environment.no_environment_description"))+"\n                ")]),t._v(" "),s("p",{staticClass:"flex mt-3 space-x-2"},[s("ButtonSecondary",{staticClass:"text-tiny !bg-primary",attrs:{label:t.t("environment.add_to_global"),filled:""},nativeOn:{click:function(e){return t.addEnvToGlobal()}}}),t._v(" "),s("ButtonSecondary",{staticClass:"text-tiny !bg-primary",attrs:{label:t.t("environment.create_new"),filled:""},nativeOn:{click:function(e){return t.displayModalAdd(!0)}}})],1)])]):t._e(),t._v(" "),t._l(t.testResults.envDiff.global.additions,(function(t,e){return s("HttpTestResultEnv",{key:"env-"+t.key+"-"+e,attrs:{env:t,status:"additions",global:""}})})),t._v(" "),t._l(t.testResults.envDiff.global.updations,(function(t,e){return s("HttpTestResultEnv",{key:"env-"+t.key+"-"+e,attrs:{env:t,status:"updations",global:""}})})),t._v(" "),t._l(t.testResults.envDiff.selected.additions,(function(t,e){return s("HttpTestResultEnv",{key:"env-"+t.key+"-"+e,attrs:{env:t,status:"additions"}})})),t._v(" "),t._l(t.testResults.envDiff.selected.updations,(function(t,e){return s("HttpTestResultEnv",{key:"env-"+t.key+"-"+e,attrs:{env:t,status:"updations"}})})),t._v(" "),t._l(t.testResults.envDiff.selected.deletions,(function(t,e){return s("HttpTestResultEnv",{key:"env-"+t.key+"-"+e,attrs:{env:t,status:"deletions"}})}))],2)])]):t._e(),t._v(" "),t.testResults.tests?s("div",{staticClass:"divide-y-4 divide-dividerLight"},t._l(t.testResults.tests,(function(t,e){return s("HttpTestResultEntry",{key:"result-"+e,attrs:{"test-results":t}})})),1):t._e(),t._v(" "),t.testResults.expectResults?s("div",{staticClass:"divide-y divide-dividerLight"},[t.testResults.expectResults.length?s("HttpTestResultReport",{attrs:{"test-results":t.testResults}}):t._e(),t._v(" "),t._l(t.testResults.expectResults,(function(e,a){return s("div",{key:"result-"+a,staticClass:"flex items-center px-4 py-2"},[s("i",{staticClass:"mr-4 material-icons",class:"pass"===e.status?"text-green-500":"text-red-500"},[t._v("\n            "+t._s("pass"===e.status?"check":"close")+"\n          ")]),t._v(" "),e.message?s("span",{staticClass:"text-secondaryDark"},[t._v("\n            "+t._s(e.message)+"\n          ")]):t._e(),t._v(" "),s("span",{staticClass:"text-secondaryLight"},[t._v("\n            "+t._s("   —   "+("pass"===e.status?t.t("test.passed"):t.t("test.failed")))+"\n          ")])])}))],2):t._e()])]):t.testResults&&t.testResults.scriptError?s("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[s("img",{staticClass:"inline-flex flex-col object-contain object-center w-32 h-32 my-4",attrs:{src:"/images/states/"+t.$colorMode.value+"/youre_lost.svg",loading:"lazy",alt:""+t.t("error.test_script_fail")}}),t._v(" "),s("span",{staticClass:"mb-2 font-semibold text-center"},[t._v("\n      "+t._s(t.t("error.test_script_fail"))+"\n    ")]),t._v(" "),s("span",{staticClass:"max-w-sm mb-6 text-center whitespace-normal text-secondaryLight"},[t._v("\n      "+t._s(t.t("helpers.test_script_fail"))+"\n    ")])]):s("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[s("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+t.$colorMode.value+"/validation.svg",loading:"lazy",alt:""+t.t("empty.tests")}}),t._v(" "),s("span",{staticClass:"pb-2 text-center"},[t._v("\n      "+t._s(t.t("empty.tests"))+"\n    ")]),t._v(" "),s("span",{staticClass:"pb-4 text-center"},[t._v("\n      "+t._s(t.t("helpers.tests"))+"\n    ")]),t._v(" "),s("ButtonSecondary",{staticClass:"my-4",attrs:{outline:"",label:""+t.t("action.learn_more"),to:"https://docs.hoppscotch.io/features/tests",blank:"",svg:"external-link",reverse:""}})],1),t._v(" "),s("EnvironmentsDetails",{attrs:{show:t.showModalDetails,action:"new","env-vars":t.getAdditionVars},on:{"hide-modal":function(e){return t.displayModalAdd(!1)}}})],1)}),[],!1,null,null,null);e.default=v.exports;installComponents(v,{ButtonSecondary:s(86).default,HttpTestResultEnv:s(1969).default,HttpTestResultEntry:s(1970).default,HttpTestResultReport:s(1872).default,EnvironmentsDetails:s(1911).default})}}]);