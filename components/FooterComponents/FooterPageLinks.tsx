
import Link from 'next/link'

const FooterPageLinks = () => {
  return (
    <div className='footer-link-divs2 footer-link-divs-lg-2 pb-8 md:pb-8'>
      <h4 className='mb-4 text-xl font-bold tracking-wide md:pt-2'>
        Company
      </h4>
      <ul className='text-neutral-300  text-sm '>
        <li className='cursor-pointer hover:text-neutral-400 mb-1'>
          <Link href='/about-us'>
            About Us
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400 mb-1'>
          <Link href='/contact-us'>
            Contact Us
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400 mb-1'>
          <Link href='/courses'>
            Courses
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400 mb-1'>
          <Link href='/after+2-courses'>
            After +2 Courses
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400 mb-1'>
          <Link href='/online-admission'>
            Online Admission
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400 mb-1'>
          <Link href='/success-gallery'>
            Success Gallery
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterPageLinks
