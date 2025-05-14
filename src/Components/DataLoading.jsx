import React from 'react'
import { ImSpinner2 } from "react-icons/im";


const DataLoading = () => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center bg-white'>
     <div className='flex mr-24 text-[300px] justify-center items-center animate-spin h-96 w-96 text-red-500 '> <ImSpinner2/></div>
   
    </div>
  )
}

export default DataLoading
