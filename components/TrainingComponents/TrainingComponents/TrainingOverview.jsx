
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const TrainingOverview = (props) => {
    return (
        <div id="course_overview">
            <p className='font-bold'>{props?.course?.data?.course[0]?.title}</p>
            {
                props?.course?.data?.course[0]?.description &&
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}
                // className='max-h-10 hover:max-h-auto overflow-hidden cursor-pointer training-div'
                >

                    {
                        props?.course?.data?.course[0]?.description
                    }
                </ReactMarkdown>
            }

        </div>
    )
}

export default TrainingOverview