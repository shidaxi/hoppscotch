(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1967:function(e,t,a){"use strict";a.r(t);var r=a(34),l=(a(9),a(3)),n=a(305),o=a.n(n),i=a(61),c=a(1),s=a(71),d=a(46),u=a(48),p=a(8),v=a(192),b=a(1162),m=a.n(b),y=a(870),g=a(1826),O=a(92),f=a(17),h=a(919),k=a(908);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var w={};w.setup=(e,t)=>{var a=Object(f.d)(),n=Object(f.j)(),b=Object(l.o)(0),m=Object(l.o)(!1),w=Object(l.o)(""),x=Object(l.o)(null),E=Object(l.o)(null);Object(y.a)(x,w,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(a("state.bulk_mode_placeholder"))},linter:g.a,completer:null,environmentHighlights:!0});var P=Object(f.a)(Object(O.D)(),"body"),_=Object(l.a)({get:()=>Object(i.parseRawKeyValueEntries)(P.value),set(e){P.value=Object(i.rawKeyValueEntriesToString)(e)}}),S=Object(l.o)([{id:b.value++,key:"",value:"",active:!0}]);Object(l.y)(S,(e=>{e.length>0&&""!==e[e.length-1].key&&S.value.push({id:b.value++,key:"",value:"",active:!0})})),Object(l.y)(_,(e=>{var t=Object(c.pipe)(S.value,s.filterMap(Object(c.flow)(d.fromPredicate((e=>""!==e.key)),d.map(Object(h.d)("id"))))),a=Object(c.pipe)(Object(i.parseRawKeyValueEntriesE)(w.value),p.map(Object(c.flow)(u.filter((e=>""!==e.key)),u.toArray)));o()(e,t)||(S.value=Object(c.pipe)(e,s.map((e=>function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({id:b.value++},e))))),o()(e,a)||(w.value=Object(i.rawKeyValueEntriesToString)(e))}),{immediate:!0}),Object(l.y)(S,(e=>{var t=Object(c.pipe)(e,s.filterMap(Object(c.flow)(d.fromPredicate((e=>""!==e.key)),d.map(Object(h.d)("id")))));o()(_.value,t)||(_.value=t)})),Object(l.y)(w,(e=>{var t=Object(c.pipe)(Object(i.parseRawKeyValueEntriesE)(e),p.map(Object(c.flow)(u.filter((e=>""!==e.key)),u.toArray)),p.getOrElse((()=>[])));o()(_.value,t)||(_.value=t)}));return{t:a,bulkMode:m,bulkEditor:x,workingUrlEncodedParams:S,addUrlEncodedParam:()=>{S.value.push({id:b.value++,key:"",value:"",active:!0})},updateUrlEncodedParam:(e,t)=>{S.value=S.value.map(((a,r)=>r===e?t:a))},deleteUrlEncodedParam:e=>{var t=Object(v.cloneDeep)(S.value);t.length>0&&e===t.length-1||(E.value&&(E.value.goAway(0),E.value=null),E.value=n.success("".concat(a("state.deleted")),{action:[{text:"".concat(a("action.undo")),onClick:(e,a)=>{S.value=t,a.goAway(0),E.value=null}}],onComplete:()=>{E.value=null}})),S.value=Object(c.pipe)(S.value,s.deleteAt(e),d.getOrElseW((()=>Object(k.a)("Working URL Encoded Params Deletion Out of Bounds"))))},clearContent:()=>{S.value=[{id:b.value++,key:"",value:"",active:!0}],w.value=""}}},w.components=Object.assign({draggable:m.a},w.components);var x=w,E=a(16),P=Object(E.a)(x,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col flex-1"},[a("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[a("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.body"))+"\n    ")]),e._v(" "),a("div",{staticClass:"flex"},[a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.bulkMode},attrs:{title:e.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(t){e.bulkMode=!e.bulkMode}}}),e._v(" "),a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("add.new"),svg:"plus",disabled:e.bulkMode},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1)]),e._v(" "),e.bulkMode?a("div",{ref:"bulkEditor",staticClass:"flex flex-col flex-1"}):a("div",[a("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingUrlEncodedParams,callback:function(t){e.workingUrlEncodedParams=t},expression:"workingUrlEncodedParams"}},e._l(e.workingUrlEncodedParams,(function(t,r){var l;return a("div",{key:"param-"+t.id+"-"+r,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[a("span",[a("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":r!==(null===(l=e.workingUrlEncodedParams)||void 0===l?void 0:l.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),a("SmartEnvInput",{attrs:{placeholder:""+e.t("count.parameter",{count:r+1})},on:{change:function(a){return e.updateUrlEncodedParam(r,{id:t.id,key:a,value:t.value,active:t.active})}},model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"param.key"}}),e._v(" "),a("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:r+1})},on:{change:function(a){return e.updateUrlEncodedParam(r,{id:t.id,key:t.key,value:a,active:t.active})}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"param.value"}}),e._v(" "),a("span",[a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.t("action.turn_off"):e.t("action.turn_on"):e.t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(a){return e.updateUrlEncodedParam(r,{id:t.id,key:t.key,value:t.value,active:!t.active})}}})],1),e._v(" "),a("span",[a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteUrlEncodedParam(r)}}})],1)],1)})),0),e._v(" "),0===e.workingUrlEncodedParams.length?a("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[a("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/add_category.svg",loading:"lazy",alt:""+e.t("empty.body")}}),e._v(" "),a("span",{staticClass:"pb-4 text-center"},[e._v("\n        "+e._s(e.t("empty.body"))+"\n      ")]),e._v(" "),a("ButtonSecondary",{staticClass:"mb-4",attrs:{filled:"",label:""+e.t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=P.exports;installComponents(P,{ButtonSecondary:a(86).default,SmartEnvInput:a(871).default})}}]);