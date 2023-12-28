import CultureCard from "./CultureCard"

const OurCulture = () => {
  return (
    <section className='h-max flex flex-col py-20 sm:pt-24 sm:px-10 md:px-20 lg:px-40 xl:px-48 px-5 space-y-12'>
      <div className='flex flex-col'>
        <p className="w-full text-center text-green-500 text-sm tracking-widest font-medium mb-5">OUR CULTURE</p>
        <p className='w-full text-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>Our Fundamental Principles</p>
      </div>
      <div className="flex flex-col items-center space-y-9 md:space-y-0 md:flex-row md:space-x-5 flex-nowrap py-7 justify-between ">
        <CultureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-green-500" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          }
          title='Vision'
          info='Empowering global innovation through cutting-edge technology education.'
          />
        <CultureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-green-500" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
          </svg>
          }
          title='Mission'
          info='Equipping individuals with industry-relevant skills to shape the digital world.'
          />
        <CultureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-green-500" viewBox="0 0 20 20">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          }
          title='Motto'
          info='Inspiring creativity, driving innovation, shaping the future.'
        />
      </div>
    </section>
  )
}

export default OurCulture
