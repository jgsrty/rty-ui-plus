import{r as F}from"./chunks/index2.d35040f6.js";import{r as C}from"./chunks/index.5caaad6b.js";import{r as g,m as b,o,c as l,b as t,w as p,i as D,T as m,t as v,a as n,d as c,F as x,q as T,s as u,u as S,_ as k,e as E,p as H,f as V}from"./app.f4e61e8d.js";import{a as I,_ as N}from"./chunks/comment.68a1d86d.js";import"./chunks/style.b4010a05.js";import"./chunks/gitalk.fdd64472.js";const $={key:0,class:"confirm-container"},B={key:0,class:"title"},w={class:"content"},M={class:"button"},P={__name:"index",props:{title:{type:String},content:{type:String,required:!0},cancelText:{type:String,default:"\u53D6\u6D88"},confirmText:{type:String,default:"\u786E\u5B9A"},cancelHandler:{type:Function},confirmHandler:{type:Function},close:{type:Function}},setup(a){const e=a,s=g(!1),r=500;b(()=>{s.value=!0});const i=()=>{e.cancelHandler&&e.cancelHandler(),d()},y=()=>{e.confirmHandler&&e.confirmHandler(),d()},d=()=>{s.value=!1,setTimeout(()=>{e.close&&e.close()},r)};return(f,A)=>(o(),l(x,null,[t(m,{name:"fade"},{default:p(()=>[s.value?(o(),l("div",{key:0,onClick:d,class:"confirm-bg"})):D("",!0)]),_:1}),t(m,{name:"up"},{default:p(()=>[s.value?(o(),l("div",$,[a.title?(o(),l("div",B,v(a.title),1)):D("",!0),n("div",w,v(a.content),1),n("div",M,[t(F,{size:"mini",type:"info",onClick:i},{default:p(()=>[c(v(a.cancelText),1)]),_:1}),t(F,{size:"mini",type:"primary",onClick:y},{default:p(()=>[c(v(a.confirmText),1)]),_:1})])])):D("",!0)]),_:1})],64))}};var j=I(P,[["__scopeId","data-v-06efd67a"]]);const q=(a,e,s,r)=>new Promise((i,y)=>{a&&!e&&(e=a,a="");const d=document.createElement("div"),f=document.body.appendChild(d),h=T(j,{title:a,content:e,cancelText:s,confirmText:r,close:()=>{document.body.removeChild(f),u(null,f)},cancelHandler:()=>{y(!1)},confirmHandler:()=>{i(!0)}});u(h,f)});const _=a=>(H("data-v-6fea4d13"),a=a(),V(),a),z=_(()=>n("h1",{id:"confirm-\u5F39\u7A97",tabindex:"-1"},[c("Confirm \u5F39\u7A97 "),n("a",{class:"header-anchor",href:"#confirm-\u5F39\u7A97","aria-hidden":"true"},"#")],-1)),O=_(()=>n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[c("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1)),J=c("Test Confirm"),R=E("",3),ea=JSON.parse('{"title":"Confirm \u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"Message \u914D\u7F6E\u9879","slug":"message-\u914D\u7F6E\u9879"}],"relativePath":"components/Confirm.md","lastUpdated":1658802470000}'),U={name:"components/Confirm.md"},G=Object.assign(U,{setup(a){const e=()=>{q("\u6807\u9898","\u5185\u5BB9\u98CE\u5200\u971C\u5251\u554A\u6D6A\u8D39\u7684\u65F6\u95F4").then(()=>{C({message:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE"})}).catch(()=>{C({type:"plain",message:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE"})})};return(s,r)=>(o(),l("div",null,[z,O,t(S(F),{onClick:e},{default:p(()=>[J]),_:1}),R,t(N)]))}});var sa=k(G,[["__scopeId","data-v-6fea4d13"]]);export{ea as __pageData,sa as default};
