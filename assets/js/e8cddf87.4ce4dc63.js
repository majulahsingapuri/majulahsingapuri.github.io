"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[2484],{118:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(5893),o=t(1151);const a={id:"session",title:"Session",description:"How to use Session Authentication",sidebar_position:1,sidebar_label:"Session",keywords:["session","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth"],draft:!1},s=void 0,r={id:"authentication/session",title:"Session",description:"How to use Session Authentication",source:"@site/ninja-auth/authentication/session.md",sourceDirName:"authentication",slug:"/authentication/session",permalink:"/ninja-auth/authentication/session",draft:!1,unlisted:!1,tags:[{label:"dj-ninja-auth",permalink:"/ninja-auth/tags/dj-ninja-auth"}],version:"current",sidebarPosition:1,frontMatter:{id:"session",title:"Session",description:"How to use Session Authentication",sidebar_position:1,sidebar_label:"Session",keywords:["session","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth"],draft:!1},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/ninja-auth/getting-started/setup"},next:{title:"Token",permalink:"/ninja-auth/authentication/token"}},u={},c=[{value:"CSRF Endpoint",id:"csrf-endpoint",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"The easiest way to maintain user state is to use the Session Authentication.\nThis works out of the box with Django-Ninja and requires very little configuration from your end."}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"csrf=True"})," kwarg has to be passed in to allow Django Ninja to pass CSRF cookies for validation.\nYou will have to ",(0,i.jsx)(e.a,{href:"https://django-ninja.dev/reference/csrf/?h=csrf#django-ensure_csrf_cookie-decorator",children:"provide your own endpoint"})," to get a CSRF cookie from Ninja."]})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'title="api.py"',children:"from ninja.security import django_auth\nfrom dj_ninja_auth.controller import NinjaAuthDefaultController\n\napi = NinjaExtraAPI(auth=[django_auth], csrf=True)\napi.register_controllers(NinjaAuthDefaultController)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"csrf-endpoint",children:"CSRF Endpoint"}),"\n",(0,i.jsxs)(e.p,{children:["The following is a barebones CSRF endpoint that you can provide to get the cookie.\nYou can place it in a separate app called ",(0,i.jsx)(e.code,{children:"csrf"})," as below."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'title="/csrf/api.py',children:'from django.http import HttpResponse\nfrom django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie\nfrom ninja.router import Router\n\nrouter = Router()\n\n@router.get("/csrf", auth=None)\n@ensure_csrf_cookie\n@csrf_exempt\ndef csrf(request):\n    return HttpResponse()\n'})})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>s});var i=t(7294);const o={},a=i.createContext(o);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);