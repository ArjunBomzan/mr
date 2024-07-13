import Image from "next/image"



const Certificate = ({downloadRef}) => {
  return (
    <div className="w-[888px] py-[40px]  flex justify-center gap-7 bg-white font-Roboto" ref={downloadRef}>
      {/* content */}
      <div className=" pt-[20px] flex flex-col items-center gap-y-8">
        {/* Certificate logo */}
        <div className="flex items-end gap-2">
          <Image src="/mindrisers.png" alt="mindrisers logo" height={58.91} width={63.96} className="h-[58.91px] w-[63.96px]" />

          <div className="text-primary">
            <h1 className=" text-[36.39px] leading-[41.84px] mb-[-4px] font-bold lowercase">mindrisers</h1>
            <h3 className="text-[18.45px] font-medium leading-[21px] my-1">CONSORTIUM PVT. LTD.</h3>
            <p className="mt-[-2px] text-black text-[12.19px] leading-[14.29px] uppercase">PUTALISADAK, KATHMANDU, NEPAL</p>
          </div>
        </div>
        {/* Certificate title */}
        <div>
          <Image src="/CertificteTitle.png" alt="Certificate title" height={90.34} width={401} />
        </div>

        {/* Student Name */}
        <div className="relative flex flex-col gap-y-1">
          <div className="text-black text-center space-y-1 z-40">
            <p className="text-[19.68px] font-medium leading-[23.06px] ">This is to certify that</p>
            <h4 className=" text-[20.29px] leading-[23.78px] font-bold">Binaya Limbu</h4>
            <p className="text-[19.68px] font-medium leading-[23.06px]">has successfully completed the Python with Django Training.</p>
          </div>

          <Image src="/BG WM.png" alt="logo watermark" height={122} width={122} className="absolute bottom-[-18px] left-[212px] z-10" />
        </div>

        {/* About course and certificate */}
        <div className="mt-[-30px] flex items-center gap-7 justify-between">
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
        <div className="flex justify-center gap-[80px] mt-[-45px] ml-[200px]">
          <p className="text-black">mindrisersnepal.com</p>
          <Image src="/logo-stamp 1.png" alt="stamp" width={131} height={111.72} className="mt-[-74px] z-50" />
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
