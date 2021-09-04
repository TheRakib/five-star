import React from 'react'
import axios from 'axios'

function ForgotPassword() {
    function resetRequest(){

        axios
        .post('http://localhost:1337/auth/reset-password', {
          code: 'privateCode', 
          password: 'userNewPassword',
          passwordConfirmation: 'userNewPassword',
        })
        .then(response => {
          console.log("Your user's password has been reset.");
        })
        .catch(error => {
          console.log('An error occurred:', error.response);
        });
    

    }

   
   

    return (
        <div>
            <button onClick={ resetRequest}>Reset Password</button>


        </div>
    )
}
export default ForgotPassword
