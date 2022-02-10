import { Link } from "react-router-dom";
import "./NavBar.css"
import * as userService from "../../utilities/users-service";

export default function NavBar({user, setUser}){
    
    
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    return (
    <>
    <div className="logo-container">
       <h2>GEM<img className="logo" src="/GEM.jpg"></img>METRY</h2>
    </div>
    <nav>
        <Link to="/">JEWELRY</Link>
        &nbsp; | &nbsp;
       <Link to ="/orders/history">ORDER HISTORY</Link> 
       &nbsp; | &nbsp;
       <Link to ="/orders/cart">SHOPPING CART</Link> 
       &nbsp; | &nbsp;
       <span>Welcome, {user.name.toUpperCase()}!</span>
       &nbsp; | &nbsp;
       <Link onClick={handleLogOut} to="">LOG OUT</Link>
    </nav>
    </>
    )
}