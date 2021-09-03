import React from 'react'
import {Link} from "react-router-dom";
import './Menu.css'
function Menu() {
    return (
        <div>
           <nav>  
                
                <form action="">
                    <input type="text"  placeholder="Search your Products"/>
                </form>
                <Link to="/">Home</Link>
                <Link to="/form">Product</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    )
    }    

export default Menu
