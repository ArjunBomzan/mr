import OfficeBg from "../../assets/aboutUsPage/office.jpg";
const AboutUsBanner = () => {
  return (
    <div className='w-full bg-office-bg bg-fixed' style={{ backgroundImage: `url(${OfficeBg.src})` }}>
      <div className='w-full h-full flex flex-col justify-center items-center bg-light-mask text-white'>
        <h2 className='font-sans text-4xl sm:text-6xl w-max pt-12 sm:pt-28 font-bold'>
          Our Company
        </h2>
        <h2 className='pt-4 pb-12 sm:pb-28 text-gray-300 w-1/3 text-center font-sans text-xl font-bold'>
          Possibilities meet Technology
        </h2>
      </div>
    </div>
  )
}

export default AboutUsBanner

