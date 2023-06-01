(()=>{"use strict";function t(t){const e=new Date;return e.setDate(e.getDate()+t),e.toISOString()}const e={icons:[{icon_id:1,icon_name:"page.png"},{icon_id:2,icon_name:"home.png"},{icon_id:3,icon_name:"other.png"},{icon_id:4,icon_name:"warning.png"},{icon_id:5,icon_name:"alert.png"},{icon_id:6,icon_name:"ball.png"},{icon_id:7,icon_name:"bug.png"},{icon_id:8,icon_name:"cart.png"},{icon_id:9,icon_name:"favorite.png"},{icon_id:10,icon_name:"inbox.png"},{icon_id:11,icon_name:"life.png"},{icon_id:12,icon_name:"mail.png"},{icon_id:13,icon_name:"twitter.png"},{icon_id:14,icon_name:"note.png"}],statuses:[{status_id:1,status:"низкий",color:"#808080"},{status_id:2,status:"нормальный",color:"#000000"},{status_id:3,status:"повышенный",color:"#008000"},{status_id:4,status:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category:"Работа"},{category_id:2,icon_id:2,category:"Дом"},{category_id:3,icon_id:6,category:"Здоровье"},{category_id:4,icon_id:7,category:"Фигня"}],todos:[{todo_id:1,status_id:1,category_id:1,todo:"Todo1",deleted:!1},{todo_id:2,status_id:2,category_id:2,todo:"Hover your mouse over a project or item and click the icon on the right side of the item for more",due_date:t(-1)},{todo_id:3,status_id:3,category_id:3,todo:"Todo3",due_date:function(t){const e=new Date;return e.setMinutes(e.getMinutes()+1),e.toISOString()}()},{todo_id:4,status_id:4,category_id:1,todo:"Todo4",due_date:t(1),completed:!0,deleted:!1},{todo_id:5,status_id:4,todo:"Todo5"},{todo_id:6,status_id:4,todo:"Todo6",completed:!0,deleted:!1},{todo_id:7,status_id:2,todo:"Todo7",completed:!0,deleted:!0}]};self.VERSION="1.0.0";const o="/api/get_todos",n={"Content-Type":"application/json; charset=utf-8"};let i;const{log:s}=console;async function a(){const t=await caches.open("todo-sw"),e=JSON.stringify(i);await t.put(o,new Response(e,{headers:new Headers({...n,"Cache-Control":"max-age=31536000","Content-Length":String(e.length)})}))}async function c(){if(s("state",i),void 0===i)try{s("sw: try to open cache");const t=await caches.open("todo-sw");s("sw: cache is opened");const n=await t.match(o);if(s("sw: find cache item",n),void 0!==n){const t=await n.json();s("sw: get json from cache item",t),t&&(i=t)}i||(s("sw: cache not found and state is undefined"),i=e,await a())}catch(t){s("loadState",t)}return!0}self.onerror=function(t){const{log:e}=console;e("sw error:",t)},self.addEventListener("fetch",(async function(t){var e=new URL(t.request.url);const o=e.pathname.slice(5);if("POST"===t.request.method){if(!t.request.body)return;const e=t.request.clone();return t.waitUntil(c()),t.respondWith(async function(t,e){const o=await t.json();switch(e){case"create_category":return new Response(JSON.stringify(o),{headers:n,status:200});case"create_todo":return new Response(JSON.stringify(o),{status:200});case"log":{const{log:t}=console;switch(o.type){case"info":t("%c[INFO]","color: blue; font-weight: 600;",o);break;case"warn":t("%c[WARN]","color: #ff9905; font-weight: 600;",o);break;case"error":t(o),t("%c[ERROR]","color: #E56353;; font-weight: 600;",o)}return new Response(null,{status:200})}default:return new Response(null,{status:404})}}(e,o)),void t.waitUntil(a())}if("PATCH"===t.request.method){const e=t.request.clone();return t.waitUntil(c()),t.respondWith(async function(t,e){const o=await t.json();switch(e){case"update_category":case"update_todo":return new Response(JSON.stringify(o),{status:200});default:return new Response(null,{status:404})}}(e,o)),void t.waitUntil(a())}if("DELETE"===t.request.method){const e=t.request.clone();return t.waitUntil(c()),t.respondWith(async function(t,e){const o=await t.json();switch(e){case"delete_category":case"delete_todo":return new Response(JSON.stringify(o),{status:200});default:return new Response(null,{status:404})}}(e,o)),void t.waitUntil(a())}if("GET"===t.request.method&&"/api/get_todos"===e.pathname)return s("sw: /api/get_todos - before loadState()"),void t.respondWith(c().then((()=>(s("sw: /api/get_todos - after loadState()",i),s("sw: start responding on get",i),new Response(JSON.stringify(i),{headers:n})))))})),self.addEventListener("install",(t=>{self.skipWaiting()})),self.addEventListener("activate",(t=>{t.waitUntil((async()=>{i||await c()})()),clients.claim()}))})();