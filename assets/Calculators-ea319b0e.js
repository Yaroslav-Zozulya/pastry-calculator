import{r as t,j as n}from"./index-c1ec18d6.js";const h=[{id:1,title:"крем для обтяжки торта на сливках",ingredients:[{name:"Сахар",proportion:.123},{name:"Сыр",proportion:.312},{name:"Сливки",proportion:.123}]},{id:2,title:"Какой-то крем",ingredients:[{name:"Сахар",proportion:.123},{name:"Сыр",proportion:.312},{name:"Сливки",proportion:.123},{name:"Суп",proportion:.123}]},{id:3,title:"Ещё какой-то крем",ingredients:[{name:"Сахар",proportion:.123},{name:"Сыр",proportion:.312},{name:"Сливки",proportion:.123},{name:"Суп",proportion:.123},{name:"Мясо",proportion:.123}]}],r={receipts:h},g=()=>{const[o,s]=t.useState(0),[a,i]=t.useState(null),p=e=>{s(e.target.value.trim())},l=e=>{const d=e.target.options[e.target.selectedIndex].value,m=r.receipts.find(u=>u.id===Number(d)).ingredients;i(m)},c=Number(o)!==0&&o!=="";return n.jsxs("div",{className:"w-full sm:w-72 md:w-96 mx-auto",children:[n.jsxs("select",{className:"w-full mb-2 p-1 rounded-lg",onChange:l,children:[n.jsx("option",{value:"",children:"Выберите вариант"}),r.receipts.map(e=>n.jsx("option",{value:e.id,children:e.title},e.id))]}),n.jsx("input",{className:"w-full mb-2 p-1 rounded-lg",type:"number",name:"weight",placeholder:"Сколько крема? 😉",onChange:p}),c&&n.jsx("ul",{className:"rounded-lg shadow-lg p-2 bg-sky-200",children:a.map(e=>n.jsxs("li",{className:"text-base font-semibold mb-1",children:[e.name,": ",Math.round(o*e.proportion),"г"]},e.name))})]})},j=()=>n.jsx("section",{className:"py-8",children:n.jsx("div",{className:"container mx-auto",children:n.jsx(g,{})})});export{j as default};
