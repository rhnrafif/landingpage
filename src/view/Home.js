
export default function Home(){
 return `
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
 `


}