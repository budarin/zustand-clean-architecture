(()=>{"use strict";function e(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const t={icons:[{icon_id:1,icon_name:"page.png"},{icon_id:2,icon_name:"home.png"},{icon_id:3,icon_name:"other.png"},{icon_id:4,icon_name:"warning.png"},{icon_id:5,icon_name:"alert.png"},{icon_id:6,icon_name:"ball.png"},{icon_id:7,icon_name:"bug.png"},{icon_id:8,icon_name:"cart.png"},{icon_id:9,icon_name:"favorite.png"},{icon_id:10,icon_name:"inbox.png"},{icon_id:11,icon_name:"life.png"},{icon_id:12,icon_name:"mail.png"},{icon_id:13,icon_name:"twitter.png"},{icon_id:14,icon_name:"note.png"}],statuses:[{status_id:1,status:"низкий",color:"#808080"},{status_id:2,status:"нормальный",color:"#000000"},{status_id:3,status:"повышенный",color:"#008000"},{status_id:4,status:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category:"Работа"},{category_id:2,icon_id:2,category:"Дом"},{category_id:3,icon_id:6,category:"Здоровье"},{category_id:4,icon_id:7,category:"Фигня"}],todos:[{todo_id:1,status_id:1,category_id:1,todo:"Todo1",deleted:!1},{todo_id:2,status_id:2,category_id:2,todo:"Hover your mouse over a project or item and click the icon on the right side of the item for more",due_date:e(-1)},{todo_id:3,status_id:3,category_id:3,todo:"Todo3",due_date:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+1),t.toISOString()}()},{todo_id:4,status_id:4,category_id:1,todo:"Todo4",due_date:e(1),completed:!0,deleted:!1},{todo_id:5,status_id:4,todo:"Todo5"},{todo_id:6,status_id:4,todo:"Todo6",completed:!0,deleted:!1},{todo_id:7,status_id:2,todo:"Todo7",completed:!0,deleted:!0}]};self.VERSION="1.0.0";const o={"Content-Type":"application/json; charset=utf-8"},{log:n}=console;self.addEventListener("fetch",(function(e){var s=new URL(e.request.url);const i=s.pathname.slice(5);if("POST"!==e.request.method)if("PATCH"!==e.request.method)if("DELETE"!==e.request.method)"GET"!==e.request.method||"/api/get_todos"!==s.pathname||e.respondWith(new Response(JSON.stringify(t),{headers:{"Content-Type":"application/json; charset=utf-8"}}));else{const t=e.request.clone();e.respondWith(async function(e,t){const o=await e.json();switch(t){case"delete_category":case"delete_todo":return new Response(JSON.stringify(o),{status:200});default:return new Response(null,{status:404})}}(t,i))}else{const t=e.request.clone();e.respondWith(async function(e,t){const o=await e.json();switch(t){case"update_category":case"update_todo":return new Response(JSON.stringify(o),{status:200});default:return new Response(null,{status:404})}}(t,i))}else{if(!e.request.body)return;const t=e.request.clone();e.respondWith(async function(e,t){const s=await e.json();switch(t){case"create_category":return new Response(JSON.stringify(s),{headers:o,status:200});case"create_todo":return new Response(JSON.stringify(s),{status:200});case"log":switch(s.type){case"info":n("%c[INFO]","color: blue; font-weight: 600;",s);break;case"warn":n("%c[WARN]","color: #ff9905; font-weight: 600;",s);break;case"error":n("%c[ERROR]","color: #E56353;; font-weight: 600;",s)}return new Response(null,{status:200});default:return new Response(null,{status:404})}}(t,i))}})),self.addEventListener("install",(e=>{self.skipWaiting()})),self.addEventListener("activate",(e=>{clients.claim()}))})();