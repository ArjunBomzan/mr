import Head from 'next/head'
import Header from '../components/HeaderComponents/Header'
import Image from "next/image"
import Link from "next/link"
import { MdOutlinePlayCircle } from "react-icons/md";
import Partners from '../components/home/Partners';
import Testimonials from '../components/home/Testimonials';
import Swoosh from '../components/common/Swoosh';
import BannerWrapper, { BannerSize } from '../components/common/BannerWrapper';
import CoursesList from '../components/common/CoursesList';
import Opportunity from '../public/assets/images/common/Opportunity';
import Faqs from '../components/common/Faqs';
import classNames from 'classnames';
import VideoPlayer from '../components/common/VideoPlayer';

export default function Home(props) {

  let meta_title = "Best IT Training Institute in kathmandu, Nepal | Mind Risers";
  let meta_description = "Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skills";

  let tags = [
    { title: "javascript", icon: "/assets/images/home/banner/fa6-brands_square-js.svg" },
    { title: "django", icon: "/assets/images/home/banner/skill-icons_django.svg" },
    { title: "figma", icon: "/assets/images/home/banner/solar_figma-bold-duotone.svg" },
    { title: "flutter", icon: "/assets/images/home/banner/material-symbols_flutter.svg" },
    { title: "photshop", icon: "/assets/images/home/banner/iconoir_adobe-photoshop-solid.svg" },
    { title: "node.js", icon: "/assets/images/home/banner/nonicons_node-16.svg" },
    { title: "database", icon: "/assets/images/home/banner/icon-park-solid_data.svg" },
    { title: "digital marketing", icon: "/assets/images/home/banner/nimbus_marketing.svg" },
  ]

  let typeWriters = [
    "IT skills and expertise",
    "Javascript",
    "Django",
    "Figma",
    "Flutter",
  ]

  let growWithUsers = [
    { src: "/assets/images/home/banner/person-1.jpg" },
    { src: "/assets/images/home/banner/person-1.jpg" },
    { src: "/assets/images/home/banner/person-1.jpg" },
  ]

  let courses = [
    {
      title: "MERN stack training in nepal",
      image: "https://mindrisers.com.np/_next/image?url=https%3A%2F%2Fmindrisers.com.np%2F%2Fstatic%2FImages%2Fcourses%2FMern_wiWtVlC.jpg&w=640&q=75",
      duration: "3 months",
      slug: "mern",
    }
  ]
  courses = [...courses, ...courses, ...courses, ...courses, ...courses, ...courses, ...courses, ...courses]

  let faqs = [
    {
      title: "courses",
      number: 42,
      content: "Our Experts at Mindrisers have thoroughly curated IT based skill courses which we provide in our institution. Currently we are offering 42+ courses in our institution."
    },
    {
      title: "courses",
      number: 42,
      content: "Our Experts at Mindrisers have thoroughly curated IT based skill courses which we provide in our institution. Currently we are offering 42+ courses in our institution."
    },
    {
      title: "courses",
      number: 42,
      content: "Our Experts at Mindrisers have thoroughly curated IT based skill courses which we provide in our institution. Currently we are offering 42+ courses in our institution."
    },
    {
      title: "courses",
      number: 42,
      content: "Our Experts at Mindrisers have thoroughly curated IT based skill courses which we provide in our institution. Currently we are offering 42+ courses in our institution."
    },
  ]

  return (


    <div className=''>
      <Head>
        <title>Best IT Training Institute in kathmandu, Nepal | Mind Risers</title>
        <meta name='title' content={"Best IT Training Institute in kathmandu, Nepal | Mind Risers"} />
        <meta name='description' content={meta_description} />
        <meta name="keywords"
          content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal" />
        {/* facebook og tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />
        {/* <meta property="og:image" content={meta_image} /> */}

        {/* twitter og tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Mindrisers" /><meta name="twitter:creator" content="@mindrisers" />
        <meta property="twitter:title" content={meta_title} />
        <meta property="twitter:description" content={meta_description} />
        {/* <meta name="twitter:image" content={meta_image} /> */}
      </Head>
      <div className="">
        <BannerWrapper size='big'>
          <section className='h-full bg-no-repeat w-full '
            style={{
              // backgroundImage: `url("/assets/images/home/banner/curve-stroke.svg")`
            }}>
            <div className="container pt-[100px] text-center md:text-left  ">
              <p className='uppercase mb-[30px] lg:mb-[40px] header-xl' >Learn</p>
              <ul className='bg-primary inline-flex flex-wrap justify-center gap-[20px] md:gap-[37px] py-[10px] px-[20px] rounded-[12px] title-space'>
                {
                  tags.map(el => {
                    return <><li key={el.title} className=''>
                      <Link target='_blank' href={`/courses?tag=${el.title}`}>
                        <Image alt='' src={el.icon} width={50} height={50} className='w-[21px] h-[21px]' />
                      </Link>
                    </li></>
                  })
                }
              </ul>
              <p className='text-[20px] md:text-[24px] text-primary flex items-center gap-[11px] mb-[30px]'>
                <span>
                  {`<h2>`}
                </span>
                <span className='!text-secondary sub-header md:header lg:header-xl  '> IT skills and expertise</span>
                <span>
                  {`<h2>`}
                </span>
              </p>
              <div className='text-primary text-[36px] flex  justify-center md:justify-start flex-wrap items-center gap-[20px]'>
                <span>and grow with</span>

                {/* tailwind cannot generate dynamic classnames values after build */}
                <ul className='hidden '>
                  <li className='-left-[20px]'></li>
                  <li className='-left-[40px]'></li>
                  <li className='-left-[60px]'></li>
                </ul>
                <ul className='inline-flex flex-grow md:flex-grow-0 justify-center md:justify-start'>
                  {
                    growWithUsers.map((el, index) => {
                      return <li

                        className={`rounded-full overflow-hidden bg-green-600 p-[4px] flex-center -left-[${20 * index}px] relative z-[${index + 1}px] `}
                      >
                        <Image alt='' src={el.src} height={50} width={50} className='h-[50px] rounded-full' />
                      </li>
                    })
                  }
                </ul>
                <p>
                  <span className={`text-secondary relative font-bold text-[32px] -left-[40px] `}><Swoosh>Mindrisers</Swoosh></span>
                </p>
              </div>
            </div>
          </section>
        </BannerWrapper>
      </div>

      <section className=' section-wrapper container grid gap-[40px] lg:gap-0 grid-cols-1 lg:grid-cols-[45%,55%] items-center '>
        <div className={classNames(
          "lg:pr-[40px]",
          "order-2 lg:order-1"
        )}>
          <Image
            className='w-full'
            src={"/assets/images/home/internship-job.jpg"} alt="" width={1000} height={1000} />
        </div>

        <article className={classNames(
          "text-primary",
          "order-1 lg:order-2",
          "text-center lg:text-left"
        )}>
          <div className={classNames(
            "py-[10px] px-[20px] title-space border-l-4 border-primary "

          )}>
            <p className='text-xl'>Job Ready & Niche Specific Courses to boost your skills</p>
          </div>

          <div className=''>
            <p className='header-lg title-space-lg text-expanded '><Swoosh hideInMob type='secondary'>100% Intern</Swoosh>ship/Job Placement</p>
            <p className='mb-[40px]'>Mindrisers have partnered with leading companies to provide internships and full-time job opportunities to our Graduates</p>
            <button className='btn'>
              Contact us
            </button>
          </div>
        </article>
      </section>

      <section className=' section-wrapper container'>
        <p className='header text-center header-space'>Popular <Swoosh type='secondary'>Courses</Swoosh> </p>
        {/* Headless component */}
        <CoursesList courses={courses} />
      </section>
      {/* About us */}
      <section className='container section-wrapper-m section-wrapper-p-half   '>
        <div className='bg-primary-light  grid gap-[40px] xl:gap-0  xl:grid-cols-[45%,55%] items-center py-[40px]  px-[10px] md:px-[20px] lg:px-[30px] xl:p-[40px] rounded-[24px]'>
          <article className=' xl:pr-[40px] text-center xl:text-left'>
            <div>
              <p className='header-lg title-space-lg text-expanded'><Swoosh type='secondary'>About us</Swoosh></p>
              <p className='title-space-lg text-primary '>Mind Risers is a parent company of mindrisers technology pvt.ltd, tummytruck, digitalpalika, and the training institute. We are the only company in Nepal where we guarantee paid internship and job placement after the course is completed in our software development and digital marketing company. What we believe is practical knowledge can be delivered only if the institution continuously does research and development in the same place.</p>
              <button className='btn'>Learn More</button>
            </div>
            <div className='relative mt-[40px] h-[292px] p-[10px] rounded-[24px] bg-green-400 overflow-hidden'>
              {/* <Image src={"https://picsum.photos/200/300"} width={500} height={500} className='' alt="" /> */}
              <div className='h-full'>
              <VideoPlayer className="rounded-[24px] w-full max-w-full h-full max-h-full object-cover overflow-hidden"/>
              </div>
              <p className='absolute right-[28px] top-[38px] text-white font-semibold  md:text-xl lg:text-2xl'>
                Best IT Institute in Nepal<br /> for learning IT skills
              </p>
              {/* <button className='absolute top-0 bottom-0 right-0 left-0 mx-auto'>
                <MdOutlinePlayCircle className='text-white text-5xl' />
              </button> */}
            </div>
          </article>
          <article className=''>
            <Faqs
              faqs={
                faqs.map(el => {
                  return {
                    title: <p className='flex gap-[10px] items-center'>
                      <span className='header'>{el.number} +</span>
                      <span className='text-[20px] '>{el.title}</span>
                    </p>,
                    content: el.content
                  }
                })
              }
              faqTitleStyle="bg-white capitalize  p-5   flex justify-between items-center transition-all duration-[.3s] rounded-[12px] cursor-pointer"
              faqTitleOpenedStyle="rounded-bl-[0px] rounded-br-[0px]"
              faqContentStyle=' border-t-0  p-5 bg-white rounded-bl-xl rounded-br-xl'
              opendedIcon={<><span className='text-3xl text-primary'>-</span></>}
              closedIcon={<><span className='text-3xl text-primary'>+</span></>}
            />
          </article>
        </div>
      </section>

      <section className=' container section-wrapper-m section-wrapper-p-half'>
        <div className=' relative  bg-orange-100 section-p grid gap-[40px] xl:gap-0   xl:grid-cols-[45%,55%] overflow-hidden  rounded-3xl  '>
          <article className='xl:pr-[40px] text-secondary text-center xl:text-left'>
            <p className='header-lg  mb-5 text-expanded'>Request a <span className='swoosh'>Callback</span></p>
            <p>Would you like to speak to one of our adviser over the phone?
              Just submit your details and will be in touch shortly. You can also email us if you would prefer.</p>
            <div className='dots absolute bottom-[50px] mb:bottom-[20px] -left-[66px] '>
              <div className='flex'>
                <div className='h-[340px] w-[340px] bg-green-100 rounded-full'></div>
                <div className='h-[40px] w-[40px] bg-green-100 rounded-full'></div>
              </div>

            </div>
          </article>
          <article className='bg-white p-[40px] relative z-10 rounded-xl'>
            <form action="">
              <div className='mb-5'>
                <label htmlFor="" className='mb-[10px] block'>I am interested in*</label>
                <input type="text" className='rounded-[12px] bg-gray-50 p-5 w-full' placeholder='Select your course' />
              </div>
              <div className='mb-5'>
                <label htmlFor="" className='mb-[10px] block'>I am interested in*</label>
                <input type="text" className='rounded-[12px] bg-gray-50 p-5 w-full' placeholder='Select your course' />
              </div>
              <div className='mb-5'>
                <label htmlFor="" className='mb-[10px] block'>I am interested in*</label>
                <input type="text" className='rounded-[12px] bg-gray-50 p-5 w-full' placeholder='Select your course' />
              </div>
              <div className='mb-5'>
                <label htmlFor="" className='mb-[10px] block'>I am interested in*</label>
                <input type="text" className='rounded-[12px] bg-gray-50 p-5 w-full' placeholder='Select your course' />
              </div>
              <div className='flex justify-end'>
                <button className='btn-secondary' >
                  Submit
                </button>

              </div>

            </form>
          </article>
        </div>
      </section>
      <section className=' section-wrapper container'>
        <div className='text-primary text-center'>
          <p className='uppercase mb-[10px] '>be the part of</p>
          <p className='header text-expanded'>Mindrisers <Swoosh type="secondary" hideInMob>Success Network</Swoosh></p>
          <Image alt="" src={"/assets/images/home/success-stories.svg"} className='mt-[40px] mx-auto' width={700} height={700} />
        </div>
      </section>
      <Partners />
      <Testimonials />
      <div className=" my-[100px] container">
        <Opportunity />
      </div>
    </div >
  )
}

export async function getStaticProps() {
  let data = []
  let gallery_data = [];
  let successStoreis = [];

  try {

    const res = await fetch(`https://mindrisers.com.np/blog/api/v1/course/`)
    data = await res.json();

    const gallery_res = await fetch(`https://mindrisers.com.np/blog/api/v1/gallery/`)
    gallery_data = await gallery_res.json();

    const successStoreis_res = await fetch(`https://mindrisers.com.np/blog/api/v1/successstoryhome/`)
    successStoreis = await successStoreis_res.json();

  }
  catch (err) {
  }

  return {
    props: {
      courses: data,
      gallery_data: gallery_data,
      successStoreis
    },
    // revalidate: 60 * 60 * 24 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 
    revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 

  }
}
