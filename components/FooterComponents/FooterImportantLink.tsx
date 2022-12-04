
import Link from 'next/link'

const FooterImportantLink = () => {
    return (
        <div className='footer-link-divs2 footer-link-divs-lg-2 pb-8 md:pb-8'>
            <h4 className='mb-4 text-xl font-bold tracking-wide md:pt-2'>
                Important links
            </h4>
            <ul className='text-neutral-300  text-sm '>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='blogs'>
                        Blogs
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='help-faqs'>
                        Help & FAQ
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='placement-partners'>
                        Placement Partner
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='internship-placement'>
                        Internship / Placement
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterImportantLink
