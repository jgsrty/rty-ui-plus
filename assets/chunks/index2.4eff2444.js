import{_ as u}from"./plugin-vue_export-helper.ef252bee.js";import{f as d,r as f,n as p,o as m,c as b,g as y,h as _,u as v}from"../app.d0b971f9.js";const E=["disabled"],a=["primary","info","success","warning"],i=["large","normal","small","mini"],k={__name:"index",props:{disabled:{type:Boolean,default:!1},type:{type:String,default:"primary",validator(s){const e=a.indexOf(s)>-1;if(!e)throw new Error(`type\u5FC5\u987B\u662F${a.join("||")}\u4E2D\u7684\u4E00\u4E2A`);return e}},size:{type:String,default:"normal",validator(s){const e=i.indexOf(s)>-1;if(!e)throw new Error(`size\u5FC5\u987B\u662F${i.join("||")}\u4E2D\u7684\u4E00\u4E2A`);return e}}},emits:["click"],setup(s,{emit:e}){const n=s,o="rty-button",l=d(()=>[o,`${o}-${n.type}`,`${o}-${n.size}`,{"is-disabled":n.disabled}]),r=f(),c=t=>e("click",t);return p(()=>{var t;n.disabled&&n.type==="info"&&((t=r.value)==null||t.classList.add("info-no-hover"))}),(t,h)=>(m(),b("button",{ref_key:"btnRef",ref:r,onClick:c,class:_(v(l)),disabled:s.disabled},[y(t.$slots,"default",{},void 0,!0)],10,E))}};var x=u(k,[["__scopeId","data-v-5880e77b"]]);export{x as B};
