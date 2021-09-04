import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import './Menu.css'
function Menu() {

    const [jwt,setJwt] = useState(localStorage.getItem ("jwt"))


    useEffect(() => {

        const JWT = localStorage.getItem("jwt")
        setJwt(JWT)
  
    }, [])


    function clearLocalStorage(){
        localStorage.clear();
        window.location.reload();


    }
    



    return (
        <div>
           <nav>  
              {jwt ?
              (<div className="nav">
                   <form action="">
                    <input type="text"  placeholder="Search your Products"/>
                </form>
                <Link to="/card">Home</Link>
                <Link to="/addProduct">Product</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={clearLocalStorage}>logout</button>
              </div> )   
               : (<div className="nav">
                <form action="">
                  <input type="text"  placeholder="Search your Products"/>
                </form>
                <Link to="/card">Home</Link>
                <Link to="/addProduct">Product</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </div>) }  
               
            </nav>
        </div>
    )
    }    

export default Menu
