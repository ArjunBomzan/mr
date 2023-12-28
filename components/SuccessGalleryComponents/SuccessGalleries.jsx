import Image from "next/image"
const Card = ({ title, content, img }) => {
    return (
        <div className="flex justify-center w-full bg-white rounded-lg shadow-lg card-shadow ">
            <div className="block w-full">
                <Image height={350} width={350} src={img} style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "cover",
                    // objectPosition:"top",
                }} className="training-card-img-div" alt={title} />
                <div className="p-4">
                    <p className="text-gray-900 text-xl font-medium mb-1">{title}</p>
                    <p className="text-gray-700 text-base">
                        {content}
                    </p>
                </div>
            </div>
        </div >
    )
}
const SuccessGalleries = ({ successStoreis }) => {

    return (<>

        <div className='px-8 sm:px-12 md:px-14 lg:px-18 py-10 pt-0 bg-neutral-1000 ' id="success_stories">
            <p className="text-xl md:text-center sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl   mt-10 mb-5 md:mt-16 md:mb-8             w-full  text-2xl text-center md:text-3xl lg:text-4xl mt-10 mb-5 md:mt-16 md:mb-8

">Success Stories</p>
            <section className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-4 mb-5 md:mb-16 '>
                {
                    successStoreis?.map((successStory) => {
                        return <Card title={successStory.title} content={successStory.content} img={successStory.image} key={successStory.id} className="my-3" />
                    })
                }
            </section>
        </div >

    </>

    )
}

export default SuccessGalleries