import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PartnerCard = (props) => {
    const router = useRouter()
    const pathname = router.pathname.split('/')[1]
    return (
        <Link
            href={`${props?.course?.link}`}
            className='training-card cursor-pointer relative bg-white partner'
            style={{ flexGrow: "0", boxShadow: "0" }}
        >
            <div className='overflow-hidden  training-card-img-div mb-4' >
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
            {/* <div className='px-3 tool-tip text-center'>
                <p className='font-bold whitespace-nowrap truncate tool-tip' data-bs-toggle="tooltip" title={`${props?.course?.name}`}>
                    {props?.course?.name}
                </p>
            </div> */}
        </Link>
    )
}

export default PartnerCard