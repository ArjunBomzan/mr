import HeaderTailwind from "./HeaderTailwind";
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <>
      <div id='navbar'
        className=' bg-green-500 top-0 flex flex-row justify-center sm:justify-between items-center text-white  px-6 sm:px-12 md:px-14 lg:px-18 '
        style={{
          fontSize: "0.8rem"
        }}
      >
        <div className='text-md font-bold whitespace-nowrap hidden sm:block '>Contact: <span className='font-bold'><a href="tel:9843217125">+977 9843217125</a></span></div>
        <div className='flex gap-4 sm:gap-6 header-socials  justify-between sm:justify-end w-full'>
          <SocialLinks />
        </div>
      </div>
      <HeaderTailwind className='sticky-top' />
    </>
  )
}

export default Header
