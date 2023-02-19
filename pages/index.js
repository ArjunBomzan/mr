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

  let meta_title = "IT Training Institute in Kathmandu, Nepal | IT Training | MindRisers";
  let meta_description = "Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skils";

  return (


    <div className=''>
      <Head>
        <title>Mind Risers</title>
        {/* facebook og tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />
        {/* <meta property="og:image" content={meta_image} /> */}

        {/* twitter og tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mindrisers" />
        <meta property="twitter:title" content={meta_title} />
        <meta property="twitter:description" content={meta_description} />
        {/* <meta name="twitter:image" content={meta_image} /> */}
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
