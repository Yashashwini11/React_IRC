import './assets/css/Style.css'
import Nav from "./Componets/Nav";
import Footer from "./Componets/Footer";
function App(){
    return(
    <div>
        <Nav/>
        <Footer/>
        <form class="container">
            <h3>LOGIN PAGE</h3>
            <input type="text" className="it" name="Username" id="" placeholder="username"/>
            <input type="password" className="it"name="password" id="" placeholder="password"/>
            <input type="button"className="bt" value="SUBMIT"/>
        </form>
    </div>
    )
}
export default App