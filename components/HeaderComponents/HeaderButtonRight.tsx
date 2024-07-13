import Link from 'next/link'

const HeaderButtonRight = () => {
  return (
    <Link href='/contact-us'>
      <button className='rounded-lg h-10 px-5 text-md bg-green-500 text-white hover:bg-slate-300 hover:text-black duration-300'>
        Contact Us
      </button>
    </Link>
  )
}

export default HeaderButtonRight
