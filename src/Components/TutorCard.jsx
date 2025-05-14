import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const TutorCard = ({email,review,description,price,name,language,url,id}) => {
  const nevigate = useNavigate();
  const handleClick = (id) =>{
    nevigate(`/tutor/${id}`)

  }
  return (
    <div>
     <div className='flex justify-center items-center  '>
        <div>
            <img src={url} alt="course-image" className='w-[300px] h-[184px] object-cover rounded-l-2xl' />
        </div>
        <div className='flex flex-col bg-[rgba(101,242,221,0.18)]   w-full justify-center  items-start space-y-3 rounded-r-2xl py-3 pl-3'>
            <h1  className='text-xl font-semibold text-center'>{language?.toUpperCase()}</h1>
            <h1 className='text-xl font-semibold text-center'>{name}</h1>
            <h1  className='text-xl font-semibold text-center'> {review}+ review</h1>
            <button className='flex justify-center items-center gap-2 bg-gradient-to-r from-[rgb(87,182,229)] to-[rgb(130,200,217)] py-2 px-[52px]  rounded-xl  text-white font-semibold' onClick={() => handleClick(id)}>Details <FaArrowCircleRight/></button>
        </div>
     </div>
    </div>
  )
}

export default TutorCard
