import React, {useState, useEffect} from 'react'
import firestore from '../firebaseConfig'


function Child() {
    const [firebaseData, setFirebaseData] = useState("")
   useEffect(()=> {

    const fetchData = async ()=> {

      const data = await firestore.collection("name").doc("p06STWemWWaFsarRc4Sq");
      setFirebaseData(data)
    }
  fetchData()
  
}, [])
return (
  <div>
      
     
      {firebaseData}


  
      
  </div>
)
}

export default Child



  