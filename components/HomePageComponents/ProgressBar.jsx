import { InView } from 'react-intersection-observer';
const ProgressBar = ({ value, label }) => {
    return (
        <div className="w-full">
            <p className='mb-3 text-sm font-bold tracking-wide text-neutral-600 ' >{label}</p>
            <div className='flex flex-row w-full h-1 bg-neutral-800'>
                <InView triggerOnce={true}>
                    {({ inView, ref, entry }) => (
                        <div
                            className={`h-full bg-green-400 transition-all progress-bar text-neutral-600`}
                            style={{ width: inView ? `${value}%` : 0 }}
                            ref={ref}
                        ></div>
                    )}
                </InView>
                <div className='w-[4px] bg-green-400 h-4 translate-y-[-12px]'></div>
                <div className='bg-green-400 w-[32px] h-[32px] rounded-[50%] z-20 translate-x-[-18px] translate-y-[-36px] font-bold text-xs flex justify-center items-center'>
                    {`${value}%`}
                </div>
            </div >
        </div >
    )
}

export default ProgressBar