import dynamic from 'next/dynamic'
import Head from 'next/head'
import Gallery from '../components/HomePageComponents/Gallery'
import HomeContact from '../components/HomePageComponents/HomeContact'
// import HomeSuccessStories from '../components/HomePageComponents/HomeSuccessStories'
import Header from '../components/HeaderComponents/Header'
import Jumpstart from "../components/HomePageComponents/Jumpstart"
import Mission from "../components/HomePageComponents/Mission"
import Splash from "../components/HomePageComponents/Splash"
import TrainingsHomePage from "../components/HomePageComponents/TrainingsHomePage"
import HomeAboutUs from "../components/HomePageComponents/HomeAboutUs"

export default function Home(props) {
  const TestimonialNoSsr = dynamic(
    () => import("../components/HomePageComponents/Testimonials"),
    { ssr: false }
  )
  const HomeSuccessStories = dynamic(
    () => import("../components/HomePageComponents/HomeSuccessStories"),
    { ssr: false }
  )

  let meta_title = "Best IT Training Institute in kathmandu, Nepal | Mind Risers";
  let meta_description = "Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skills";

  return (


    <div className=''>
      <Head>
        <title>Best IT Training Institute in kathmandu, Nepal | Mind Risers</title>
        <meta name='description' content={meta_description} />
        <meta name="keywords"
          content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal" />
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
      <Header />
      <main>
        <Splash />
        <TrainingsHomePage courses={props.courses} />
        
        <HomeAboutUs />
        <Mission />
        <Gallery />
        <HomeContact />
        <HomeSuccessStories />
        <Jumpstart />
        <TestimonialNoSsr />
      </main>

    </div>
  )
}

export async function getServerSideProps() {
  let data = []
  try {

    const res = await fetch(`https://api.mindrisers.jobrisers.com/blog/api/v1/course/`)
    data = await res.json();
  }
  catch (err) {
  }

  return {
    props: { courses: data }
  }
}
