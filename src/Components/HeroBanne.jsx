import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HeroBanne = () => {
  return (
    <div>
    <div className= 'px-4 sm:px-20 md:px-32 flex flex-col md:flex-row md:gap-20 pb-6 -mt-5'>
     <div className='py-6 sm:py-8 md:py-16  '>
        <h4 className='text-lg sm:text-xl text-orange-600 font-medium pt-5 sm:pt-14'>Instructor Tutoring.</h4>
        <div className='pt-6'>
        <h1 className='text-6xl font-bold'>Best Instructors </h1>
        <h1  className='text-6xl font-bold pt-3'>from the World.</h1>
        </div>
        <p className='text-xl pt-16 pb-12'>Learn anywhere, anytime at your own time at your own pace.</p>
       <Link to='/find-tutors'> <button className='bg-orange-600 gap-4 rounded-xl px-10 py-4 text-white text-xl font-semibold flex justify-center items-center  '>Find a Tutor now <FaRegArrowAltCircleRight/></button></Link>
     </div>
     <div>
        <img src="https://wpappointify.com/tutorly/elementor/demo/wp-content/uploads/2022/05/hero1.png" alt="" className='object-cover h-[500px]' />
     </div>
    </div>
    <div className='bg-gray-100 px-4 sm:px-20  md:px-32 flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center py-10'>
        <div>
            <h3 className='text-xl font-semibold text-gray-500'>Achieve More.</h3>
            <h2 className='text-4xl font-bold pt-3'>Prepare your Self for</h2>
           <h2 className='text-4xl font-bold text-red-500'> The Future</h2>
        </div>
        <div>
            <h2 className='text-xl font-semibold text-gray-700 pb-2'>Live Conferencing
            </h2>
            <p className='text-gray-500 text-lg font-medium'>Get one to one live classes with</p> 
            <p className='text-gray-500 text-lg font-medium'> your select instructors.</p>
        </div>
        <div>
        <h2 className='text-xl font-semibold text-gray-700 pb-2'>Online Scheduler
            </h2>
            <p className='text-gray-500 text-lg font-medium'>Schedule slots and bookings in</p>
            <p className='text-gray-500 text-lg font-medium'>timezone adjusting calendar.</p>
        </div>
    </div>
    </div>
  )
}

export default HeroBanne
