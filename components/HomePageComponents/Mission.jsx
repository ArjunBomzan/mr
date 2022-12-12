import ProgressBar from "./ProgressBar";
import Statistic from "./Statistic";

const Mission = () => {

  return (
    <section className='flex flex-col w-full px-5 py-20 space-y-24 h-max sm:py-32 sm:px-32 lg:px-44' id="why-us-container">
      <div className='flex flex-col justify-between w-full md:flex-row'>
        <div className='flex flex-col w-full mb-16 ml-1 space-y-10 md:ml-0 md:mb-0 md:w-1/2 md:mr-16 '>
          {/* <ProgressBar value={90} label='Training' />
          <ProgressBar value={80} label='Development' />
          <ProgressBar value={70} label='Marketing' /> */}
        </div>
        <div className='w-full space-y-8 md:w-1/2'>
          <h2 className=' text-3xl font-bold md:text-4xl'>
            WHY US?
          </h2>
          <p className="text-justify">
            Our technological development competence is progressive and on track with Next-Gen Tech Applications. MindRisers is the first choice of our clients and students due to its outstanding and unbeatable outcomes. Our clients say that MindRisers is the best IT service providing and digital marketing agency in Nepal. Allow us to plan, build, and improve your tech products so that you can concentrate on your core market. You can rely on us for your digital needs as we have a group consisting of innovative thinkers, fast engineers, vigilant program managers, and active Web Marketers.
          </p>
        </div>
      </div>
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
          statNum={12}
          text='COURSES'
        />
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          }
          statNum={237}
          text='STUDENTS'
        />
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          }
          statNum={477}
          text='PLACEMENTS'
        />
      </div>
    </section>
  )
}

export default Mission
