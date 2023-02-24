import Link from 'next/link'
import Image from "next/image"

const TrainingCard = (props) => {
    return (
        <Link
            href={`/${props?.course?.category == 'IT' ? 'courses' : 'after+2-courses'}/${props?.course?.slug}`}
            className='training-card cursor-pointer relative bg-white'
            style={{ flexGrow: "0" }}
        >

            <div className="flex justify-end absolute z-[20] w-full learn-more-div">
                <p id="learn-more" >Learn More</p>
            </div>
            <div className='overflow-hidden  training-card-img-div' >
                {
                    props?.course?.image ?
                        <Image width={450} height={450}
                            src={`${process.env.DOMAIN}${props?.course?.image}`}
                            className='z-[-10]'
                            alt={props?.course?.title}
                            loading="eager"
                        />
                        :
                        <Image width={450} height={450} loading="eager" src={props.img} className='z-[-10]' alt={`${props?.course?.slug}`} />
                }
            </div>
            <div className='flex gap-1 flex-col text-center mb-2 '>
                <div className='px-3 tool-tip'>
                    {
                        props.home ?
                            <h3 className='font-bold whitespace-nowrap truncate tool-tip' data-bs-toggle="tooltip" title={`${props?.course?.title}`}>
                                {props?.course?.title}
                            </h3>
                            :
                            <h2 className='font-bold whitespace-nowrap truncate tool-tip' data-bs-toggle="tooltip" title={`${props?.course?.title}`}>
                                {props?.course?.title}
                            </h2>
                    }

                </div>
                <p>Duration: <span className='font-bold'>{props?.course?.duration}</span></p>
            </div>
        </Link>
    )
}

export default TrainingCard