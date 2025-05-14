import React from 'react'
import HeroBanne from '../Components/HeroBanne'
import Statistics from '../Components/statistics'
import Working from '../Components/Working'
import StartWithUs from '../Components/StartWithUs'
import Language from '../Components/Language'
import WhyLearn from '../Components/WhyLearn'

const HomePage = () => {
  return (
    <div>
      <HeroBanne/>
      <Statistics/>
      <Working/>
      <Language/>
      <WhyLearn/>
      <StartWithUs/>
    </div>
  )
}

export default HomePage
