import CompanyInfo from './CompanyInfo'
import FooterBottom from './FooterBottom'
import FooterContactUs from './FooterContactUs'
import FooterContact from './FooterContact'
import FooterImportantLink from './FooterImportantLink'
import FooterPageLinks from './FooterPageLinks'

const Footer = () => {
  return (
    <footer className='text-white w-full h-max sm:h-max '>
      <div className='flex h-max w-full flex-wrap lg:flex-row items-start md:items-start justify-between lg:columns-3
      bg-neutral-800 px-8 sm:px-12 md:px-14 lg:px-18 2xl:px-48 pt-10 md:py-20 pb-10 overflow-x-hidden gap-5'>
        <CompanyInfo />
        <FooterPageLinks />
        <FooterContactUs />
        <FooterImportantLink />
        <FooterContact />
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
