import Head from 'next/head';
import Header from '../../components/HeaderComponents/Header';
import Trainings from "../../components/TrainingComponents/Trainings";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BannerWrapper, { BannerSize } from '../../components/common/BannerWrapper';
import Image from "next/image"
import Swoosh from '../../components/common/Swoosh';
import CoursesList from '../../components/common/CoursesList';

export async function getStaticProps() {
  // export async function getServerSideProps({query}) {
  let data = []
  try {
    const res = await fetch(`https://mindrisers.com.np/blog/api/v1/course/`)

    // const res = await fetch(`${process.env.DOMAIN_V1}course/?tag=` + (query.tag || ''))
    // const res = await fetch(`${process.env.DOMAIN_V1}course/?tag=` + ("frontend" || ''))

    data = await res.json()

  }
  catch (err) {
  }

  return {
    props: { courses_all: data },

    // revalidate: 60 * 60 * 24 * 1 // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 
    revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 


  }
}



const Courses = ({ courses_all }) => {

  let [courses, setcourses] = useState(courses_all) /* FIXME */
  courses = [
    {
      title: "MERN stack training in nepal",
      image: "https://mindrisers.com.np/_next/image?url=https%3A%2F%2Fmindrisers.com.np%2F%2Fstatic%2FImages%2Fcourses%2FMern_wiWtVlC.jpg&w=640&q=75",
      duration: "3 months",
      slug: "mern",
    }
  ]
  courses = [...courses, ...courses, ...courses, ...courses, ...courses, ...courses, ...courses, ...courses]
  const router = useRouter()

  useEffect(() => {

    const fetchCourses = async () => {
      if (router.isReady) {

        // if (router.query.tag) {
        //   console.log(router.query.tag)
        try {

          let data = []
          const res = await fetch(`${process.env.DOMAIN_V1}course/?tag=` + (router.query.tag || ''))
          data = await res.json()

          setcourses(data)
        }
        catch (err) {
          console.log(err)

        }
        // }
      }
    }
    fetchCourses()

  }, [router.isReady, router.query.tag])


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

      <BannerWrapper>
        <div className='grid lg:grid-cols-[55%,45%] gap-[40px] container lg:pt-[30px]] items-center text-center lg:text-left'>
          <div>
            <p className='header-xl title-space'>Learn Top IT Skills</p>
            <p className='sub-header md:sub-header-lg text-secondary font-normal title-space flex md:gap-[10px] items-center justify-center lg:justify-start'>
              <span className='text-primary'>{`<h2>`}</span>
              <span className='sub-header-lg md:header lg:text-[31px] xl:text-[32px] uppercase !text-secondary text-center'>IT skills and expertise</span>
              <span className='text-primary'>{`</h2>`}</span>
            </p>
            <p className=' mb-5 flex items-center gap-[10px] justify-center lg:justify-start'>
              <span className='header-xl'>with</span>
              <span className='header text-secondary '><Swoosh>Mindrisers</Swoosh></span>
            </p>
            <p className='text-[20px] text-primary'>We provide variety of market demand IT skill courses at Mindrisers. Explore courses and start your IT journey with us.</p>
          </div>
          <Image alt="" height={600} width={600} className='hidden lg:inline-block w-auto h-auto' src="/assets/images/courses/banner-image.svg" />
        </div>
      </BannerWrapper>
      <section className='section-wrapper-m'>
        <div className='text-center'>
          <p className='sub-header-lg title-space'>Explore <Swoosh type='secondary'>Skill Courses</Swoosh></p>
          <p className='text-[20px] text-primary'>Explore our courses</p>
        </div>
        <div className='container  title-space-6xl-reverse !2xl:mt-[80px]'>
          <CoursesList courses={courses} />
        </div>
      </section>
    </>
  )
}

export default Courses