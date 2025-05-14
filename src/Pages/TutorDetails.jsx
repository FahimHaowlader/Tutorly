import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsCard from '../Components/detailsCard'

const TutorDetails = () => {
    const {id} = useParams()
  return (
    <div>
      <DetailsCard></DetailsCard>
    </div>
  )
}

export default TutorDetails
