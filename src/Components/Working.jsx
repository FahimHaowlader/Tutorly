import React from 'react'

const Working = () => {
  return (
    <div className='bg-[rgba(101,242,221,0.18)] '>
        <p className='pt-10 text-center text-xl font-bold text-gray-500'>Easy working  </p>
      <h1 className='text-5xl font-bold text-center pt-3 pb-10'>How this<span className='text-red-500'> Works</span></h1>
      <div className='px-4 sm:px-20 md:px-32 flex flex-col md:flex-row justify-between items-center gap-10 pb-20'>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <img src="https://wpappointify.com/tutorly/elementor/demo/wp-content/uploads/2022/05/1.svg" alt="" className='h-28' />
            <h2 className='text-3xl font-bold text-gray-600'>Find Instructor
            </h2>
            <p className='text-center font-semibold text-lg text-gray-500'>Search instructor base on your time availability and details</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <img src="https://wpappointify.com/tutorly/elementor/demo/wp-content/uploads/2022/05/2.svg"alt="" className='h-28' />
            <h2 className='text-3xl font-bold text-gray-600'>Book Instructor</h2>
            <p className='text-center font-semibold text-lg text-gray-500'>Book an Instructor, add their time slot in your calendar.</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <img src="https://wpappointify.com/tutorly/elementor/demo/wp-content/uploads/2022/05/3.svg" alt=""  className='h-28'/>
            <h2 className='text-3xl font-bold text-gray-600'>Start Learning</h2>
            <p className='text-center font-semibold text-lg text-gray-500'>Get reminders, join meetings at specified times and have fun learning !</p>
        </div>
      </div>
    </div>
  )
}

export default Working
