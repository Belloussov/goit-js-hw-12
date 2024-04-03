import{a as S,S as v,i as l}from"./assets/vendor-2cfd16ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function p(o,e){const s="https://pixabay.com",n="/api/",t={key:"42985160-4d9b5f931f1b68b881db47de1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e},r=`${s}${n}`;return(await S.get(r,{params:t})).data}function y(o){return o.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <ul class="img-description">
        <li>
          <h3>Likes</h3>
          <p>${e.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p>${e.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p>${e.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${e.downloads}</p>
        </li>
      </ul>
    </li>`).join("")}const g=document.querySelector(".form"),u=document.querySelector(".gallery"),h=document.querySelector(".btn"),L=document.querySelector(".loader");let c,i=1,b=0;const $=15;let m=new v(".gallery a",{captionsData:"alt",captionDelay:250});m.on("show.simplelightbox",function(){});function d(){i>=b?(w(),l.warning({message:"We are sorry, but you have reached the end of search results.",color:"blue",position:"topRight"})):M()}function q(){const o=u.firstChild.getBoundingClientRect().height;console.log(o),scrollBy({top:o*2,behavior:"smooth"})}function M(){return h.classList.remove("is-hidden")}function w(){return h.classList.add("is-hidden")}function P(){return L.classList.remove("is-hidden")}function f(){return L.classList.add("is-hidden")}f();w();g.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements.search.value.trim(),c==="")return l.warning({message:"Please complete the field!",color:"red",position:"topRight"});u.innerHTML="",i=1,P();try{const e=await p(c,i);b=Math.ceil(e.totalHits/$);const s=y(e.hits);e.hits.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),d()):(u.insertAdjacentHTML("beforeend",s),m.refresh(),d())}catch{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{f(),g.reset()}});h.addEventListener("click",async o=>{P(),i+=1;const e=await p(c,i),s=y(e.hits);u.insertAdjacentHTML("beforeend",s),q(),m.refresh(),f(),d()});
//# sourceMappingURL=commonHelpers.js.map
