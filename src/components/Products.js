export default function Products(src, product, price, linkProduct){
    return `
    <div
        class="flex flex-col justify-center max-w-[150px] p-1 gap-1 rounded-lg text-dark bg-white outline outline-1 outline-dark drop-shadow-[5px_6px_7px_rgba(0,0,0,0.130)]">
        <div class="h-full w-full rounded-lg overflow-hidden">
            <a href="${linkProduct}" target="_blank"><img class="w-full h-full" src="${src}" alt="${product}"></a>
        </div>
        <div class="h-full w-full flex flex-col items-center justify-between p-1 gap-2">
            <h2 class="text-base font-medium">${product}</h2>
            <p class="text-lg font-semibold ">Rp. <span>${price}</span></p>
        </div>
    </div>
  
    `
}