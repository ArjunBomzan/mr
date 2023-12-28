import Image from 'next/image';
import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import StatisticsImage from '../../assets/homePage/statistics-img.jpg'
import StatisticsBg from '../../assets/homePage/statistics-bg.jpg'

// Add visibility sensor for animations
interface progressInterface {
  valueStart: number,
  valueEnd: number,
  children: any
}

const ProgressProvider = ({ valueStart, valueEnd, children }: progressInterface) => {
  const [value, setValue] = useState<number>(valueStart);

  React.useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};
interface statisticInterface {
  value: number,
  label: string
}

const Statistic = ({ value, label }: statisticInterface) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-40 h-40 sm:w-36 sm:h-36 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32'>
        <ProgressProvider valueStart={0} valueEnd={value}>
          {(value: number) =>
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              strokeWidth={6}
              styles={{
                path: {
                  // Path color
                  stroke: `rgb(34, 197, 94)`
                },
                text: {
                  // Text color
                  fill: `#fff`,
                  fontWeight: 'bold'
                }
              }}
            />
            // <CircularProgressbar value={value} text={`${value}%`} />
          }
        </ProgressProvider>
      </div>
      <p className='pt-4 text-base font-medium text-center text-white md:text-base xl:text-lg 2xl:text-xl'>{label}</p>
    </div>
  )
}

const Statistics = () => {
  return (
    <section className="bg-fixed h-max bg-no-repeat bg-auto" style={{ backgroundImage: `url(${StatisticsBg.src})` }}>
      <div className='flex flex-col items-center w-full h-full px-5 py-20 space-y-12 bg-mask lg:flex-row sm:py-32 sm:px-32 lg:space-y-0'>
        <div className='flex flex-col w-full px-4 pl-10 lg:w-1/2 space-y-9'>
          <p className=' font-medium tracking-widest text-green-500 text-md'>STATISTICS</p>
          <p className='w-5/6 text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' >Consumer insights. Market innovation.</p>
          <p className='text-white'>
            Each of our solutions are tailored to your business.
          </p>
          <div className='flex flex-col items-center w-full pr-5 space-y-10 lg:space-y-0 lg:flex-row lg:space-x-9'>
            <Statistic value={87} label='Projects Done' />
            <Statistic value={90} label='Problems Solved' />
            <Statistic value={75} label='Revenue Increase' />
          </div>
        </div>
        <div className='w-full px-4 lg:w-1/2' >
          <Image src={StatisticsImage} alt='Services' className='object-cover w-full rounded-md' />
        </div>
      </div>
    </section>
  )
}

export default Statistics


