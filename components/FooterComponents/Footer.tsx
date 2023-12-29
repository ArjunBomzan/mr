import CompanyInfo from './CompanyInfo'
import FooterBottom from './FooterBottom'
import FooterContactUs from './FooterContactUs'
import FooterContact from './FooterContact'
import FooterImportantLink from './FooterImportantLink'
import FooterPageLinks from './FooterPageLinks'
import Image from "next/image"
import Logo from "../../assets/mindrisers-white.png"
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();


import { FaInstagram } from "react-icons/fa";

let data = {
  title: "Navigation",
  menus: [
    {
      title: "our courses",
      url: "/courses"
    },
    {
      title: "post +2 courses",
      url: "/after+2-courses"
    },
    {
      title: "placement partner",
      url: "/placement-partner"
    },
    {
      title: "successful stories",
      url: "/success-gallery"
    },
    {
      title: "blogs",
      url: "/blogs"
    },
  ]
}
let socialData = {
  popup: true,
  title: "Get regular updates",
  menus: [
    {
      title: "facebook",
      url: "https://ww.facebook.com",
      icon: <FaInstagram className='inline' />
    },
    {
      title: "facebook",
      url: "https://ww.facebook.com",
      icon: <FaInstagram className='inline' />
    },

  ]
}
let resourcesData = {
  title: "resources",
  menus: [
    {
      title: "facebook",
      url: "https://ww.facebook.com",
    },
    {
      title: "facebook",
      url: "https://ww.facebook.com",
    },

  ]
}

let aboutData = {
  title: "About",
  menus: [
    {
      title: "our story",
      url: "/about",
    },
  ]
}
const FooterLinks = ({ data }) => {
  return <div className={inter.className}>
    <p className={` text-base font-semibold mb-5 uppercase`}>{data.title}</p>
    <ul>
      {
        data.menus.map(el => {
          return <li className={`text-sm font-medium mb-5 capitalize leading-5`}>
            <Link target={data.popup ? "_blank" : "_self"} href={el.url}>{el.icon && <span className='mr-5'>{el.icon}</span>} {el.title} </Link>
          </li>
        })
      }
    </ul>
  </div>
}

const Footer = () => {


  return (
    <footer className='bg-primary text-white text-sm'>
      <div className="container section-wrapper-p-sm grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-sm">
        <div className="col-span-2 md:col-span-4 lg:col-span-1  text-center lg:text-left section-space-3xl xl:mb-0">
          <div className='flex gap-2 items-center justify-center lg:flex-col xl:flex-row lg:justify-start title-space-xl'>
            <Image src={Logo} className="h-[3.375rem] w-[3.375rem]" width={300} height={300} alt="" />
            <p className={`${inter.className} text-[1.75rem]`}>mindrisers</p>
          </div>
          <p>MindRisers is the only IT training institute in Kathmandu, Nepal offering paid internships after the course completion</p>
        </div>
        <FooterLinks data={data} />
        <FooterLinks data={socialData} />
        <FooterLinks data={resourcesData} />
        <FooterLinks data={aboutData} />
      </div>
      <div className='border-t border-green-700 py-[1.875rem] text-sm font-medium'>
        <p className='text-center'>
        <span>&copy;{currentYear} Mindrisers</span>
        </p>
      </div>

    </footer>
  )
 
}

export default Footer
