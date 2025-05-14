import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { useState } from 'react';
import { ImSpinner2 } from "react-icons/im";
import { LuMenu } from "react-icons/lu";




const Header = () => {
 const [menu, setmenu] = useState(false)
  
  const nevigate = useNavigate();
  const [show, setshow] = useState(false)
  const {user,userLogOut,setloading,loading} = useAuth()
  console.log(user)
  const handleProfile = ()=>{
    setshow(!show)
  }
  const handleSignOut = ()=>{
    userLogOut()
    .then(res =>{
      setloading(false)
    })
    .catch(error =>{
      setloading(false)
    })
  }
  return (
    <div className='drop-shadow-xl sticky z-20 top-0'>

    <div className='px-4 sm:px-20 md:px-32 flex justify-between py-3 text-xl font-medium bg-white'>
     
      <div className='flex md:justify-center items-center gap-2 sm:gap-7 md:gap-7 text-lg font-semibold'>
      <div className='md:hidden text-4xl' onClick={()=> setmenu(!menu)}>
        <LuMenu/>
      </div>
        <img src="https://wpappointify.com/tutorly/elementor/demo/wp-content/uploads/2022/01/tutorly_logo.png" alt="logo" className='object-cover w-20 md:w-32 ' />

        <div className={` ${ menu ? ' absolute top-16 py-2 px-5 left-0 sm:left-20' : 'hidden' } md:flex bg-white `} >
          <div className='flex flex-col md:flex-row  gap-2 md:gap-7'>
          
        <NavLink to = "home" className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-black"}>Home</NavLink>
        <NavLink to = "find-tutors" className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-black"}>Find  Tutors</NavLink>
        <NavLink to = "add-tutors" className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-black"}>Add Tutorials</NavLink>
        <NavLink to = "my-booked-tutor" className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-black"}>My Booked Tutor</NavLink>
        <NavLink to = "my-tutorials" className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-black"}>My Tutorials</NavLink>
      </div>
      </div>
      </div>
      <div className='flex justify-center items-center gap-5'>
        {
         loading ? (
          <div className='flex pr-24 justify-center items-center animate-spin h-5 w-5 text-orange-500 '> <ImSpinner2/></div>
         ):
          user ? (
            <div className='flex justify-center items-center gap-3'>
            {
              show && <p className='absolute top-12 text-xs sm:text-lg right-48 sm:right-64 md:right-[310px] z-10 bg-white px-5 py-1'>{user.displayName}</p>
            }
            
            <img onClick={handleProfile} src={user ?  user?.photoURL:"" } alt="photo" className='w-12 h-12 rounded-[50%] relative' />
            <button onClick={handleSignOut} className='flex bg-gradient-to-r from-[rgb(224,109,112)] to-[rgb(237,172,140)] justify-center items-center py-2 px-5  rounded-3xl gap-2 font-semibold' > SignOut <MdOutlineLogout/> </button>
            </div>
          ):(
            <div className=' flex justify-center items-center gap-3'>
              <button onClick={()=>nevigate('/signup')}  className=' hidden sm:flex  justify-center items-center gap-1 bg-gradient-to-r from-[rgb(32,201,148)] to-[rgb(69,252,241)] py-2 px-5  rounded-3xl font-semibold'>  Register <MdManageAccounts/></button>
        <button onClick={()=> nevigate('/login')} className='flex justify-center items-center gap-2 bg-gradient-to-r from-[rgb(87,182,229)] to-[rgb(130,200,217)] py-2 px-5  rounded-3xl font-semibold'><MdOutlineLogin /> Login</button>
        
        </div>

          )

        }
       
        
      </div>
    </div>
    </div>

  )
}

export default Header
