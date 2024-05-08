import Image from "next/image"
import Link from "next/link"


const Certificate = () => {
  return (
    <div className="py-[20px] px-[30px] w-[888px] flex justify-center gap-10 border-[28px] border-[#fff5c5]">
      {/* content */}
      <div className=" pt-[20px] flex flex-col items-center gap-y-8">

        <Image src="/CertificateLogo.png" alt="mindrisers logo" height={71} width={276.5} className="" />

        {/* Certificate title */}
        <div className="text-center">
          <h1 className="text-[65.66px] leading-[58.8px]" style={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(rgba(235, 179, 8, 1),rgba(218, 165, 5, 1),rgba(175, 134, 10, 1), rgba(175, 134, 10, 1), rgba(237, 181, 7, 1))',
            backgroundClip: 'text',
          }}>CERTIFICATE</h1>
          <h3 className="text-[32.38px] leading-[38.86px]"
            style={{
              color: 'transparent',
              background: 'linear-gradient(rgba(218, 165, 5, 1),rgba(175, 134, 10, 1),rgba(237, 181, 7, 1),rgba(175, 134, 10, 1),rgba(235, 179, 8, 1))',
              backgroundClip: 'text'
            }}>OF COMPLETION</h3>
        </div>

        {/* Student Name */}
        <div className="relative flex flex-col gap-y-1">
          <div className="text-black text-center space-y-1 z-40">
            <p className="text-[19.68px] font-medium leading-[23.06px] ">This is to certify that</p>
            <h4 className=" text-[20.29px] leading-[23.78px] font-bold">Binaya Limbu</h4>
            <p className="text-[19.68px] font-medium leading-[23.06px]">has successfully completed the Python with Django Training.</p>
          </div>

          <Image src="/BG WM.png" alt="logo watermark" height={122} width={122} className="absolute bottom-[-22px] left-[190px] z-10" />
        </div>

        {/* About course and certificate */}
        <div className="mt-[-30px] flex items-center gap-9 justify-between">
          <div className="text-black space-y-1">
            <p className="text-[17.3px] font-medium leading-[20.32px]">Course Duration: 3 months</p>
            <p className="text-[17px] leading-[20.32px] font-medium">Certification No: <span className="text-[13.1px] leading-[15.3px]  font-medium uppercase">mr-80290-pd	</span></p>
          </div>

          <div className="text-black space-y-1">
            <p className=" text-[17.46px] leading-[20.46px]">Issued Date:</p>
            <p className="text-[15.87px] leading-[18.6px]">29 Jan, 2024</p>
          </div>

          <div className="relative bottom-5">
            <Image src="/Signature.png" alt="sign" height={138.06} width={172} className="" />
            <p className="absolute w-[130px] left-9 bottom-8 text-[17.67px] leading-[20.71px] text-black font-medium flex justify-center border-[2px] border-t-black border-dotted border-transparent z-30">Director</p>
          </div>
        </div>

        {/* End */}
        <div className="flex justify-center gap-[95px] mt-[-45px] ml-[210px]">
          <p className="text-black">mindrisersnepal.com</p>
          <Image src="/logo-stamp 1.png" alt="stamp" width={131} height={111.72} className="mt-[-73px] z-50" />
        </div>
      </div>

      {/* trophy */}
      <div className="">

        <Image src="Group 3.svg" alt="trophy" height={541.63} width={182.4} />

      </div>


    </div >
  )
}

export default Certificate
