import Link from "next/link";

// import Logo from '../../assets/mindrisers.png'

const HeaderLeft = () => {
  return (
    <Link href='/'>
      <div id='header-left' className='flex flex-row items-center justify-center space-x-3 cursor-pointer'>
        {/* <img src={Logo} alt='MindRisers' width={45} /> */}
        <h1 className='font-sans font-bold text-2xl leading-9'>mindrisers</h1>
      </div>
    </Link>
  )
}

export default HeaderLeft
