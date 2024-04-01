import{a as u,S as f,i as n}from"./assets/vendor-2cfd16ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function g(o){const e="https://pixabay.com/api",s={key:"42985160-4d9b5f931f1b68b881db47de1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return(await u.get(e,{params:s})).data}function h(o){return o.map(e=>`<li class="gallery-item">
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
    </li>`).join("")}console.log(u.isCancel("something"));const l=document.querySelector(".form"),c=document.querySelector(".gallery");let d=new f(".gallery a",{captionsData:"alt",captionDelay:250});d.on("show.simplelightbox",function(){});const m=document.querySelector(".loader");function y(){return m.classList.remove("is-hidden")}function p(){return m.classList.add("is-hidden")}p();l.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements.search.value.trim();if(e==="")return n.warning({message:"Please complete the field!",color:"red",position:"topRight"});c.innerHTML="",y();try{const s=await g(e),i=h(s.hits);s.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}):(c.insertAdjacentHTML("beforeend",i),d.refresh())}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{p(),l.reset()}});
//# sourceMappingURL=commonHelpers.js.map
