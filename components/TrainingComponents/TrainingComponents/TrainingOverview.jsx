// import sanitizeHtml from 'sanitize-html';


const TrainingOverview = (props) => {
    return (
        <div id="course_overview">
            <p className='font-bold'>{props?.course?.data?.course[0]?.title}</p>
            <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }}>
            </div>
        </div>
    )
}

export default TrainingOverview