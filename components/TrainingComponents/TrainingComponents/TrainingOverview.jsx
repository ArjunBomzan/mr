// import sanitizeHtml from 'sanitize-html';
/* 
 display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    scrollbar-width: none;
*/
import Image from "next/image"
import { useState, useEffect } from "react"
import DownArrow from "../../../assets/icons/iconmonstr-arrow-down-thin-48-_1_.webp"
import UpArrow from "../../../assets/icons/iconmonstr-arrow-up-thin-48-_1_.webp"

let first_page_load = false
const TrainingOverview = (props) => {

    const [limitOverView, setlimitOverView] = useState(true)

    useEffect(() => {

        if (limitOverView && first_page_load) {

            setTimeout(() => {

                // Get the navigation bar element
                const navbar = document.getElementById('navbar--sticky'); 

                // Get the element to scroll to
                const syllabus = document.getElementById('course_syllabus');

                // Get the offset position of the element to scroll to
                const syllabusOffset = syllabus.offsetTop;

                // Get the height of the navigation bar element
                const navbarHeight = navbar.offsetHeight;

                // Calculate the final position to scroll to
                const finalPosition = syllabusOffset - navbarHeight - 40;

                // Scroll to the final position
                window.scrollTo({ top: finalPosition, behavior: 'smooth' });
            }, 100)
        } else {
            first_page_load = true;
        }
    }, [limitOverView])

    return (
        <div id="course_overview">
            <p className='font-bold'>{props?.course?.data?.course[0]?.title}</p>
            <div className={`overview__wrapper relative ${limitOverView ? "limited" : ""}`} style={{
            }}>
                <div dangerouslySetInnerHTML={{ __html: props?.course?.data?.course[0]?.description }} />
                <div className="fader absolute">
                </div>
            </div>
            <div className="m-8 text-center font-bold" id="overview__min_max" style={{
                cursor: "pointer",
                textTransform: "uppercase"
            }} onClick={() => { setlimitOverView(!limitOverView) }}>
                {
                    limitOverView ?
                        <><span> <Image alt="arrow-down-icon" src={DownArrow} height={16} width={16} className="inline" />  </span> <p className="inline">Read More</p></>
                        :
                        <><span> <Image alt="arrow-up-icon" src={UpArrow} height={16} width={16} className="inline" />  </span> <p className="inline">Read Less</p></>
                }
            </div>
        </div>
    )
}

export default TrainingOverview