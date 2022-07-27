import{r as F}from"./chunks/index2.d35040f6.js";import{r as C}from"./chunks/index.5caaad6b.js";import{r as g,m as b,o,c as l,b as s,w as d,i as D,T as m,t as v,a as t,d as p,F as x,q as T,s as u,u as S,_ as k,e as E,p as H,f as V}from"./app.f4e61e8d.js";import{a as I,_ as N}from"./chunks/comment.68a1d86d.js";import"./chunks/style.b4010a05.js";import"./chunks/gitalk.fdd64472.js";const $={key:0,class:"confirm-container"},B={key:0,class:"title"},w={class:"content"},M={class:"button"},P={__name:"index",props:{title:{type:String},content:{type:String,required:!0},cancelText:{type:String,default:"\u53D6\u6D88"},confirmText:{type:String,default:"\u786E\u5B9A"},cancelHandler:{type:Function},confirmHandler:{type:Function},close:{type:Function}},setup(a){const c=a,e=g(!1),r=500;b(()=>{e.value=!0});const i=()=>{c.cancelHandler&&c.cancelHandler(),n()},y=()=>{c.confirmHandler&&c.confirmHandler(),n()},n=()=>{e.value=!1,setTimeout(()=>{c.close&&c.close()},r)};return(f,A)=>(o(),l(x,null,[s(m,{name:"fade"},{default:d(()=>[e.value?(o(),l("div",{key:0,onClick:n,class:"confirm-bg"})):D("",!0)]),_:1}),s(m,{name:"up"},{default:d(()=>[e.value?(o(),l("div",$,[a.title?(o(),l("div",B,v(a.title),1)):D("",!0),t("div",w,v(a.content),1),t("div",M,[s(F,{size:"mini",type:"info",onClick:i},{default:d(()=>[p(v(a.cancelText),1)]),_:1}),s(F,{size:"mini",type:"primary",onClick:y},{default:d(()=>[p(v(a.confirmText),1)]),_:1})])])):D("",!0)]),_:1})],64))}};var j=I(P,[["__scopeId","data-v-06efd67a"]]);const q=(a,c,e,r)=>new Promise((i,y)=>{a&&!c&&(c=a,a="");const n=document.createElement("div"),f=document.body.appendChild(n),h=T(j,{title:a,content:c,cancelText:e,confirmText:r,close:()=>{document.body.removeChild(f),u(null,f)},cancelHandler:()=>{y(!1)},confirmHandler:()=>{i(!0)}});u(h,f)});const _=a=>(H("data-v-3ecf67c3"),a=a(),V(),a),z=_(()=>t("h1",{id:"confirm-\u5F39\u7A97",tabindex:"-1"},[p("Confirm \u5F39\u7A97 "),t("a",{class:"header-anchor",href:"#confirm-\u5F39\u7A97","aria-hidden":"true"},"#")],-1)),O=_(()=>t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[p("\u57FA\u7840\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1)),J=p("Test Confirm"),R=E(`<div class="language-js" data-v-3ecf67c3><span class="copy" data-v-3ecf67c3></span><pre data-v-3ecf67c3><code data-v-3ecf67c3><span class="line" data-v-3ecf67c3><span style="color:#89DDFF;" data-v-3ecf67c3>&lt;</span><span style="color:#F07178;" data-v-3ecf67c3>script</span><span style="color:#89DDFF;" data-v-3ecf67c3> </span><span style="color:#C792EA;" data-v-3ecf67c3>setup</span><span style="color:#89DDFF;" data-v-3ecf67c3>&gt;</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#A6ACCD;" data-v-3ecf67c3>import </span><span style="color:#89DDFF;" data-v-3ecf67c3>{</span><span style="color:#A6ACCD;" data-v-3ecf67c3> rtyConfirm</span><span style="color:#89DDFF;" data-v-3ecf67c3>,</span><span style="color:#A6ACCD;" data-v-3ecf67c3> rtyButton </span><span style="color:#89DDFF;" data-v-3ecf67c3>}</span><span style="color:#A6ACCD;" data-v-3ecf67c3> from &#39;rty-ui-plus&#39;</span></span>
<span class="line" data-v-3ecf67c3></span>
<span class="line" data-v-3ecf67c3><span style="color:#A6ACCD;" data-v-3ecf67c3>const testConfirm = () =&gt; </span><span style="color:#89DDFF;" data-v-3ecf67c3>{</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#A6ACCD;" data-v-3ecf67c3>  </span><span style="color:#82AAFF;" data-v-3ecf67c3>rtyConfirm</span><span style="color:#A6ACCD;" data-v-3ecf67c3>(</span><span style="color:#89DDFF;" data-v-3ecf67c3>&#39;</span><span style="color:#C3E88D;" data-v-3ecf67c3>\u6807\u9898</span><span style="color:#89DDFF;" data-v-3ecf67c3>&#39;</span><span style="color:#89DDFF;" data-v-3ecf67c3>,</span><span style="color:#89DDFF;" data-v-3ecf67c3>&#39;</span><span style="color:#C3E88D;" data-v-3ecf67c3>\u5185\u5BB9\u98CE\u5200\u971C\u5251\u554A\u6D6A\u8D39\u7684\u65F6\u95F4</span><span style="color:#89DDFF;" data-v-3ecf67c3>&#39;</span><span style="color:#A6ACCD;" data-v-3ecf67c3>)</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#A6ACCD;" data-v-3ecf67c3>    </span><span style="color:#89DDFF;" data-v-3ecf67c3>.</span><span style="color:#82AAFF;" data-v-3ecf67c3>then</span><span style="color:#A6ACCD;" data-v-3ecf67c3>(</span><span style="color:#89DDFF;" data-v-3ecf67c3>()</span><span style="color:#A6ACCD;" data-v-3ecf67c3> </span><span style="color:#C792EA;" data-v-3ecf67c3>=&gt;</span><span style="color:#A6ACCD;" data-v-3ecf67c3> </span><span style="color:#89DDFF;" data-v-3ecf67c3>{</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#F07178;" data-v-3ecf67c3>      </span><span style="color:#A6ACCD;" data-v-3ecf67c3>console</span><span style="color:#89DDFF;" data-v-3ecf67c3>.</span><span style="color:#82AAFF;" data-v-3ecf67c3>log</span><span style="color:#F07178;" data-v-3ecf67c3>(</span><span style="color:#89DDFF;" data-v-3ecf67c3>&#39;</span><span style="color:#C3E88D;" data-v-3ecf67c3>\u70B9\u51FB\u4E86\u786E\u5B9A</span><span style="color:#89DDFF;" data-v-3ecf67c3>&#39;</span><span style="color:#F07178;" data-v-3ecf67c3>)</span><span style="color:#89DDFF;" data-v-3ecf67c3>;</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#F07178;" data-v-3ecf67c3>    </span><span style="color:#89DDFF;" data-v-3ecf67c3>}</span><span style="color:#A6ACCD;" data-v-3ecf67c3>)</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#A6ACCD;" data-v-3ecf67c3>    </span><span style="color:#89DDFF;" data-v-3ecf67c3>.</span><span style="color:#82AAFF;" data-v-3ecf67c3>catch</span><span style="color:#A6ACCD;" data-v-3ecf67c3>(</span><span style="color:#89DDFF;" data-v-3ecf67c3>()</span><span style="color:#A6ACCD;" data-v-3ecf67c3> </span><span style="color:#C792EA;" data-v-3ecf67c3>=&gt;</span><span style="color:#A6ACCD;" data-v-3ecf67c3> </span><span style="color:#89DDFF;" data-v-3ecf67c3>{</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#F07178;" data-v-3ecf67c3>      </span><span style="color:#A6ACCD;" data-v-3ecf67c3>console</span><span style="color:#89DDFF;" data-v-3ecf67c3>.</span><span style="color:#82AAFF;" data-v-3ecf67c3>log</span><span style="color:#F07178;" data-v-3ecf67c3>(</span><span style="color:#89DDFF;" data-v-3ecf67c3>&#39;</span><span style="color:#C3E88D;" data-v-3ecf67c3>\u70B9\u51FB\u4E86\u53D6\u6D88</span><span style="color:#89DDFF;" data-v-3ecf67c3>&#39;</span><span style="color:#F07178;" data-v-3ecf67c3>)</span><span style="color:#89DDFF;" data-v-3ecf67c3>;</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#F07178;" data-v-3ecf67c3>    </span><span style="color:#89DDFF;" data-v-3ecf67c3>}</span><span style="color:#A6ACCD;" data-v-3ecf67c3>);</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#89DDFF;" data-v-3ecf67c3>}</span></span>
<span class="line" data-v-3ecf67c3><span style="color:#89DDFF;" data-v-3ecf67c3>&lt;/</span><span style="color:#F07178;" data-v-3ecf67c3>script</span><span style="color:#89DDFF;" data-v-3ecf67c3>&gt;</span></span>
<span class="line" data-v-3ecf67c3></span></code></pre></div><h2 id="message-\u914D\u7F6E\u9879" tabindex="-1" data-v-3ecf67c3>Message \u914D\u7F6E\u9879 <a class="header-anchor" href="#message-\u914D\u7F6E\u9879" aria-hidden="true" data-v-3ecf67c3>#</a></h2><table data-v-3ecf67c3><thead data-v-3ecf67c3><tr data-v-3ecf67c3><th data-v-3ecf67c3>\u5C5E\u6027</th><th data-v-3ecf67c3>\u8BF4\u660E</th><th data-v-3ecf67c3>\u7C7B\u578B</th><th data-v-3ecf67c3>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-3ecf67c3><tr data-v-3ecf67c3><td data-v-3ecf67c3>type</td><td data-v-3ecf67c3>\u6D88\u606F\u7C7B\u578B</td><td data-v-3ecf67c3>string</td><td data-v-3ecf67c3>success</td></tr><tr data-v-3ecf67c3><td data-v-3ecf67c3>message</td><td data-v-3ecf67c3>\u6D88\u606F\u63D0\u793A\u6587\u5B57</td><td data-v-3ecf67c3>string</td><td data-v-3ecf67c3>--</td></tr><tr data-v-3ecf67c3><td data-v-3ecf67c3>duration</td><td data-v-3ecf67c3>\u6D88\u606F\u663E\u793A\u65F6\u95F4</td><td data-v-3ecf67c3>number</td><td data-v-3ecf67c3>3000</td></tr></tbody></table>`,3),ca=JSON.parse('{"title":"Confirm \u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"Message \u914D\u7F6E\u9879","slug":"message-\u914D\u7F6E\u9879"}],"relativePath":"components/Confirm.md","lastUpdated":1658913927000}'),U={name:"components/Confirm.md"},G=Object.assign(U,{setup(a){const c=()=>{q("\u6807\u9898","\u5185\u5BB9\u98CE\u5200\u971C\u5251\u554A\u6D6A\u8D39\u7684\u65F6\u95F4").then(()=>{C({message:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE"})}).catch(()=>{C({type:"plain",message:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE"})})};return(e,r)=>(o(),l("div",null,[z,O,s(S(F),{onClick:c},{default:d(()=>[J]),_:1}),R,s(N)]))}});var ea=k(G,[["__scopeId","data-v-3ecf67c3"]]);export{ca as __pageData,ea as default};
