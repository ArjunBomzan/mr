import Head from 'next/head';
import Header from '../../components/HeaderComponents/Header';
import Trainings from "../../components/TrainingComponents/Trainings";

export async function getStaticProps() {
  let data = []
  try {
    const res = await fetch(`https://mindrisers.com.np/blog/api/v1/course/`)
    data = await res.json()
  }
  catch (err) {
  }

  return {
    props: { courses: data },
    // revalidate: 60 * 60 * 24 * 1 // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 
    revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 


  }
}



const courses = ({ courses }) => {

  let meta_description = "Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skils"
  let meta_image = `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/courses.png`

  return (
    <>
      <Head>
        <title>Courses offered by mindrisers consortium</title>
        <meta name="keywords"
          content="mindrisers nepal, courses, it training center, kathmandu" />
        {/* facebook og tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={"MindRisers Courses | IT related courses in Kathmandu, Nepal"} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:image" content={meta_image} />

        {/* twitter og tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Mindrisers" />
        <meta name="twitter:creator" content="@mindrisers" />
        <meta property="twitter:title" content={"MindRisers Courses | IT related courses in Kathmandu, Nepal"} />
        <meta property="twitter:description" content={meta_description} />
        <meta name="twitter:image" content={meta_image} />
      </Head>
      <Header />
      <Trainings courses={courses} />
    </>
  )
}

export default courses