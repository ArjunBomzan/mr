
import Link from 'next/link'

const FooterContactUs = () => {
    return (
        <div className='footer-link-divs2 footer-link-divs-lg-2 pb-8 md:pb-8'>
            <h4 className='mb-4 text-xl font-bold tracking-wide md:pt-2'>
                Contact Us
            </h4>
            <ul className='text-neutral-300  text-sm '>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='/'>
                        MindRisers
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='https://goo.gl/maps/L6b1682tr3T21jXy9' target="_blank" rel="noreferrer">
                        Putalisadak, Kumari Galli 2
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    {/* <Link href=''> */}
                    <Link href="tel:+9823721737">
                        9823721737</Link>
                    {/* </Link> */}
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='whatsapp://send?text=Hello World!&phone=%2B9779823721737'>
                        9823721737 (Whatsapp)
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href="viber://chat/?number=%2B9779823721737">
                        9823721737 (Viber)
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='https://www.facebook.com/MindRisersConsortium'>
                        Facebook
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href="https://www.facebook.com/messages/t/112200750406684">
                        Messenger
                    </Link>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <Link href='mailto:class@mindrisers.com.np'>
                        class@mindrisers.com.np
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterContactUs
