import React, { useEffect } from 'react'
import BookedTutor from '../Components/BookedTutor'
import { useAuth } from '../Context/AuthContext'
import { useState} from 'react'
import DataLoading from '../Components/DataLoading'
import { setLogLevel } from 'firebase/app'
import axios from 'axios'

const MybookedTutor = () => {
  const{user} = useAuth()
  const [loading, setloading] = useState(true)
  const [booked, setbooked] = useState([])
  // useEffect(()=>{
  //   fetch("/mybookedtutorials",{
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user)
  //   })
  // },[])
  useEffect(() => {
    // fetch(`https://assigment-backend-xi.vercel.app/mybookedtutorials?email=${user?.email}`,
    //   {
    //     method: "GET",
    //     credentials: 'include',
    //     headers: {
    //       "Content-Type": "application/json",
    //       },

    //   }
    // ) 
    // .then(res => res.json())
    // .then(data =>{
    //  setbooked(data)
    //  setloading(false)
    // })
    // .catch(error =>{
    //   console.log(error)
    //   setloading(false)
    // })

    axios(`https://assigment-backend-xi.vercel.app/mybookedtutorials?email=${user?.email}`,{withCredentials: true})
    .then(res => {
      setbooked(res.data)
      setloading(false)
    })
    .catch(error =>{
      console.log(error)
      setloading(false)
    })

  }, [])
  if(loading){
    return <DataLoading/>
  }
  
  return (
    <div>
        <h1 className='text-3xl sm:text-4xl md:text-6xl text-center font-bold text-[rgb(74,186,255)] py-10'>My Booked Classes</h1>
        <div className='px-4 sm:px-20 md:px-32 grid grid-cols-1 sm:grid-cols-2 row-auto gap-5 pb-16'>
        {
          booked?.map((tutor) => (
            <BookedTutor key={tutor.tutorId} tutor={tutor} />
            ))
        }
      

      </div>

    </div>
  )
}

export default MybookedTutor
