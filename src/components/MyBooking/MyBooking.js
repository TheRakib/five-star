import axios from 'axios'
import React , {useState, useEffect}from 'react'
import Booking from '../Booking/Booking'



function MyBooking() {

const [bookings, setBookings] = useState([])


const [userId, setUserId] = useState(localStorage.getItem("userId"))




useEffect(()=>{
 

   console.log(userId)

   const fetchData = async ()=>{
        const res = await axios.get(`http://localhost:1337/user-bookings?users_permissions_user.id=${userId}`
        , {
            
        })

        setBookings(res.data)
        

   }
   
   fetchData()
   console.log(bookings)
}, [])




    return (
        <div>
 <h1>My booking</h1>
 {bookings.map( (booking)=>{
     return (
 <Booking key={booking.id} name={booking.name} time={booking.timeToAppointment} />  
     )
 })
}
   

   </div>
    )
}

export default MyBooking
