import Background from '../../assets/aboutUsPage/office.webp'
const ServicesBanner = () => {
  return (
    <div className='w-full bg-fixed bg-office-bg' style={{ backgroundImage: `url(${Background.src})` }}>
      <div className='flex flex-col items-center justify-center w-full h-full text-white bg-light-mask'>
        <p className='pt-12  text-4xl font-bold sm:text-6xl w-max sm:pt-28'>
          Services
        </p>
        <p className='w-4/5 pt-4 pb-12 text-center text-gray-200 sm:pb-28 md:w-1/3'>
          Our team is capable of making applications as sophisticated as you can imagine. We do not only make top-of-the-line mobile applications, web applications, and enterprise applications, but also specialize in digital marketing, and teaching you modern technologies. Mindrisers is known as the best IT services provider and IT training centre in Kathmandu Nepal.
        </p>
      </div>
    </div>
  )
}

export default ServicesBanner

