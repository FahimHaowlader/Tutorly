import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import DataLoading from './DataLoading'
import { useAuth } from '../Context/AuthContext'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


const DetailsCard = () => {
  const {user} = useAuth()
  const {id} = useParams() 
  const [tutor, settutor] = useState()
  const [loading, setloading] = useState(true)

  useEffect(() => {
    fetch(`https://assigment-backend-xi.vercel.app/tutorials/${id}`)
    .then(response => response.json())
    .then(data => {
      setloading(false)
      settutor(data)
    })
    .catch(error =>{
      setloading(false)
    })

  }, [id])
  useEffect(() => {
   console.log('reloaded')
  }, )
  

  if(loading){
    return <DataLoading/>
  }

  const tutorInfo = {
    name: tutor?.name,
    email: user?.email,
    language : tutor.language,
    description: tutor.description,
    price: tutor.price,
    review: tutor.review,
    tutorId : tutor._id,
    url : tutor.url
  }

  const handleBook = ()=>{
    fetch(`https://assigment-backend-xi.vercel.app/booktutor`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({tutorInfo})
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Your Course has been Booked",
          showConfirmButton: true,
          // timer: 1500
        });
      }
      else{
        Swal.fire({
          title: "You Have Already Booked This Course",
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
      }
    })
    .catch(error => {
      console.log(error)
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have Already Booked This Course",
      });
     
    })
  }
  
  return (
    <div>
      <div>
      <div>
        <img src={tutor?.url} alt="" className='w-full object-cover h-80 rounded-b-xl' />
      </div>
        <div className='px-4 sm:px-20 md:px-32 flex flex-col sm:flex-row justify-center gap-5 items-center pt-10 pb-6 '>
            <div className='hidden  pr-4 sm:pr-16 border-r-0 sm:border-r-4 w-full border-blue-400 text-xl font-semibold sm:flex flex-col sm:gap-8 justify-center items-end py-6'>
            <p className> {tutor?.language?.toUpperCase()} : <span className=' text-2xl font-bold text-orange-600'> Language</span> </p>
            <p className> {tutor?.name}:<span className=' text-2xl font-bold text-orange-600'>Instructor </span>  </p>
            <p className> {tutor?.email} : <span className=' text-2xl font-bold text-orange-600'> Instructor Email </span>  </p>
            </div>
            <div className='sm:hidden w-full  sm:pl-10 space-y-4 text-xl font-semibold'>
            <p className> <span className=' text-2xl font-bold text-orange-600'>Language </span>: {tutor?.language?.toUpperCase()} </p>
            <p className> <span className=' text-2xl font-bold text-orange-600'>Instructor </span>: {tutor?.name} </p>
            <p className><span className=' text-2xl font-bold text-orange-600'>Instructor Email </span>: {tutor?.email}</p>

            </div>
            <div className='w-full  sm:pl-10 space-y-4 text-xl font-semibold'>
            <p className> <span className=' text-2xl font-bold text-orange-600'>price </span>: {tutor?.price} $ </p>
            <p className><span className=' text-2xl font-bold text-orange-600'>review </span>: {tutor?.review} Student</p>
            <p className='sm:hidden text-lg pb-10'><span className='text-2xl text-red-500 font-bold'>Description :</span> {tutor?.description}</p>

            <button className='text-2xl px-20 sm:px-12 md:px-20 py-4 rounded-xl  bg-gradient-to-r from-[rgb(39,247,181)] to-[rgb(10,242,204)] ' onClick={handleBook}> Book Now</button>
            </div>
        </div>
      <p className='sm:px-20 md:px-32 hidden sm:block text-lg pb-10'><span className='text-2xl text-red-500 font-bold'>Description :</span> {tutor?.description}</p>
    </div>
    </div>
  )
}

export default DetailsCard
