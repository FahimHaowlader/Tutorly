import React from 'react'
import TutorCard from '../Components/TutorCard'
import { FaArrowCircleRight,FaArrowCircleDown } from "react-icons/fa";
import { useState,useEffect } from 'react';
import DataLoading from '../Components/DataLoading';
import { Outlet,useNavigate,useParams } from 'react-router-dom'


const FindTutorLayout = () => {
    const nevigate = useNavigate();
    const {id } =  useParams()
     const language = id?.toLowerCase();
    
        const [Tutors, setTutors] = useState([])
        const [search, setsearch] = useState(language)
        const [loading, setLoading] = useState(true)
    const handleSearch = (e) =>{
        e.preventDefault();
        const search = e.target.search.value.toLowerCase();
        setsearch(search)
        e.target.reset()
        nevigate(`/find-tutors/${search}`)
    }
  return (
    <div>
       <h1 className=' flex flex-col md:flex-row justify-center items-center px-4 sm:px-20 md:px-32 gap-5 md:gap-20 text-3xl sm:text-4xl md:text-5xl text-red-500 font-bold text-center pt-10'> Find Your Desire Course
         <div className='md:hidden'> <FaArrowCircleDown/></div> <div className='hidden md:block'><FaArrowCircleRight/></div>
         <form onSubmit={handleSearch}> <input type="search" name='search'defaultValue={search?.toUpperCase()}  placeholder='Search Language' className='text-3xl md:text-4xl border-2 focus:border-white  border-red-500 rounded-2xl px-5 py-2 w-[400px] ' /> </form></h1> 
       <Outlet/>
    </div>
  )
}

export default FindTutorLayout
