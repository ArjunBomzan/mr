import classNames from "classnames";
import React, { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

export default function VideoPlayer({
    className,
    videoOpen,
    setVideoOpen,
}: {
    className: string;
    videoOpen: any;
    setVideoOpen: any;
}) {
    // const [videoOpen, setVideoOpen] = useState(false);

    return (
        <div className={className || ""}>
            <div
                className="  flex h-full items-center  justify-center bg-cover bg-left md:bg-center "
                style={{
                    // backgroundImage: `url('https://ooty-theme.myshopify.com/cdn/shop/files/video-sec-bg_1.webp?v=1620132835')`,
                    backgroundImage: `url('/assets/images/home/wow.webp')`,
                }}
            >
                <AiOutlinePlayCircle
                    className={`inline-block h-10 w-10 text-white lg:h-20 lg:w-20 ${classNames(
                        { hidden: videoOpen },
                    )}`}
                    onClick={() => {
                        setVideoOpen((prev) => !prev);
                    }}
                />
                <div
                    onClick={() => {
                        setVideoOpen(false);
                    }}
                    className={`flex-center fixed bottom-0 left-0 right-0 top-0 z-[999] h-screen max-h-screen w-full  bg-[rgba(0,0,0,0.8)] ${classNames(
                        { hidden: !videoOpen },
                    )}`}
                >
                    {videoOpen && (
                        <iframe
                            className="mx-auto  aspect-video w-[75%] max-w-full "
                            src="https://www.youtube.com/embed/PYPnovnDSt8?si=tmUDfh20T7dM6kdw2&autoplay=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
}
