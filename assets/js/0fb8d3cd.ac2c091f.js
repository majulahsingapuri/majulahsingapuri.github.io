"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[7153],{1568:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var e=i(4848),a=i(8453);const r={id:"registration",title:"Registration",description:"How to register new accounts using REST in dj-ninja-auth",sidebar_position:4,sidebar_label:"Registration",keywords:["registration","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth"],draft:!1},o=void 0,s={id:"registration",title:"Registration",description:"How to register new accounts using REST in dj-ninja-auth",source:"@site/ninja-auth/registration.md",sourceDirName:".",slug:"/registration",permalink:"/ninja-auth/registration",draft:!1,unlisted:!1,tags:[{inline:!0,label:"dj-ninja-auth",permalink:"/ninja-auth/tags/dj-ninja-auth"}],version:"current",sidebarPosition:4,frontMatter:{id:"registration",title:"Registration",description:"How to register new accounts using REST in dj-ninja-auth",sidebar_position:4,sidebar_label:"Registration",keywords:["registration","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth"],draft:!1},sidebar:"tutorialSidebar",previous:{title:"JSON Web Tokens",permalink:"/ninja-auth/authentication/jwt"},next:{title:"Setup",permalink:"/ninja-auth/allauth/allauth-setup"}},u={},c=[];function l(n){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.p,{children:["To manage accounts in addition to the authentication functionality, use the ",(0,e.jsx)(t.code,{children:"NinjaAuthAccountController"})," as below:"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-python",metastring:'title="api.py"',children:"from ninja_extra import NinjaExtraAPI\n\nfrom dj_ninja_auth.jwt.authentication import JWTAuth\nfrom dj_ninja_auth.jwt.controller import NinjaAuthJWTController\nfrom dj_ninja_auth.registration.controller import NinjaAuthAccountController\n\napi = NinjaExtraAPI(auth=[JWTAuth()])\napi.register_controllers(NinjaAuthJWTController, NinjaAuthAccountController)\n"})}),"\n",(0,e.jsx)(t.p,{children:"This will provide the following endpoints."}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"/account/"}),": Allowed methods are ",(0,e.jsx)(t.code,{children:"POST"}),", ",(0,e.jsx)(t.code,{children:"PATCH"})," and ",(0,e.jsx)(t.code,{children:"DELETE"}),"."]}),"\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.code,{children:"/account/verify"})}),"\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.code,{children:"/account/resend-email"})}),"\n"]})]})}function d(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},8453:(n,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var e=i(6540);const a={},r=e.createContext(a);function o(n){const t=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),e.createElement(r.Provider,{value:t},n.children)}}}]);