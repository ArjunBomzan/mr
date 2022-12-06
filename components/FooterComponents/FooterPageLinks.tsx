
import Link from 'next/link'

const FooterPageLinks = () => {
  return (
    <div className='footer-link-divs2 footer-link-divs-lg-2 pb-8 md:pb-8'>
      <h4 className='mb-4 text-xl font-bold tracking-wide md:pt-2'>
        Company
      </h4>
      <ul className='text-neutral-300  text-sm '>
        <li className='cursor-pointer hover:text-neutral-400'>
          <Link href='about'>
            About Us
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400'>
          <Link href='contact'>
            Contact Us
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400'>
          <Link href='services'>
            Our Services
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400'>
          <Link href='admission'>
            Online Admission
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400'>
          <Link href='partners'>
            Our Partners
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400'>
          <Link href='privacy-policy'>
            Privacy policy
          </Link>
        </li>
        <li className='cursor-pointer hover:text-neutral-400'>
          <Link href='terms-conditions'>
            Terms and conditions
          </Link>
        </li>
        {/* <li className='cursor-pointer hover:text-neutral-400'>Careers</li> */}
        <li className='cursor-pointer hover:text-neutral-400'>
          <Link href='blogs'>
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterPageLinks
