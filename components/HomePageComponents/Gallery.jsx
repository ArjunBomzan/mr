import { galleriesApi } from '../../pages/api/apiCalls';
import { useEffect, useState } from 'react'

const Gallery = () => {
    const [galleries, setGalleries] = useState();
    useEffect(() => {
        galleriesApi({ setGalleries })
    }, []);
    return (
        <section className="overflow-hidden bg-neutral-100">

            <div className="flex flex-col w-full px-5 py-16 sm:px-20 lg:px-44 gap-8">
                <div>
                    <h2 className="font-bold text-4xl">Recent Photos</h2>
                    {/* <p className="font-bold text-xl">Check out our photos</p> */}
                </div>
                <div className="flex flex-wrap -m-1 md:-m-2 flex-col md:flex-row">
                    <div className="flex flex-wrap md:w-1/2 ">
                        <div className="w-1/2 p-1 md:p-2 h-40 overflow-hidden">
                            <img className="block object-cover object-center w-full h-full rounded-lg"
                                src={`${process.env.DOMAIN}${galleries?.[0]?.image}`} alt={galleries?.[0]?.title} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2 h-40 overflow-hidden">
                            <img className="block object-cover object-center w-full h-full rounded-lg"
                                src={`${process.env.DOMAIN}${galleries?.[1]?.image}`} alt={galleries?.[1]?.title} />
                        </div>
                        <div className="w-full p-1 md:p-2 flex-grow  h-60">
                            <img className="block object-cover object-center w-full h-full rounded-lg"
                                src={`${process.env.DOMAIN}${galleries?.[2]?.image}`} alt={galleries?.[2]?.title} />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:w-1/2 flex-col-reverse md:flex-col">
                        <div className="w-full p-1 md:p-2 h-60">
                            <img className="block object-cover object-center w-full h-full rounded-lg"
                                src={`${process.env.DOMAIN}${galleries?.[3]?.image}`} alt={galleries?.[3]?.title} />
                        </div>
                        <div className="flex h-40">
                            <div className="w-1/2 p-1 md:p-2">
                                <img className="block object-cover object-center w-full h-full rounded-lg"
                                    src={`${process.env.DOMAIN}${galleries?.[4]?.image}`} alt={galleries?.[4]?.title} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img className="block object-cover object-center w-full h-full rounded-lg"
                                    src={`${process.env.DOMAIN}${galleries?.[5]?.image}`} alt={galleries?.[5]?.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery