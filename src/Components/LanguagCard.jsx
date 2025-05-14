import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const LanguagCard = ({logo,title,link}) => {
  return (
    <div className='rounded-xl'>
        <Link to={`/find-tutors/${title}`}>
      <div className="relative ">
        
    <img src={logo} alt="no image" className='w-[400px] object-cover' />
    
    <div className='absolute bottom-0'>

    <p className='bg-[rgba(0,0,0,.6)] w-[393px] sm:w-[293px] md:w-[370px] inline-flex py-2  text-center justify-center items-center gap-3  text-2xl font-semibold text-white  '> {title} <FaRegArrowAltCircleRight/></p>
    
    </div>
      </div>
    </Link>
      {/* <Link className='inline-flex bg-orange-500 rounded-xl text-2xl gap-5 font-semibold justify-center items-center text-white'>Click To Find Totur <FaRegArrowAltCircleRight/></Link> */}
    </div>
  )
}

export default LanguagCard
