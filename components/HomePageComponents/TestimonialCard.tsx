import { useEffect } from 'react'

interface testimonialInterface {
  starCount: number,
  testimonial: string,
  image: any,
  name: string,
  position: string
}


const TestimonialCard = ({ starCount, testimonial, image, name, position }: testimonialInterface) => {
  const stars = []
  useEffect(() => {
    for (let i = 0; i < starCount; i++) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-yellow-300" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
  }, [])


  return (
    <div className='bg-white rounded-md w-[96%] sm:w-[75%] md:w-[80%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] h-max p-8 px-8 flex flex-col mx-auto'>
      <div className='flex flex-row w-full space-x-2'>
        {stars}
      </div>
      <p className='font-sans text-lg italic leading-6 text-left text-neutral-500 my-7'>
        {testimonial}
      </p>
      <div className="flex flex-row justify-between w-full">
        <div className='flex flex-row space-x-4 w-max'>
          {/* <div className='rounded-[50%] bg-neutral-300 w-16 h-16'></div> */}
          <div className="flex flex-col justify-center h-full w-max">
            <p className="font-bold w-max">{name}</p>
            <p className='text-sm'>{position}</p>
          </div>
        </div>
        {/* quotes */}
      </div>
    </div>
  )
}

export default TestimonialCard
