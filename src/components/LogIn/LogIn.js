import React, {useState} from 'react'
import axios from 'axios'


function LogIn() {




  const initialValues ={ 
    email:"",
    password:"",

  }

  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError]= useState("")
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState();
 
  function handleOnChange(e) {
    setFormValues({...formValues, [e.target.name] : e.target.value})
  }

  function handleOnSubmit(e){
    e.preventDefault();
    

     axios
  .post('http://localhost:1337/auth/local', {
    identifier: formValues.email,
    password: formValues.password,
  })
  .then(response => {
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    console.log ("user data", response.data)
    setUsername (response.data.user.username)
    setLoggedIn(true)
  })
  .catch((err)=>{console.log(err)
    setError("Invalid")
  })
 

  }

     
     
      
   return (


<>   

{loggedIn ? <div>Welcome {username}</div> :
<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
    </div>
    <h1>{error}</h1>
    <form className="mt-8 space-y-6" onSubmit={handleOnSubmit} method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" value={formValues.email} onChange={handleOnChange} name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" value={formValues.password} onChange={handleOnChange} name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>
-
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <button className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?  
          </button> 
          
        </div>
      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
}

</>

    )


}

export default LogIn
