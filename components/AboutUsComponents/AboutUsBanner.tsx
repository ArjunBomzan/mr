import OfficeBg from "../../assets/aboutUsPage/office.jpg";
const AboutUsBanner = () => {
  return (
    <div className='w-full bg-office-bg bg-fixed' style={{ backgroundImage: `url(${OfficeBg.src})` }}>
      <div className='w-full h-full flex flex-col justify-center items-center bg-light-mask text-white'>
        <p className=' text-4xl sm:text-6xl w-max pt-12 sm:pt-28 font-bold'>
          About Us
        </p>
        <p className='pt-4 pb-12 sm:pb-28 text-gray-300 w-1/3 text-center  text-xl font-bold'>
          Possibilities meet Technology
        </p>
      </div>
    </div>
  )
}

export default AboutUsBanner

