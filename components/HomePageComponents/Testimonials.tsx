import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";
import Background from '../../assets/homePage/testimonial.jpg'
import TestimonialCard from './TestimonialCard'



const Testimonials = () => {
  const useTwo = useMediaQuery({ query: '(min-width: 768px)' })
  useEffect(() => {
    // const useTwo = useMediaQuery({ query: '(min-width: 768px)' })
  }, [])



  return (
    <section className='bg-testimonials bg-fixed h-max bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Background.src})` }}>
      <div className='w-full h-full  flex flex-col items-center bg-mask py-10 sm:py-16 px-0 space-y-12'>
        <div className='flex flex-col w-full'>
          <p className="w-full text-center text-green-500 text-sm tracking-widest font-medium mb-5">TESTIMONIALS</p>
          <h3 className='w-full text-center text-white font-bold text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl mb-5'>WHAT OUR PARTNERING COMPANY SAY ABOUT US?
          </h3>
        </div>
        <div className='w-full justify-center items-center'>
          <Swiper
            // @ts-expect-error
            style={{ "--swiper-navigation-color": "dark", }}
            slidesPerView={useTwo ? 2 : 1}
            spaceBetween={0}
            slidesPerGroup={1}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            loop={true}
            loopFillGroupWithBlank={false}
            // pagination={{
            //   clickable: true,
            // }}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>

              <TestimonialCard
                starCount={5}
                image='img'
                name='Tummy Truck'
                position='CEO'
                testimonial='We developed a great partnership with MindRisers Consortium and their dedication to our software is evident in all aspects of the site. We appreaciate their attention to detail and creative approach to brining our new exhibit to life online.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                starCount={5}
                image='img'
                name='Realpath Engineering Consulancy Pvt.Ltd.'
                position='CEO'
                testimonial='Thankyou Mind Risers for making our job easy for Human resource (HR) department.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                starCount={5}
                image='img'
                name='Pentagram Consulting & Construction Pvt. Ltd.'
                position='CEO'
                testimonial='In only 5-6 months we have experienced rapid growth in our social media marketing. All thanks to MindRisers Consortium, the best team with best manpower to uplift your Business.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='Prabhu Group/Prabhu Pay'
                position='CEO'
                testimonial='We chose MindRisers Consortium because we simply could not find any other providers that offerd all the services we needed. Great Team with great services.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='Damak Nagar Palika'
                position='Samip ChudaL | IT Officer'
                testimonial='We choose MindRisers Consortium because it provide good services and offer we need.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='Khushal Regmi'
                position='CAN Vice President'
                testimonial='It provides good services and offer we need.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='Tummy Truck'
                position='Kritika Shah | CEO '
                testimonial=' Mind Risers is the best in town for providing sound knowledge to freshers.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='Safal Sharma'
                position='CEO Rato Pati '
                testimonial='Service is all what you expect when you are bound to work with providers and whom we are connected with its MindRisers Consortium. The best team to provided efficient and timely service.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='Reliance Life Insurance'
                position='Niranjan Kandel | Deputy CEO'
                testimonial='What makes you happy is when your business meets your customers satisfaction. MindRisers Consortium made this part so easy and effective, thank you!'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='EVO Store'
                position='Digital Marketing Department'
                testimonial='We can positively say Mind Risers provides best knowledge and services to our clients. We are very happy with the service we received from Mind Risers Consortium.'
              />
            </SwiperSlide>


            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='VEDA'
                position='Sanjan Piya | Co-founder '
                testimonial='Extremely satisfied with MindRisers Consortium. The best team to dealt with, helpful, friendly and service oriented.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='Samanantar Group'
                position='HR Department'
                testimonial='We greatly appreciate MindRisers Consortium, an amazing team who are keen to help in every step of the way to support with all the softwares.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                starCount={6}
                image='img'
                name='Grow By Data'
                position='Suresh Thapa | Development Team Head'
                testimonial='Unbelievably helpful with great services you seek.'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
export default Testimonials
