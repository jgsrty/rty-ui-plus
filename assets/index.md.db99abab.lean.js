import{o as r,c,r as y,n as f,p as F,a as D,b as o,d as p,u as l,e as m,f as h}from"./app.50aec66a.js";var d=(s,t)=>{const a=s.__vccOpts||s;for(const[e,n]of t)a[e]=n;return a};const i=["primary","info","success","warning"],_=["large","normal","small","mini"],v={__name:"index",props:{type:{type:String,default:"primary",validator(s){const t=i.indexOf(s)>-1;if(!t)throw new Error(`type\u5FC5\u987B\u662F${i.join("||")}\u4E2D\u7684\u4E00\u4E2A`);return t}},size:{type:String,default:"normal",validator(s){const t=_.indexOf(s)>-1;if(!t)throw new Error(`size\u5FC5\u987B\u662F${_.join("||")}\u4E2D\u7684\u4E00\u4E2A`);return t}}},setup(s){const t=s,a="button-",e=a+t.type,n=a+t.size;return(u,w)=>(r(),c("button",{class:f([e,n])},[y(u.$slots,"default",{},void 0,!0)],2))}};var C=d(v,[["__scopeId","data-v-143d5d77"]]);const g={},x=s=>(F("data-v-79ff8842"),s=s(),D(),s),A={class:"main"},B=x(()=>o("div",{class:"test"},"confirm",-1)),E=[B];function S(s,t){return r(),c("div",A,E)}var b=d(g,[["render",S],["__scopeId","data-v-79ff8842"]]);const I=o("h1",{id:"test",tabindex:"-1"},[m("test "),o("a",{class:"header-anchor",href:"#test","aria-hidden":"true"},"#")],-1),T=h("",1),N=JSON.parse('{"title":"test","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}'),$={name:"index.md"},V=Object.assign($,{setup(s){return console.log("fix10"),(t,a)=>(r(),c("div",null,[I,p(l(C)),p(l(b)),T]))}});export{N as __pageData,V as default};
