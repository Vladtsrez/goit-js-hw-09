import{S as h}from"./assets/vendor-870f0eb5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const f=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],y=document.querySelector("ul.gallery");f.forEach(a=>{const o=document.createElement("li");o.classList.add("gallery-item");const r=document.createElement("a");r.classList.add("gallery-link"),r.href=a.original;const n=document.createElement("img");n.classList.add("gallery-image"),n.src=a.preview,n.dataset.source=a.original,n.alt=a.description,r.appendChild(n),o.appendChild(r),y.appendChild(o)});new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const g=document.querySelector(".form-section"),p=document.createElement("h1");p.classList.add("title");p.textContent="FEEDBACK";g.appendChild(p);const e=document.createElement("form");e.classList.add("form");e.setAttribute("autocomplete","off");const l=document.createElement("label");l.textContent="Email";const s=document.createElement("input");s.classList.add("email-input");s.setAttribute("type","email");s.setAttribute("name","email");s.setAttribute("autofocus","");s.setAttribute("placeholder","Type area");l.appendChild(s);e.appendChild(l);const m=document.createElement("label");m.textContent="Message";const d=document.createElement("textarea");d.setAttribute("name","message");d.setAttribute("rows","8");m.appendChild(d);e.appendChild(m);const u=document.createElement("button");u.setAttribute("type","submit");u.textContent="Submit";e.appendChild(u);g.appendChild(e);function b(){const a={email:e.querySelector('input[name="email"]').value,message:e.querySelector('textarea[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(a))}e.addEventListener("input",a=>{a.target.matches('input[name="email"], textarea[name="message"]')&&b()});function x(){localStorage.removeItem("feedback-form-state"),e.querySelector('input[name="email"]').value="",e.querySelector('textarea[name="message"]').value=""}e.addEventListener("submit",a=>{a.preventDefault();const o={email:e.querySelector('input[name="email"]').value,message:e.querySelector('textarea[name="message"]').value};console.log(o),x()});document.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const o=JSON.parse(a);e.querySelector('input[name="email"]').value=o.email,e.querySelector('textarea[name="message"]').value=o.message}});
//# sourceMappingURL=commonHelpers3.js.map
