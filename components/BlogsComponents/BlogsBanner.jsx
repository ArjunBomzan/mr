import Background from '../../assets/homePage/blog-splash.jpg'

const BlogsBanner = (props) => {
  return (
    <div
      style={{
        backgroundImage: props?.banner ? `url(${process.env.DOMAIN}${props?.banner})` : `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className='w-full bg-blogs relative'
    >
      <div className='w-full h-full  py-28 flex flex-col justify-center items-center bg-light-mask text-white'>
        <h1 className=' text-4xl sm:text-6xl w-ma font-bold text-center'>
          {props?.title}
        </h1>
      </div>
    </div>
  )
}

export default BlogsBanner

