import axios from 'axios';
import React, {useState} from 'react'

function AddToCard() {

    const initialValues = {
        name: "",
        description: "",
        price:0
    }
   

    const [formValues, setFormValues] = useState(initialValues);

    function handleOnChange(e) {
        setFormValues({...formValues, [e.target.name] : e.target.value})
      }

      function onHandleSubmit(e){
        e.preventDefault();
          axios.post("http://localhost:1337/products", {
              name : formValues.name,
              description: formValues.description,
              price:formValues.price
          }).then((res)=>{
              console.log(res.data)
          }).catch ((err)=>{
            console.log(err)
          })
        

      }


    return (
        <div>
           <form method="post" onSubmit={onHandleSubmit}>
           <div>
          <label htmlFor="name" className="sr-only">Product Name</label>
          <input id="productName" value={formValues.name} onChange={handleOnChange}  name="name" type="text"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="name"/>
          </div>

          <div>
          <label htmlFor="description" className="sr-only">Product Description</label>
          <input id="description" value={formValues.description} onChange={handleOnChange}  name="description" type="text"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="description"/>
          </div>

          <div>
          <label htmlFor="price" className="sr-only">Product Price</label>
          <input id="price" value={formValues.price} onChange={handleOnChange}  name="price" type="number"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="price"/>
          </div>

          <input type="file" name="file" id=""/>

  
         <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">  
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">  
          </span>
          Add product 
         </button> 
            

           </form>
            
        </div>
    )
}

export default AddToCard
