import { useEffect } from 'react'
import Blogs from '../BlogsComponents/Blogs'

import Jumpstart from '../HomePageComponents/Jumpstart'
import OurServices from '../HomePageComponents/OurServices'
import ServicesBanner from './ServicesBanner'
import Trainings from '../TrainingComponents/Trainings'
import dynamic from 'next/dynamic'

const Services = () => {
  useEffect(() => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }), [])

  const Testimonials = dynamic(
    () => import('../HomePageComponents/Testimonials'),
    { ssr: false }
  )
  return (
    <main>
      <ServicesBanner />
      <Jumpstart />
      <OurServices />
      {/* <Discover /> */}
      <Blogs />
      <Trainings />
      <Testimonials />
    </main>
  )
}

export default Services
