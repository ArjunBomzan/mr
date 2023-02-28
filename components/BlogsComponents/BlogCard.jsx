import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogCard = ({ thumbnail, title, blurb, url, imgAlt, index }) => {
  const router = useRouter()
  const type = router.pathname.split('/')[1]
  return (
    <Link
      href={`/blogs/${url}`}
      className='cursor-pointer h-[450px] blog-container image-box bg-white flex flex-col rounded-md duration-500'
    >
      <div className='image-box max-h-56 min-h-56 h-56'>
        <Image width={450} height={450} src={`${process.env.DOMAIN}${thumbnail}`} alt={imgAlt} className='h-56 object-cover bg-cover' />
      </div>
      <div className='flex flex-col p-6 justify-between h-56 '>
        <div className='h-20'>
          {
            index
              ?
              <h2 className=' text-neutral-600 font-bold text-xl '>{title}</h2>
              :
              <h3 className=' text-neutral-600 font-bold text-xl '>{title}</h3>

          }
          <p className="text-base line-clamp-2 mt-2">
            {blurb}
          </p>
        </div>
        <p className=" text-green-500 text-base underline underline-offset-4 font-normal cursor-pointer w-max decoration-current duration-200 hover:decoration-white" >Read Now</p>
      </div>
    </Link>
  )
}

export default BlogCard
