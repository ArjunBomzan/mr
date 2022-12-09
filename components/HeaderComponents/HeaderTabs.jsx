import React from 'react';
// import Link from 'next/link';
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router'
import Link from 'next/link'

const HeaderTabs = () => {
  const router = useRouter()
  const pathname = router.pathname.split("/")[1]
  return (
    <div className='flex flex-col items-center space-y-7 sm:space-y-0 lg:flex-row lg:space-x-5 h-full sm:justify-evenly font-sans font-medium text-xl sm:text-lg '>
      {/* <li className={`nav-button ${(pathname == "") && 'active'}`}><Link href='/'>Home</Link></li> */}
      <span className={`nav-button ${(pathname == "courses") && 'active'}`}><Link href='/courses'>Courses</Link></span>
      <span className={`nav-button ${(pathname == "services") && 'active'}`}><Link href='/services'>Services</Link></span>
      <span className={`nav-button ${(pathname == "tech-services") && 'active'}`}><Link href='/tech-services'>Tech Services</Link></span>
      <span className={`nav-button ${(pathname == "blogs") && 'active'}`}><Link href='/blogs'>Blogs</Link></span>
    </div>
  )
}

export default HeaderTabs
