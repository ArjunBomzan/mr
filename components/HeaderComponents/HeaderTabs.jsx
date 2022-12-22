import { useRouter } from 'next/router'
import Link from 'next/link'

const HeaderTabs = () => {
  const router = useRouter()
  const pathname = router.pathname.split("/")[1]
  return (
    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto lg:mr-0 lg:items-center justify-start font-medium text-xl sm:text-lg text-fade transition duration-150 ease-in-out" style={{ animationDuration: "0.2s" }}>
      <li className="nav-item p-2">
        <Link href='/courses' className={`nav-button ${(pathname == "courses") && 'active'}`}>Courses</Link>
      </li>
      <li className="nav-item p-2">
        <Link href='/+2courses' className={`nav-button ${(pathname == "+2courses") && 'active'}`}>+2 Courses</Link>
      </li>
      <li className="nav-item p-2">
        <Link href='/admission' className={`nav-button ${(pathname == "admission") && 'active'}`}>Online Admission</Link>
      </li>
      <li className="nav-item p-2">
        <Link href='/partners' className={`nav-button ${(pathname == "partners") && 'active'}`}>Placement Partner</Link>
      </li>
      <li className="nav-item p-2">
        <Link href='/successgallery' className={`nav-button ${(pathname == "successgallery") && 'active'}`}>Success Gallery</Link>
      </li>
      <li className="nav-item p-2">
        <Link href='/blogs' className={`nav-button ${(pathname == "blogs") && 'active'}`}>Blogs</Link>
      </li>
      <li className="nav-item lg:py-0 p-2 pr-0">
        <Link href='/contact'>
          <button className='rounded-lg h-10 px-5 text-md bg-green-500 text-white hover:bg-slate-300 hover:text-black duration-300'>
            Contact Us
          </button>
        </Link>
      </li>
    </ul>
  )
}

export default HeaderTabs
