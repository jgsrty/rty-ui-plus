import{_ as d,r as f}from"./index2.191be129.js";import{h as m,r as y,n as p,a as o,c as v,i as b,j as k,k as z,l as S,u as E}from"../app.b0e9906e.js";const B=["disabled"],r=["primary","info","success","warning"],l={large:{val:"large",iconSize:20},normal:{val:"normal",iconSize:18},small:{val:"small",iconSize:14},mini:{val:"mini",iconSize:12}},g={__name:"index",props:{disabled:{type:Boolean,default:!1},icon:{type:String,default:""},type:{type:String,default:"primary",validator(e){const t=r.indexOf(e)>-1;if(!t)throw new Error(`type\u5FC5\u987B\u662F${r.join("||")}\u4E2D\u7684\u4E00\u4E2A`);return t}},size:{type:String,default:"normal",validator(e){const t=Object.keys(l),n=t.indexOf(e)>-1;if(!n)throw new Error(`size\u5FC5\u987B\u662F${t.join("||")}\u4E2D\u7684\u4E00\u4E2A`);return n}}},emits:["click"],setup(e,{emit:t}){const n=e,a="rty-button",c=m(()=>[a,`${a}-${n.type}`,`${a}-${n.size}`,{"is-disabled":n.disabled}]),i=y(),u=s=>t("click",s);return p(()=>{var s;n.disabled&&n.type==="info"&&((s=i.value)==null||s.classList.add("info-no-hover"))}),(s,h)=>(o(),v("button",{ref_key:"btnRef",ref:i,onClick:u,class:S(E(c)),disabled:e.disabled},[e.icon?(o(),b(f,{key:0,size:l[e.size].iconSize,name:e.icon},null,8,["size","name"])):k("",!0),z(s.$slots,"default",{},void 0,!0)],10,B))}};var C=d(g,[["__scopeId","data-v-5e54b199"]]);export{C as B};