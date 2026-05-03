import{a as d,S as m,i as n}from"./assets/vendor-BAQQTdrx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="55699882-78e76ba09440d2b00f4853bc0";function p(o){return d("https://pixabay.com/api/",{params:{key:f,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){l.innerHTML=o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u})=>`
            <li class="gallery-item">
                <a href="${s}">
                    <img src="${r}" alt="${i}" />
                </a>
                <p>Likes: ${e}</p>
                <p>Views: ${t}</p>
                <p>Comments: ${a}</p>
                <p>Downloads: ${u}</p>
            </li>
        `).join(""),h.refresh()}function g(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function b(){c.classList.add("hidden")}const x=document.querySelector(".form");x.addEventListener("submit",F);function F(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();r&&(g(),L(),p(r).then(({hits:s})=>{s.length>0?y(s):n.show({color:"#EF4040",messageColor:"#FAFAFB",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"322px"})}).catch(s=>{n.show({color:"#EF4040",messageColor:"#FAFAFB",message:`${s.message}`,maxWidth:"322px"})}).finally(()=>{o.target.reset(),b()}))}
//# sourceMappingURL=index.js.map
