"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[250],{1658:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var n=t(4848),a=t(8453);const i={id:"settings-base",title:"Base",description:"Different Settings for Dj-Ninja-Auth",sidebar_position:1,sidebar_label:"Base",keywords:["settings","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth","settings"],slug:"base",draft:!1},d=void 0,r={id:"settings/settings-base",title:"Base",description:"Different Settings for Dj-Ninja-Auth",source:"@site/ninja-auth/settings/settings-base.md",sourceDirName:"settings",slug:"/settings/base",permalink:"/ninja-auth/settings/base",draft:!1,unlisted:!1,tags:[{inline:!0,label:"dj-ninja-auth",permalink:"/ninja-auth/tags/dj-ninja-auth"},{inline:!0,label:"settings",permalink:"/ninja-auth/tags/settings"}],version:"current",sidebarPosition:1,frontMatter:{id:"settings-base",title:"Base",description:"Different Settings for Dj-Ninja-Auth",sidebar_position:1,sidebar_label:"Base",keywords:["settings","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth","settings"],slug:"base",draft:!1},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/ninja-auth/customisation/controller"},next:{title:"Registration",permalink:"/ninja-auth/settings/registration"}},c={},o=[{value:"<code>AUTH_LOGIN_INPUT_SCHEMA</code>",id:"auth_login_input_schema",level:2},{value:"<code>AUTH_SUCCESS_SCHEMA</code>",id:"auth_success_schema",level:2},{value:"<code>AUTH_PASSWORD_RESET_REQUEST_SCHEMA</code>",id:"auth_password_reset_request_schema",level:2},{value:"<code>AUTH_PASSWORD_RESET_CONFIRM_SCHEMA</code>",id:"auth_password_reset_confirm_schema",level:2},{value:"<code>AUTH_PASSWORD_CHANGE_SCHEMA</code>",id:"auth_password_change_schema",level:2},{value:"<code>AUTH_AUTH_USER_SCHEMA</code>",id:"auth_auth_user_schema",level:2},{value:"<code>AUTH_PASSWORD_RESET_URL</code>",id:"auth_password_reset_url",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"auth_login_input_schema",children:(0,n.jsx)(s.code,{children:"AUTH_LOGIN_INPUT_SCHEMA"})}),"\n",(0,n.jsxs)(s.p,{children:["default: ",(0,n.jsx)(s.code,{children:'"dj_ninja_auth.schema.LoginInputSchema"'})]}),"\n",(0,n.jsxs)(s.p,{children:["type: ",(0,n.jsx)(s.code,{children:"str"})]}),"\n",(0,n.jsxs)(s.p,{children:["description: A dotted module path to the schema for the login input. Contains ",(0,n.jsx)(s.code,{children:"username"})," and/or ",(0,n.jsx)(s.code,{children:"email"}),", and ",(0,n.jsx)(s.code,{children:"password"})," depending on ",(0,n.jsx)(s.a,{href:"/ninja-auth/settings/allauth#account_authentication_method",children:"allauth.settings.AUTHENTICATION_METHOD"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"auth_success_schema",children:(0,n.jsx)(s.code,{children:"AUTH_SUCCESS_SCHEMA"})}),"\n",(0,n.jsxs)(s.p,{children:["default: ",(0,n.jsx)(s.code,{children:'"dj_ninja_auth.schema.SuccessOutputSchema"'})]}),"\n",(0,n.jsxs)(s.p,{children:["type: ",(0,n.jsx)(s.code,{children:"str"})]}),"\n",(0,n.jsxs)(s.p,{children:["description: A dotted module path to the schema that shows what the format of a success output is. Contains ",(0,n.jsx)(s.code,{children:'{"message": "success"}'})," as the default."]}),"\n",(0,n.jsx)(s.h2,{id:"auth_password_reset_request_schema",children:(0,n.jsx)(s.code,{children:"AUTH_PASSWORD_RESET_REQUEST_SCHEMA"})}),"\n",(0,n.jsxs)(s.p,{children:["default: ",(0,n.jsx)(s.code,{children:'"dj_ninja_auth.schema.PasswordResetRequestInputSchema"'})]}),"\n",(0,n.jsxs)(s.p,{children:["type: ",(0,n.jsx)(s.code,{children:"str"})]}),"\n",(0,n.jsxs)(s.p,{children:["description: A dotted module path to the schema that controls the fields necessary and executes form validation for password reset request. Contains ",(0,n.jsx)(s.code,{children:"email"})," as the only required field."]}),"\n",(0,n.jsx)(s.h2,{id:"auth_password_reset_confirm_schema",children:(0,n.jsx)(s.code,{children:"AUTH_PASSWORD_RESET_CONFIRM_SCHEMA"})}),"\n",(0,n.jsxs)(s.p,{children:["default: ",(0,n.jsx)(s.code,{children:'"dj_ninja_auth.schema.PasswordResetConfirmInputSchema"'})]}),"\n",(0,n.jsxs)(s.p,{children:["type: ",(0,n.jsx)(s.code,{children:"str"})]}),"\n",(0,n.jsxs)(s.p,{children:["description: A dotted module path to the schema that controls the fields necessary and executes form validation for password reset. Contains ",(0,n.jsx)(s.code,{children:"token"})," and ",(0,n.jsx)(s.code,{children:"uid"})," as the 2 verifying fields."]}),"\n",(0,n.jsx)(s.h2,{id:"auth_password_change_schema",children:(0,n.jsx)(s.code,{children:"AUTH_PASSWORD_CHANGE_SCHEMA"})}),"\n",(0,n.jsxs)(s.p,{children:["default: ",(0,n.jsx)(s.code,{children:'"dj_ninja_auth.schema.PasswordChangeInputSchema"'})]}),"\n",(0,n.jsxs)(s.p,{children:["type: ",(0,n.jsx)(s.code,{children:"str"})]}),"\n",(0,n.jsxs)(s.p,{children:["description: A dotted module path to the schema for an authenticated user changing their password. Requires ",(0,n.jsx)(s.code,{children:"username"}),", ",(0,n.jsx)(s.code,{children:"old_password"}),", ",(0,n.jsx)(s.code,{children:"new_password1"})," and ",(0,n.jsx)(s.code,{children:"new_password2"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"auth_auth_user_schema",children:(0,n.jsx)(s.code,{children:"AUTH_AUTH_USER_SCHEMA"})}),"\n",(0,n.jsxs)(s.p,{children:["default: ",(0,n.jsx)(s.code,{children:'"dj_ninja_auth.schema.AuthUserSchema"'})]}),"\n",(0,n.jsxs)(s.p,{children:["type: ",(0,n.jsx)(s.code,{children:"str"})]}),"\n",(0,n.jsxs)(s.p,{children:["description: A dotted module path to the schema for the fields returned for a user. Defaults to showing all fields except the ",(0,n.jsx)(s.code,{children:"password"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"auth_password_reset_url",children:(0,n.jsx)(s.code,{children:"AUTH_PASSWORD_RESET_URL"})}),"\n",(0,n.jsxs)(s.p,{children:["default: ",(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsxs)(s.p,{children:["type: ",(0,n.jsx)(s.code,{children:"str"})]}),"\n",(0,n.jsxs)(s.p,{children:["description: ",(0,n.jsx)(s.strong,{children:"REQUIRED"})," The URL that is added to the reset password template so that the user is redirected to the correct website. Bypasses standard Django reset url template."]})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>r});var n=t(6540);const a={},i=n.createContext(a);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);