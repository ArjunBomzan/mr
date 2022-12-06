import HeaderLeft from "../HeaderComponents/HeaderLeft"

const CompanyInfo = () => {
  return (
    <div className='footer-link-divs1 footer-link-divs-lg-1 flex flex-col items-center w-full md:items-start'>
      <HeaderLeft />
      <p className='w-full pt-4 text-sm  md:w-full text-neutral-300 pb-7 md:pb-0'>
        Mind Risers Consortium is a forward-thinking app and website development company in Kathmandu Nepal with extensive experience in creating digital apps and supporting technologies. Holding more than 5 years of experience with happy and satisfied clients.
      </p>
      {/* <SocialLinks /> */}
    </div>
  )
}

export default CompanyInfo
