import { useRouter } from 'next/router'
import uuid from 'react-uuid'
import Loader from '../Loader'
import TrainingCard from './TrainingCard'


const Trainings = (props) => {
  const router = useRouter()
  const pathname = router.pathname.split('/')[1]
  return (
    <>
      {
        props?.courses ?
          <section className={`bg-white flex flex-col py-10 px-8 sm:px-12 md:px-14 lg:px-18 `}>
            <h2 className='w-full  text-2xl font-bold text-center md:text-3xl lg:text-4xl xl:text-5xl'>
              {pathname == "courses" && <span>Courses</span>}
              {pathname == "+2courses" && <span>+2 Courses</span>}
            </h2>
            <div
              className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 mt-6'
            >
              {
                props?.courses?.map((course) => {
                  return <TrainingCard course={course} key={uuid()} />
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
