(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();function f(){return`
   <div class="container w-full max-w-md h-[100vh] mx-auto flex items-center">
        <form action="" autocomplete="off" id="home_login"
            class="w-full bg-teal-700 text-white p-6 flex flex-col justify-center items-center gap-4 rounded-lg">
            <div class="w-[300px] flex justify-between items-center">
                <label for="namaToko">Nama Toko</label>
                <input class="px-2 py-1 text-dark text-base rounded-xl" type="text" id="namaToko">
            </div>
            <div class="w-[300px] flex justify-between items-center">
                <label for="brand">Directori Brand</label>
                <input class="px-2 py-1 text-dark text-base rounded-xl" type="text" id="brand">
            </div>
            <button class="w-1/2 h-10 bg-light text-dark px-2 py-1 rounded-lg mt-4" type="submit" onclick="">SUBMIT</button>
        </form>
    </div>
 `}function p(a){return`
       <div class="flex justify-center my-8">
        <h1 class="text-xl text-center leading-10">Welcome to <span id=""
                class="block text-2xl font-semibold text-center">${a}</span></h1>
    </div>
    `}function u(a){return`
    <div class="w-[200px] mx-auto mt-10 mb-8">
            <img id="" src="${a}" alt="">
        </div>
    `}function o(a,t,l){return`
        <div class="w-full flex justify-center items-center gap-2 px-2 py-1 bg-dark text-white rounded-md">
            <div class="w-7">
                <img id="" src="${a}" alt="">
            </div>
            <div class="text-[18px]">
                <a id="" href="${t}" target="_blank">${l}</a>
            </div>
        </div>
    `}function d(a,t,l,r){return`
    <div
        class="flex flex-col justify-center max-w-[150px] p-1 gap-1 rounded-lg text-dark bg-white outline outline-1 outline-dark drop-shadow-[5px_6px_7px_rgba(0,0,0,0.130)]">
        <div class="h-full w-full rounded-lg overflow-hidden">
            <a href="${r}" target="_blank"><img class="w-full h-full" src="${a}" alt="${t}"></a>
        </div>
        <div class="h-full w-full flex flex-col items-center justify-between p-1 gap-2">
            <h2 class="text-base font-medium">${t}</h2>
            <p class="text-lg font-semibold ">Rp. <span>${l}</span></p>
        </div>
    </div>
  
    `}function m(){return`
    <div class="w-full mx-auto p-3 flex flex-col items-center justify-center gap-2 bg-dark text-white">
        <p class="text-xs">Made by <span class="font-medium"><a href="https://instagram.com/rhnrafif" target="_blank">rhnRafif</a></span> </p>
        <p class="text-xs">Check our <span class="bg-white text-dark mx-1 px-1 rounded font-medium"><a href="https://rhnrafif.site" target="_blank">Official
                    Store</a></span></p>
    </div>
    `}function c(a,t,l,r){return`
        <div
        class="flex flex-col justify-center max-w-[150px] p-1 gap-1 rounded-lg text-white bg-dark  drop-shadow-[5px_6px_7px_rgba(0,0,0,0.130)]">
        <div class="h-full w-full rounded-lg outline outline-1 outline-white overflow-hidden">
            <a href="${r}" target="_blank"><img class="w-full h-full" src="${a}" alt="${t}"></a>
        </div>
        <div class="h-full w-full flex flex-col items-center justify-between p-1 gap-2">
            <h2 class="text-base font-medium">${t}</h2>
            <p class="text-lg font-semibold ">Rp. <span>${l}</span></p>
        </div>
    </div>
  
`}function x(){return`
    <body class="font-root bg-light">
    <div id="app"></div>
        <div class="container max-w-lg mx-auto ">
        
            <!-- Nama Toko -->
            ${p("Rhn Rafif Store ID")}
            <!-- Nama Toko End-->

            <!-- Brand /Logo Toko -->
            ${u("./img/nft.png")}
            <!-- Brand /Logo Toko End-->

            <div class="flex flex-col items-center mt-10 mb-8 gap-4">
            <div class="text-xl font-medium ">
                <p>Official Store</p>
            </div>
            <div class="grid grid-cols-2 gap-5">
            
            <!-- Ecommerce Toko -->
            ${o("./img/shopee.png","https://shopee.co.id/rhnrafif","Digi Creative")}
            ${o("./img/tokopedia.png","https://shopee.co.id/rhnrafif","Digi School")}
            <!--
            ${o("./img/tokopedia.png","https://shopee.co.id/rhnrafif","Digi School")}
            ${o("./img/tokopedia.png","https://shopee.co.id/rhnrafif","Digi School")}
            -->
            <!-- Ecommerce Toko End-->
            </div> 
        </div>

        <div class="flex flex-col items-center mt-10 mb-8 gap-4">
            <div class="text-xl font-medium">
                <p>Products</p>
            </div>
            <div class="grid grid-cols-2 gap-5">
            
                    ${d("./img/camera.jpg","Camera Murahh Canon 360 Wide Angle HD","200.000","https://shopee.co.id/rhnrafif")}    
                    ${c("./img/camera.jpg","Camera Murahh","200.000","https://shopee.co.id/rhnrafif")}
                    ${c("./img/camera.jpg","Camera Murahh Kanonn 34444 Wireless Cable Dediavted SLot","200.000","https://shopee.co.id/rhnrafif")}
                    ${d("./img/camera.jpg","Camera Murahh","200.000","https://shopee.co.id/rhnrafif")}
            </div>
        </div>
        <!--  -->
    </div>
    ${m()}

    <script type="module" src="./main.js"><\/script>
</body>
    `}function g(){return`
       <div class="container w-full max-w-md h-[100vh] mx-auto flex items-center">
      <form action="" class="w-full bg-teal-700 text-white p-6 flex flex-col justify-center items-center gap-4 rounded-lg">
         <div class="w-[300px] flex justify-between items-center">
               <label for="namaToko">Nama Toko</label>
               <input class="text-dark text-base rounded-xl" type="text" id="namaToko">
         </div>
        <div class="w-[300px] flex justify-between items-center">
            <label for="ecomm">Directori Ecommerce</label>
            <input class="text-dark text-base rounded-xl" type="text" id="ecomm">
        </div>
        <div class="w-[300px] flex justify-between items-center">
            <label for="link_ecomm">Link Ecommerce</label>
            <input class="text-dark text-base rounded-xl" type="text" id="link_ecomm">
        </div>
        <div class="w-[300px] flex justify-between items-center">
            <label for="namaOfficialStore">Nama Toko Ecommerce</label>
            <input class="text-dark text-base rounded-xl" type="text" id="namaOfficialStore">
        </div>
        <div class="w-[300px] flex justify-between items-center">
            <label for="file_product">Direktori File Produk</label>
            <input class="text-dark text-base rounded-xl" type="text" id="file_product">
        </div>
        <div class="w-[300px] flex justify-between items-center">
            <label for="product">Nama Produk</label>
            <input class="text-dark text-base rounded-xl" type="text" id="product">
        </div>
        <div class="w-[300px] flex justify-between items-center">
            <label for="price">Harga</label>
            <input class="text-dark text-base rounded-xl" type="text" id="price">
        </div>
         <button class="w-1/2 h-10 bg-light text-dark px-2 py-1 rounded-lg mt-4" type="submit">SUBMIT</button>
      </form>
   </div>
    `}const n=document.getElementById("app"),h=document.location.pathname;switch(h){case"/home":n.innerHTML=f();break;case"/admin":n.innerHTML=g();break;case"/":n.innerHTML=x();break}
