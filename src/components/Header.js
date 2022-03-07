import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
const Header = () => {
    return ( 
       <nav className="navbar navbar-ligth bg-dark">
           <div className="container">
               <Link to="/"> <button>home</button></Link>
               <Link to="/filmsOther"><button>Films display other way</button></Link>
               <Link to="/userother"><button>Users Display Other way</button></Link>
               <Link to="/films"><button>films</button></Link>
               
           </div>
       </nav>
     );
}
 
export default Header;