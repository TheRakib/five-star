import React from 'react'

function UploadFile() {

    function FileUpload (e){
        e.preventDefault();


        const formData = new FormData();
        console.log(formData)

    }
    return (
        <div>
            <form onSubmit={FileUpload}>
            <input type="file" name="file" />
            <button>click to submit</button>
            </form>
        </div>
    )
}

export default UploadFile
