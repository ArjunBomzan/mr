import Statistic from "./Statistic";

const Mission = () => {

  return (
    <section className='flex flex-col w-full px-5 py-16 sm:px-20 lg:px-44 h-max gap-8' id="why-us-container">
      {/* <div className='flex flex-col justify-between w-full lg:flex-row gap-8'>
        <div className='w-full space-y-8 lg:w-full'>
          
          <p className="text-justify">
            Mindrisers is the only IT training institute in Kathmandu, Nepal that offers paid internships and job placement after course completion. To enhance the careers of our students, we provide IT courses that are in high demand in the industry. We have a team serving as a tutor that consists of creative thinkers, quick engineers, vigilant program managers, and active web marketers. Our instructors provide students with a fantastic opportunity to learn from them since they are real-time developers who stay active with emerging technological advancements. Students learn about the topic thoroughly and practically thanks to our excellent educational method. Due to this distinctiveness, Mindrisers become the best IT training institute in Kathmandu, Nepal.
          </p>
        </div>
      </div> */}
      <div className='flex flex-row justify-between w-full' >
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          statNum={5}
          text='YEARS'
        />
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          }
          statNum={10}
          text='COURSES'
        />
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          }
          statNum={5000}
          text='STUDENTS'
        />
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          }
          statNum={500}
          text='PLACEMENTS'
        />
      </div>
    </section>
  )
}

export default Mission
