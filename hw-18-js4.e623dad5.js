async function t(){try{let t=await fetch("http://localhost:3000/students");if(200!==t.status)throw Error("error");return await t.json()}catch(t){console.error(t)}}async function e(t){let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{let t=await fetch("http://localhost:3000/students",e);if(!t.ok)throw Error("error");return await t.json()}catch(t){console.error(t)}}async function r(t,e){let r={method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{let t=await fetch(`http://localhost:3000/students/${e}`,r);if(!t.ok)throw Error("error");return await t.json()}catch(t){console.log(t)}}async function n(t){try{let e=await fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"});if(!e.ok)throw Error("error");return await e.json()}catch(t){console.log(t)}}let a=document.querySelector("tbody"),o=document.querySelector("#add-student-form"),l=document.querySelector("#get-students-btn"),s=null;async function c(){try{a.innerHTML=(await t()).map(({id:t,name:e,age:r,course:n,skills:a,email:o,isEnrolled:l})=>`
        <tr id="${t}">
    <th>${t}</th>
    <th class="name">${e}</th>
    <th class="age">${r}</th>
    <th class="course">${n}</th>
    <th class="skills">${a}</th>
    <th class="email">${o}</th>
    <th class="is-enrolled">${l?"Student":"Isn't student"}</th>
    <th>
        <button data-action="delete" class="delete" type="button">delete</button>
        <button data-action="update" class="update" type="button">update</button>
    </th>
</tr>`).join("")}catch(t){console.log(t)}}l.addEventListener("click",async t=>{t.preventDefault(),await c()}),o.addEventListener("submit",async t=>{t.preventDefault();let n=t.currentTarget.elements,a={name:n.name.value,age:n.age.value,course:n.course.value,skills:n.skills.value,email:n.email.value,isEnrolled:n.isEnrolled.checked};null===s?await e(a):(await r(a,s),s=null),o.reset(),c()}),a.addEventListener("click",async t=>{if("BUTTON"!==t.target.nodeName)return;let e=t.target.dataset.action,r=t.target.closest("tr"),a=r.id;if("delete"===e){await n(a),c();return}"edit"===e&&(s=a,o.elements[0].value=r.querySelector(".name").textContent,o.elements[1].value=r.querySelector(".age").textContent,o.elements[2].value=r.querySelector(".course").textContent,o.elements[3].value=r.querySelector(".skills").textContent,o.elements[4].value=r.querySelector(".email").textContent,o.elements[5].checked="Student"===r.querySelector(".is-enrolled").textContent.trim())});
//# sourceMappingURL=hw-18-js4.e623dad5.js.map
