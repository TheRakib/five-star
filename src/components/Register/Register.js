import axios from 'axios'
import React, {useState, useEffect} from 'react'

function Register() {

    const initialValues = {
        username: "",
        email : "" ,
        password : ""
    }
    
    const [registerValues, setRegisterValues] = useState(initialValues)
    const [registered, SetRegistered] = useState(false);


    function handleOnChange(e){
        
        setRegisterValues({...registerValues, [e.target.name] : e.target.value})
    

    }

    function handleOnSubmit(e){
        e.preventDefault();
      //console.log(registerValues.username, registerValues.email)

       axios.post('http://localhost:1337/auth/local/register',{
          username : registerValues.username,
          email : registerValues.email ,
          password : registerValues.password, 
        }).then( (e)=> {  
                
            if(e.data.user) 
            SetRegistered(true)
           })
    }

    useEffect (()=>{

       

    const loginUser = async ()=>{

      const res =  await axios.post('http://localhost:1337/auth/local', {
        identifier: 'use@gmail.com',
        password: 'password',
      })
      
    console.log('login',res)
    }


    loginUser()

    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMwNjcxMDg1LCJleHAiOjE2MzMyNjMwODV9.RhpxSF2ciMginCKwjh2kG9y9f_qp0ClxWU3RvviTjlc"



}, [])


    return (
        <>
        {registered ?  (<div> Welcome</div> ) :
        
        (<div class="container max-w-full mx-auto md:py-24 px-6">
          <div class="max-w-sm mx-auto px-6">
            <div class="relative flex flex-wrap">
                <div class="w-full relative">
                   <div class="md:mt-6">
                      <div class="text-center font-semibold text-black">
                        Register User  
                      </div>
                    
                      <form class="mt-8" x-data="{password: '',password_confirm: ''}" onSubmit={handleOnSubmit} >
                        <div class="mx-auto max-w-lg ">
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Username</span>
                                <input placeholder="" type="text" name="username"  value={registerValues.username} onChange={handleOnChange}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                                  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                            <div className="text-purple-600"> </div>
                                <span class="px-1 text-sm text-gray-600">Email</span>
                                <input placeholder="" type="email" name="email" value={registerValues.email} onChange={handleOnChange}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                                   bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Password</span>
                                <input placeholder="" type="password" x-model="password" name="password" value={registerValues.password} onChange={handleOnChange}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Password Confirm</span>
                                <input placeholder="" type="password" x-model="password_confirm"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                                        bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>     
                            <div class="flex justify-start">
                                <label class="block text-gray-500 font-bold my-4 flex items-center">
                                    <input class="leading-loose text-pink-600 top-0" type="checkbox"/>
                                    <span class="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                          <a href="#"
                                             class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                           Terms and Conditions of the site
                                          </a>and
                                          <a href="#"
                                             class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                            the information data policy.</a>
                                    </span>
                                </label>
                            </div>
          

                            <button class="mt-3 text-lg font-semibold
                                   bg-gray-800 w-full text-white rounded-lg
                                   px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                Register
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
          </div>
       </div>) 
       }


</>
)

}

export default Register
