
import Matrix from '../../assets/homePage/matrix.jpg'
import Image from 'next/image'
import Link from 'next/link'

const HomeAboutUs = () => {
  return (
    <section className=" space-y-12 h-max   bg-neutral-100" >
      <div className=' py-16 sm:py-16 lg:space-y-0 lg:mx-44 md:mx-20 sm:mx-16 mx-2 lg:flex-row flex flex-col px-4 gap-8'>
        <div className='flex flex-col w-full lg:w-1/2 space-y-9 '>
          <h2 className='w-5/6 text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl' >About Us</h2>
          {/* <p>
          "​​Mind Risers was established in 2019 with the vision of serving businesses, entrepreneurs and individuals with outstanding services like App development, Website development and Digital marketing in the best way ever possible. Our in-house team of app designers, graphics designers, developers, and digital marketers are capable of completing projects with the highest standard of project planning and execution on time with 100% customer satisfaction.

          MindRisers also provides education consultancy in Kathmandu Nepal for your bright future with
          the perfect decisions that match your goals and will make your dream come true.

          After the huge demand, MindRisers launched its own job-oriented IT training center in Kathmandu Nepal. Our developers and experts at MindRisers provide a real practical environment with intense in-depth project-based learnings that meet the industry requirement. MindRisers also provides you with a paid internship after the completion of the course.

          To sum up, MindRisers is committed to 100% clients and students satisfaction with the best value ever possible in Nepal. MindRisers is not just a company, it is the trust of thousands of clients and students."
        </p> */}
          <p className='text-justify about-us'>
            Mind Risers is a parent company of <Link href='https://jobrisers.com/'>jobrisers.com</Link>,  <Link href='https://tummytruck.com.np/'>tummytruck.com.np</Link>, <Link href='https://digitalpalika.org/'>digitalpalika.org</Link> , mind risers software development company, and the training institute. We are the only company in Nepal where we guarantee paid internship and job placement after the course is completed in our software development and digital marketing company.
            What we believe is practical knowledge can be delivered only if the institution continuously does research and development in the same place.
          </p>
          {/* <Link className='flex flex-row space-x-2 ' href='#why-us-container'> */}
          <Link href='#why-us-container' scroll={false} className='items-center flex flex-row space-x-2 px-4 py-3 mt-8 text-white duration-500 bg-green-500 rounded-md w-max fill-white hover:fill-black hover:text-black hover:bg-slate-300'>
            <span className='font-semibold text-md'>
              Discover More
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
          {/* </a> */}
        </div>
        <div className='w-full lg:w-1/2' >
          <Image style={{ marginTop: "60px" }} src={Matrix} alt='Services' className='object-cover w-full rounded-md' />
        </div>
      </div>
    </section>
  )
}



export default HomeAboutUs
