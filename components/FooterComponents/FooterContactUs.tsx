
import Link from 'next/link'

const FooterContactUs = () => {
    return (
        <div className='footer-link-divs2 footer-link-divs-lg-2 pb-8 md:pb-8'>
            <p className='mb-4 text-xl font-bold tracking-wide md:pt-2'>
                Contact Us
            </p>
            <ul className='text-neutral-300  text-sm '>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href='/'>
                        Mindrisers
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href='https://goo.gl/maps/L6b1682tr3T21jXy9' target="_blank" rel="noreferrer">
                        Putalisadak, Kumari Galli 2
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    {/* <Link href=''> */}
                    <Link href="tel:+9843217125">
                        9843217125</Link>
                    {/* </Link> */}
                </li>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href='whatsapp://send?text=Hello World!&phone=%2B9779843217125'>
                        9843217125 (Whatsapp)
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href="viber://chat/?number=%2B9779843217125">
                        9843217125 (Viber)
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href='https://www.facebook.com/MindrisersInstituteofTechnology'>
                        Facebook
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href="https://www.facebook.com/messages/t/112200750406684">
                        Messenger
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400 mb-1'>
                    <Link href='mailto:class@mindrisers.com.np'>
                        class@mindrisers.com.np
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterContactUs
