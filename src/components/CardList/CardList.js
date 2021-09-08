import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card'



function CardList() {

    const [products, setProducts] = useState([]);
    const [loadPage, setLoadPage] = useState (2);



    useEffect (()=>{

        const fetchProducts = async ()=>{
         const response =   await axios.get(`http://localhost:1337/products?_limit=${loadPage}`)
           console.log(response)
         setProducts (response.data)
        }

        fetchProducts()


    }, [loadPage])

    function loadMore(){
        let dynamicPage = loadPage + 2;
        setLoadPage (dynamicPage)
    }
    function showLess(){
        setLoadPage(2)
    }





    return (
        <div>
            
            {products.map((p)=>{
                return(<Card key={p.id} productId={p.id} image={p.img} name ={p.name} price ={p.price} description={p.description} />
                    )
            })}
            {products.length> loadPage || products.length === loadPage ?
             <button onClick={loadMore}>Load More</button>
             :
            <button onClick={showLess}> Show Less</button>}
             
            
            
        </div>
    )
}

export default CardList
