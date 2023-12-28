import Head from "next/head"
import BannerWrapper from "../components/common/BannerWrapper"
import Swoosh from "../components/common/Swoosh"
import Stats from "../components/common/Stats"
import AdmissionForm from "../components/AdmissionComponents/AdmissionForm"

export default function admission() {
    let meta_title = "Admission Form"
    let meta_description = ""
    return (<>
        <Head>
            <title>Admission form for mindrisers upcomming session</title>
            <meta name="keywords"
                content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal, Admission" />
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
                <div className="text-center title-space-4xl">
                    <p className="text-secondary header-md font-normal leading-[145%]">Backed by Facts !</p>
                    <p className="mb-5 header-xl leadig-[145%]">We are Best in what we do</p>
                    <p className="mb-5 title text-primary">Fill the form and join mindrisers to elevate your expertise in your interest filed.</p>
                    <a href="#admission-form" className="btn">Fill admission form</a>
                </div>

                {/* TODO: used in home... make headleas component */}
                <div>
                    {/* <Stats wrapperClass="bg-green-100 grid grid-cols-2  md:grid-cols-4 gap-lg max-w-[772px] mx-auto rounded-xl p-5"/> */}
                    <Stats wrapperClass="bg-green-100 grid grid-cols-2 md:flex md:justify-between md:grid-cols-4 gap-lg max-w-[772px] mx-auto rounded-xl p-5"/>
                </div>
            </div>

        </BannerWrapper>

        <section className="section-wrapper-m container">
            <div className="title-space-5xl">
                <p className="header-md text-center" id="admission-form"><Swoosh type="secondary">Admission Form</Swoosh></p>
            </div>
            <AdmissionForm/>
        </section>

        {/* <Header /> */}
        {/* <Admission /> */}
    </>
    )
}