var De=Object.defineProperty,Ie=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var pe=(l,t,e)=>t in l?De(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,Y=(l,t)=>{for(var e in t||(t={}))He.call(t,e)&&pe(l,e,t[e]);if(de)for(var e of de(t))Pe.call(t,e)&&pe(l,e,t[e]);return l},J=(l,t)=>Ie(l,Me(t));import{_ as y,r as P,o,a as c,d as $,f as x,u as E,g as _,i as fe,h as a,F as I,j as A,k as C,b as g,t as T,l as z,m as Q,n as S,w as N,p as _e,q as w,e as j,s as X,v as Ee,x as Z,y as ee,z as K,A as me,C as be,B as R,D as ge,E as D,T as ke,G as F,H as $e,I as q,J as G,K as Re,L as Ae,M as te,N as Le,O as ye,c as Oe,P as we,Q as Fe,R as U,S as ae,U as ze,V as We,W as Ve,X as Ue}from"./app.6c77b787.js";const je=l=>/^mailto:/.test(l),Ke=l=>/^tel:/.test(l),qe={},Ge={class:"theme-default-content custom"};function Xe(l,t){const e=P("Content");return o(),c("div",Ge,[$(e)])}var Ye=y(qe,[["render",Xe],["__file","HomeContent.vue"]]);const Je={key:0,class:"features"},Qe=x({setup(l){const t=E(),e=_(()=>fe(t.value.features)?t.value.features:[]);return(u,r)=>a(e).length?(o(),c("div",Je,[(o(!0),c(I,null,A(a(e),d=>(o(),c("div",{key:d.title,class:"feature"},[g("h2",null,T(d.title),1),g("p",null,T(d.details),1)]))),128))])):C("",!0)}});var Ze=y(Qe,[["__file","HomeFeatures.vue"]]);const et=["innerHTML"],tt=["textContent"],at=x({setup(l){const t=E(),e=_(()=>t.value.footer),u=_(()=>t.value.footerHtml);return(r,d)=>a(e)?(o(),c(I,{key:0},[a(u)?(o(),c("div",{key:0,class:"footer",innerHTML:a(e)},null,8,et)):(o(),c("div",{key:1,class:"footer",textContent:T(a(e))},null,8,tt))],64)):C("",!0)}});var nt=y(at,[["__file","HomeFooter.vue"]]);const ot=["href","rel","target","aria-label"],rt=x({inheritAttrs:!1}),st=x(J(Y({},rt),{props:{item:{type:Object,required:!0}},setup(l){const t=l,e=z(),u=Ee(),{item:r}=Q(t),d=_(()=>X(r.value.link)),f=_(()=>je(r.value.link)||Ke(r.value.link)),h=_(()=>{if(!f.value){if(r.value.target)return r.value.target;if(d.value)return"_blank"}}),n=_(()=>h.value==="_blank"),s=_(()=>!d.value&&!f.value&&!n.value),i=_(()=>{if(!f.value){if(r.value.rel)return r.value.rel;if(n.value)return"noopener noreferrer"}}),v=_(()=>r.value.ariaLabel||r.value.text),p=_(()=>{const L=Object.keys(u.value.locales);return L.length?!L.some(m=>m===r.value.link):r.value.link!=="/"}),b=_(()=>p.value?e.path.startsWith(r.value.link):!1),k=_(()=>s.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(L,m)=>{const B=P("RouterLink"),M=P("AutoLinkExternalIcon");return a(s)?(o(),S(B,_e({key:0,class:{"router-link-active":a(k)},to:a(r).link,"aria-label":a(v)},L.$attrs),{default:N(()=>[w(L.$slots,"before"),j(" "+T(a(r).text)+" ",1),w(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(o(),c("a",_e({key:1,class:"external-link",href:a(r).link,rel:a(i),target:a(h),"aria-label":a(v)},L.$attrs),[w(L.$slots,"before"),j(" "+T(a(r).text)+" ",1),a(n)?(o(),S(M,{key:0})):C("",!0),w(L.$slots,"after")],16,ot))}}}));var H=y(st,[["__file","AutoLink.vue"]]);const lt={class:"hero"},ut={key:0,id:"main-title"},it={key:1,class:"description"},ct={key:2,class:"actions"},vt=x({setup(l){const t=E(),e=Z(),u=ee(),r=_(()=>u.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),d=_(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),f=_(()=>t.value.heroAlt||d.value||"hero"),h=_(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),n=_(()=>fe(t.value.actions)?t.value.actions.map(({text:i,link:v,type:p="primary"})=>({text:i,link:v,type:p})):[]),s=()=>{if(!r.value)return null;const i=K("img",{src:me(r.value),alt:f.value});return t.value.heroImageDark===void 0?i:K(be,()=>i)};return(i,v)=>(o(),c("header",lt,[$(s),a(d)?(o(),c("h1",ut,T(a(d)),1)):C("",!0),a(h)?(o(),c("p",it,T(a(h)),1)):C("",!0),a(n).length?(o(),c("p",ct,[(o(!0),c(I,null,A(a(n),p=>(o(),S(H,{key:p.text,class:R(["action-button",[p.type]]),item:p},null,8,["class","item"]))),128))])):C("",!0)]))}});var dt=y(vt,[["__file","HomeHero.vue"]]);const pt={class:"home"},_t=x({setup(l){return(t,e)=>(o(),c("main",pt,[$(dt),$(Ze),$(Ye),$(nt)]))}});var ht=y(_t,[["__file","Home.vue"]]);const ft=x({setup(l){const t=ge(),e=Z(),u=D(),r=ee(),d=_(()=>u.value.home||t.value),f=_(()=>e.value.title),h=_(()=>r.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),n=()=>{if(!h.value)return null;const s=K("img",{class:"logo",src:me(h.value),alt:f.value});return u.value.logoDark===void 0?s:K(be,()=>s)};return(s,i)=>{const v=P("RouterLink");return o(),S(v,{to:a(d)},{default:N(()=>[$(n),a(f)?(o(),c("span",{key:0,class:R(["site-name",{"can-hide":a(h)}])},T(a(f)),3)):C("",!0)]),_:1},8,["to"])}}});var mt=y(ft,[["__file","NavbarBrand.vue"]]);const bt=x({setup(l){const t=u=>{u.style.height=u.scrollHeight+"px"},e=u=>{u.style.height=""};return(u,r)=>(o(),S(ke,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:N(()=>[w(u.$slots,"default")]),_:3}))}});var Ce=y(bt,[["__file","DropdownTransition.vue"]]);const gt=["aria-label"],kt={class:"title"},$t=g("span",{class:"arrow down"},null,-1),Lt=["aria-label"],yt={class:"title"},wt={class:"navbar-dropdown"},Ct={class:"navbar-dropdown-subtitle"},xt={key:1},St={class:"navbar-dropdown-subitem-wrapper"},Tt=x({props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=Q(t),u=_(()=>e.value.ariaLabel||e.value.text),r=F(!1),d=z();$e(()=>d.path,()=>{r.value=!1});const f=n=>{n.detail===0?r.value=!r.value:r.value=!1},h=(n,s)=>s[s.length-1]===n;return(n,s)=>(o(),c("div",{class:R(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(u),onClick:f},[g("span",kt,T(a(e).text),1),$t],8,gt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(u),onClick:s[0]||(s[0]=i=>r.value=!r.value)},[g("span",yt,T(a(e).text),1),g("span",{class:R(["arrow",r.value?"down":"right"])},null,2)],8,Lt),$(Ce,null,{default:N(()=>[q(g("ul",wt,[(o(!0),c(I,null,A(a(e).children,i=>(o(),c("li",{key:i.text,class:"navbar-dropdown-item"},[i.children?(o(),c(I,{key:0},[g("h4",Ct,[i.link?(o(),S(H,{key:0,item:i,onFocusout:v=>h(i,a(e).children)&&i.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(o(),c("span",xt,T(i.text),1))]),g("ul",St,[(o(!0),c(I,null,A(i.children,v=>(o(),c("li",{key:v.link,class:"navbar-dropdown-subitem"},[$(H,{item:v,onFocusout:p=>h(v,i.children)&&h(i,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),S(H,{key:1,item:i,onFocusout:v=>h(i,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,r.value]])]),_:1})],2))}});var Bt=y(Tt,[["__file","NavbarDropdown.vue"]]);const he=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Nt=(l,t)=>{if(t.hash===l)return!0;const e=he(t.path),u=he(l);return e===u},xe=(l,t)=>l.link&&Nt(l.link,t)?!0:l.children?l.children.some(e=>xe(e,t)):!1,Se=l=>!X(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,Dt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},It=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=Se(l);return e!==null?Dt[e]:null},Mt=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:u,editLinkPattern:r})=>{if(!u)return null;const d=It({docsRepo:l,editLinkPattern:r});return d?d.replace(/:repo/,X(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Re(`${Ae(e)}/${u}`)):null},Ht={key:0,class:"navbar-items"},Pt=x({setup(l){const t=()=>{const s=te(),i=ge(),v=Z(),p=D();return _(()=>{var B,M;const b=Object.keys(v.value.locales);if(b.length<2)return[];const k=s.currentRoute.value.path,L=s.currentRoute.value.fullPath;return[{text:(B=p.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(M=p.value.selectLanguageAriaLabel)!=null?M:"unkown language",children:b.map(O=>{var re,se,le,ue,ie,ce;const W=(se=(re=v.value.locales)==null?void 0:re[O])!=null?se:{},ne=(ue=(le=p.value.locales)==null?void 0:le[O])!=null?ue:{},oe=`${W.lang}`,Be=(ie=ne.selectLanguageName)!=null?ie:oe;let V;if(oe===v.value.lang)V=L;else{const ve=k.replace(i.value,O);s.getRoutes().some(Ne=>Ne.path===ve)?V=ve:V=(ce=ne.home)!=null?ce:O}return{text:Be,link:V}})}]})},e=()=>{const s=D(),i=_(()=>s.value.repo),v=_(()=>i.value?Se(i.value):null),p=_(()=>i.value&&!X(i.value)?`https://github.com/${i.value}`:i.value),b=_(()=>p.value?s.value.repoLabel?s.value.repoLabel:v.value===null?"Source":v.value:null);return _(()=>!p.value||!b.value?[]:[{text:b.value,link:p.value}])},u=s=>Le(s)?ye(s):s.children?J(Y({},s),{children:s.children.map(u)}):s,d=(()=>{const s=D();return _(()=>(s.value.navbar||[]).map(u))})(),f=t(),h=e(),n=_(()=>[...d.value,...f.value,...h.value]);return(s,i)=>a(n).length?(o(),c("nav",Ht,[(o(!0),c(I,null,A(a(n),v=>(o(),c("div",{key:v.text,class:"navbar-item"},[v.children?(o(),S(Bt,{key:0,item:v},null,8,["item"])):(o(),S(H,{key:1,item:v},null,8,["item"]))]))),128))])):C("",!0)}});var Te=y(Pt,[["__file","NavbarItems.vue"]]);const Et=["title"],Rt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},At=Oe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Ot=[At],Ft={class:"icon",focusable:"false",viewBox:"0 0 32 32"},zt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Wt=[zt],Vt=x({setup(l){const t=D(),e=ee(),u=()=>{e.value=!e.value};return(r,d)=>(o(),c("button",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:u},[q((o(),c("svg",Rt,Ot,512)),[[G,!a(e)]]),q((o(),c("svg",Ft,Wt,512)),[[G,a(e)]])],8,Et))}});var Ut=y(Vt,[["__file","ToggleDarkModeButton.vue"]]);const jt=["title"],Kt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),qt=[Kt],Gt=x({emits:["toggle"],setup(l){const t=D();return(e,u)=>(o(),c("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=r=>e.$emit("toggle"))},qt,8,jt))}});var Xt=y(Gt,[["__file","ToggleSidebarButton.vue"]]);const Yt=x({emits:["toggle-sidebar"],setup(l){const t=D(),e=F(null),u=F(null),r=F(0),d=_(()=>r.value?{maxWidth:r.value+"px"}:{}),f=_(()=>t.value.darkMode);we(()=>{const s=h(e.value,"paddingLeft")+h(e.value,"paddingRight"),i=()=>{var v;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-s-(((v=u.value)==null?void 0:v.offsetWidth)||0)};i(),window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1)});function h(n,s){var p,b,k;const i=(k=(b=(p=n==null?void 0:n.ownerDocument)==null?void 0:p.defaultView)==null?void 0:b.getComputedStyle(n,null))==null?void 0:k[s],v=Number.parseInt(i,10);return Number.isNaN(v)?0:v}return(n,s)=>{const i=P("NavbarSearch");return o(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[$(Xt,{onToggle:s[0]||(s[0]=v=>n.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:u},[$(mt)],512),g("div",{class:"navbar-items-wrapper",style:Fe(a(d))},[w(n.$slots,"before"),$(Te,{class:"can-hide"}),w(n.$slots,"after"),a(f)?(o(),S(Ut,{key:0})):C("",!0),$(i)],4)],512)}}});var Jt=y(Yt,[["__file","Navbar.vue"]]);const Qt={class:"page-meta"},Zt={key:0,class:"meta-item edit-link"},ea={key:1,class:"meta-item last-updated"},ta={class:"meta-item-label"},aa={class:"meta-item-info"},na={key:2,class:"meta-item contributors"},oa={class:"meta-item-label"},ra={class:"meta-item-info"},sa=["title"],la=j(", "),ua=x({setup(l){const t=()=>{const n=D(),s=U(),i=E();return _(()=>{var M,O,W;if(!((O=(M=i.value.editLink)!=null?M:n.value.editLink)!=null?O:!0))return null;const{repo:p,docsRepo:b=p,docsBranch:k="main",docsDir:L="",editLinkText:m}=n.value;if(!b)return null;const B=Mt({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=i.value.editLinkPattern)!=null?W:n.value.editLinkPattern});return B?{text:m!=null?m:"Edit this page",link:B}:null})},e=()=>{const n=D(),s=U(),i=E();return _(()=>{var b,k,L,m;return!((k=(b=i.value.lastUpdated)!=null?b:n.value.lastUpdated)!=null?k:!0)||!((L=s.value.git)!=null&&L.updatedTime)?null:new Date((m=s.value.git)==null?void 0:m.updatedTime).toLocaleString()})},u=()=>{const n=D(),s=U(),i=E();return _(()=>{var p,b,k,L;return((b=(p=i.value.contributors)!=null?p:n.value.contributors)!=null?b:!0)&&(L=(k=s.value.git)==null?void 0:k.contributors)!=null?L:null})},r=D(),d=t(),f=e(),h=u();return(n,s)=>{const i=P("ClientOnly");return o(),c("footer",Qt,[a(d)?(o(),c("div",Zt,[$(H,{class:"meta-item-label",item:a(d)},null,8,["item"])])):C("",!0),a(f)?(o(),c("div",ea,[g("span",ta,T(a(r).lastUpdatedText)+": ",1),$(i,null,{default:N(()=>[g("span",aa,T(a(f)),1)]),_:1})])):C("",!0),a(h)&&a(h).length?(o(),c("div",na,[g("span",oa,T(a(r).contributorsText)+": ",1),g("span",ra,[(o(!0),c(I,null,A(a(h),(v,p)=>(o(),c(I,{key:p},[g("span",{class:"contributor",title:`email: ${v.email}`},T(v.name),9,sa),p!==a(h).length-1?(o(),c(I,{key:0},[la],64)):C("",!0)],64))),128))])])):C("",!0)])}}});var ia=y(ua,[["__file","PageMeta.vue"]]);const ca={key:0,class:"page-nav"},va={class:"inner"},da={key:0,class:"prev"},pa={key:1,class:"next"},_a=x({setup(l){const t=n=>n===!1?null:Le(n)?ye(n):ze(n)?n:!1,e=(n,s,i)=>{const v=n.findIndex(p=>p.link===s);if(v!==-1){const p=n[v+i];return p!=null&&p.link?p:null}for(const p of n)if(p.children){const b=e(p.children,s,i);if(b)return b}return null},u=E(),r=ae(),d=z(),f=_(()=>{const n=t(u.value.prev);return n!==!1?n:e(r.value,d.path,-1)}),h=_(()=>{const n=t(u.value.next);return n!==!1?n:e(r.value,d.path,1)});return(n,s)=>a(f)||a(h)?(o(),c("nav",ca,[g("p",va,[a(f)?(o(),c("span",da,[$(H,{item:a(f)},null,8,["item"])])):C("",!0),a(h)?(o(),c("span",pa,[$(H,{item:a(h)},null,8,["item"])])):C("",!0)])])):C("",!0)}});var ha=y(_a,[["__file","PageNav.vue"]]);const fa={class:"page"},ma={class:"theme-default-content"},ba=x({setup(l){return(t,e)=>{const u=P("Content");return o(),c("main",fa,[w(t.$slots,"top"),g("div",ma,[$(u)]),$(ia),$(ha),w(t.$slots,"bottom")])}}});var ga=y(ba,[["__file","Page.vue"]]);const ka={class:"sidebar-item-children"},$a=x({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:u}=Q(t),r=z(),d=te(),f=_(()=>xe(e.value,r)),h=_(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:f.value,collapsible:e.value.collapsible})),n=F(!0),s=F(void 0);return e.value.collapsible&&(n.value=f.value,s.value=()=>{n.value=!n.value},d.afterEach(()=>{n.value=f.value})),(i,v)=>{var b;const p=P("SidebarItem",!0);return o(),c("li",null,[a(e).link?(o(),S(H,{key:0,class:R(a(h)),item:a(e)},null,8,["class","item"])):(o(),c("p",{key:1,tabindex:"0",class:R(a(h)),onClick:v[0]||(v[0]=(...k)=>s.value&&s.value(...k)),onKeydown:v[1]||(v[1]=We((...k)=>s.value&&s.value(...k),["enter"]))},[j(T(a(e).text)+" ",1),a(e).collapsible?(o(),c("span",{key:0,class:R(["arrow",n.value?"down":"right"])},null,2)):C("",!0)],34)),(b=a(e).children)!=null&&b.length?(o(),S(Ce,{key:2},{default:N(()=>[q(g("ul",ka,[(o(!0),c(I,null,A(a(e).children,k=>(o(),S(p,{key:`${a(u)}${k.text}${k.link}`,item:k,depth:a(u)+1},null,8,["item","depth"]))),128))],512),[[G,n.value]])]),_:1})):C("",!0)])}}});var La=y($a,[["__file","SidebarItem.vue"]]);const ya={key:0,class:"sidebar-items"},wa=x({setup(l){const t=z(),e=ae();return $e(()=>t.hash,u=>{const r=document.querySelector(".sidebar");if(!r)return;const d=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${u}"]`);if(!d)return;const f=r.getBoundingClientRect().top,h=r.getBoundingClientRect().height,n=d.getBoundingClientRect().top,s=d.getBoundingClientRect().height;n<f?d.scrollIntoView(!0):n+s>f+h&&d.scrollIntoView(!1)}),(u,r)=>a(e).length?(o(),c("ul",ya,[(o(!0),c(I,null,A(a(e),d=>(o(),S(La,{key:d.link||d.text,item:d},null,8,["item"]))),128))])):C("",!0)}});var Ca=y(wa,[["__file","SidebarItems.vue"]]);const xa={class:"sidebar"},Sa=x({setup(l){return(t,e)=>(o(),c("aside",xa,[$(Te),w(t.$slots,"top"),$(Ca),w(t.$slots,"bottom")]))}});var Ta=y(Sa,[["__file","Sidebar.vue"]]);const Ba=x({setup(l){const t=U(),e=E(),u=D(),r=_(()=>e.value.navbar!==!1&&u.value.navbar!==!1),d=ae(),f=F(!1),h=m=>{f.value=typeof m=="boolean"?m:!f.value},n={x:0,y:0},s=m=>{n.x=m.changedTouches[0].clientX,n.y=m.changedTouches[0].clientY},i=m=>{const B=m.changedTouches[0].clientX-n.x,M=m.changedTouches[0].clientY-n.y;Math.abs(B)>Math.abs(M)&&Math.abs(B)>40&&(B>0&&n.x<=80?h(!0):h(!1))},v=_(()=>[{"no-navbar":!r.value,"no-sidebar":!d.value.length,"sidebar-open":f.value},e.value.pageClass]);let p;we(()=>{p=te().afterEach(()=>{h(!1)})}),Ve(()=>{p()});const b=Ue(),k=b.resolve,L=b.pending;return(m,B)=>(o(),c("div",{class:R(["theme-container",a(v)]),onTouchstart:s,onTouchend:i},[w(m.$slots,"navbar",{},()=>[a(r)?(o(),S(Jt,{key:0,onToggleSidebar:h},{before:N(()=>[w(m.$slots,"navbar-before")]),after:N(()=>[w(m.$slots,"navbar-after")]),_:3})):C("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=M=>h(!1))}),w(m.$slots,"sidebar",{},()=>[$(Ta,null,{top:N(()=>[w(m.$slots,"sidebar-top")]),bottom:N(()=>[w(m.$slots,"sidebar-bottom")]),_:3})]),w(m.$slots,"page",{},()=>[a(e).home?(o(),S(ht,{key:0})):(o(),S(ke,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(k),onBeforeLeave:a(L)},{default:N(()=>[(o(),S(ga,{key:a(t).path},{top:N(()=>[w(m.$slots,"page-top")]),bottom:N(()=>[w(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Na=y(Ba,[["__file","Layout.vue"]]);const Da={components:{Layout:Na}};function Ia(l,t,e,u,r,d){const f=P("Layout",!0);return o(),c("div",null,[$(f)])}var Pa=y(Da,[["render",Ia],["__file","Layout.vue"]]);export{Pa as default};
