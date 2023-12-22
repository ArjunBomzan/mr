import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import classNames from "classnames";

const CustomText = ({ el }) => {
    let [dynamicClass, setDynamicClass] = useState("");
    useEffect(() => {
        setDynamicClass("max-w-[999px]");
        return () => {
            setDynamicClass("max-w-[0px]");
        };
    }, []);
    
    return (
        <>
            <span
                className={classNames(
                    "  animate- duration-1000] animateMe animateMee inline-block  overflow-hidden transition-all duration-[6s]",
                    { [dynamicClass]: true },
                )}
            >
                {el}
            </span>
        </>
    );
};

/**
 *
 * @returns
 */

export default function TypeWriter({ contents }: { contents: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("here");

            setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <p className="title-lg inline-flexx mb-[30px] max-w-full items-center justify-center gap-[5px] border text-primary transition-all duration-[6s] !ease-in md:justify-start md:gap-[11px] ">
                <span>{`<h2>`}</span>
                <span className="md:header-lg text-expanded-sm bloc  font-semibold !text-secondary  ">
                    {contents.map((el, index) => {
                        if (currentIndex === index) {
                            return <CustomText el={el} key={index} />;
                        }
                        return null;
                    })}
                </span>
                <span>{`</h2>`}</span>
            </p>
        </>
    );
}
