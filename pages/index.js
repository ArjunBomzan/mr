import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'
import Gallery from '../components/HomePageComponents/Gallery'
import HomeAboutUs from "../components/HomePageComponents/HomeAboutUs"
import HomeContact from '../components/HomePageComponents/HomeContact'
// import HomeSuccessStories from '../components/HomePageComponents/HomeSuccessStories'
import Header from '../components/HeaderComponents/Header'
import Jumpstart from "../components/HomePageComponents/Jumpstart"
import Mission from "../components/HomePageComponents/Mission"
import Splash from "../components/HomePageComponents/Splash"
import TrainingsHomePage from "../components/HomePageComponents/TrainingsHomePage"
import axios from "axios"

export default function Home(props) {
  const TestimonialNoSsr = dynamic(
    () => import("../components/HomePageComponents/Testimonials"),
    { ssr: false }
  )
  const HomeSuccessStories = dynamic(
    () => import("../components/HomePageComponents/HomeSuccessStories"),
    { ssr: false }
  )

  return (
    <div className=''>
      <Head>
        <title>Mind Risers</title>
      </Head>
      <Header />
      <main>
        <Splash />
        <TrainingsHomePage courses={props.courses} />
        <HomeAboutUs />
        <Mission />
        <Gallery />
        <HomeContact />
        <HomeSuccessStories />
        <Jumpstart />
        <TestimonialNoSsr />
      </main>

    </div>
  )
}

export async function getServerSideProps() {
  let data = []
  try {
    const res = await axios.get(`https://api.mindrisers.jobrisers.com/blog/api/v1/course/`)
    data = await res.data
  }
  catch (err) {
  }

  return {
    props: { courses: data }
  }
}
