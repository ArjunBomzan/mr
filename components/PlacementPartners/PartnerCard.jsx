import Link from "next/link"
import Image from "next/image"

const PartnerCard = (props) => {
    return (
        <Link
            href={`${props?.course?.link}`}
            target="_blank"
            className='training-card cursor-pointer relative bg-white partner h-12 sm:h-20 bg-contain sm:bg-cover   '
            style={{
                flexGrow: "0",
                boxShadow: "0",
                borderRadius: "10px",
                overflow: "hidden"

            }}
        >
            <Image width={550} height={550} src={`${process.env.DOMAIN}${props?.course?.image}`} alt={`${props?.course?.name}-logo`} className={"w-full h-full"} style={{
                objectFit: "cover"
            }} />
        </Link>
    )
}

export default PartnerCard