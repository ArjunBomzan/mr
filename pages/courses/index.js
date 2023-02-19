import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/HeaderComponents/Header';
import Trainings from "../../components/TrainingComponents/Trainings";

// export const getStaticProps = async () => {
//     const res = await axios.get(`${process.env.DOMAIN_V1}course/?category=1`)
//     const data = await res.data
//     return {
//         props: { courses: data }
//     }
// }


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



const courses = ({ courses }) => {

  let meta_description = "Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skils"
  let meta_image = `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/courses.png`

  return (
    <>
      <Head>
        <title>Courses</title>
        {/* facebook og tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={"MindRisers Coursers | IT related courses in Kathmandu, Nepal"} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:image" content={meta_image} />

        {/* twitter og tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mindrisers" />
        <meta property="twitter:title" content={"MindRisers Coursers | IT related courses in Kathmandu, Nepal"} />
        <meta property="twitter:description" content={meta_description} />
        <meta name="twitter:image" content={meta_image} />
      </Head>
      <Header />
      <Trainings courses={courses} />
    </>
  )
}

export default courses