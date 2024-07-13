import HeaderLeft from "../HeaderComponents/HeaderLeft"

const CompanyInfo = () => {
  return (
    <div className='footer-link-divs1 footer-link-divs-lg-1 flex flex-col items-center w-full md:items-start'>
      <HeaderLeft />
      <p className='w-full pt-2 text-sm  md:w-full text-neutral-300 pb-7 md:pb-0' style={{
        textAlign:"justify"
      }}>
      Mindrisers Institute of Technology is the only IT training institute in Kathmandu, Nepal offering paid internships after the course completion. Carrying more than 5 years of experience in training with various courses covering everything from programming to designing and marketing, our professional instructor of highly educated educators is committed to assisting you in succeeding.
      </p>
      {/* <SocialLinks /> */}
    </div>
  )
}

export default CompanyInfo
