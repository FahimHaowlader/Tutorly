import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center  py-10'>
     <h1 className='text-[100px] sm:text-[200px] text-red-500 font-bold'>Ooops!</h1>
     <p className='text-3xl font-bold'>404-PAGE NOT FOUND</p>
     <Link to='/home' className='bg-blue-500 text-white py-3 px-10 font-bold my-10 rounded-xl'>GO TO HOMEPAGE </Link>
    </div>
  )
}

export default ErrorPage
