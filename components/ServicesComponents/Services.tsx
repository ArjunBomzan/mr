import { useEffect } from 'react'
import Blogs from '../BlogsComponents/Blogs'

import Jumpstart from '../HomePageComponents/Jumpstart'
import OurServices from '../HomePageComponents/OurServices'
import ServicesBanner from './ServicesBanner'
import Trainings from '../TrainingComponents/Trainings'

const Services = () => {
  useEffect(() => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }), [])

  return (
    <main>
      <ServicesBanner />
      <Jumpstart />
      <OurServices />
      {/* <Discover /> */}
      <Blogs />
      <Trainings />
      {/* <Testimonials /> */}
      {/* <Partners /> */}
    </main>
  )
}

export default Services
