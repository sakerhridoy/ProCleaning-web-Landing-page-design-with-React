import React from 'react'
import serviceNews1 from '../../assets/Images/serviceNews1.png';
import serviceNews2 from '../../assets/Images/serviceNews2.png';
import serviceNews3 from '../../assets/Images/serviceNews3.png';
import { IoIosStar } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const ServiceNews = () => {
  const swiperRef = useRef(null)
  return (
    <>
      <section className="py-6 md:py-[75px]">
        <div className="container px-4 xl:px-0">
          <div className="sm:flex sm:gap-6 lg:gap-28 justify-between pb-10 border-b border-b-[#83A790]">
            <div className="lg:w-[610px]">
              <h2 className="font-semibold text-4xl md:text-[44px] text-[#111D15] leading-[120%]">
                Stay Updated with Our Tips & Service News!
              </h2>
            </div>
            <div className="lg:w-md">
              <h3 className="font-semibold text-xl text-[#111D15] hidden sm:block">
                Our Blog
              </h3>
              <p className="font-normal text-base text-[#666666] pt-3">
                Stay informed with our latest cleaning tips, service updates,
                expert advice on maintaining an immaculate home
              </p>
            </div>
          </div>
          <div className="pt-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              centeredSlides={true}
              centerInsufficientSlides={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => (swiperRef.current = swiper)}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiperServiceNews"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  centeredSlides: false,
                },
                640: {
                  slidesPerView: 1.3,
                  spaceBetween: 15,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="pb-10">
                  <div className="image">
                    <div className="imgBg"></div>
                    <img src={serviceNews1} alt="service" className="w-full" />
                  </div>
                  <div className="pt-6 px-6 text-center">
                    <p className="text-sm text-[#666666] font-normal pb-3.5">
                      JOHN HELTON JAN 6, 2025
                    </p>
                    <h3 className="font-bold text-xl text-[#111D15] leading-[120%] px-4">
                      Eco-Friendly Cleaning: How We Keep Your Home Green
                    </h3>
                    <p className="pt-4 pb-6 border-b border-b-[#D8D8D8] font-normal text-base text-[#666666] leading-[150%]">
                      Learn about our commitment to eco-friendly practices. We
                      share the eco-conscious products...
                    </p>
                    <div className="btn">
                      <button className="py-5 text-center w-full underline pt-6 cursor-pointer">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <div className="image">
                    <div className="imgBg"></div>
                    <img src={serviceNews2} alt="service" className="w-full" />
                  </div>
                  <div className="pt-6 px-6 text-center">
                    <p className="text-sm text-[#666666] font-normal pb-3.5">
                      JOHN HELTON JAN 6, 2025
                    </p>
                    <h3 className="font-bold text-xl text-[#111D15] leading-[120%] px-4">
                      How to Maintain a Clean Home Between Professional Visits
                    </h3>
                    <p className="pt-4 pb-6 border-b border-b-[#D8D8D8] font-normal text-base text-[#666666] leading-[150%]">
                      Get practical advice on maintaining cleanliness between
                      our scheduled visits. These easy-to-follow tips...
                    </p>
                    <div className="btn">
                      <button className="py-5 text-center w-full underline pt-6 cursor-pointer">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <div className="image">
                    <div className="imgBg"></div>
                    <img src={serviceNews3} alt="service" className="w-full" />
                  </div>
                  <div className="pt-6 px-6 text-center">
                    <p className="text-sm text-[#666666] font-normal pb-3.5">
                      JOHN HELTON JAN 6, 2025
                    </p>
                    <h3 className="font-bold text-xl text-[#111D15] leading-[120%] px-4">
                      The Benefits of Regular Professional Cleaning
                    </h3>
                    <p className="pt-4 pb-6 border-b border-b-[#D8D8D8] font-normal text-base text-[#666666] leading-[150%]">
                      Understand the numerous advantages of scheduling regular
                      professional cleanings. From improving indoor air...
                    </p>
                    <div className="btn">
                      <button className="py-5 text-center w-full underline pt-6 cursor-pointer">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <div className="image">
                    <div className="imgBg"></div>
                    <img src={serviceNews2} alt="service" className="w-full" />
                  </div>
                  <div className="pt-6 px-6 text-center">
                    <p className="text-sm text-[#666666] font-normal pb-3.5">
                      JOHN HELTON JAN 6, 2025
                    </p>
                    <h3 className="font-bold text-xl text-[#111D15] leading-[120%] px-4">
                      Eco-Friendly Cleaning: How We Keep Your Home Green
                    </h3>
                    <p className="pt-4 pb-6 border-b border-b-[#D8D8D8] font-normal text-base text-[#666666] leading-[150%]">
                      Learn about our commitment to eco-friendly practices. We
                      share the eco-conscious products...
                    </p>
                    <div className="btn">
                      <button className="py-5 text-center w-full underline pt-6 cursor-pointer">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceNews