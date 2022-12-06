const JumpstartChild = ({ icon, title, info }) => {
  return (
    <div className='flex flex-col items-center w-1/2 md:w-[30%]'>
      {icon}
      <h4 className='pt-3 text-2xl font-bold text-center'>{title}</h4>
      <p className='text-center text-neutral-700'>
        {info}
      </p>
    </div>
  )
}

const Jumpstart = () => {
  return (
    <section className='flex flex-col px-5 py-20 space-y-12 h-max sm:pt-24 sm:px-10 md:px-20 lg:px-40 xl:px-48'>
      <div className='flex flex-col'>
        <p className="w-full mb-5 text-sm font-medium tracking-widest text-center text-green-500">WHY BUSINESSES CHOOSE US</p>
        <h3 className='w-full mb-5 text-2xl font-bold text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Our core expertise</h3>
        <p className='w-full text-center'>
          A few things we can boast about
        </p>
      </div>
      <div className="flex flex-col items-center justify-between space-y-9 md:space-y-0 md:flex-row md:space-x-5 flex-nowrap py-7 ">
        <JumpstartChild
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          }
          title="Education Consultancy"
          info="We make dreams come true"
        />
        <JumpstartChild
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
            </svg>
          }
          title="Software Development"
          info="We make top-notch products"
        />
        <JumpstartChild
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-green-500" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
          }
          title="Software Development Trainings"
          info="We will help your learn and grow"
        />
      </div>
    </section>
  )
}

export default Jumpstart
