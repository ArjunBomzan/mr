import Background from '../../assets/homePage/blog-splash.jpg'
const BlogsBanner = (props) => {
  console.log(props)
  return (
    <div
      style={{ backgroundImage: props?.banner ? `url(${process.env.DOMAIN}${props?.banner})` : `url(${Background.src})` }}
      className='w-full bg-blogs relative'
    >
      <div className='w-full h-full  py-28 flex flex-col justify-center items-center bg-light-mask text-white'>
        <h2 className=' text-4xl sm:text-6xl w-ma font-bold text-center'>
          {props?.title}
        </h2>
        <div className='text-gray-200 text-start absolute bottom-0 left-0 m-3 mx-5 flex flex-col'>
          {/* {props?.date} */}
          <span>{props?.date?.split('T')[0]}</span>
          <span>{props?.auth_name}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogsBanner

