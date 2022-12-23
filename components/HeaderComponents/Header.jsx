import HeaderTailwind from "./HeaderTailwind";
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <>
      <div id='navbar'
        className=' bg-green-500 top-0 flex flex-row justify-center sm:justify-between items-center text-white  px-6 sm:px-12 md:px-14 lg:px-18 '
        style={{
          fontSize: "0.7rem"
        }}
      >
        <div className='text-md font-bold hidden sm:block whitespace-nowrap'>Contact: <span className='font-bold'><a href="tel:9823721737">9823721737</a></span></div>
        <div className='flex sm:gap-6 header-socials justify-between sm:justify-end w-full'>
          <SocialLinks />
        </div>
      </div>
      <HeaderTailwind className='sticky-top' />
    </>
  )
}

export default Header
