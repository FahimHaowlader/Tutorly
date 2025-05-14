import React from 'react'

const WhyLearn = () => {
  return (
    <div className='hidden sm:flex sm:flex-col'>
      <h1 className='pt-3 pb-16 px-32 text-5xl text-center font-bold'>Why learn a language with <span className='text-orange-500'>Tutorly </span>?</h1>
      <div className='flex px-20 md:px-32 pb-10 '>
        <div className='w-1/2'>
        <img src="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/en-homepage-learn-together-mb-2x-opt.jpg" alt="" className='h-60 md:h-80 ' />
        </div>
        <div className='w-1/2 flex flex-col justify-center gap-5 '>
        <h2 className='text-[15px] font-semibold text-gray-500'> AN INTERACTIVE COMMUNITY</h2>
        <h1 className='text-3xl font-bold'>Learn more together</h1>
        <p className='text-lg text-gray-500'>Go beyond the textbook. Practise pronunciation, gain cultural insights and exchange local language tips with our global community of learners.</p>
        </div>
      </div>
      <div className='flex px-20 md:px-32 pb-10 '>
        <div className='w-1/2 flex flex-col justify-center gap-5 '>
        <h2 className='text-[15px] font-semibold text-gray-500'> COURSES CREATED BY EXPERTS</h2>
        <h1 className='text-3xl font-bold'> Learn with confidence</h1>
        <p className='text-lg text-gray-500'>Make real improvements, get real results. Be prepared for real-world interactions by building solid foundations with plenty of speaking, listening, reading and writing practice.</p>
        </div>
        <div className='w-1/2'>
        <img src="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/homepage-learn-confidence-dt-2x-new.jpg" alt="" className='h-60 md:h-80 md:pl-16 ' />
        </div>
      </div>
      <div className='flex px-20 md:px-32 pb-10 '>
        <div className='w-1/2'>
        <img src="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/6-en-home_page_.png" alt=" ff" className='h-60 md:h-80 ' />
        </div>
        <div className='w-1/2 flex flex-col justify-center gap-5 '>
        <h2 className='text-[15px] font-semibold text-gray-500'>  IMMERSIVE SPEAKING PRACTICE</h2>
        <h1 className='text-3xl font-bold'> Learn for real life</h1>
        <p className='text-lg text-gray-500'>Get instant feedback for lasting confidence. Speaking practice helps you beat speaking anxiety through personalised pronunciation feedback and immersive videos featuring native speakers.</p>
        </div>
      </div>
      <div className='flex px-32 pb-20'>
        
        <div className='w-1/2 flex flex-col justify-center gap-5 '>
        <h2 className='text-[15px] font-semibold text-gray-500'>    SELF-LED LEARNING</h2>
        <h1 className='text-3xl font-bold'> Learn your way</h1>
        <p className='text-lg text-gray-500'>Whatever your reason for learning a language, we’ve got you covered. Learn for any goal with simplified courses and short, but focused lessons. You’re in control.</p>
        </div>
        <div className='w-1/2'>
        <img src="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/en-homepage-learn-pace-mb-2x-opt.jpg" alt="" className='h-60 md:h-80 md:pl-16' />
        </div>
      </div>

    </div>
  )
}

export default WhyLearn
