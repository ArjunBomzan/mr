
import Link from 'next/link'

const HomeAboutUs = () => {
  return (
    <section className="h-max bg-neutral-100 px-5 py-16 sm:px-20 lg:px-44">
      <div className='lg:flex-row flex flex-col gap-8'>
        <div className='flex flex-col w-full lg:w-1/2 space-y-9 justify-center '>
          <p className='w-5/6 text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl' >About Us</p>
          <p className='text-justify about-us'>
            Mindrisers is a parent company of mindrisers technology pvt.ltd, <Link href='https://tummytruck.com.np/'>tummytruck</Link>, <Link href='https://digitalpalika.org/'>digitalpalika</Link>, and the training institute. We are the only company in Nepal where we guarantee paid internship and job placement after the course is completed in our software development and digital marketing company.
            What we believe is practical knowledge can be delivered only if the institution continuously does research and development in the same place.
          </p>
        </div>
        <div className='w-full lg:w-1/2  about-us__banner' >
          {/* <Image src={Matrix} alt='Services' className='object-cover w-full rounded-md' /> */}
        </div>
      </div>
    </section>
  )
}



export default HomeAboutUs
