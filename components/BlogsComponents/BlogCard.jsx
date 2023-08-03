import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import formatDate from "../../utils/formatDate"

const BlogCard = ({ thumbnail, title, blurb, url, imgAlt, index, created_at }) => {
  const router = useRouter()
  const type = router.pathname.split('/')[1]
  return (
    <Link
      href={`/blogs/${url}`}
      className='cursor-pointer blog-container image-box bg-white flex flex-col rounded-md duration-500'
    >
      <div className='image-box mb-3  '>
        <Image width={450} height={450} src={`${process.env.DOMAIN}${thumbnail}`} alt={imgAlt} className=' object-cover bg-cover ' />
      </div>
      <div className=' p-6 pt-0 '>
        <div className=''>
          {
            index
              ?
              <h2 className=' text-neutral-600 font-bold text-xl '>{title}</h2>
              :
              <h3 className=' text-neutral-600 font-bold text-xl '>{title}</h3>

          }
          <p className="text-base text-justify line-clamp-3 mt-2">
            {blurb}
          </p>
        </div>
        <p className='my-1 text-sm'>- {formatDate(created_at)}</p>
        <p className=" text-green-500 text-base underline underline-offset-4 font-normal cursor-pointer w-max decoration-current duration-200 hover:decoration-white" >Read Now</p>
      </div>
    </Link>
  )
}

export default BlogCard
