export default function ProductsDark(src2, product2, price2, linkProduct2){
return `
        <div
        class="flex flex-col justify-center max-w-[150px] p-1 gap-1 rounded-lg text-white bg-dark  drop-shadow-[5px_6px_7px_rgba(0,0,0,0.130)]">
        <div class="h-full w-full rounded-lg outline outline-1 outline-white overflow-hidden">
            <a href="${linkProduct2}" target="_blank"><img class="w-full h-full" src="${src2}" alt="${product2}"></a>
        </div>
        <div class="h-full w-full flex flex-col items-center justify-between p-1 gap-2">
            <h2 class="text-base font-medium">${product2}</h2>
            <p class="text-lg font-semibold ">Rp. <span>${price2}</span></p>
        </div>
    </div>
  
`

}