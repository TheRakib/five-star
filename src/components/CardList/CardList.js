import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card'



function CardList() {

    const [products, setProducts] = useState([]);


    useEffect (()=>{

        const fetchProducts = async ()=>{
         const response =   await axios.get("http://localhost:1337/products")

         setProducts (response.data)
        }

        fetchProducts()


    }, [])





    return (
        <div>
            <h1>
                Hello
            </h1>
            
            {products.map((p)=>{
                return(<Card key={p.id} image={p.img} name ={p.name} price ={p.price} description={p.description} />
                    )
            })}
            
        </div>
    )
}

export default CardList
