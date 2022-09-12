export default function NameStore(name){
    return `
       <div class="flex justify-center my-8">
        <h1 class="text-xl text-center leading-10">Welcome to <span id=""
                class="block text-2xl font-semibold text-center">${name}</span></h1>
    </div>
    `
}