"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[3159],{1392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(4848),r=n(8453);const i={title:"Personal Expenses Pt. 2",description:"Some success with this project!",slug:"personal-expenses-pt-2",tags:["infrastructure","architecture","payments","frontend","backend"],keywords:["personal","expenses","planning","application","infrastructure","development","networking","self-hosting","system design"],image:"https://github.com/majulahsingapuri.png",hide_table_of_contents:!1,draft:!1,authors:"bhargav"},o=void 0,a={permalink:"/blog/personal-expenses-pt-2",source:"@site/blog/2023/10/19/personal-expenses-pt-2/index.md",title:"Personal Expenses Pt. 2",description:"Some success with this project!",date:"2023-10-19T00:00:00.000Z",tags:[{inline:!0,label:"infrastructure",permalink:"/blog/tags/infrastructure"},{inline:!0,label:"architecture",permalink:"/blog/tags/architecture"},{inline:!0,label:"payments",permalink:"/blog/tags/payments"},{inline:!0,label:"frontend",permalink:"/blog/tags/frontend"},{inline:!0,label:"backend",permalink:"/blog/tags/backend"}],readingTime:9.07,hasTruncateMarker:!0,authors:[{name:"Bhargav Singapuri",title:"SWE and Data Scientist",url:"https://github.com/majulahsingapuri",imageURL:"https://github.com/majulahsingapuri.png",key:"bhargav"}],frontMatter:{title:"Personal Expenses Pt. 2",description:"Some success with this project!",slug:"personal-expenses-pt-2",tags:["infrastructure","architecture","payments","frontend","backend"],keywords:["personal","expenses","planning","application","infrastructure","development","networking","self-hosting","system design"],image:"https://github.com/majulahsingapuri.png",hide_table_of_contents:!1,draft:!1,authors:"bhargav"},unlisted:!1,prevItem:{title:"Personal Expenses Pt. 3",permalink:"/blog/personal-expenses-pt-3"},nextItem:{title:"Personal Expenses Pt. 1",permalink:"/blog/personal-expenses-pt-1"}},h={authorsImageUrls:[void 0]},l=[{value:"Intro",id:"intro",level:2},{value:"Router",id:"router",level:2},{value:"Why Start Here",id:"why-start-here",level:3},{value:"Goal",id:"router-goal",level:3},{value:"Steps",id:"router-steps",level:3},{value:"DNS Server",id:"dns-server",level:2},{value:"Goal",id:"dns-goal",level:3},{value:"Steps",id:"dns-steps",level:3},{value:"Webpage",id:"webpage",level:2},{value:"Goal",id:"webpage-goal",level:3},{value:"Steps",id:"webpage-steps",level:3},{value:"Caddy",id:"caddy",level:4},{value:"Next.JS Server",id:"nextjs-server",level:4},{value:"Results",id:"results",level:2},{value:"Conclusion and Next Steps",id:"conclusion-and-next-steps",level:2}];function d(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Success!\nWell... Sort of."}),"\n",(0,s.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,s.jsx)(t.p,{children:"Over the weekend, I finally had some time to get started (and stuck) on the project.\nMost of it was just getting the basics set up and running, things like git repos and router DNS/DHCP settings.\nSince this is the first time I am doing such a project, my goal for the end of the weekend was to be able to serve a Next.Js page using my personal sub-domain name over my LAN."}),"\n",(0,s.jsx)(t.p,{children:"I shall attempt to write these posts for someone that has zero idea of how such networking things work (me 3 weeks ago basically) and bring you along my thought processes and the steps that I took to get to where I am in the project currently."}),"\n",(0,s.jsx)(t.p,{children:"I will assume basic knowledge in things like what is an IP address, domain name and how to navigate your router's settings.\nI will also be linking resources that I have used to keep this as brief as possible."}),"\n",(0,s.jsx)(t.h2,{id:"router",children:"Router"}),"\n",(0,s.jsx)(t.h3,{id:"why-start-here",children:"Why Start Here"}),"\n",(0,s.jsx)(t.p,{children:"The router is what contains the 2 key parts of the project that will eventually allow you to use a domain name to reach your server rather than using an IP address."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'DHCP (Dynamic Host Configuration Protocol) Server: this allows your router to dynamically assign local IP addresses to your devices.\nThe router "leases" that address to you device for a set time (usually 24 hours) before it reassigns it.\nThis ensures that there are always local IP addresses on your nework for new devices to join to.'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"DNS (Domain Name System) Server: this service converts domain names - example.com - to IP addresses.\nThis makes things easier for us since we can easily remember words not a series of numbers.\nMost routers will have a setting for you to define which DNS servers to use as default."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"router-goal",children:"Goal"}),"\n",(0,s.jsx)(t.p,{children:"What we need to do is to give our server that hosts our applications (host server) a fixed IP address so that we do not have to keep reassigning new IP addresses to our domain name.\nWe also need to use a DNS server to to map our domain name to the host server's IP address."}),"\n",(0,s.jsx)(t.h3,{id:"router-steps",children:"Steps"}),"\n",(0,s.jsx)(t.p,{children:'Firstly, we need to "reserve" an IP address for our host server.\nLuckily most routers come with a setting called DCHP Reservation that allows us to do just that.\nYour router will list all the currently connected devices and their associated MAC and IP addresses as shown below.\nRefer to your router\'s manual for how to reserve IP addresses.'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.img,{alt:"DCHP Reservation",src:n(4386).A+"",width:"1173",height:"962"})})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"DCHP Reservation"})})})})]}),"\n",(0,s.jsx)(t.p,{children:"Now that our computer has a fixed (static) IP address, it will forever be reachable at this address even if the computer disconnects and reconnects to the network at a later time."}),"\n",(0,s.jsx)(t.p,{children:"Second, the DNS server.\nWe will get to setting up the server later on, but first we need to decide where the DNS server is running.\nSome routers come with a DNS server built in, which makes this whole process a lot easier, while for most you have to set one up yourself."}),"\n",(0,s.jsx)(t.p,{children:"For my router, a Linksys E9450, it does not come with a DNS server and by default takes whatever is set on the WAN (which in my case will be my Internet Service Provider's (ISP) DNS server.\nIt also has a setting for me to set primary and secondary DNS servers manually which is what I used for my setup."}),"\n",(0,s.jsx)(t.p,{children:"I decided to run my DNS server on the same host server as my applications, just to make things simpler.\nThus, I set the static DNS addresses on the router as the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Primary: 8.8.8.8 which is Google's DNS server"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Secondary: 192.168.79.19 which is my computer's local IP address."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The router will send any DNS queries that fail to be resolved to my DNS server."}),"\n",(0,s.jsx)(t.p,{children:"Like what you are reading thus far? Consider becoming a subscriber and stay up to date on my tinkering."}),"\n",(0,s.jsx)(t.h2,{id:"dns-server",children:"DNS Server"}),"\n",(0,s.jsx)(t.h3,{id:"dns-goal",children:"Goal"}),"\n",(0,s.jsx)(t.p,{children:"Now that we have a static address for the DNS Server as well as the host server, we need to let the DNS server know where to find the host server.\nFor now they are both the same but that might not be the case in the future or for you.\nWe will have to insert an 'A' Record which maps a URL to an IPv4 address.\nSimilarly, there is also an 'AAAA' record that does the same with IPv6 addresses but we are keeping things simple here."}),"\n",(0,s.jsx)(t.h3,{id:"dns-steps",children:"Steps"}),"\n",(0,s.jsx)(t.p,{children:"I followed the tutorial by Christian Lempa which uses a Bind9 server running in Docker to handle the DNS functionality.\nThis might be a bit overkill for most of us but I think its a good stepping stone going forward.\nAs he also mentions in his follow-up video, he extends the setup to use Terraform to dynamically add new entries to the DNS server and manage the records that are currently present."}),"\n",(0,s.jsx)(t.p,{children:"His tutorial is pretty easy and straightforward to follow, but if you want to see what I have done with my setup, you can refer to my networking repository.\nI have left out the access control list portion for now but may reinstate it in the future depending on my needs."}),"\n",(0,s.jsx)(t.h2,{id:"webpage",children:"Webpage"}),"\n",(0,s.jsx)(t.h3,{id:"webpage-goal",children:"Goal"}),"\n",(0,s.jsx)(t.p,{children:"Now that our client devices (any other device on the network) can find our host server using a URL, in my case with the *.local.bhargav.io endpoints, we need to serve something from the host server for clients to see.\nSince I will be making a Next.js application, I just wanted them to be able to see the default splash screen of the framework when it is first installed."}),"\n",(0,s.jsx)(t.h3,{id:"webpage-steps",children:"Steps"}),"\n",(0,s.jsx)(t.h4,{id:"caddy",children:"Caddy"}),"\n",(0,s.jsxs)(t.p,{children:["Since I am running all my applications in Docker, I will need something that serves content from the correct container based on the URL that was used to reach the host server.\nAccessing the containers based on their port numbers - e.g. ",(0,s.jsx)(t.code,{children:"auth.local.bhargav.io:3000"})," is not a feasible solution since I will run into Cross-Origin-Resource-Sharing (CORS) issues later on.\nEvery site has to be served on port 80 for HTTP and 443 for HTTPS."]}),"\n",(0,s.jsx)(t.p,{children:"Thus we need a reverse proxy that matches the url to the correct docker container running the requested service.\nCaddy is a server that does exactly that.\nIt is simple to use, lightweight and blazingly fast.\nSince it will be running in the Docker environment as well, we need to map each incoming URL to the corresponding docker container.\nFor example:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"http://auth.local.bhargav.io"})," \u2192 ",(0,s.jsx)(t.code,{children:"http://auth_frontend:3000"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"http://auth.local.bhargav.io/api/*"})," \u2192 ",(0,s.jsx)(t.code,{children:"http://auth_backend:8000"})]}),"\n",(0,s.jsx)(t.p,{children:"You can refer to the code in the networking repository for more details of the specifics of the implementation.\nAll the various services are orchestrated in the docker-compose.yml files."}),"\n",(0,s.jsx)(t.h4,{id:"nextjs-server",children:"Next.JS Server"}),"\n",(0,s.jsx)(t.p,{children:"At this point, our client can query the DNS for the IP of the host server, the request will then reach Caddy who will match the url to the correct docker container.\nNow we just need the container for caddy to serve."}),"\n",(0,s.jsx)(t.p,{children:"This is relatively straightforward if you have any experience with Dockerfiles and building and running your own custom containers.\nEssentially what the Dockerfile will do is to spell out steps to create and start our frontend application as its own standalone container."}),"\n",(0,s.jsx)(t.p,{children:"We are just going to start off with the default code that comes when setting up Next.js.\nThe Dockerfile is available on the auth frontend repository.\nThis container is then built and orchestrated on the same internal network as Caddy with Docker Compose."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.img,{alt:"docker-compose.yml",src:n(7563).A+"",width:"1919",height:"978"})})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"docker-compose.yml"})})})})]}),"\n",(0,s.jsx)(t.h2,{id:"results",children:"Results"}),"\n",(0,s.jsx)(t.p,{children:"Once the containers are built successfully, we can navigate to our auth url and we see the following:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.img,{alt:"Error Page",src:n(7871).A+"",width:"1915",height:"975"})})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Error Page"})})})})]}),"\n",(0,s.jsx)(t.p,{children:"Err...\nWhy is the page not being served?"}),"\n",(0,s.jsx)(t.p,{children:"When running nslookup on the DNS server for a random subdomian vs the auth subdomain, the following happens:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.img,{alt:"Cannot find auth page",src:n(3695).A+"",width:"518",height:"198"})})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Cannot find auth page"})})})})]}),"\n",(0,s.jsx)(t.p,{children:"Cannot find IP for auth but can for hello"}),"\n",(0,s.jsx)(t.p,{children:"This is strange and not supposed to happen.\nThere was no record for hello and yet it was being served.\nThis is something that I still have to look into since I want to be able to finely control the urls that are accesible."}),"\n",(0,s.jsx)(t.p,{children:"On the bright side at the very least I can indeed access the host server and display something using a URL.\nI still have some troubleshooting to do and if you have any idea where I went wrong, please do let me know.\nI will send many appreciations your way."}),"\n",(0,s.jsx)(t.p,{children:"To end off the week's work, I also set up the backend server in Django, built its Docker container and deployed it in a similar fashion to the auth frontend.\nThe only difference being that now the frontend is the catchall for any url pathways that do not start with /api."}),"\n",(0,s.jsx)(t.h2,{id:"conclusion-and-next-steps",children:"Conclusion and Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"This has been a great weekend thus far, and I wouldn't have thought that I will be able to achieve so much in such short time (literally a day??).\nThe first obvious next step is to figure out why the DNS server is not behaving as it should.\nIs there some other service that is hindering my progress.\nGoing to be using this article to get some idea as to how to solve these issues."}),"\n",(0,s.jsx)(t.p,{children:"Once that is resovled, I will look into setting up SSL for the site to ensure that there is a secure connection betweeen my applications and my devices."}),"\n",(0,s.jsx)(t.p,{children:"Then I will look at running the services from a computer that is not the one that I am coding on.\nI do have a spare Mac Mini that has been sitting around on my desk for the longest time and it would be great to put it to some use.\nI had recently updated the hard drive from a disk drive to an SSD so that will help things like boot speed.\nSince it is not supported beyond MacOS Catalina, I might just intall Ubuntu on it at the tradeoff of a nicer MacOS UI.\nDecisions."}),"\n",(0,s.jsx)(t.p,{children:"The next bit of infra that I need is to set up github actions that run locally on my host machine.\nThis will allow me to push code changes to the repository, run checks and once that is done, I can automatically deploy the changes to the Docker environment without me ever having to manually log into the system and make changes."}),"\n",(0,s.jsx)(t.p,{children:"Once that is done, then I can finally move onto writing the applications proper.\nStick around to find out how that turns out.\nUntil next time!"}),"\n",(0,s.jsx)(t.p,{children:"Found this insightful? Share this with some friends to spread the knowledge!"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3695:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/cannot-find-auth-8831594a67592735b3e68ab28ea4f00e.png"},4386:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/dhcp-server-02bb346d28490a6e029b182de6f2e644.png"},7563:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/docker-compose-file-e036b36355739ae0a826c54b333d7adb.png"},7871:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/site-cannot-be-reached-253baf64c755a51616ec193c4c40c111.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);