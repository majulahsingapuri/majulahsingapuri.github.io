"use strict";(self.webpackChunkmajulahsingapuri_github_io=self.webpackChunkmajulahsingapuri_github_io||[]).push([[5962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=h(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var h=2;h<o;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=n(7462),r=(n(7294),n(3905));const o={title:"Personal Expenses Pt. 2",description:"Some success with this project!",slug:"personal-expenses-pt-2",tags:["infrastructure","architecture","payments","frontend","backend"],keywords:["personal","expenses","planning","application","infrastructure","development","networking","self-hosting","system design"],image:"https://github.com/majulahsingapuri.png",hide_table_of_contents:!1,draft:!1,authors:"bhargav"},s=void 0,i={permalink:"/blog/personal-expenses-pt-2",source:"@site/blog/2023/10/19/personal-expenses-pt-2/index.md",title:"Personal Expenses Pt. 2",description:"Some success with this project!",date:"2023-10-19T00:00:00.000Z",formattedDate:"October 19, 2023",tags:[{label:"infrastructure",permalink:"/blog/tags/infrastructure"},{label:"architecture",permalink:"/blog/tags/architecture"},{label:"payments",permalink:"/blog/tags/payments"},{label:"frontend",permalink:"/blog/tags/frontend"},{label:"backend",permalink:"/blog/tags/backend"}],readingTime:9.07,hasTruncateMarker:!0,authors:[{name:"Bhargav Singapuri",title:"SWE and Data Scientist",url:"https://github.com/majulahsingapuri",imageURL:"https://github.com/majulahsingapuri.png",key:"bhargav"}],frontMatter:{title:"Personal Expenses Pt. 2",description:"Some success with this project!",slug:"personal-expenses-pt-2",tags:["infrastructure","architecture","payments","frontend","backend"],keywords:["personal","expenses","planning","application","infrastructure","development","networking","self-hosting","system design"],image:"https://github.com/majulahsingapuri.png",hide_table_of_contents:!1,draft:!1,authors:"bhargav"},nextItem:{title:"Personal Expenses Pt. 1",permalink:"/blog/personal-expenses-pt-1"}},l={authorsImageUrls:[void 0]},h=[{value:"Intro",id:"intro",level:2},{value:"Router",id:"router",level:2},{value:"Why Start Here",id:"why-start-here",level:3},{value:"Goal",id:"router-goal",level:3},{value:"Steps",id:"router-steps",level:3},{value:"DNS Server",id:"dns-server",level:2},{value:"Goal",id:"dns-goal",level:3},{value:"Steps",id:"dns-steps",level:3},{value:"Webpage",id:"webpage",level:2},{value:"Goal",id:"webpage-goal",level:3},{value:"Steps",id:"webpage-steps",level:3},{value:"Caddy",id:"caddy",level:4},{value:"Next.JS Server",id:"nextjs-server",level:4},{value:"Results",id:"results",level:2},{value:"Conclusion and Next Steps",id:"conclusion-and-next-steps",level:2}],d={toc:h},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Success!\nWell... Sort of."),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Over the weekend, I finally had some time to get started (and stuck) on the project.\nMost of it was just getting the basics set up and running, things like git repos and router DNS/DHCP settings.\nSince this is the first time I am doing such a project, my goal for the end of the weekend was to be able to serve a Next.Js page using my personal sub-domain name over my LAN."),(0,r.kt)("p",null,"I shall attempt to write these posts for someone that has zero idea of how such networking things work (me 3 weeks ago basically) and bring you along my thought processes and the steps that I took to get to where I am in the project currently."),(0,r.kt)("p",null,"I will assume basic knowledge in things like what is an IP address, domain name and how to navigate your router's settings.\nI will also be linking resources that I have used to keep this as brief as possible."),(0,r.kt)("h2",{id:"router"},"Router"),(0,r.kt)("h3",{id:"why-start-here"},"Why Start Here"),(0,r.kt)("p",null,"The router is what contains the 2 key parts of the project that will eventually allow you to use a domain name to reach your server rather than using an IP address."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'DHCP (Dynamic Host Configuration Protocol) Server: this allows your router to dynamically assign local IP addresses to your devices.\nThe router "leases" that address to you device for a set time (usually 24 hours) before it reassigns it.\nThis ensures that there are always local IP addresses on your nework for new devices to join to.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DNS (Domain Name System) Server: this service converts domain names - example.com - to IP addresses.\nThis makes things easier for us since we can easily remember words not a series of numbers.\nMost routers will have a setting for you to define which DNS servers to use as default."))),(0,r.kt)("h3",{id:"router-goal"},"Goal"),(0,r.kt)("p",null,"What we need to do is to give our server that hosts our applications (host server) a fixed IP address so that we do not have to keep reassigning new IP addresses to our domain name.\nWe also need to use a DNS server to to map our domain name to the host server's IP address."),(0,r.kt)("h3",{id:"router-steps"},"Steps"),(0,r.kt)("p",null,'Firstly, we need to "reserve" an IP address for our host server.\nLuckily most routers come with a setting called DCHP Reservation that allows us to do just that.\nYour router will list all the currently connected devices and their associated MAC and IP addresses as shown below.\nRefer to your router\'s manual for how to reserve IP addresses.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"DCHP Reservation",src:n(8222).Z,width:"1173",height:"962"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"DCHP Reservation"))))),(0,r.kt)("p",null,"Now that our computer has a fixed (static) IP address, it will forever be reachable at this address even if the computer disconnects and reconnects to the network at a later time."),(0,r.kt)("p",null,"Second, the DNS server.\nWe will get to setting up the server later on, but first we need to decide where the DNS server is running.\nSome routers come with a DNS server built in, which makes this whole process a lot easier, while for most you have to set one up yourself."),(0,r.kt)("p",null,"For my router, a Linksys E9450, it does not come with a DNS server and by default takes whatever is set on the WAN (which in my case will be my Internet Service Provider's (ISP) DNS server.\nIt also has a setting for me to set primary and secondary DNS servers manually which is what I used for my setup."),(0,r.kt)("p",null,"I decided to run my DNS server on the same host server as my applications, just to make things simpler.\nThus, I set the static DNS addresses on the router as the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Primary: 8.8.8.8 which is Google's DNS server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secondary: 192.168.79.19 which is my computer's local IP address."))),(0,r.kt)("p",null,"The router will send any DNS queries that fail to be resolved to my DNS server."),(0,r.kt)("p",null,"Like what you are reading thus far? Consider becoming a subscriber and stay up to date on my tinkering."),(0,r.kt)("h2",{id:"dns-server"},"DNS Server"),(0,r.kt)("h3",{id:"dns-goal"},"Goal"),(0,r.kt)("p",null,"Now that we have a static address for the DNS Server as well as the host server, we need to let the DNS server know where to find the host server.\nFor now they are both the same but that might not be the case in the future or for you.\nWe will have to insert an 'A' Record which maps a URL to an IPv4 address.\nSimilarly, there is also an 'AAAA' record that does the same with IPv6 addresses but we are keeping things simple here."),(0,r.kt)("h3",{id:"dns-steps"},"Steps"),(0,r.kt)("p",null,"I followed the tutorial by Christian Lempa which uses a Bind9 server running in Docker to handle the DNS functionality.\nThis might be a bit overkill for most of us but I think its a good stepping stone going forward.\nAs he also mentions in his follow-up video, he extends the setup to use Terraform to dynamically add new entries to the DNS server and manage the records that are currently present."),(0,r.kt)("p",null,"His tutorial is pretty easy and straightforward to follow, but if you want to see what I have done with my setup, you can refer to my networking repository.\nI have left out the access control list portion for now but may reinstate it in the future depending on my needs."),(0,r.kt)("h2",{id:"webpage"},"Webpage"),(0,r.kt)("h3",{id:"webpage-goal"},"Goal"),(0,r.kt)("p",null,"Now that our client devices (any other device on the network) can find our host server using a URL, in my case with the ","*",".local.bhargav.io endpoints, we need to serve something from the host server for clients to see.\nSince I will be making a Next.js application, I just wanted them to be able to see the default splash screen of the framework when it is first installed."),(0,r.kt)("h3",{id:"webpage-steps"},"Steps"),(0,r.kt)("h4",{id:"caddy"},"Caddy"),(0,r.kt)("p",null,"Since I am running all my applications in Docker, I will need something that serves content from the correct container based on the URL that was used to reach the host server.\nAccessing the containers based on their port numbers - e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.local.bhargav.io:3000")," is not a feasible solution since I will run into Cross-Origin-Resource-Sharing (CORS) issues later on.\nEvery site has to be served on port 80 for HTTP and 443 for HTTPS."),(0,r.kt)("p",null,"Thus we need a reverse proxy that matches the url to the correct docker container running the requested service.\nCaddy is a server that does exactly that.\nIt is simple to use, lightweight and blazingly fast.\nSince it will be running in the Docker environment as well, we need to map each incoming URL to the corresponding docker container.\nFor example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://auth.local.bhargav.io")," ","\u2192"," ",(0,r.kt)("inlineCode",{parentName:"p"},"http://auth_frontend:3000")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://auth.local.bhargav.io/api/*")," ","\u2192"," ",(0,r.kt)("inlineCode",{parentName:"p"},"http://auth_backend:8000")),(0,r.kt)("p",null,"You can refer to the code in the networking repository for more details of the specifics of the implementation.\nAll the various services are orchestrated in the docker-compose.yml files."),(0,r.kt)("h4",{id:"nextjs-server"},"Next.JS Server"),(0,r.kt)("p",null,"At this point, our client can query the DNS for the IP of the host server, the request will then reach Caddy who will match the url to the correct docker container.\nNow we just need the container for caddy to serve."),(0,r.kt)("p",null,"This is relatively straightforward if you have any experience with Dockerfiles and building and running your own custom containers.\nEssentially what the Dockerfile will do is to spell out steps to create and start our frontend application as its own standalone container."),(0,r.kt)("p",null,"We are just going to start off with the default code that comes when setting up Next.js.\nThe Dockerfile is available on the auth frontend repository.\nThis container is then built and orchestrated on the same internal network as Caddy with Docker Compose."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"docker-compose.yml",src:n(9292).Z,width:"1919",height:"978"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"docker-compose.yml"))))),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("p",null,"Once the containers are built successfully, we can navigate to our auth url and we see the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"Error Page",src:n(7425).Z,width:"1915",height:"975"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Error Page"))))),(0,r.kt)("p",null,"Err...\nWhy is the page not being served?"),(0,r.kt)("p",null,"When running nslookup on the DNS server for a random subdomian vs the auth subdomain, the following happens:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"Cannot find auth page",src:n(8777).Z,width:"518",height:"198"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Cannot find auth page"))))),(0,r.kt)("p",null,"Cannot find IP for auth but can for hello"),(0,r.kt)("p",null,"This is strange and not supposed to happen.\nThere was no record for hello and yet it was being served.\nThis is something that I still have to look into since I want to be able to finely control the urls that are accesible."),(0,r.kt)("p",null,"On the bright side at the very least I can indeed access the host server and display something using a URL.\nI still have some troubleshooting to do and if you have any idea where I went wrong, please do let me know.\nI will send many appreciations your way."),(0,r.kt)("p",null,"To end off the week's work, I also set up the backend server in Django, built its Docker container and deployed it in a similar fashion to the auth frontend.\nThe only difference being that now the frontend is the catchall for any url pathways that do not start with /api."),(0,r.kt)("h2",{id:"conclusion-and-next-steps"},"Conclusion and Next Steps"),(0,r.kt)("p",null,"This has been a great weekend thus far, and I wouldn't have thought that I will be able to achieve so much in such short time (literally a day??).\nThe first obvious next step is to figure out why the DNS server is not behaving as it should.\nIs there some other service that is hindering my progress.\nGoing to be using this article to get some idea as to how to solve these issues."),(0,r.kt)("p",null,"Once that is resovled, I will look into setting up SSL for the site to ensure that there is a secure connection betweeen my applications and my devices."),(0,r.kt)("p",null,"Then I will look at running the services from a computer that is not the one that I am coding on.\nI do have a spare Mac Mini that has been sitting around on my desk for the longest time and it would be great to put it to some use.\nI had recently updated the hard drive from a disk drive to an SSD so that will help things like boot speed.\nSince it is not supported beyond MacOS Catalina, I might just intall Ubuntu on it at the tradeoff of a nicer MacOS UI.\nDecisions."),(0,r.kt)("p",null,"The next bit of infra that I need is to set up github actions that run locally on my host machine.\nThis will allow me to push code changes to the repository, run checks and once that is done, I can automatically deploy the changes to the Docker environment without me ever having to manually log into the system and make changes."),(0,r.kt)("p",null,"Once that is done, then I can finally move onto writing the applications proper.\nStick around to find out how that turns out.\nUntil next time!"),(0,r.kt)("p",null,"Found this insightful? Share this with some friends to spread the knowledge!"))}c.isMDXComponent=!0},8777:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cannot-find-auth-8831594a67592735b3e68ab28ea4f00e.png"},8222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dhcp-server-02bb346d28490a6e029b182de6f2e644.png"},9292:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-compose-file-e036b36355739ae0a826c54b333d7adb.png"},7425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/site-cannot-be-reached-253baf64c755a51616ec193c4c40c111.png"}}]);