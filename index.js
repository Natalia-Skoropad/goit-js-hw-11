import{a as c,S as u,i as l}from"./assets/vendor-2NRXftFG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},d="https://pixabay.com/api/",f="51833962-a1f170a3ab3673d4610a8ef06";async function m(a){const r={key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0},{data:o}=await c.get(d,{params:r});return o}let p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const r=a.map(L).join("");i.gallery.insertAdjacentHTML("beforeend",r),p.refresh()}function y(){i.gallery.innerHTML=""}function h(){i.loader.classList.remove("hidden"),i.loader.setAttribute("aria-hidden","false")}function b(){i.loader.classList.add("hidden"),i.loader.setAttribute("aria-hidden","true")}function L({webformatURL:a,largeImageURL:r,tags:o,likes:s,views:e,comments:t,downloads:n}){return`
  <li class="gallery-item">
    <a href="${r}">
      <img src="${a}" alt="${o}" loading="lazy" />
    </a>
    <div class="info">
      <p><b>Likes</b><br>${s}</p>
      <p><b>Views</b><br>${e}</p>
      <p><b>Comments</b><br>${t}</p>
      <p><b>Downloads</b><br>${n}</p>
    </div>
  </li>`}i.form.addEventListener("submit",w);async function w(a){a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(!r){l.warning({title:"Warning",message:"Please enter a search term",position:"topRight",timeout:5e3});return}y();try{h();const o=await m(r);if(!o.hits||o.hits.length===0){l.error({title:"",message:"Sorry, there are no images matching<br />your search query. Please try again!",position:"topRight",timeout:5e3});return}g(o.hits)}catch(o){l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:5e3}),console.error(o)}finally{b()}}
//# sourceMappingURL=index.js.map
