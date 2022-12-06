import TrainingSyllabusComponent from './TrainingSyllabusComponent'
import SYLLABUS from './TrainingSyllabusDummyData'
import uuid from 'react-uuid';

const TrainingSyllabus = (props) => {
  // console.log("syllabus", props?.course?.data?.course[0].title)
  return (<>
    {
      props?.course?.data?.syllabus[0] && (
        <div className=' mt-10' id="course_syllabus">
          <p className='font-bold'>Syllabus of {props?.course?.data?.course[0].title}</p>
          <hr className='my-2' />
          <div className="accordion" id="accordionExample5">
            {/* {
              SYLLABUS.map(syllable => {
                return (
                  <div key={syllable.id}>
                    <p className='my-2'>- {syllable.heading}</p>
                    {
                      syllable.subheadings.map((subheading) => {
                        return (
                          <TrainingSyllabusComponent subheading={subheading} key={uuid()} />
                        )
                      })
                    }
                  </div>
                )
              })
            } */}

            {
              props?.course?.data?.syllabus?.map((item) => {
                return <TrainingSyllabusComponent syllable={item} key={item.id} />
              })
            }
          </div>
        </div >
      )
    }
  </>
  )
}

export default TrainingSyllabus