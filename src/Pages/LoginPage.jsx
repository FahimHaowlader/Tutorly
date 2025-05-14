import React from 'react'
import { RiAccountPinCircleLine } from "react-icons/ri";
import { useAuth } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const nevigate = useNavigate()
  const location = useLocation()
  const from = location.state || "/"
  const {loginByEmail,createGoogleUser,setloading,seterror,user,error} = useAuth();
  if(user){
    return nevigate('/')
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value;
    console.log(email,password)
    loginByEmail(email,password)
    .then(res =>{
      
      setloading(false)
      nevigate(from)
    })
    .catch(error =>{
      seterror(error.message)
      setloading(false)
    })
  } 
  const handleGoogleLogin = ()=>{
    createGoogleUser()
    .then(res =>{
      currentUser = {email : email}
      // axios.post("https://assigment-backend-xi.vercel.app/jwt",currentUser)
      // .then(res => {
      //   console.log(res.data)
      // })
      // .catch(error =>{
      //   console.log(error)
      // })
     
     
      setloading(false)
      nevigate(from)
    })
    .catch(error =>{
     seterror(error.message)
     setloading(false)
    })
  }
  return (
    <div>
      <h1 className='text-6xl font-bold  py-16 pl-[150px] sm:pl-[300px] md:pl-[665px]'>Login</h1>
      <div className='flex flex-col md:flex-row gap-5 pb-20'>
        <div className='pl-4 sm:pl-20 md:pl-32 md:border-r border-black pr-4 sm:pr-20 '>
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
          <div>
            <div className="text-3xl flex gap-5 pb-2 px-5 pl-7  items-center">
                <div className='sm:pl-4 md:pl-0'>
                <RiAccountPinCircleLine />
                </div>
                <input
                  type="email"
                  name='email'
                  placeholder="Enter Your Email"
                  required
                  className="w-full sm:w-[400px] text-2xl focus:border-none px-3 hover:border-none active:border-none"
                />
              
              </div>
              <hr />
            </div>
            <div>
            <div className="text-3xl flex gap-5 pb-2 px-5 pl-7 justify-center items-center">
                  <div className="">
                  <RiAccountPinCircleLine />
                  </div>
                <input
                  type="password"
                  name='password'
                  placeholder="Enter your Password"
                  required
                  className="w-full sm:w-[400px] text-2xl focus:border-none px-3 hover:border-none active:border-none"
                />
                <div className="pl-16">

                </div>
              </div>
              <hr />
            </div>
          </div >
          <div className=" flex justify-center items-center pt-10 px-4 sm:pl-12">

          <input type="submit" value="Login" className=" text-3xl bg-amber-100 font-bold py-4 px-40 sm:px-[187px] hover:cursor-pointer rounded-2xl shadow-2xl" />
          </div> 
        </form>
        </div>
        <div className='sm:pl-10 flex flex-col justify-center items-center'>
        <div className=" flex justify-center items-center gap-10">
          <button onClick={handleGoogleLogin} className="bg-white rounded-xl text-3xl font-semibold  border border-amber-50 shadow-2xl py-4  px-36 sm:px-44"> Google</button>
        
         </div>
          <div>

          
         <p className='pt-10 text-center text-lg'>If you do not have any accout ?<Link to={'/signup'}  className='text-blue-600 font-bold'> Register </Link></p>
      
        <div className='h-5'>
            {
                error ? <p className="text-red-500 md:pt-10 text-center">{error}</p>:""
              }
            </div>
            </div>
            </div>
      </div>
    </div>

  )
}

export default LoginPage
