'use client'

import Image from "next/image"
import BannerWrapper from "../components/common/BannerWrapper"
import { FiDownload } from "react-icons/fi";
import { RiShareBoxFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import AdmissionEnquiry from "../components/common/AdmissionEnquiry";
import Certificate from "../components/Certificate";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const getCertificate = () => {
  const [imageSrc, setImageSrc] = useState("")
  const [imageGenerated, setImageGenetated] = useState(false)
  const pngRef = useRef()

  const generateImage = () => {
    const input = pngRef.current;
    html2canvas(input).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      setImageSrc(imageData);
      setImageGenetated(true)
    });
  };

  const handleDownload = () => {
console.log("first")
    const downloadLink = document.createElement('a');
    downloadLink.href = imageSrc;
    downloadLink.download = 'certificate.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);



  }
  useEffect(() => {
    generateImage()
  })
  return (
    <div>
      <BannerWrapper>
        <div className=" mx-auto flex flex-col items-center gap-y-10">
          <h1 className="text-primary text-center header-xl leading-[60px] md:leading-[78.3px] font-semibold ">Certificate Of Completion</h1>

          <div className="text-center">
            <p className=" title-lg leading-[30px] ">This is to certify that</p>
            <p className="text-primary title-lg leading-[36px] font-semibold">Binaya Limbu</p>
            <p className=" title-lg leading-[30px]">has successfully completed the Python with Django Training</p>
          </div>

          <ul className="text-[16px] text-center leading-[23.2px] ">
            <li className="text-[#E27C00] ">Certification Number : <span className="text-body">MR-17543-GD</span></li>
            <li className="text-[#E27C00]">Issued Date : <span className="text-body">26 March 2024</span></li>
          </ul>
        </div>
      </BannerWrapper>

      <div className="mt-[50px]">

        {/* Certificate */}
        <div className="flex justify-center">
          <div className="w-[960px] p-[30px]   bg-[#fff5c5] ">
            {
              imageGenerated ? (<img src={imageSrc} className="w-full h-full" />) : (<Certificate downloadRef={pngRef} />)
            }



          </div>
        </div>

        {/* buttons */}
        <div className="mt-[35px] flex justify-center gap-6">
          <button className=" py-[14px] px-[20px] w-[243px] h-[52px] bg-[#E27C0014] text-[#E27C00] flex items-center gap-[10px] rounded-[30px]  " onClick={handleDownload}>Download Certificate <FiDownload /></button>
          <button className=" py-[14px] px-[20px] w-[209px] h-[52px] bg-[#E27C00] text-white flex items-center gap-[10px] rounded-[30px] ">Share Certificate <RiShareBoxFill /></button>
        </div>
      </div>

      <div className="mt-[70px] mb-[55px] container ">
        <AdmissionEnquiry />
      </div>
    </div>
  )
}

export default getCertificate
