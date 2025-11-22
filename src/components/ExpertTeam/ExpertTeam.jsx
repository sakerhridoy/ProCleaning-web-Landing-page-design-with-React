import React from 'react'
import expTeam1 from '../../assets/Images/expTeam1.png';
import expTeam2 from '../../assets/Images/expTeam2.png';
import expTeam3 from '../../assets/Images/expTeam3.png';
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

const ExpertTeam = () => {
  const swiperRef = useRef(null)
  return (
    <>
      <section id="about" className="py-6 md:py-[75px]">
        <div className="container px-4 xl:px-0">
          <div className="sm:flex sm:gap-3 lg:gap-28 justify-between pb-10 border-b border-b-[#83A790]">
            <div className="lg:w-[610px]">
              <h2 className="font-semibold text-3xl sm:text-[32px] md:text-[44px] text-[#111D15] leading-[120%]">
                Effective Cleaning Requires an Expert Cleaning Team
              </h2>
            </div>
            <div className="lg:w-md">
              <h3 className="font-semibold text-xl  text-[#111D15] hidden sm:block">
                Expert Team
              </h3>
              <p className="font-normal text-base sm:text-[14px] md:text-base text-[#666666] pt-3">
                We have professional expert cleaning staff ensuring top-notch
                cleanliness and hygiene for your space.
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
              className="mySwiperExpTeam"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="pb-10">
                  <img src={expTeam1} alt="service" className="w-full" />
                  <div className="pt-6 ps-5">
                    <h3 className="font-semibold text-2xl text-[#111D15] leading-[120%]">
                      Erick Reynolds
                    </h3>
                    <div className="flex gap-0.5 pt-4 text-xl text-[#FF9800]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <p className="pt-4 pb-5 font-normal text-base text-[#666666] leading-[150%]">
                      He is an expert cleaning staff member who provides
                      thorough cleaning with precision,
                    </p>
                    <div className="flex gap-3">
                      <a href="" className="text-xl text-[#111D15]">
                        <GrFacebookOption />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaXTwitter />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaInstagram />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={expTeam2} alt="service" className="w-full" />
                  <div className="pt-6 ps-5">
                    <h3 className="font-semibold text-2xl text-[#111D15] leading-[120%]">
                      Erick Reynolds
                    </h3>
                    <div className="flex gap-0.5 pt-4 text-xl text-[#FF9800]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <p className="pt-4 pb-5 font-normal text-base text-[#666666] leading-[150%]">
                      He is an expert cleaning staff member who provides
                      thorough cleaning with precision,
                    </p>
                    <div className="flex gap-3">
                      <a href="" className="text-xl text-[#111D15]">
                        <GrFacebookOption />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaXTwitter />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaInstagram />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={expTeam3} alt="service" className="w-full" />
                  <div className="pt-6 ps-5">
                    <h3 className="font-semibold text-2xl text-[#111D15] leading-[120%]">
                      Erick Reynolds
                    </h3>
                    <div className="flex gap-0.5 pt-4 text-xl text-[#FF9800]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <p className="pt-4 pb-5 font-normal text-base text-[#666666] leading-[150%]">
                      He is an expert cleaning staff member who provides
                      thorough cleaning with precision,
                    </p>
                    <div className="flex gap-3">
                      <a href="" className="text-xl text-[#111D15]">
                        <GrFacebookOption />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaXTwitter />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaInstagram />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={expTeam2} alt="service" className="w-full" />
                  <div className="pt-6 ps-5">
                    <h3 className="font-semibold text-2xl text-[#111D15] leading-[120%]">
                      Erick Reynolds
                    </h3>
                    <div className="flex gap-0.5 pt-4 text-xl text-[#FF9800]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <p className="pt-4 pb-5 font-normal text-base text-[#666666] leading-[150%]">
                      He is an expert cleaning staff member who provides
                      thorough cleaning with precision,
                    </p>
                    <div className="flex gap-3">
                      <a href="" className="text-xl text-[#111D15]">
                        <GrFacebookOption />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaXTwitter />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaInstagram />
                      </a>
                      <a href="" className="text-xl text-[#111D15]">
                        <FaLinkedinIn />
                      </a>
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

export default ExpertTeam