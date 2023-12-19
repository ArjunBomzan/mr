// import axios from 'axios'
import Head from 'next/head'
import Header from '../components/HeaderComponents/Header'
import Partners from '../components/PlacementPartners/Partners'
import BannerWrapper from '../components/common/BannerWrapper'
import Image from 'next/image'
import Swoosh from '../components/common/Swoosh'
import Opportunity from '../public/assets/images/common/Opportunity'

export default function Home({ partners }) {

    let meta_title = "Placement Partners | Internships | Mindrisers Nepal"
    let meta_description = ""

    return (
        <>
            <Head>
                <title>Placement Partners for mindrisers trainees</title>
                <meta name="keywords"
                    content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal, Placement Parner ,Intership" />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta_title} />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" /><meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={meta_title} />
                <meta property="twitter:description" content={meta_description} />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <BannerWrapper>
                <div className='container h-full flex items-center '>
                    <div className=" grid lg:grid-cols-[55%,45%]   title-space-xl items-center">
                        <div className=' text-center lg:text-left'>
                            <p className='text-secondary header-md font-normal leading-[145%]'>We Make sure </p>
                            <p className='header-xl leading-[145%]'>You are fit in right place</p>
                            <p className='mt-5 text-primary text-[20px]'>Join Mindrisers to gain access to exceptional placement program and expert’s support. Build competitive advantage and increase your offer value with Mindrisers. </p>
                            <button className='btn mt-5'>Explore Job placement partners</button>
                        </div>
                        <Image alt="" src="/assets/images/partners/feature-image.svg" width={600} height={600} className='w-full hidden lg:block' />
                    </div>
                </div>
            </BannerWrapper>

            <section className='section-wrapper-m container'>
                <div className='title-space-3xl text-center'>
                    <p className='sub-header-lg'>Our Partnered <Swoosh type='secondary'>Companies</Swoosh></p>
                </div>
                <div>
                    <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-x-base-half gap-y-base'>
                        {
                            new Array(20).fill(null).map(el => {
                                /* TODO: what about shadow on hover */
                                return <li className='p-5 border border-border transition hover:border-green-50 rounded-xl group hover:bg-green-50 '>
                                    <div className="flex gap-[20px] items-start">
                                        <Image alt='' src={"/assets/images/partners/khalti.png"} height={200} width={200}
                                            className='h-[96px] w-[96px] border-border border rounded-xl object-center' />
                                        <div>
                                            <p className='mb-[13px] text-gray-950 transition group-hover:text-primary font-semibold text-[18px] leading-[145%]'>Khalti Tech Pvt. Ltd.</p>

                                            <p className='leading-[145%] text-[14px] mt-3'>
                                                <Image className='inline mr-[10px]' src={"/assets/images/partners/Vector-1.svg"} height={20} width={20} alt='' />Tech Company
                                            </p>
                                            <p className='leading-[145%] text-[14px] mt-3'>
                                                <Image className='inline mr-[10px]' src={"/assets/images/partners/mdi_location.svg"} height={20} width={20} alt='' />Maitighar-13, Kathmandu
                                            </p>
                                            <p className='leading-[145%] text-[14px] mt-3'>
                                                <Image className='inline mr-[10px]' src={"/assets/images/partners/streamline_web.svg"} height={20} width={20} alt='' />website
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>

            </section>
            <div className="div section-wrapper-m ">
                <Opportunity />
            </div>


        </>
    )
}

