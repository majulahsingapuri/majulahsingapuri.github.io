"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[5127],{2507:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});n(7294);var t=n(8084),l=n(2566),s=n(8325),o=n(5893);function r(){const e=(0,t.ZP)();return(0,o.jsxs)(l.Z,{children:[(0,o.jsx)("h2",{children:"Global data"}),(0,o.jsx)(s.Z,{src:e,collapseDepth:3})]})}},8325:(e,a,n)=>{n.d(a,{Z:()=>Z});var t=n(7294);const l=e=>"boolean"==typeof e||e instanceof Boolean,s=e=>"number"==typeof e||e instanceof Number,o=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,c=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const m=()=>d++;function p(e){let{field:a,value:n,data:l,lastElement:s,openBracket:o,closeBracket:r,level:c,style:u,shouldExpandNode:i}=e;const d=(0,t.useRef)(!1),[p,_,b]=function(e){const[a,n]=(0,t.useState)(e());return[a,()=>n((e=>!e)),n]}((()=>i(c,n,a)));(0,t.useEffect)((()=>{d.current?b(i(c,n,a)):d.current=!0}),[i]);const h=p?u.collapseIcon:u.expandIcon,f=p?"collapse JSON":"expand JSON",x=function(){const e=(0,t.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${m()}:`),e.current}(),g=c+1,E=l.length-1,y=e=>{" "===e.key&&_()};return(0,t.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,t.createElement)("span",{className:h,onClick:_,onKeyDown:y,role:"button",tabIndex:0,"aria-label":f,"aria-expanded":p,"aria-controls":p?x:void 0}),a&&(0,t.createElement)("span",{className:u.label},a,":"),(0,t.createElement)("span",{className:u.punctuation},o),p?(0,t.createElement)("div",{id:x},l.map(((e,a)=>(0,t.createElement)(v,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===E,level:g,shouldExpandNode:i})))):(0,t.createElement)("span",{className:u.collapsedContent,onClick:_,onKeyDown:y,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":f,"aria-expanded":p}),(0,t.createElement)("span",{className:u.punctuation},r),!s&&(0,t.createElement)("span",{className:u.punctuation},","))}function _(e){let{field:a,value:n,style:t,lastElement:l,shouldExpandNode:s,level:o}=e;return p({field:a,value:n,lastElement:l||!1,level:o,openBracket:"{",closeBracket:"}",style:t,shouldExpandNode:s,data:Object.keys(n).map((e=>[e,n[e]]))})}function b(e){let{field:a,value:n,style:t,lastElement:l,level:s,shouldExpandNode:o}=e;return p({field:a,value:n,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:t,shouldExpandNode:o,data:n.map((e=>[void 0,e]))})}function h(e){let{field:a,value:n,style:u,lastElement:i}=e,d=n,m=u.otherValue;return null===n?(d="null",m=u.nullValue):void 0===n?(d="undefined",m=u.undefinedValue):c(n)?(d=`"${n}"`,m=u.stringValue):l(n)?(d=n?"true":"false",m=u.booleanValue):s(n)?(d=n.toString(),m=u.numberValue):o(n)?(d=`${n.toString()}n`,m=u.numberValue):d=r(n)?n.toISOString():n.toString(),""===a&&(a='""'),(0,t.createElement)("div",{className:u.basicChildStyle,role:"listitem"},a&&(0,t.createElement)("span",{className:u.label},a,":"),(0,t.createElement)("span",{className:m},d),!i&&(0,t.createElement)("span",{className:u.punctuation},","))}function v(e){const a=e.value;return u(a)?(0,t.createElement)(b,Object.assign({},e)):i(a)&&!r(a)?(0,t.createElement)(_,Object.assign({},e)):(0,t.createElement)(h,Object.assign({},e))}var f="_2bkNM";const x={container:"_2IvMF _GzYRV",basicChildStyle:f,label:"_1MGIk",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti"},g=()=>!0,E=e=>{let{data:a,style:n=x,shouldExpandNode:l=g}=e;return(0,t.createElement)("div",{className:n.container},(0,t.createElement)(v,{value:a,style:n,lastElement:!0,level:0,shouldExpandNode:l}))},y="containerParaiso_cQJv",N="basicElementParaiso_QZsA",j="labelParaiso_wRN4",V="nullValueParaiso_AoA7",k="undefinedValueParaiso_FhTI",I="stringValueParaiso_V3BI",C="booleanValueParaiso_DtTx",P="numberValueParaiso_QJS7",S="otherValueParaiso_LEJn",B="punctuationParaiso_IgdH",D="expandIconParaiso_FXv1",J="collapseIconParaiso_vUhq",O="collapseContentParaiso_r7rr";var A=n(5893);const F={container:y,basicChildStyle:N,label:j,nullValue:V,undefinedValue:k,stringValue:I,booleanValue:C,numberValue:P,otherValue:S,punctuation:B,collapseIcon:J,expandIcon:D,collapsedContent:O};function Z(e){let{src:a,collapseDepth:n}=e;return(0,A.jsx)(E,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==n&&e<n,style:F})}},2566:(e,a,n)=>{n.d(a,{Z:()=>c});n(7294);var t=n(5742),l=n(3692);const s={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};var o=n(5893);function r(e){let{to:a,children:n}=e;return(0,o.jsx)(l.Z,{className:s.navlink,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:n})}function c(e){let{children:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.Z,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(r,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:a})]})]})}}}]);