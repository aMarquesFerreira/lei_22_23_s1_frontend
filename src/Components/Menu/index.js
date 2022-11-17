import {React} from 'react';
import './style.css';

function App(){

    function myFunction() {
        document.getElementById("mymenu").classList.toggle("show");
      }
      function myFunction2() {
        document.getElementById("Truck").classList.toggle("show");
      }
      function myFunction() {
        document.getElementById("Warehouse").classList.toggle("show");
      }
      
    return(
        <section>
            <div className="menu">
                <button onClick="myFunction()" className="button">
                    Open Menu 
                </button>
                <div id = "mymenu" className="submenu">
                    <button onClick="myFunction2" className="button">
                        Truck
                    </button>
                    <button onClick="myFunction3" className="button">
                        Warehouse
                    </button>
                </div>
                <div id = "Truck" className= "submenu a">
                    <a> Add </a>
                    <a> Modify </a> 
                </div>
                <div id = "Warehouse" className= "submenu a">
                    <a> Add </a>
                    <a> Modify </a>
                </div>
            </div>

        </section>
    )
}
export default App;