import React from 'react'
import { RiHeartAdd2Fill } from "react-icons/ri";
import { useAuth } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'


const BookedTutor = ({tutor}) => {
    const {user} =useAuth()
    const handleReview  = ()=>{
        fetch(`https://assigment-backend-xi.vercel.app/review/${tutor.tutorId}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({email : user.email})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
               Swal.fire({
                         position: "center-center",
                         icon: "success",
                         title: " Review Successful",
                         showConfirmButton: true,
                         // timer: 1500
                       });
            }
        })
        .catch(error =>{
            Swal.fire({
                     title: " Reviewed  Course",
                     showClass: {
                       popup: `
                         animate__animated
                         animate__fadeInUp
                         animate__faster
                       `
                     },
                     hideClass: {
                       popup: `
                         animate__animated
                         animate__fadeOutDown
                         animate__faster
                       `
                     }
                   });
        })
    }
  return (
     <div>
         <div className='flex justify-center items-center  '>
            <div>
                <img src={tutor.url} alt="course-image" className='w-[350px] h-[184px] object-cover rounded-l-2xl' />
            </div>
            <div className='flex flex-col bg-[rgba(101,242,153,0.18)] w-[250px] justify-center  items-start space-y-3 rounded-r-2xl py-3 pl-3'>
                <h1  className='text-xl font-semibold text-center'>{tutor?.language.toUpperCase()}</h1>
                <h1  className='text-xl font-semibold text-center '>$ {tutor?.price}</h1>
                <h1 className='text-xl font-semibold text-center'>{tutor?.name}</h1>
                <button className='flex text-xl justify-center items-center gap-2 bg-gradient-to-r from-[rgb(87,182,229)] to-[rgb(130,200,217)] py-2 px-[56px]  rounded-xl  text-white font-semibold' onClick={handleReview}>Review <RiHeartAdd2Fill/></button>
            </div>
         </div>
        </div>
  )
}

export default BookedTutor
