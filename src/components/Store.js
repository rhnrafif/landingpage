export default function Store(ecomm,linkToko, storeName){
    return `
        <div class="w-full flex justify-center items-center gap-2 px-2 py-1 bg-dark text-white rounded-md">
            <div class="w-7">
                <img id="" src="${ecomm}" alt="">
            </div>
            <div class="text-[18px]">
                <a id="" href="${linkToko}" target="_blank">${storeName}</a>
            </div>
        </div>
    `
}