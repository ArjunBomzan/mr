import Image from "next/image"
import master from "../../assets/trainingIcons/1-min.png"
import tie from "../../assets/trainingIcons/3-min.png"
import brains from "../../assets/trainingIcons/Untitled-2-min.png"

const TrainingSubHeader = () => {
  return (
    <div className='bg-slate-50 flex justify-around items-center lg:px-44 md:px-20 px-2 text-green-500'>
      <div className='training-icon-div'>
        <Image src={master} alt="learn-with-us" />
        {/* Master Your Skills */}
        Learn with us
      </div>
      <div className='training-icon-div'>
        <Image src={brains} alt="sharpen-your-skills" />
        Sharpen your skills
      </div>
      <div className='training-icon-div'>
        <Image src={tie} alt="grab-a-guaranteed-internship" />
        Grab a Guaranteed Internship
      </div>
    </div>
  )
}

export default TrainingSubHeader