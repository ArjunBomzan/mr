import { FaArrowRight } from "react-icons/fa";

const AdmissionEnquiry = () => {
  return (
    <div className="  relative bg-[#EDFFF5] rounded-3xl py-[40px] px-[30px] flex gap-x-[60px]  ">

      {/* left SVG */}
      <div className="hidden xl:block" >
        <svg width="117" height="167" viewBox="0 0 137 167" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 166.82C3.27419 137.232 10.3137 76.8919 12.2782 72.2314L23.3286 95.5336C46.0433 112.601 91.7489 147.381 92.854 149.956C93.959 152.532 31.4118 162.272 0 166.82Z" fill="#018343" />
          <path d="M67.0713 82.55C68.7084 67.7562 72.2281 37.5861 73.2104 35.2559L78.7356 46.9069C90.0929 55.4408 112.946 72.8305 113.498 74.1183C114.051 75.406 82.7772 80.276 67.0713 82.55Z" fill="#018343" />
          <path d="M113.506 23.2171C114.324 15.9547 116.084 1.14392 116.575 0L119.338 5.71961C125.017 9.90898 136.443 18.4458 136.719 19.0779C136.996 19.7101 121.359 22.1008 113.506 23.2171Z" fill="#018343" />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto xl:mx-0 text-center space-y-[30px] lg:space-y-[40px] flex flex-col items-center">
        <div className="space-y-[10px]">
          <p className="font-medium leading-4 text-center">Never miss an Opportunity!</p>
          <h1 className=" text-primary text-[30px] lg:text-[35px] xl:text-[42px] font-semibold leading-[45px] lg:leading-[55px] xl:leading-[60.9px] ">Want to learn TOP 2024 IT SKILLS ?</h1>
          <p className="leading-[23.2px]">We open IT classes Monthly in Design, Development, Deployment, Data etc.</p>
        </div>

        <div className="space-y-[15px] lg:space-y-[20px]">
          <p className="leading-[23.2px]" > Have something to Ask?</p>
          <button className="mx-auto py-[10px] px-[16px]  bg-primary rounded-[30px] text-white flex items-center gap-[20px]">Get Admission Enquiry  <FaArrowRight /></button>
        </div>
      </div>

      {/* SVG RIGHT */}
      <div className="hidden xl:block absolute right-[30px] top-[70px] ">
        <svg width="125" height="223" viewBox="0 0 145 223" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M144.316 223C139.228 176.969 128.289 83.0942 125.236 75.8438L108.064 112.096C72.7656 138.649 1.73952 192.758 0.0222931 196.765C-1.69493 200.771 95.5029 215.924 144.316 223Z" fill="#018343" />
          <path d="M98.0468 92.5389C96.2305 76.1259 92.3255 42.6536 91.2358 40.0684L85.1058 52.9947C72.5054 62.4626 47.1512 81.7557 46.5383 83.1844C45.9253 84.6131 80.6219 90.016 98.0468 92.5389Z" fill="#018343" />
          <path d="M60.84 45.7929C59.9318 37.5864 57.9793 20.8502 57.4344 19.5576L54.3695 26.0208C48.0692 30.7547 35.3922 40.4013 35.0857 41.1156C34.7792 41.83 52.1275 44.5315 60.84 45.7929Z" fill="#018343" />
          <path d="M35.0821 12.8791C34.628 8.8505 33.6518 0.634564 33.3793 0L31.8468 3.17282C28.6967 5.49677 22.3582 10.2323 22.205 10.583C22.0517 10.9337 30.7259 12.2599 35.0821 12.8791Z" fill="#018343" />
        </svg>

      </div>


    </div>
  )
}

export default AdmissionEnquiry
