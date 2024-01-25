"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[2121],{1449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(5893),s=t(1151);const i={id:"schema",title:"Schemas",description:"How to customise schemas in dj-ninja-auth",sidebar_position:1,sidebar_label:"Schemas",keywords:["schema","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth"],draft:!1},o=void 0,c={id:"customisation/schema",title:"Schemas",description:"How to customise schemas in dj-ninja-auth",source:"@site/ninja-auth/customisation/schema.md",sourceDirName:"customisation",slug:"/customisation/schema",permalink:"/ninja-auth/customisation/schema",draft:!1,unlisted:!1,tags:[{label:"dj-ninja-auth",permalink:"/ninja-auth/tags/dj-ninja-auth"}],version:"current",sidebarPosition:1,frontMatter:{id:"schema",title:"Schemas",description:"How to customise schemas in dj-ninja-auth",sidebar_position:1,sidebar_label:"Schemas",keywords:["schema","dj-ninja-auth"],image:"https://github.com/majulahsingapuri.png",tags:["dj-ninja-auth"],draft:!1},sidebar:"tutorialSidebar",previous:{title:"Social Authentication",permalink:"/ninja-auth/allauth/social"},next:{title:"Controllers",permalink:"/ninja-auth/customisation/controller"}},r={},u=[];function h(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Say for example you want to modify the output schema once the user logs in in your app ",(0,a.jsx)(n.code,{children:"my_app"})," to only display specific fields.\nIn your ",(0,a.jsx)(n.code,{children:"my_app.schema.py"}),", you can create the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'title="schema.py"',children:"from django.contrib.auth import authenticate, get_user_model\nfrom dj_ninja_auth.schema import SuccessMessageMixin, LoginInputSchema\n\nUserModel = get_user_model()\n\nclass MyAuthUserSchema(ModelSchema):\n    class Meta:\n        model = UserModel\n        fields = ['id', 'username', 'first_name', 'last_name']\n\nclass MyLoginOutputSchema(SuccessMessageMixin):\n    user: MyAuthUserSchema\n    my_other_value: str\n\nclass MyLoginInputSchema(LoginInputSchema):\n    @classmethod\n    def get_response_schema(cls) -> Type[Schema]:\n        return MyLoginOutputSchema\n\n    def to_response_schema(self, **kwargs):\n        return super().to_response_schema(my_other_value=\"foo\", **kwargs)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then in your ",(0,a.jsx)(n.code,{children:"settings.py"}),", you can specify:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'title="settings.py"',children:'NINJA_AUTH_LOGIN_INPUT_SCHEMA = "my_app.schema.MyLoginInputSchema"\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var a=t(7294);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);