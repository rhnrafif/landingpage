export default function Stores(){
    return `
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
    `
}