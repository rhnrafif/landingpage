import NameStore from '../components/NameStore.js'
import Brand from '../components/Brand.js'
import Store from '../components/Store.js'
import Products from '../components/Products.js'
import Footer from '../components/Footer.js'
import ProductsDark from '../components/ProductsDark.js'


export default function LandingPage(){
    return `
    <body class="font-root bg-light">
    <div id="app"></div>
        <div class="container max-w-lg mx-auto ">
        
            <!-- Nama Toko -->
            ${NameStore("Rhn Rafif Store ID")}
            <!-- Nama Toko End-->

            <!-- Brand /Logo Toko -->
            ${Brand("./img/nft.png")}
            <!-- Brand /Logo Toko End-->

            <div class="flex flex-col items-center mt-10 mb-8 gap-4">
            <div class="text-xl font-medium ">
                <p>Official Store</p>
            </div>
            <div class="grid grid-cols-2 gap-5">
            
            <!-- Ecommerce Toko -->
            ${Store("./img/shopee.png","https://shopee.co.id/rhnrafif", "Digi Creative")}
            ${Store("./img/tokopedia.png","https://shopee.co.id/rhnrafif", "Digi School")}
            <!--
            ${Store("./img/tokopedia.png","https://shopee.co.id/rhnrafif", "Digi School")}
            ${Store("./img/tokopedia.png","https://shopee.co.id/rhnrafif", "Digi School")}
            -->
            <!-- Ecommerce Toko End-->
            </div> 
        </div>

        <div class="flex flex-col items-center mt-10 mb-8 gap-4">
            <div class="text-xl font-medium">
                <p>Products</p>
            </div>
            <div class="grid grid-cols-2 gap-5">
            
                    ${Products("./img/camera.jpg", "Camera Murahh Canon 360 Wide Angle HD", "200.000", "https://shopee.co.id/rhnrafif")}    
                    ${ProductsDark("./img/camera.jpg", "Camera Murahh", "200.000", "https://shopee.co.id/rhnrafif")}
                    ${ProductsDark("./img/camera.jpg", "Camera Murahh Kanonn 34444 Wireless Cable Dediavted SLot", "200.000", "https://shopee.co.id/rhnrafif")}
                    ${Products("./img/camera.jpg", "Camera Murahh", "200.000", "https://shopee.co.id/rhnrafif")}
            </div>
        </div>
        <!--  -->
    </div>
    ${Footer()}

    <script type="module" src="./main.js"></script>
</body>
    `
}