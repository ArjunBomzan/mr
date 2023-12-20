import Head from "next/head"
import Header from "../components/HeaderComponents/Header"
import SuccessGalleries from "../components/SuccessGalleryComponents/SuccessGalleries"
import BannerWrapper from "../components/common/BannerWrapper"
import Image from "next/image"
import Swoosh from "../components/common/Swoosh"
import Opportunity from "../public/assets/images/common/Opportunity"

const services = ({ successStoreis }) => {
    let meta_title = " Internships | Job Placements | Mindrisers Nepal"
    let meta_description = ""
    return (
        <>
            <Head>
                <title>Success stories of mindrisers trainees</title>
                <meta name="keywords"
                    content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal, Placement Parner ,Interships , Job Placements" />
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
                <div className="container ">
                    <div className=" grid  lg:grid-cols-[60%,40%]   gap-base items-center">
                        <div className="text-center lg:text-left">
                            <p className="header-xl leading-[145%]">You are at great</p>
                            <p className="header-xl leading-[145%] text-secondary">Hand !</p>
                            <p className=" mt-5 text-[20px] text-primary">We have provided more than 1000s of experts to the market. Know about few who are doing extraordinary in various companies in their niche.</p>
                        </div>
                        <Image src={"/assets/images/gallery/people-chatting 1.svg"} alt="" height={500} width={500} className="hidden w-full lg:block" />
                    </div>
                </div>
            </BannerWrapper>
            <section className="section-wrapper-m container">
                <div className="text-center">
                    <p className="text-primary">Success Stories</p>
                    <p className="title-space max-w-[633px] mx-auto sub-header-lg ">See how <Swoosh type="secondary">Mindrisers</Swoosh> is helping learners get expertise and pursue their future.</p>
                </div>
                <div className="section-wrapper-p-sm">
                    <ul className="flex gap-[12px] flex-wrap justify-center ">
                        {
                            ["all", "digital marketing", "flutter", "python"].map(el => {
                                return <li className="rounded-xl capitalize p-[10px] bg-green-50 text-primary text-[14px] leading-[145%]">
                                    {el}
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-[40px] gap-y-[85px] mt-[145px]">
                        {
                            new Array(12).fill(null).map(el => {
                                return <li className="relative border border-border hover:border-primary transition hover:shadow-small rounded-xl p-5 pt-[80px] ">
                                    <Image src={"/assets/images/person.jpg"} alt="" height={400} width={400}
                                        className="absolute top-0 right-0 left-0 mx-auto -translate-y-[50%]  h-[130px] w-[130px] rounded-full object-center border-4 border-green-100" />
                                    <div className="text-center leading-[28px] mb-5">
                                        <p className="text-gray-950 text-[20px] font-semibold mb-[10px] ">Kiran</p>
                                        <p className="mb-[4px]">Q&A Analyst</p>
                                        <p className="font-medium"><span className="text-secondary">@</span>Varosa Technology</p>
                                    </div>
                                    <div className="border-t border-border">
                                        <div className="mt-5">
                                            <p className="text-[12px] mb-[4px]">Course taken</p>
                                            <p className="font-medium text-[18px] leading-[28px]">Q&A Automation</p>

                                        </div>
                                        <div className="my-5">
                                            <p className="text-[12px] mb-[4px]">Tools learned</p>
                                            <ul className="flex gap-[20px]">
                                                <li><Image className="rounded" src={"/assets/images/gallery/fa6-brands_square-js.svg"} height={24} width={24} alt="" /></li>
                                                <li><Image className="rounded" src={"/assets/images/gallery/fa6-brands_square-js.svg"} height={24} width={24} alt="" /></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-[12px] mb-[4px]" > College</p>
                                            <p className="font-medium text-[18px] leading-[28px]">Global Capital College</p>
                                        </div>
                                    </div>
                                </li>

                            })
                        }
                    </ul>
                </div>

            </section>
            <section className="contianer section-wrapper-m">
                <Opportunity />
            </section>
        </>
    )
}

export async function getStaticProps() {
    let data = []
    try {

        const res = await fetch(`${process.env.DOMAIN_V1}successstoryhome/`)
        data = await res.json();

    }
    catch (err) {

    }
    return {
        props: { successStoreis: data },
        // revalidate: 60 * 60 * 24  //  1 day
        revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 

    }


}


export default services
