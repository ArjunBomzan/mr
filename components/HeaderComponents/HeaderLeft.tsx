import Image from "next/image";
import Link from "next/link";
import Logo from '../../assets/mindrisers.webp'

const HeaderLeft = () => {
  return (
    <Link href='/'>
      <div id='header-left' className='flex flex-row items-center justify-center space-x-3 cursor-pointer'>
        <Image src={Logo} alt='Mindrisers' width={45} />
        <p className=' font-bold text-2xl leading-9'>mindrisers</p>
      </div>
    </Link>
  )
}

export default HeaderLeft
