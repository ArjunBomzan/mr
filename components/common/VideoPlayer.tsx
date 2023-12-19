
import classNames from 'classnames'
import React, { useState } from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'

export default function VideoPlayer({ className }: { className: string }) {

    const [videoOpen, setVideoOpen] = useState(false)

    return (
        <div className={className || ""}>
            <div className="  flex justify-center items-center  object-cover object-center h-full "
                style={{
                    backgroundImage: `url('https://ooty-theme.myshopify.com/cdn/shop/files/video-sec-bg_1.jpg?v=1620132835')`
                }}
            >
                <AiOutlinePlayCircle className={`inline-block w-10 h-10 lg:w-20 lg:h-20 text-white ${classNames({ hidden: videoOpen })}`}
                    onClick={() => {
                        setVideoOpen(prev => !prev)
                    }}
                />
                <div
                    onClick={() => {
                        setVideoOpen(false)
                    }}
                    className={`fixed z-[999] top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.8)] ${classNames({ hidden: !videoOpen })}`}>
                    {
                        videoOpen
                        &&
                        < div className='relative'>
                            <iframe className='max-w-full' width="560" height="315" src="https://www.youtube.com/embed/g8y7ALHjryY?si=CMM1Jux3C0XVjtaB&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}
