import React from 'react'
import {useState} from 'react'
import './Form.css'

function Form() {

    const initialValues = {
        ProductName:"",
        price:""
    }

    const [formValues, setFormValues] = useState(initialValues)

     function onHandleSubmit(e){
         e.preventDefault();

    }

    function onHandleChange(e){
        setFormValues({...formValues, [e.target.name] : e.target.value});

    };
    return (
        <div>
          <form onHandleSubmit={onHandleSubmit}>
              <input value={formValues.productName} type="name" name="productName" onHandleChange={onHandleChange} placeholder="type the product" />
              <input  value={formValues.price} type="number" name="price" onHandleChange={onHandleChange} placeholder="type the price"/>

              <button>Add more</button>
          </form>
        </div>
    )
}

export default Form
