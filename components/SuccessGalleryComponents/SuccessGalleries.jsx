import React, { useEffect, useState } from 'react';
import { homeSuccessStoriesApi } from '../../pages/api/apiCalls';
import Loader from "../Loader";
const Card = ({ title, content, img }) => {
    return (
        <div className="flex justify-center w-full bg-white rounded-lg shadow-lg card-shadow cursor-pointer">
            <div className="block w-full">
                <div className='training-card-img-div'>
                    <img className="rounded-t-lg" src={`${img}`} alt="" style={{ aspectRatio: "4 / 2.3" }} />
                </div>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p className="text-gray-700 text-base">
                        {content}
                    </p>
                </div>
            </div>
        </div >
    )
}
const SuccessGalleries = () => {
    const [successStoreis, setSuccessStories] = useState();
    useEffect(() => {
        homeSuccessStoriesApi({ setSuccessStories })
    }, []);
    return (<>
        {
            successStoreis ? (
                <div className='px-8 sm:px-12 md:px-14 lg:px-18 py-10 bg-neutral-100 ' id="success_stories">
                    <p className="font-bold text-3xl mb-6">Success Stories</p>
                    <section className='grid grid-cols-1 sm:grid-cols-2 lg:gap-10 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {
                            successStoreis?.map((successStory) => {
                                return <Card title={successStory.title} content={successStory.content} img={successStory.image} key={successStory.id} className="my-3" />
                            })
                        }
                    </section>
                </div >)
                :
                <Loader />
        }
    </>

    )
}

export default SuccessGalleries