import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogCard = ({ thumbnail, title, blurb, md, url, imgAlt }) => {
  const router = useRouter()
  const type = router.pathname.split('/')[1]
  console.log((type == "tech-services" || type == "services"))
  return (
    <Link
      // href={`/tech-services/${url}`}
      href={`/${(type == "tech-services" || type == "services") ? "tech-services" : "blogs"}/${url}`}
      // onClick={handleOnClick}
      className='cursor-pointer h-[450px] blog-container image-box bg-white flex flex-col rounded-md duration-500'
    // className='cursor-pointer h-[450px] blog-container image-box bg-white w-[80%] md:w-[45%] lg:w-[28%] xl:w-[26%] mt-12 flex flex-col rounded-md hover:rounded-none duration-500'
    >
      <div className='image-box max-h-56'>
        <img src={thumbnail} alt={imgAlt} />
      </div>
      <h4 className='font-sans text-neutral-600 font-bold text-xl p-5'>{title}</h4>
      <p className="font-sans text-neutral-700 text-base p-5">
        {blurb}
      </p>
      <p className="font-sans text-green-500 text-base p-5 underline underline-offset-4 font-normal cursor-pointer w-max decoration-current duration-500 hover:decoration-white" >Read Now</p>
    </Link>
  )
}

export default BlogCard
