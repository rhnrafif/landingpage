import "./styles.css"
import Home from "./src/view/Home";
import LandingPage from "./src/view/LandingPage";
import Stores from "./src/view/Stores";

const app = document.getElementById('app');
const page = document.location.pathname;


switch (page){
    case '/home':
        app.innerHTML = Home();
        break;
    case '/':
        app.innerHTML = Stores();
        break;
    case '/admin':
        app.innerHTML = LandingPage();
        break;
}