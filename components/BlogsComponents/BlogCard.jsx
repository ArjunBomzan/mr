import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogCard = ({ thumbnail, title, blurb, md, url, imgAlt }) => {
  const router = useRouter()
  const type = router.pathname.split('/')[1]
  return (
    <Link
      href={`/${(type == "tech-services" || type == "services") ? "tech-services" : "blogs"}/${url}`}
      className='cursor-pointer h-[450px] blog-container image-box bg-white flex flex-col rounded-md duration-500'
    >
      <div className='image-box max-h-56 min-h-56 h-56'>
        <img loading="lazy" src={`${process.env.DOMAIN}${thumbnail}`} alt={imgAlt} className='h-56 object-cover bg-cover' />
      </div>
      <div className='flex flex-col p-6 justify-between h-56 '>
        <div className='h-20'>
          <h2 className=' text-neutral-600 font-bold text-xl '>{title}</h2>
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
