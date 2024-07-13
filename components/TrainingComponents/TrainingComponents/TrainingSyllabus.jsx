import TrainingAccordion from './TrainingAccordion';

const TrainingSyllabus = (props) => {
  return (<>
    {
      props?.course?.data?.syllabus[0] && (
        <div className=' mt-10' id="course_syllabus">
          <p className='font-bold'>Syllabus of {props?.course?.data?.course[0].title}</p>
          <hr className='my-2' />
          <TrainingAccordion syllabus={props?.course?.data?.syllabus} />
        </div >
      )
    }
  </>
  )
}

export default TrainingSyllabus