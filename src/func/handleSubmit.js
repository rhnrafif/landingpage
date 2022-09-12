import Brand from "../components/Brand";
import NameStore from "../components/NameStore";
import LandingPage from "../view/LandingPage";

export default function handleSubmit(){
let home_login = document.getElementById('home_login');

home_login.addEventListener("submit", (e)=>{
e.preventDefault();

let namaToko = e.target.namaToko.value;
let brand = e.target.brand.value;

if(!namaToko){
    alert('Silahkan isi dengan benar')
}
NameStore(namaToko);
Brand(brand);
e.target.namaToko.value = "";
e.target.brand.value = "";

})
}