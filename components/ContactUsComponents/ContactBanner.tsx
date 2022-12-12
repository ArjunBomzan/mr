import Background from '../../assets/aboutUsPage/office.jpg'
const ContactBanner = () => {
  return (
    <div className='w-full bg-office-bg bg-fixed' style={{ backgroundImage: `url(${Background.src})` }}>
      <div className='w-full h-full flex flex-col justify-center items-center bg-light-mask text-white'>
        <h2 className=' text-4xl sm:text-6xl w-max pt-12 sm:pt-28 font-bold'>
          CONTACT US
        </h2>
        <p className='pt-4 pb-12 sm:pb-28 text-gray-200 w-1/3 text-center'>
          For Any Registration And Information To Courses, Please Fill Up The Form Below Or Contact Us Via Phone Call.
        </p>
      </div>
    </div>
  )
}

export default ContactBanner
