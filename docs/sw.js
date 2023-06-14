(()=>{"use strict";function e(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const t={todos:[{todo_id:1,status_id:1,category_id:1,todo:"Todo1",deleted:!1},{todo_id:2,status_id:2,category_id:2,todo:"Hover your mouse over a project or item and click the icon on the right side of the item for more",due_date:e(-1)},{todo_id:3,status_id:3,category_id:3,todo:"Todo3",due_date:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+1),t.toISOString()}()},{todo_id:4,status_id:4,category_id:1,todo:"Todo4",due_date:e(1),completed:!0,deleted:!1},{todo_id:5,status_id:4,todo:"Todo5"},{todo_id:6,status_id:4,todo:"Todo6",completed:!0,deleted:!1},{todo_id:7,status_id:2,todo:"Todo7",completed:!0,deleted:!0}]};self.VERSION="1.0.0";const o="/api/get_todos",s={"Content-Type":"application/json; charset=utf-8"},{log:n}=console;let a;async function i(){const e=await caches.open("todo-sw"),t=JSON.stringify(a);await e.put(o,new Response(t,{headers:new Headers({...s,"Cache-Control":"max-age=31536000","Content-Length":String(t.length)})}))}async function d(){if(void 0===a)try{const e=await caches.open("todo-sw"),s=await e.match(o);if(void 0!==s){const e=await s.json();e&&(a=e)}a||(a=t,await i())}catch(e){n("sw: error in loadState",e)}return!0}self.onerror=function(e){const{log:t}=console;t("sw error:",e)},self.addEventListener("fetch",(async function(e){var t=new URL(e.request.url);const o=t.pathname.slice(5);if("POST"!==e.request.method)if("PATCH"!==e.request.method)if("DELETE"!==e.request.method)"GET"!==e.request.method||"/api/get_todos"!==t.pathname||e.respondWith(d().then((()=>new Response(JSON.stringify(a),{headers:s}))));else{const t=e.request.clone();e.respondWith(d().then((()=>async function(e,t){const o=await e.json();switch(t){case"delete_category":case"delete_todo":return new Response(JSON.stringify(o),{status:200});default:return new Response(null,{status:404})}}(t,o))).then((e=>(i(),e))))}else{const t=e.request.clone();e.respondWith(d().then((()=>async function(e,t){const o=await e.json();switch(t){case"update_category":case"update_todo":return new Response(JSON.stringify(o),{status:200});default:return new Response(null,{status:404})}}(t,o))).then((e=>(i(),e))))}else{if(!e.request.body)return;const t=e.request.clone();e.respondWith(d().then((()=>async function(e,t){const o=await e.json();switch(t){case"create_category":return new Response(JSON.stringify(o),{headers:s,status:200});case"create_todo":return new Response(JSON.stringify(o),{status:200});case"log":{const{log:e}=console;switch(o.type){case"info":e("%c[INFO]","color: blue; font-weight: 600;",o);break;case"warn":e("%c[WARN]","color: #ff9905; font-weight: 600;",o);break;case"error":e(o),e("%c[ERROR]","color: #E56353;; font-weight: 600;",o)}return new Response(null,{status:200})}default:return new Response(null,{status:404})}}(t,o))).then((e=>(i(),e))))}})),self.addEventListener("install",(e=>{self.skipWaiting()})),self.addEventListener("activate",(e=>{e.waitUntil((async()=>{a||await d()})()),clients.claim()}))})();