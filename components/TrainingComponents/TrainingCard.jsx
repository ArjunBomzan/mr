import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const TrainingCard = (props) => {
    const router = useRouter()
    const pathname = router.pathname.split('/')[1]
    return (
        <Link
            href={`${pathname == 'courses' ? 'courses' : '+2courses'}/${props?.course?.slug}`}
            className='training-card cursor-pointer relative bg-white'
            style={{ flexGrow: "0" }}
        >

            <div className="flex justify-end absolute z-[20] w-full learn-more-div">
                <p id="learn-more" >Learn More</p>
            </div>
            <div className='overflow-hidden  training-card-img-div' >
                {
                    props?.course?.image ?
                        <img
                            src={`${process.env.DOMAIN}${props?.course?.image}`}
                            className='z-[-10]'
                            alt={props?.course?.title}
                        />
                        :
                        <img src={props.img} className='z-[-10]' />
                }
            </div>
            <div className='flex gap-1 flex-col text-center mb-2 '>
                <div className='px-3 tool-tip'>
                    <p className='font-bold whitespace-nowrap truncate tool-tip' data-bs-toggle="tooltip" title={`${props?.course?.title}`}>
                        {props?.course?.title}
                    </p>

                </div>
                <p>Duration: <span className='font-bold'>{props?.course?.duration}</span></p>
            </div>
        </Link>
    )
}

export default TrainingCard