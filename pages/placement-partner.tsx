// import axios from 'axios'
import Head from 'next/head'
import BannerWrapper from '../components/common/BannerWrapper'
import Image from 'next/image'
import Swoosh from '../components/common/Swoosh'
import Opportunity from '../components/common/Opportunity'
import { makeFullApiUrl, makeFullUrl } from '../utils/makeFullUrl'
import Link from 'next/link'
import Offer from '../components/Offer'
import { OfferPage } from '../constants/offers'

export default function Home({ partners }) {
    let meta_title = 'Placement Partners | Internships | Mindrisers Nepal'
    let meta_description =
        'Are you searching for a Practical IT Training Center in Kathmandu Nepal then Mindrisers Institute of Technology is the perfect platform for you to learn Digital Skills'

    return (
        <>
            <Head>
                <link
                    rel="canonical"
                    href={makeFullUrl('/placement-partner')}
                    
                />
                <title>Placement Partners for mindrisers trainees</title>
                <meta
                    name="keywords"
                    content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal, Placement Parner ,Intership"
                />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta_title} />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={meta_title} />
                <meta
                    property="twitter:description"
                    content={meta_description}
                />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <BannerWrapper>
                <div className="container flex h-full items-center ">
                    <div className=" title-space-xl grid   items-center lg:grid-cols-[55%,45%]">
                        <div className=" text-center lg:text-left">
                            <h1>
                                <span className="header-md block font-normal leading-[145%] text-secondary">
                                    We Make sure{' '}
                                </span>
                                <span className="header-xl block leading-[145%]">
                                    You are fit in right place
                                </span>
                            </h1>
                            <p className="title] mt-5 text-primary">
                                Join Mindrisers to gain access to exceptional
                                placement program and expert’s support. Build
                                competitive advantage and increase your offer
                                value with Mindrisers.{' '}
                            </p>
                            <a href="#partnered-companies">
                                <button className="btn mt-5">
                                    Explore Job placement partners
                                </button>
                            </a>
                        </div>
                        <Image
                            alt=""
                            src="/assets/images/partners/feature-image.svg"
                            width={600}
                            height={600}
                            className="hidden w-full lg:block"
                        />
                    </div>
                </div>
            </BannerWrapper>

            <section className="section-wrapper-m container">
                <div className="title-space-3xl text-center">
                    <h2 className="sub-header-lg" id="partnered-companies">
                        Our Partnered{' '}
                        <Swoosh type="secondary">Companies</Swoosh>
                    </h2>
                </div>
                <div>
                    <ul className="gap-x-base-half gap-y-base grid md:grid-cols-2 xl:grid-cols-3">
                        {partners.map((el) => {
                            /* TODO: what about shadow on hover */
                            return (
                                <li className="hover:shadow-medium group rounded-xl border border-border p-5 transition hover:border-green-50 hover:bg-green-50 ">
                                    <Link
                                        rel="nofollow"
                                        href={el.link}
                                        target="_blank"
                                        className="cursor-pointer"
                                    >
                                        <div className="flex items-start gap-[20px]">
                                            <Image
                                                alt=""
                                                src={makeFullUrl(el.image)}
                                                height={200}
                                                width={200}
                                                className="h-[96px] w-[96px] rounded-xl border border-border object-contain"
                                            />
                                            <div>
                                                <h3 className="mb-[13px] text-[18px] font-semibold leading-[145%] text-gray-950 transition group-hover:text-primary">
                                                    {el.name}
                                                </h3>

                                                <p className="mt-3 flex items-center text-[14px] leading-[145%]">
                                                    <Image
                                                        className="mr-[10px] inline"
                                                        src={
                                                            '/assets/images/partners/Vector-1.svg'
                                                        }
                                                        height={20}
                                                        width={20}
                                                        alt=""
                                                    />
                                                    {el.type || 'Tech Company'}
                                                </p>
                                                <p className="mt-3 flex items-center text-[14px] leading-[145%]">
                                                    <Image
                                                        className="mr-[10px] inline"
                                                        src={
                                                            '/assets/images/partners/mdi_location.svg'
                                                        }
                                                        height={20}
                                                        width={20}
                                                        alt=""
                                                    />
                                                    {el.location ||
                                                        'Maitighar-13, Kathmandu'}
                                                </p>
                                                <p className="mt-3 flex items-center text-[14px] leading-[145%] ">
                                                    <Image
                                                        className="mr-[10px] inline"
                                                        src={
                                                            '/assets/images/partners/streamline_web.svg'
                                                        }
                                                        height={20}
                                                        width={20}
                                                        alt=""
                                                    />
                                                    <span
                                                        className=" line-clamp-1 inline hyphens-auto "
                                                        style={{
                                                            wordBreak:
                                                                'break-all'
                                                        }}
                                                    >
                                                        {el.link}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <div className="section-wrapper-m container ">
                <Opportunity />
            </div>
            <Offer matchingUrl={`/${OfferPage.Partner}`} offerType='Partner' />
        </>
    )
}

export async function getStaticProps() {
    let data = []
    try {
        const res = await fetch(makeFullApiUrl(`/placementpartner/`))
        data = await res.json()
    } catch (err) {}

    return {
        props: { partners: data },
        revalidate: 60 * 1
    }
}
