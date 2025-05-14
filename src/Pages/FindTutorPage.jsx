import React from 'react'
import TutorCard from '../Components/TutorCard'
import { useState,useEffect } from 'react';
import DataLoading from '../Components/DataLoading';
import axios from 'axios';


const FindTutorPage = () => {
  const [Tutors, setTutors] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    // fetch("https://assigment-backend-xi.vercel.app/find-tutorials",{
    //   method: 'GET',
    //   credentials: 'include',
    //   headers: {
    //  'Content-Type': 'application/json',
    //   },
     
    // })
    // .then(response => response.json())
    // .then(data => {

    //   setTutors(data)
    //   setloading(false)
    // })

    axios.get("https://assigment-backend-xi.vercel.app/find-tutorials",{
      withCredentials : true
    })
    .then(res =>{
      setTutors(res.data)
      setloading(false)
    })


  }, [])
  
  
  if(loading){
    return <DataLoading/>
  }
  

  return (
    <div>
    <div className='mx-4 sm:mx-20  md:mx-32 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 row-auto gap-5'>
      {Tutors.map(tutor => {return  <TutorCard key={tutor._id} email={tutor.email} name={tutor.name} url={tutor.url} description={tutor.description} price={tutor.price} language={tutor.language} id={tutor._id} review={tutor.review}  ></TutorCard>  } )}
    </div>
    </div>
  )
}

export default FindTutorPage
