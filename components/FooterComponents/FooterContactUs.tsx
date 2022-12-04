
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
                    <a href='https://goo.gl/maps/L6b1682tr3T21jXy9' target="_blank">
                        Putalisadak, Kumari Galli 2
                    </a>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    {/* <Link href=''> */}
                    <a href="tel:+9823721737">
                        9823721737</a>
                    {/* </Link> */}
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <a href='whatsapp://send?text=Hello World!&phone=%2B9779823721737'>
                        9823721737 (Whatsapp)
                    </a>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <a href="viber://chat/?number=%2B9779823721737">
                        9823721737 (Viber)
                    </a>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <a href='https://www.facebook.com/MindRisersConsortium'>
                        Facebook
                    </a>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <a href="https://www.facebook.com/messages/t/112200750406684">
                        Messenger
                    </a>
                </li>
                <li className='cursor-pointer hover:text-neutral-400'>
                    <a href='mailto:tech.mindrisers@gmail.com'>
                        tech.mindrisers@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FooterContactUs
