import master from "../../../assets/TrainingIcons/1-min.png"
import tie from "../../../assets/TrainingIcons/3-min.png"
import brains from "../../../assets/TrainingIcons/Untitled-2-min.png"
const TrainingSubHeader = () => {
  return (
    <div className='bg-slate-50 flex justify-around items-center lg:px-44 md:px-20 px-2 text-green-500'>
      <div className='training-icon-div'>
        <img src={master} />
        {/* Master Your Skills */}
        Learn with us
      </div>
      <div className='training-icon-div'>
        <img src={brains} />
        Sharpen your skills
      </div>
      <div className='training-icon-div'>
        <img src={tie} />
        Grab a Guaranteed Internship
      </div>
    </div>
  )
}

export default TrainingSubHeader