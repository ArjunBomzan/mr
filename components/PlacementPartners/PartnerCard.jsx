const PartnerCard = (props) => {
    return (
        <div
            // href={`${props?.course?.link}`}
            className='training-card cursor-pointer relative bg-white partner h-12 sm:h-20 bg-contain sm:bg-cover   '
            style={{
                flexGrow: "0",
                boxShadow: "0",
                backgroundImage: `url("${process.env.DOMAIN}${props?.course?.image}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px"
            }}
        >
            {/* <div className='overflow-hidden  training-card-img-div mb-4' >
                {
                    props?.course?.image ?
                        <img
                            src={`${process.env.DOMAIN}${props?.course?.image}`}
                            className='z-[-10]'
                            alt={props?.course?.title}
                        />
                        :
                        <img loading="lazy" src={props.img} className='z-[-10]' />
                }
            </div> */}
        </div>
    )
}

export default PartnerCard