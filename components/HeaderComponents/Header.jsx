import dynamic from 'next/dynamic'
import HeaderLeft from './HeaderLeft'


const Header = () => {
  const HeaderRight = dynamic(
    () => import('./HeaderRight'),
    { ssr: false }
  )
  return (
    <header className='relative bg-white top-0 flex flex-row justify-between items-center pt-4 pb-4 px-4 sm:px-12 md:px-12 lg:px-44 font-sans duration-500' id="navbar">
      <HeaderLeft />
      <HeaderRight />
    </header>
  )
}

export default Header
