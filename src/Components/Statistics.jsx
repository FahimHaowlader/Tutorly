import React from 'react'

const Statistics = () => {
  return (
    <div>
    <h2 className=' text-6xl font-bold pt-9 sm:pt-16 md:pt-24 pb-10 sm:pb-14 md:pb-20 px-4 sm:px-20 md:px-32 text-orange-400'>Our_impacts</h2>
    <div className='flex pr-6 sm:pr-16  md:pr-32 pl-6 sm:pl-10  md:pl-52 flex-col md:flex-row gap-8 sm:gap-16 md:gap-0 justify-between items-center pb-24'>
        <div className='flex flex-col gap-3'>
        <h1 className='text-6xl font-bold  text-[rgba(243,68,68,0.78)] '>1000+</h1>
        <h1 className='text-4xl font-bold text-[rgb(80,84,161)] '>Tutors</h1>
        </div>
        <div className='flex flex-col gap-3'>
        <h1 className='text-6xl font-bold  text-[rgba(243,68,68,0.78)] '>5400+</h1>
        <h1 className='text-4xl font-bold text-[rgb(80,84,161)] '>Review</h1>
        </div>
        <div className='flex flex-col gap-3'>
        <h1 className='text-6xl font-bold  text-[rgba(243,68,68,0.78)] '>70+</h1>
        <h1 className='text-4xl font-bold text-[rgb(80,84,161)] '>Languages
            </h1>
        </div>
        <div className='flex flex-col gap-3'>
        <h1 className='text-6xl font-bold  text-[rgba(243,68,68,0.78)] '>10000+</h1>
        <h1 className='text-4xl font-bold text-[rgb(80,84,161)] '>User</h1>
        </div>
    </div>
    </div>
  )
}

export default Statistics
