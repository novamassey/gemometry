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
            <img className="logo" src="/GEMsimple.png"></img>
        </div>
        <nav className="navText">
            { user ? 
            <>
            
            <Link to="/">JEWELRY</Link>
            &nbsp; | &nbsp;
            <Link to ="/orders/cart">SHOPPING CART</Link> 
            &nbsp; | &nbsp;
            <Link to ="/orders/history">ORDER HISTORY</Link> 
            &nbsp; | &nbsp;
            <Link onClick={handleLogOut} to="">LOG OUT</Link>
            &nbsp; | &nbsp;
            <span class="navGreet">Welcome, {user.name.toUpperCase()}!</span>
            <hr/>
            </>
            
            :
            <>
            <Link to="/">JEWELRY</Link>
            &nbsp; | &nbsp;
            <Link to ="/orders/cart">SHOPPING CART</Link> 
            &nbsp; | &nbsp;
            <Link to ="/login">LOGIN/ SIGNUP</Link>
            <hr/>
            </>
            
            }
        </nav>
    </>
    )
}