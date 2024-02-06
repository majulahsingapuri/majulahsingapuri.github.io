"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[8042],{7013:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>s,metadata:()=>l,toc:()=>_});var t=i(5893),d=i(1151);const s={id:"settings-jwt",title:"JWT",description:"Different Settings for Dj-Ninja-Auth",sidebar_position:4,sidebar_label:"JWT",keywords:["settings","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth","settings"],slug:"jwt",draft:!1},c=void 0,l={id:"settings/settings-jwt",title:"JWT",description:"Different Settings for Dj-Ninja-Auth",source:"@site/ninja-auth/settings/settings-jwt.md",sourceDirName:"settings",slug:"/settings/jwt",permalink:"/ninja-auth/settings/jwt",draft:!1,unlisted:!1,tags:[{label:"dj-ninja-auth",permalink:"/ninja-auth/tags/dj-ninja-auth"},{label:"settings",permalink:"/ninja-auth/tags/settings"}],version:"current",sidebarPosition:4,frontMatter:{id:"settings-jwt",title:"JWT",description:"Different Settings for Dj-Ninja-Auth",sidebar_position:4,sidebar_label:"JWT",keywords:["settings","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth","settings"],slug:"jwt",draft:!1},sidebar:"tutorialSidebar",previous:{title:"Token",permalink:"/ninja-auth/settings/token"},next:{title:"Allauth",permalink:"/ninja-auth/settings/allauth"}},r={},_=[{value:"<code>AUTH_JWT_VERIFY_SCHEMA</code>",id:"auth_jwt_verify_schema",level:2},{value:"<code>AUTH_JWT_PAIR_SCHEMA</code>",id:"auth_jwt_pair_schema",level:2},{value:"<code>AUTH_JWT_REFRESH_SCHEMA</code>",id:"auth_jwt_refresh_schema",level:2},{value:"<code>AUTH_JWT_TOKEN_CLASSES</code>",id:"auth_jwt_token_classes",level:2},{value:"<code>AUTH_JWT_USER_ID_CLAIM</code>",id:"auth_jwt_user_id_claim",level:2},{value:"<code>AUTH_JWT_USER_ID_FIELD</code>",id:"auth_jwt_user_id_field",level:2},{value:"<code>AUTH_JWT_JTI_CLAIM</code>",id:"auth_jwt_jti_claim",level:2},{value:"<code>AUTH_JWT_TOKEN_TYPE_CLAIM</code>",id:"auth_jwt_token_type_claim",level:2},{value:"<code>AUTH_JWT_USER_AUTHENTICATION_RULE</code>",id:"auth_jwt_user_authentication_rule",level:2},{value:"<code>AUTH_JWT_LEEWAY</code>",id:"auth_jwt_leeway",level:2},{value:"<code>AUTH_JWT_JWK_URL</code>",id:"auth_jwt_jwk_url",level:2},{value:"<code>AUTH_JWT_ISSUER</code>",id:"auth_jwt_issuer",level:2},{value:"<code>AUTH_JWT_AUDIENCE</code>",id:"auth_jwt_audience",level:2},{value:"<code>AUTH_JWT_VERIFYING_KEY</code>",id:"auth_jwt_verifying_key",level:2},{value:"<code>AUTH_JWT_SIGNING_KEY</code>",id:"auth_jwt_signing_key",level:2},{value:"<code>AUTH_JWT_ALGORITHM</code>",id:"auth_jwt_algorithm",level:2},{value:"<code>AUTH_JWT_UPDATE_LAST_LOGIN</code>",id:"auth_jwt_update_last_login",level:2},{value:"<code>AUTH_JWT_ACCESS_TOKEN_LIFETIME</code>",id:"auth_jwt_access_token_lifetime",level:2},{value:"<code>AUTH_JWT_REFRESH_TOKEN_LIFETIME</code>",id:"auth_jwt_refresh_token_lifetime",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"auth_jwt_verify_schema",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_VERIFY_SCHEMA"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"dj_ninja_auth.jwt.schema.TokenVerifyInputSchema"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_pair_schema",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_PAIR_SCHEMA"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"dj_ninja_auth.jwt.schema.TokenPairInputSchema"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_refresh_schema",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_REFRESH_SCHEMA"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"dj_ninja_auth.jwt.schema.TokenRefreshInputSchema"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_token_classes",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_TOKEN_CLASSES"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'("dj_ninja_auth.jwt.tokens.AccessToken",)'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"Tuple[str]"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_user_id_claim",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_USER_ID_CLAIM"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"user_id"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_user_id_field",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_USER_ID_FIELD"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"id"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_jti_claim",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_JTI_CLAIM"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"jti"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_token_type_claim",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_TOKEN_TYPE_CLAIM"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"token_type"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_user_authentication_rule",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_USER_AUTHENTICATION_RULE"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"dj_ninja_auth.jwt.authentication.default_authentication_rule"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_leeway",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_LEEWAY"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_jwk_url",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_JWK_URL"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str | None"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_issuer",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_ISSUER"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str | None"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_audience",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_AUDIENCE"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str | None"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_verifying_key",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_VERIFYING_KEY"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str | None"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_signing_key",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_SIGNING_KEY"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"settings.SECRET_KEY"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_algorithm",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_ALGORITHM"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:'"HS256"'})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_update_last_login",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_UPDATE_LAST_LOGIN"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"False"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"bool"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_access_token_lifetime",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_ACCESS_TOKEN_LIFETIME"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"timedelta(minutes=5)"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"timedelta"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"}),"\n",(0,t.jsx)(n.h2,{id:"auth_jwt_refresh_token_lifetime",children:(0,t.jsx)(n.code,{children:"AUTH_JWT_REFRESH_TOKEN_LIFETIME"})}),"\n",(0,t.jsxs)(n.p,{children:["default: ",(0,t.jsx)(n.code,{children:"timedelta(days=1)"})]}),"\n",(0,t.jsxs)(n.p,{children:["type: ",(0,t.jsx)(n.code,{children:"timedelta"})]}),"\n",(0,t.jsx)(n.p,{children:"description:"})]})}function j(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>c});var t=i(7294);const d={},s=t.createContext(d);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);