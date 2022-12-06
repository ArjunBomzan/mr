// import Background from '../../assets/blog-splash.jpg'
const BlogsBanner = (props) => {
  console.log(props)
  return (
    // bg-fixed removed
    <div
      style={{ backgroundImage: `url(${props?.banner})` }}
      className='w-full bg-blogs relative'
    // style={{ backgroundImage: props?.banner ? `url(${props?.banner})` : `url(${Background})` }}
    // style={{ backgroundImage: `url(http://localhost:3000/static/media/blog-splash.25b21f0f525e3fb6d831.jpg)` }}
    >
      <div className='w-full h-full  py-28 flex flex-col justify-center items-center bg-light-mask text-white'>
        <h2 className='font-sans text-4xl sm:text-6xl w-ma font-bold text-center'>
          {props?.title}
        </h2>
        {/* <p className='pt-4 text-gray-200 w-4/5  md:w-1/3 text-center'>
          {props?.auth_name}
        </p> */}
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

