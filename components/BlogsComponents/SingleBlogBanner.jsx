import Image from 'next/image'

const SingleBlogBanner = (props) => {
  let banner_url = `${process.env.DOMAIN}${props?.banner}`.replaceAll("//", "/")
  return (
    <div
    // style={{
    //   backgroundImage: props?.banner ? `url(${process.env.DOMAIN}${props?.banner})` : `url(${Background.src})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat"
    // }}
    // className='w-full bg-blogs relative'
    >

      {/* <div> */}
      {/* {
        JSON.stringify(props.banner)
      }
      {
        JSON.stringify(process.env.DOMAIN)
      }
      <hr />
      {
        JSON.stringify(process.env.NEXT_PUBLIC_DOMAIN)
      } */}
      <Image src={`${banner_url}`} className='w-full aspect-video object-contain mx-auto' height={1000} width={1000} alt={`${props?.title}`} />
      <h1 className=' text-xl sm:text-2xl md:text-3xl  w-ma font-bold  mt-8 px-6 lg:px-0 '>
        {props?.title}
      </h1>
      {/* <div className='w-full h-full  py-28 flex flex-col justify-center items-center bg-light-mask text-white'>
        <h1 className=' text-4xl sm:text-6xl w-ma font-bold text-center'>
          {props?.title}
        </h1>
      </div> */}
    </div>
  )
}

export default SingleBlogBanner

