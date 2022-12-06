import { useState } from 'react';
import CountUp from "react-countup";
import { InView } from 'react-intersection-observer';

const Statistic = ({ icon, statNum, text, }) => {
    const [active, setIsActive] = useState(true);
    return (
        <div className='flex flex-col items-center justify-center w-max mission'>
            {icon}
            <h2 className='pt-2 pb-2 font-sans text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl md:pt-0 md:pb-4'>
                <InView triggerOnce={true}>
                    {({ inView, ref, entry }) => (
                        <div ref={ref}>
                            <CountUp end={inView ? statNum : 0} redraw={false} duration={1} onEnd={() => setIsActive(false)} active={active} >
                                <span ref={statNum} />
                            </CountUp>
                        </div>
                    )}
                </InView>
            </h2>
            <p className='text-xs md:text-md'>{text}</p>

        </div >
    )
}

export default Statistic