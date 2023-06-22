(()=>{"use strict";const{log:t}=console,e=["info","warn","error"],o={info:e=>{t("%c[INFO]","color: blue; font-weight: 600;",e)},warn:e=>{t("%c[WARN]","color: #ff9905; font-weight: 600;",e)},error:e=>{t("%c[ERROR]","color: #E56353;; font-weight: 600;",e)}},n="/api/get_todos",r={"Content-Type":"application/json; charset=utf-8"};let i={todos:[],categories:[],statuses:[],icons:[]};function c(){return i}function a(t){i=t}async function d(){const t=c(),e=await caches.open("todo-sw"),o=JSON.stringify(t);await e.put(n,new Response(o,{headers:new Headers({...r,"Cache-Control":"max-age=31536000","Content-Length":String(o.length)})}))}function s(t){const e=new Date;return e.setDate(e.getDate()+t),e.toISOString()}const u={icons:[{icon_id:1,icon_name:"page.png"},{icon_id:2,icon_name:"home.png"},{icon_id:3,icon_name:"other.png"},{icon_id:4,icon_name:"warning.png"},{icon_id:5,icon_name:"alert.png"},{icon_id:6,icon_name:"ball.png"},{icon_id:7,icon_name:"bug.png"},{icon_id:8,icon_name:"cart.png"},{icon_id:9,icon_name:"favorite.png"},{icon_id:10,icon_name:"inbox.png"},{icon_id:11,icon_name:"life.png"},{icon_id:12,icon_name:"mail.png"},{icon_id:13,icon_name:"twitter.png"},{icon_id:14,icon_name:"note.png"}],statuses:[{status_id:1,status:"низкий",color:"#808080"},{status_id:2,status:"нормальный",color:"#000000"},{status_id:3,status:"повышенный",color:"#008000"},{status_id:4,status:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category:"Работа"},{category_id:2,icon_id:2,category:"Дом"},{category_id:3,icon_id:6,category:"Здоровье"},{category_id:4,icon_id:7,category:"Фигня"}],todos:[{todo_id:1,status_id:1,category_id:1,todo:"Todo1",deleted:!1},{todo_id:2,status_id:2,category_id:2,todo:"Hover your mouse over a project or item and click the icon on the right side of the item for more",due_date:s(-1)},{todo_id:3,status_id:3,category_id:3,todo:"Todo3",due_date:function(t){const e=new Date;return e.setMinutes(e.getMinutes()+1),e.toISOString()}()},{todo_id:4,status_id:4,category_id:1,todo:"Todo4",due_date:s(1),completed:!0,deleted:!1},{todo_id:5,status_id:4,todo:"Todo5"},{todo_id:6,status_id:4,todo:"Todo6",completed:!0,deleted:!1},{todo_id:7,status_id:2,todo:"Todo7",completed:!0,deleted:!0}]};async function _(){if(0===c().icons.length)try{const t=await caches.open("todo-sw"),e=await t.match(n);if(void 0!==e){const t=await e.json();t&&a(t)}0===c().icons.length&&(a(u),await d())}catch(t){o.error({message:"sw: error in loadState",error:t})}}function g(t,e){return new Response(JSON.stringify({error:{code:500,error:t,data:e}}),{headers:r,status:200})}function f(t,e){t.respondWith(_().then((async()=>{const t=await e();return await d(),t})))}function y(){return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:r,status:200})}function l(t){return"number"==typeof t&&Number.isInteger(t)}function p(t){return null!=t}function h(t,e,o){return t>=e&&t<=o}function m(t){return"string"==typeof t}function w(t){return"boolean"==typeof t}function v(t){return null==t}function b(t,e){const o=Object.keys(e);for(let n=0;n<o.length;n++){const r=e[o[n]],[i,c]=r;if(!1===i(t))return{error:c}}return{entity:t}}const S=(!1,t=>{if(w(t))return t;if(m(t))switch(t.toLowerCase()){case"true":return!0;case"false":return!1;default:return}return!v(t)&&void 0});const k=[t=>p(t.status_id)&&l(t.status_id),"обязательное поле status_id должно быть целым числом"],O=[t=>v(t.category_id)||l(t.category_id),"необязательное поле category_id должно быть целым числом"],R=[function(t){return!!m(t.todo)&&h(t.todo.length,5,100)},"длина названия todo должна быть более 5 символов и не превышать 100 символов"],j=[function(t){return!!v(t.description)||!!m(t.description)&&h(t.description.length,10,1e3)},"длина description должна быть более 10 символов и не превышать 1000 символов"],E=[t=>function(t){return!p(t)}(t.due_date)||m(t.due_date),"необязательное поле due_date должно быть строкой ISO 8086"],T=[t=>w(t.completed),"поле completed должно быть boolean"],I=[t=>v(t.deleted)||w(t.deleted),"поле deleted должно быть boolean"];function N(t){const{todo_id:e,todo:o,status_id:n,category_id:r,description:i,due_date:c,deleted:a,completed:d}=t;return{todo_id:e,todo:(s=o,"string"==typeof s?s[0].toUpperCase()+s.slice(1):void 0),status_id:n,category_id:r,description:i,due_date:c,deleted:S(a),completed:S(d)};var s}const C={todo_id:[t=>p(t.todo_id)&&l(t.todo_id),"обязательное поле todo_id должно быть целым числом"],status_id:k,category_id:O,todo:R,description:j,due_date:E,completed:T,deleted:I},x={status_id:k,category_id:O,todo:R,description:j,due_date:E,completed:T,deleted:I};function L(t,e,o){let n;if(n="create"===o?function(t){return b(N(t),x)}(t):function(t){return b(N(t),C)}(t),!n.entity)return n;const r=n.entity;if("add"===o||"create"===o||"update"===o){var i;if(!1===e.statuses.some((t=>t.status_id===r.status_id)))return{error:"Статус задачи не обнаружен в стправочнике!!"};if(r.category_id&&!e.categories||!1===(null===(i=e.categories)||void 0===i?void 0:i.some((t=>r.category_id===t.category_id))))return{error:"Категория задачи не обнаружена в стправочнике!!"}}return"add"===o&&e.todos.find((t=>t.todo_id===r.todo_id))?{error:"Нарушение уникальности идентификатора задач"}:"delete"===o&&!1===e.todos.some((t=>t.todo_id===r.todo_id))?{error:"Задача не найдена!"}:{entity:r}}function D(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return new Response(JSON.stringify({result:t}),{headers:r,status:e})}const J=[function(t){return!!m(t.category)&&h(t.category.length,3,20)},"Длина названия категории должна быть более 3 символов и не превышать 20 символов"],W=[t=>p(t.icon_id)&&l(t.icon_id),"Category обязан иметь icon_id целым числом"];function M(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{category_id:e,category:o,icon_id:n}=t;return{category_id:e,category:o,icon_id:n}}const q={category_id:[t=>p(t.category_id)&&l(t.category_id),"Category обязан иметь category_id целым числомr"],category:J,icon_id:W},H={category:J,icon_id:W};function U(t,e,o){let n;if(n="create"===o?function(t){return b(M(t),H)}(t):function(t){return b(M(t),q)}(t),void 0!==n.error)return n;const r=n.entity;if(("add"===o||"create"===o||"update"===o)&&e.categories.find((t=>t.category===r.category&&t.category_id!==r.category_id)))return{error:"Нарушение уникальности имени категории"};if("add"===o&&e.categories.find((t=>t.category_id===r.category_id)))return{error:"Нарушение уникальности идентификатора категории"};if("delete"===o){if(e.todos.some((t=>t.category_id===r.category_id)))return{error:"Нельзя удалить Категорию - с ней связаны задачи!"};if(!1===e.categories.some((t=>t.category_id===r.category_id)))return{error:`Категория "${r.category_id}" не найдена`}}return{entity:n.entity}}self.VERSION="1.0.0",self.onerror=function(t){o.error({error:"sw error:",event:t})},self.addEventListener("install",(function(t){self.skipWaiting()})),self.addEventListener("activate",(function(t){t.waitUntil(async function(){await _()}()),clients.claim()})),self.addEventListener("fetch",(async function(t){const n=t.request.clone();var i=new URL(t.request.url);const a=i.pathname.slice(5);switch(t.request.method){case"GET":!async function(t,e){"/api/get_todos"===e&&t.respondWith(_().then((()=>{const t=c();return new Response(JSON.stringify(t),{headers:r})})))}(t,i.pathname);break;case"POST":f(t,(()=>async function(t,n){switch(n){case"create_category":return async function(t){try{const e=c(),o=await t.json(),{entity:n,error:r}=U(o,e,"create");if(n){const t=e.categories.map((t=>t.category_id))||[1],o=Math.max(...t)+1,r={...n,category_id:o};return e.categories.push(r),D(r)}return g(r)}catch(t){const{message:e,stack:o}=t;return g(e,o)}}(t);case"create_todo":return async function(t){try{const e=c(),o=await t.json(),{entity:n,error:r}=L(o,e,"create");if(n){const t=e.todos.map((t=>t.todo_id))||[1],o=Math.max(...t)+1,r={...n,todo_id:o};return e.todos.push(r),D(r)}return g(r)}catch(t){const{message:e,stack:o}=t;return g(e,o)}}(t);case"log":return async function(t){const n=await t.json(),{type:r,...i}=n;return e.includes(r)?o[r](i):o.error({msg:"Не известный тип логгирования",data:n}),new Response(null,{status:200})}(t);default:return y()}}(n,a)));break;case"PATCH":f(t,(()=>async function(t,e){switch(e){case"update_category":return async function(t){try{const e=c(),o=await t.json(),{entity:n,error:r}=U(o,e,"update");if(n){const t=e.categories.findIndex((t=>t.category_id===n.category_id));return e.categories[t]=n,D(n)}return g(r)}catch(t){const{message:e,stack:o}=t;return g(e,o)}}(t);case"update_todo":return async function(t){try{const e=c(),o=await t.json(),{entity:n,error:r}=L(o,e,"update");if(n){const t=e.categories.findIndex((t=>t.category_id===n.category_id));return-1===t?y():(e.todos[t]=n,D(n))}return g(r)}catch(t){const{message:e,stack:o}=t;return g(e,o)}}(t);default:return y()}}(n,a)));break;case"DELETE":f(t,(()=>async function(t,e){switch(e){case"delete_category":return async function(t){try{const e=c(),o=await t.json(),{entity:n,error:r}=U(o,e,"delete");if(n){const t=e.categories.findIndex((t=>t.category_id===n.category_id)),o=e.categories[t];return e.categories.splice(t,1),D(o)}return g(r)}catch(t){const{message:e,stack:o}=t;return g(e,o)}}(t);case"delete_todo":return async function(t){try{const e=c(),o=await t.json(),{entity:n,error:r}=L(o,e,"delete");if(n){const t=e.todos.findIndex((t=>t.todo_id===n.todo_id));if(-1===t)return y();const o=e.todos[t];return e.todos.splice(t,1),D(o)}return g(r)}catch(t){const{message:e,stack:o}=t;return g(e,o)}}(t);default:return y()}}(n,a)));break;default:t.respondWith(g("Не допустимый http метод"))}}))})();