import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import LanguagCard from './LanguagCard'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsPlusCircle } from "react-icons/bs";


const Language = () => {
  const [language, setlanguage] = useState([])
  useEffect(() => {

  axios.get('language.json')
  .then(res => setlanguage(res.data))
    
  }, [])
  
  return (
    <div>
      <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-center py-10  sm:py-20 '>Which <span className='text-red-500'>language</span> do you want to <span className='text-orange-500'>speak</span>?</h1>
   <div className='px-4 sm:px-20 md:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 row-auto gap-5 pb-16 '>
    <div className='sm:row-span-2'>
    <Link to="/find-tutors/english">
      <div className="relative">
        
    <img src="https://www.learnalanguage.com/storage/app/uploads/public/5cf/62a/501/5cf62a5011e94517528621.png" alt="no image" className='w-[400px] h-[530px] sm:h-full object-cover' />
    
    <div className='absolute bottom-0'>

    <p className='bg-[rgba(0,0,0,.5)] py-2 inline-flex justify-center items-center gap-3 px-[140px] sm:px-[90px] md:px-[128px] text-2xl font-semibold text-white  '> Enslish <FaRegArrowAltCircleRight/></p>
    
    </div>
      </div>
    </Link>
    </div>
    {
      language.map((lang, index) => (
        <LanguagCard key={index} logo={lang.logo} title={lang.title} link={lang.link} />
        ))
    }
    <Link className='inline-block h-40 ' to='/find-tutors'>
    {/* <div className=''> */}
    {/* <BsPlusCircle/>
     */}
     <h1 className=' bg-red-500 text-white rounded-xl text-3xl sm:text-4xl md:text-6xl flex justify-center items-center gap-5 drop-shadow-2xl font-bold py-[76px] md:py-[93px]'>OTHERS  <FaRegArrowAltCircleRight/></h1>
    
      
    {/* </div> */}
     </Link>
    
   </div>
    </div>
  )
}

export default Language
