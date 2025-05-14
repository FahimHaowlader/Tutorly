import React from 'react'
import TutorCard from '../Components/TutorCard'
import { useState,useEffect } from 'react';
import DataLoading from '../Components/DataLoading';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const {id } =  useParams()
    const language = id?.toLowerCase();

    const [Tutors, setTutors] = useState([])
    
    const [loading, setLoading] = useState(true)


    useEffect(() => {
      fetch(`https://assigment-backend-xi.vercel.app/find-tutorial/${language}`)
      .then(response => response.json())
      .then(data => {
        setTutors(data)
        setLoading(false)
    })
    .catch(error =>{
        console.log(error)
        setLoading(false)
    })
    }, [language])

    if(loading){
        return <DataLoading />
    }

  return (
    <div>
       <div className='mx-4 sm:mx-20 md:mx-32 py-14 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 row-auto gap-5'>
      {Tutors.map(tutor => {return  <TutorCard key={tutor._id} email={tutor.email} name={tutor.name} url={tutor.url} description={tutor.description} price={tutor.price} language={tutor.language} id={tutor._id} review={tutor.review}  ></TutorCard>  } )}
    </div>
    </div>
  )
}

export default SearchPage
