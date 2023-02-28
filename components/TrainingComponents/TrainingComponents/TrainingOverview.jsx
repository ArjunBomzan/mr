// import sanitizeHtml from 'sanitize-html';
/* 
 display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    scrollbar-width: none;
*/
import Image from "next/image"
import { useState } from "react"
import DownArrow from "../../../assets/icons/iconmonstr-arrow-down-thin-48-_1_.webp"
import UpArrow from "../../../assets/icons/iconmonstr-arrow-up-thin-48-_1_.webp"

const TrainingOverview = (props) => {

    const [limitOverView, setlimitOverView] = useState(true)

    return (
        <div id="course_overview">
            <p className='font-bold'>{props?.course?.data?.course[0]?.title}</p>
            <div className={`overview__wrapper relative ${limitOverView ? "limited" : ""}`} style={{
            }}>
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div className="fader absolute">
                </div>
            </div>
            <div className="m-8 text-center font-bold" style={{
                cursor: "pointer",
                textTransform: "uppercase"
            }} onClick={() => { setlimitOverView(!limitOverView) }}>
                {
                    limitOverView ?
                        <><span> <Image src={DownArrow} height={16} width={16} className="inline" />  </span> <p className="inline">Read More</p></>
                        :
                        <><span> <Image src={UpArrow} height={16} width={16} className="inline" />  </span> <p className="inline">Read Less</p></>
                }
            </div>
        </div>
    )
}

export default TrainingOverview