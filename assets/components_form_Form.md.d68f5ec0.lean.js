import{d as n,I as p,r as y,e as C,_ as B}from"./chunks/comment.0041942e.js";import"./chunks/style.b4010a05.js";import{r as i,q as A,o as b,c as E,b as a,w as d,u as s,_ as V,e as u,a as e,p as x,f as w,d as r}from"./app.40e705a5.js";import"./chunks/gitalk.fdd64472.js";const m=v=>(x("data-v-5ca621dc"),v=v(),w(),v),S=m(()=>e("h1",{id:"form-\u8868\u5355",tabindex:"-1"},[r("Form \u8868\u5355 "),e("a",{class:"header-anchor",href:"#form-\u8868\u5355","aria-hidden":"true"},"#")],-1)),I=m(()=>e("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[r("\u57FA\u7840\u7528\u6CD5 "),e("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1)),M=r("submit"),T=u("",2),k={class:"group-list"},N=r("submit"),R=r("reset"),U=u("",7),G=JSON.parse('{"title":"Form \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u8868\u5355\u6821\u9A8C","slug":"\u8868\u5355\u6821\u9A8C"},{"level":2,"title":"Form \u914D\u7F6E\u9879","slug":"form-\u914D\u7F6E\u9879"},{"level":2,"title":"Form \u65B9\u6CD5","slug":"form-\u65B9\u6CD5"},{"level":2,"title":"Form Item \u914D\u7F6E\u9879","slug":"form-item-\u914D\u7F6E\u9879"}],"relativePath":"components/form/Form.md","lastUpdated":1659087026000}'),z={name:"components/form/Form.md"},j=Object.assign(z,{setup(v){const o=i({account:"",password:"",sex:""}),l=i({account:"",password:"",sex:""}),f={account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},{min:3,max:6,message:"\u5BC6\u7801\u957F\u5EA6\u4E3A3-6",trigger:"blur"}]},F=A(),g=A(),q=async D=>{await D.validate(c=>{console.log(c)})},_=async D=>{D.resetValid()},h=()=>{console.log(l)};return(D,c)=>(b(),E("div",null,[S,I,a(s(C),{model:l,ref_key:"formtest",ref:g},{default:d(()=>[a(s(n),{label:"\u8D26\u53F7"},{default:d(()=>[a(s(p),{modelValue:l.account,"onUpdate:modelValue":c[0]||(c[0]=t=>l.account=t)},null,8,["modelValue"])]),_:1}),a(s(n),{label:"\u5BC6\u7801"},{default:d(()=>[a(s(p),{modelValue:l.password,"onUpdate:modelValue":c[1]||(c[1]=t=>l.password=t)},null,8,["modelValue"])]),_:1}),a(s(n),{label:"\u6027\u522B"},{default:d(()=>[a(s(p),{modelValue:l.sex,"onUpdate:modelValue":c[2]||(c[2]=t=>l.sex=t)},null,8,["modelValue"])]),_:1}),a(s(n),null,{default:d(()=>[a(s(y),{size:"small",onClick:h},{default:d(()=>[M]),_:1})]),_:1})]),_:1},8,["model"]),T,a(s(C),{model:o,ref_key:"rtyFormRef",ref:F,rules:f},{default:d(()=>[a(s(n),{label:"\u8D26\u53F7",prop:"account"},{default:d(()=>[a(s(p),{modelValue:o.account,"onUpdate:modelValue":c[3]||(c[3]=t=>o.account=t)},null,8,["modelValue"])]),_:1}),a(s(n),{label:"\u5BC6\u7801",prop:"password"},{default:d(()=>[a(s(p),{modelValue:o.password,"onUpdate:modelValue":c[4]||(c[4]=t=>o.password=t)},null,8,["modelValue"])]),_:1}),a(s(n),{label:"\u6027\u522B"},{default:d(()=>[a(s(p),{modelValue:o.sex,"onUpdate:modelValue":c[5]||(c[5]=t=>o.sex=t)},null,8,["modelValue"])]),_:1}),a(s(n),null,{default:d(()=>[e("div",k,[a(s(y),{size:"small",onClick:c[6]||(c[6]=t=>q(F.value))},{default:d(()=>[N]),_:1}),a(s(y),{size:"small",onClick:c[7]||(c[7]=t=>_(F.value)),type:"info"},{default:d(()=>[R]),_:1})])]),_:1})]),_:1},8,["model"]),U,a(B)]))}});var H=V(j,[["__scopeId","data-v-5ca621dc"]]);export{G as __pageData,H as default};
