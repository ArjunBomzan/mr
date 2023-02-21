
import Link from 'next/link'
import SocialLinks from '../HeaderComponents/SocialLinks'

const FooterImportantLink = () => {
    return (
        <div className='footer-link-divs2 footer-link-divs-lg-2 pb-8 md:pb-8'>
            <p className='mb-4 text-xl font-bold tracking-wide md:pt-2'>
                Important links
            </p>
            <ul className='text-neutral-300  text-sm '>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href='/blogs'>
                        Blogs
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href='/placement-partner'>
                        Placement Partner
                    </Link>
                </li>
                <li className='mt-2'>
                    <div className='flex gap-3 footer-socials justify-start w-full'>
                        <SocialLinks />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FooterImportantLink
