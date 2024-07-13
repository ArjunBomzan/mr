import { useState } from 'react';
import CountUp from "react-countup";
import { InView } from 'react-intersection-observer';

const Statistic = ({ icon, statNum, text, }) => {
    const [active, setIsActive] = useState(true);
    return (
        <div className='flex flex-col items-center justify-center w-max mission'>
            {icon}
            <div className='flex items-center'>
                <p className='pt-2 pb-2  text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl md:pt-0 md:pb-4'>
                    <InView triggerOnce={true} className="target">
                        {({ inView, ref, entry }) => (
                            <div ref={ref}>
                                <CountUp end={inView ? statNum : 0} redraw={false} duration={1} onEnd={() => setIsActive(false)} active={active} >
                                    <span ref={statNum} />
                                </CountUp>
                            </div>
                        )}
                    </InView>
                </p>
                <span className='pt-2 pb-2  text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl md:pt-0 md:pb-4'>+</span>
            </div>
            <p className='text-xs md:text-md'>{text}</p>

        </div >
    )
}

export default Statistic