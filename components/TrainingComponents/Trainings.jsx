import { useRouter } from 'next/router'
import Loader from '../Loader'
import TrainingCard from './TrainingCard'
import Image from 'next/image'


const Trainings = (props) => {
  const router = useRouter()
  const pathname = router.pathname.split('/')[1]

  let { tag } = router.query


  return (
    <>
      <p className='w-full  text-2xl text-center md:text-3xl lg:text-4xl mt-10 mb-5 md:mt-16 md:mb-8'>
        {pathname == "courses" && <> <span>Courses</span>
          &nbsp;
          {
            tag&&
          <span className='relative bg-gray-300 text-base px-3 py-1 rounded-xl lowercase'>
            # {tag}  <Image
            onClick={() =>{
              router.push("/courses")
            }}
             title='remove tag' className=' inline absolute cursor-pointer  text-red-400' width={24} height={24} src={"/assets/images/iconmonstr-x-mark-6-240.png"} />
          </span>
          }


        </>
        }
        {pathname == "after+2-courses" && <span>After +2 Courses</span>}
      </p>
      {
        props?.courses ?
          // <section className={`bg-white flex flex-col py-10 px-6 sm:px-12 md:px-14 lg:px-18 `}>
          <section className={`bg-white flex flex-col pb-10 px-3 lg:px-44 md:px-20 sm:px-16 mb-5 md:mb-16 `}>
            <div
              className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 mt-6  '
            >
              {
                props?.courses?.map((course) => {
                  return <TrainingCard course={course} key={course.id} />
                })
              }
            </div>
          </section>
          :
          <Loader />
      }
    </>
  )
}

export default Trainings
