import React from 'react';
import service1 from '../../assets/Images/service1.png';
import service2 from '../../assets/Images/service2.png';
import service3 from '../../assets/Images/service3.png';
import { MdArrowOutward } from 'react-icons/md';
import { IoArrowForward } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <section id="service" className="py-0 md:py-[75px]">
        <div className="container relative px-4 xl:px-0">
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="absolute right-px xl:-right-6 top-1/2 -translate-y-1/2 z-50 
             bg-[#36B864] text-white p-2 rounded-full shadow-md cursor-pointer hidden lg:block"
          >
            <IoArrowForward className="text-[28px] " />
          </button>
          <div className="sm:flex lg:gap-[201px] justify-between pb-10 border-b border-b-[#83A790]">
            <div className="sm:w-[536px]">
              <h2 className="font-semibold text-4xl text-[44px] text-[#111D15] leading-[120%]">
                We always provide the best service
              </h2>
            </div>
            <div className="sm:w-[433px]">
              <h3 className="font-semibold text-xl text-[#111D15] hidden sm:block">
                Services
              </h3>
              <p className="font-normal text-base text-[#666666] pt-3">
                While we can customize your cleaning plan to suit your needs,
                most clients schedule regular cleaning services:
              </p>
            </div>
          </div>
          <div className="pt-10">
            <Swiper
              spaceBetween={30}
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
              className="mySwiperService"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
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
                <div className="service pb-10">
                  <img src={service1} alt="service" className="w-full" />
                  <h3 className="pt-4 font-semibold text-2xl text-[#111D15] leading-[120%]">
                    Office Cleaning
                  </h3>
                  <p className="pt-4 pb-8 font-normal text-base text-[#666666] leading-[150%]">
                    While we can customize your cleaning plan to suit your
                    needs, most clients schedule regular cleaning services:
                  </p>
                  <div className="relative group">
                    <a
                      href=""
                      className="py-3 ps-5 pe-[50px] text-base text-[#111D15] font-normal border border-[#9D9D9D] rounded-md group-hover:text-white group-hover:bg-[#36B864] transition-all duration-300"
                    >
                      Book Now
                    </a>
                    <div className=" icn absolute top-0.5 left-28 text-[#9D9D9D] text-xl group-hover:text-white transition-all duration-300">
                      <MdArrowOutward />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={service2} alt="service" className="w-full" />
                  <h3 className="pt-4 font-semibold text-2xl text-[#111D15] leading-[120%]">
                    Spring Cleaning
                  </h3>
                  <p className="pt-4 pb-8 font-normal text-base text-[#666666] leading-[150%]">
                    While we can customize your cleaning plan to suit your
                    needs, most clients schedule regular cleaning services:
                  </p>
                  <div className="relative group">
                    <a
                      href=""
                      className="py-3 ps-5 pe-[50px] text-base text-[#111D15] font-normal border border-[#9D9D9D] rounded-md group-hover:text-white group-hover:bg-[#36B864] transition-all duration-300"
                    >
                      Book Now
                    </a>
                    <div className="icn absolute top-0.5 left-28 text-[#9D9D9D] text-xl group-hover:text-white transition-all duration-300">
                      <MdArrowOutward />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={service3} alt="service" className="w-full" />
                  <h3 className="pt-4 font-semibold text-2xl text-[#111D15] leading-[120%]">
                    House Cleaning
                  </h3>
                  <p className="pt-4 pb-8 font-normal text-base text-[#666666] leading-[150%]">
                    While we can customize your cleaning plan to suit your
                    needs, most clients schedule regular cleaning services:
                  </p>
                  <div className="relative group">
                    <a
                      href=""
                      className="py-3 ps-5 pe-[50px] text-base text-[#111D15] font-normal border border-[#9D9D9D] rounded-md group-hover:text-white group-hover:bg-[#36B864] transition-all duration-300"
                    >
                      Book Now
                    </a>
                    <div className="icn absolute top-0.5 left-28 text-[#9D9D9D] text-xl group-hover:text-white transition-all duration-300">
                      <MdArrowOutward />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={service1} alt="service" className="w-full" />
                  <h3 className="pt-4 font-semibold text-2xl text-[#111D15] leading-[120%]">
                    Office Cleaning
                  </h3>
                  <p className="pt-4 pb-8 font-normal text-base text-[#666666] leading-[150%]">
                    While we can customize your cleaning plan to suit your
                    needs, most clients schedule regular cleaning services:
                  </p>
                  <div className="relative group">
                    <a
                      href=""
                      className="py-3 ps-5 pe-[50px] text-base text-[#111D15] font-normal border border-[#9D9D9D] rounded-md group-hover:text-white group-hover:bg-[#36B864] transition-all duration-300"
                    >
                      Book Now
                    </a>
                    <div className="icn absolute top-0.5 left-28 text-[#9D9D9D] text-xl group-hover:text-white transition-all duration-300">
                      <MdArrowOutward />
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
};

export default Services;
