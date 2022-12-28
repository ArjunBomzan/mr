const PartnerCard = (props) => {
    return (
        <div
            // href={`${props?.course?.link}`}
            className='training-card cursor-pointer relative bg-white partner'
            style={{
                flexGrow: "0",
                boxShadow: "0",
                backgroundImage: `url("${process.env.DOMAIN}${props?.course?.image}")`,
                height: "100px",
                backgroundPosition:"center",
                backgroundSize:"contain"
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
                        <img src={props.img} className='z-[-10]' />
                }
            </div> */}
        </div>
    )
}

export default PartnerCard