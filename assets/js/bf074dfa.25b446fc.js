"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[319],{6215:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=e(5893),s=e(1151);const a={id:"setup",title:"Setup",description:"How to Setup dj-ninja-auth",sidebar_position:2,sidebar_label:"Setup",keywords:["setup","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth"],draft:!1},o=void 0,r={id:"getting-started/setup",title:"Setup",description:"How to Setup dj-ninja-auth",source:"@site/ninja-auth/getting-started/setup.md",sourceDirName:"getting-started",slug:"/getting-started/setup",permalink:"/ninja-auth/getting-started/setup",draft:!1,unlisted:!1,tags:[{label:"dj-ninja-auth",permalink:"/ninja-auth/tags/dj-ninja-auth"}],version:"current",sidebarPosition:2,frontMatter:{id:"setup",title:"Setup",description:"How to Setup dj-ninja-auth",sidebar_position:2,sidebar_label:"Setup",keywords:["setup","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth"],draft:!1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/ninja-auth/getting-started/installation"},next:{title:"Session",permalink:"/ninja-auth/authentication/session"}},l={},d=[];function c(n){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"To set up the base library, follow the following steps."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a ",(0,i.jsx)(t.code,{children:"api.py"})," file in your app directory next to the ",(0,i.jsx)(t.code,{children:"settings.py"})," and ",(0,i.jsx)(t.code,{children:"urls.py"})," files.\nThis file will hold your Ninja Extra API instance."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the following lines of code to your ",(0,i.jsx)(t.code,{children:"api.py"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="api.py"',children:"from ninja_extra import NinjaExtraAPI\nfrom dj_ninja_auth.controller import NinjaAuthDefaultController\n\napi = NinjaExtraAPI()\napi.register_controllers(NinjaAuthDefaultController)\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the following lines to your ",(0,i.jsx)(t.code,{children:"urls.py"})," file"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="urls.py"',children:'from .api import api\n\nurlpatterns = [\n    path("admin/", admin.site.urls),\n    path("", api.urls)\n]\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the following to your ",(0,i.jsx)(t.code,{children:"settings.py"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="settings.py"',children:'INSTALLED_APPS = [\n    ...\n    "ninja_extra",\n    "dj_ninja_auth",\n    ...\n]\n\nNINJA_AUTH_PASSWORD_RESET_URL = "http://localhost:8000/<YOUR_PASSWORD_RESET_FRONTEND_URL>/"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This will give you 5 basic endpoints that are not secured and can be called by anyone.\nThe endpoints are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"/auth/login"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"/auth/logout"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"/auth/password/reset/request"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"/auth/password/reset/confirm"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"/auth/password/change"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Viola!\nYou can start authenticating your users.\nTo view and test the endpoints, you can visit ",(0,i.jsx)(t.a,{href:"http://localhost:8000/docs",children:"http://localhost:8000/docs"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"NinjaAuthDefaultController"})," sends back the data associated with the authenticated user but cannot keep track of a user's state.\nThis means that beyond changing passwords and getting the user's data, the ",(0,i.jsx)(t.code,{children:"NinjaAuthDefaultController"})," is functionally useless without at least session authentication using cookies."]})})]})}function u(n={}){const{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>r,a:()=>o});var i=e(7294);const s={},a=i.createContext(s);function o(n){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(a.Provider,{value:t},n.children)}}}]);