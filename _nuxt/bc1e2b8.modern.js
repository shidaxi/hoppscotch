(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{2161:function(e,t,a){"use strict";a.r(t);var r=a(34),l=(a(9),a(3)),i=a(1),n=a(46),o=a(71),c=a(48),s=a(8),u=a(61),p=a(305),v=a.n(p),d=a(432),m=a.n(d),b=a(1162),y=a.n(b),g=a(1826),f=a(870),O=a(17),h=a(92),k=a(908),j=a(919);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var x={};x.setup=(e,t)=>{var a=Object(O.d)(),p=Object(O.j)(),d=Object(l.o)(0),b=Object(l.o)(!1),y=Object(l.o)(""),x=Object(l.o)(null),P=Object(l.o)(null);Object(f.a)(x,y,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(a("state.bulk_mode_placeholder"))},linter:g.a,completer:null,environmentHighlights:!0});var _=Object(O.h)(h.n,[],h.w),S=Object(l.o)([{id:d.value++,key:"",value:"",active:!0}]);Object(l.y)(S,(e=>{e.length>0&&""!==e[e.length-1].key&&S.value.push({id:d.value++,key:"",value:"",active:!0})})),Object(l.y)(_,(e=>{var t=Object(i.pipe)(S.value,o.filterMap(Object(i.flow)(n.fromPredicate((e=>""!==e.key)),n.map(Object(j.d)("id"))))),a=Object(i.pipe)(Object(u.parseRawKeyValueEntriesE)(y.value),s.map(Object(i.flow)(c.filter((e=>""!==e.key)),c.toArray)),s.getOrElse((()=>[])));v()(e,t)||(S.value=Object(i.pipe)(e,o.map((e=>function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({id:d.value++},e))))),v()(e,a)||(y.value=Object(u.rawKeyValueEntriesToString)(e))}),{immediate:!0}),Object(l.y)(S,(e=>{var t=Object(i.pipe)(e,o.filterMap(Object(i.flow)(n.fromPredicate((e=>""!==e.key)),n.map(Object(j.d)("id")))));v()(_.value,t)||(_.value=m()(t))})),Object(l.y)(y,(e=>{var t=Object(i.pipe)(Object(u.parseRawKeyValueEntriesE)(e),s.map(Object(i.flow)(c.filter((e=>""!==e.key)),c.toArray)),s.getOrElse((()=>[])));v()(_.value,t)||(_.value=t)}));return{t:a,bulkMode:b,bulkEditor:x,workingParams:S,addParam:()=>{S.value.push({id:d.value++,key:"",value:"",active:!0})},updateParam:(e,t)=>{S.value=S.value.map(((a,r)=>r===e?t:a))},deleteParam:e=>{var t=m()(S.value);t.length>0&&e===t.length-1||(P.value&&(P.value.goAway(0),P.value=null),P.value=p.success("".concat(a("state.deleted")),{action:[{text:"".concat(a("action.undo")),onClick:(e,a)=>{S.value=t,a.goAway(0),P.value=null}}],onComplete:()=>{P.value=null}})),S.value=Object(i.pipe)(S.value,o.deleteAt(e),n.getOrElseW((()=>Object(k.a)("Working Params Deletion Out of Bounds"))))},clearContent:()=>{S.value=[{id:d.value++,key:"",value:"",active:!0}],y.value=""}}},x.components=Object.assign({draggable:y.a},x.components);var P=x,_=a(16),S=Object(_.a)(P,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col flex-1"},[a("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileSecondaryStickyFold sm:top-upperSecondaryStickyFold"},[a("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.parameter_list"))+"\n    ")]),e._v(" "),a("div",{staticClass:"flex"},[a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/parameters",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.bulkMode},attrs:{title:e.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(t){e.bulkMode=!e.bulkMode}}}),e._v(" "),a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("add.new"),svg:"plus",disabled:e.bulkMode},nativeOn:{click:function(t){return e.addParam.apply(null,arguments)}}})],1)]),e._v(" "),e.bulkMode?a("div",{ref:"bulkEditor",staticClass:"flex flex-col flex-1"}):a("div",[a("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingParams,callback:function(t){e.workingParams=t},expression:"workingParams"}},e._l(e.workingParams,(function(t,r){var l;return a("div",{key:"param-"+t.id+"-"+r,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[a("span",[a("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":r!==(null===(l=e.workingParams)||void 0===l?void 0:l.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),a("SmartEnvInput",{attrs:{placeholder:""+e.t("count.parameter",{count:r+1})},on:{change:function(a){return e.updateParam(r,{id:t.id,key:a,value:t.value,active:t.active})}},model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"param.key"}}),e._v(" "),a("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:r+1})},on:{change:function(a){return e.updateParam(r,{id:t.id,key:t.key,value:a,active:t.active})}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"param.value"}}),e._v(" "),a("span",[a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.t("action.turn_off"):e.t("action.turn_on"):e.t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(a){e.updateParam(r,{id:t.id,key:t.key,value:t.value,active:!!t.hasOwnProperty("active")&&!t.active})}}})],1),e._v(" "),a("span",[a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteParam(r)}}})],1)],1)})),0),e._v(" "),0===e.workingParams.length?a("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[a("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/add_files.svg",loading:"lazy",alt:""+e.t("empty.parameters")}}),e._v(" "),a("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.t("empty.parameters")))]),e._v(" "),a("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.t("add.new"),svg:"plus",filled:""},nativeOn:{click:function(t){return e.addParam.apply(null,arguments)}}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=S.exports;installComponents(S,{ButtonSecondary:a(86).default,SmartEnvInput:a(871).default})}}]);