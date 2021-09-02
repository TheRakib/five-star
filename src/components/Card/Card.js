import React from 'react'

function Card({ProductName, price , description}) {
    return (
        <div>
            <div> Product Name : {ProductName}</div>
            <div> Price : {price}</div>
            <div> Description : {description} </div>
        </div>
    )
}

export default Card
