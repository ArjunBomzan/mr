import HeaderTailwind from "./HeaderTailwind";
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <div id='navbar'>
      <div className='relative bg-green-500 top-0 flex flex-row justify-center sm:justify-between items-center text-white  px-8 sm:px-12 md:px-14 lg:px-18 py-[0.3rem]'>
        <div className='text-md font-bold hidden sm:block whitespace-nowrap'>Contact: <span className='font-bold'>9823721737</span></div>
        <div className='flex sm:gap-6 header-socials justify-between sm:justify-end w-full'>
          <SocialLinks />
        </div>
      </div>
      <HeaderTailwind />
    </div>
  )
}

export default Header
