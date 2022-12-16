import { useRouter } from 'next/router'
import Link from 'next/link'
import HeaderButtonRight from './HeaderButtonRight';

const HeaderTabs = () => {
  const router = useRouter()
  const pathname = router.pathname.split("/")[1]
  return (
    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto lg:mr-0 lg:items-center justify-start font-medium text-xl sm:text-lg text-fade transition duration-150 ease-in-out" style={{ animationDuration: "0.2s" }}>
      <li class="nav-item p-2">
        <span className={`nav-button ${(pathname == "courses") && 'active'}`}><Link href='/courses' className='mt-2'>Courses</Link></span>
      </li>
      <li class="nav-item p-2">
        <span className={`nav-button ${(pathname == "+2courses") && 'active'}`}><Link href='/+2courses'>+2 Courses</Link></span>
      </li>
      <li class="nav-item p-2">
        <span className={`nav-button ${(pathname == "admission") && 'active'}`}><Link href='/admission'>Online Admission</Link></span>
      </li>
      <li class="nav-item p-2">
        <span className={`nav-button ${(pathname == "partners") && 'active'}`}><Link href='/partners'>Placement Partner</Link></span>
      </li>
      <li class="nav-item p-2">
        <span className={`nav-button ${(pathname == "successgallery") && 'active'}`}><Link href='/successgallery'>Success Gallery</Link></span>
      </li>
      <li class="nav-item p-2">
        <span className={`nav-button ${(pathname == "blogs") && 'active'}`}><Link href='/blogs'>Blogs</Link></span>
      </li>
      <li class="nav-item lg:py-0 p-2 pr-0">
        <HeaderButtonRight />
      </li>
    </ul>
  )
}

export default HeaderTabs
