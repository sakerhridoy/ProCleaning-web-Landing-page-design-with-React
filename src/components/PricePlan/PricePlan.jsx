import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';

const PricePlan = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <section className="pt-6 sm:pt-[75px] pb-[340px] lg:pb-[450px] xl:pb-[340px]">
        <div className='bg-cover bg-center bg-no-repeat bg-[url("/src/assets/Images/bgPP.png")] h-[693px] relative after:content-[""] after:absolute after:inset-0 after:w-full after:h-full after:bg-[#36B864] after: after:-z-10'>
          <div className="container px-4 xl:px-0">
            <div className="sm:w-[551px] text-center mx-auto pt-[93px] pb-10">
              <p className="text-xl text-white leading-[120%] pb-3">
                Our Pricing
              </p>
              <h2 className="text-4xl sm:text-[44px] text-white font-semibold sm:leading-[120%] pb-9">
                Choose From Our Lowest Plans and Prices
              </h2>
              <div className="w-[274px] flex gap-4 py-1.5 px-2 bg-[#F4F5F8] rounded-[200px] mx-auto">
                <button className="py-[7px] px-[22px] bg-[#36B864] rounded-[200px] text-white text-xl font-medium shadow-2xl shadow-[rgba(0,0,0,0.1)] cursor-pointer">
                  Monthly
                </button>
                <button className="py-[7px] px-[22px] bg-white rounded-[200px] text-[#111D15] text-xl font-medium shadow-2xl shadow-[rgba(0,0,0,0.1)] cursor-pointer">
                  Yearly
                </button>
              </div>
            </div>
          </div>
          <div className="container py-20">
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
              pagination={{ clickable: false }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  centeredSlides: false,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
              }}
              className="mySwiperPricePlan"
            >
              {/* CARD - 1 */}
              <SwiperSlide>
                <div className="py-[30px] px-[35px] bg-white rounded-[20px] text-center">
                  <h4 className="text-xl text-[#111D15] font-medium leading-[120%] pb-6">
                    Basic Package
                  </h4>
                  <div className="py-5 bg-[#36B864] text-center rounded-[10px]">
                    <p className="text-white font-vietnam">
                      <span className="text-xl">$</span>
                      <span className="text-3xl font-bold">59.00/</span>
                      <span className="text-xl font-semibold">Monthly</span>
                    </p>
                  </div>

                  <ul className="px-2.5 py-9 list-disc text-left">
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Dusting of all surfaces
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Sweeping and mopping floors
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Vacuuming carpets and rugs
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Cleaning of kitchen surfaces
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Cleaning of bathroom surfaces
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Emptying trash bins
                    </li>
                  </ul>

                  <button className="border border-[#666666] py-5 text-base text-[#111D15] font-normal leading-[120%] w-full rounded-md hover:text-white hover:bg-[#36B864] transition-all duration-300 hover:border-[#36B864]">
                    Book Now
                  </button>
                </div>
              </SwiperSlide>

              {/* CARD - 2 */}
              <SwiperSlide>
                <div className="py-[30px] px-[35px] bg-white rounded-[20px] text-center">
                  <h4 className="text-xl text-[#111D15] font-medium leading-[120%] pb-6">
                    Enterprise Package
                  </h4>
                  <div className="py-5 bg-[#36B864] text-center rounded-[10px]">
                    <p className="text-white font-vietnam">
                      <span className="text-xl">$</span>
                      <span className="text-3xl font-bold">69.00/</span>
                      <span className="text-xl font-semibold">Monthly</span>
                    </p>
                  </div>

                  <ul className="px-2.5 py-9 list-disc text-left">
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      All services in the Basic Plan
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Detailed dusting
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Wiping down of kitchen appt
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Cleaning inside the microwave
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Changing bed linens
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Spot cleaning walls and doors
                    </li>
                  </ul>

                  <button className="border border-[#666666] py-5 text-base text-[#111D15] font-normal leading-[120%] w-full rounded-md hover:text-white hover:bg-[#36B864] transition-all duration-300 hover:border-[#36B864]">
                    Book Now
                  </button>
                </div>
              </SwiperSlide>

              {/* CARD - 3 */}
              <SwiperSlide>
                <div className="py-[30px] px-[35px] bg-white rounded-[20px] text-center">
                  <h4 className="text-xl text-[#111D15] font-medium leading-[120%] pb-6">
                    Premium Package
                  </h4>
                  <div className="py-5 bg-[#36B864] text-center rounded-[10px]">
                    <p className="text-white font-vietnam">
                      <span className="text-xl">$</span>
                      <span className="text-3xl font-bold">59.00/</span>
                      <span className="text-xl font-semibold">Monthly</span>
                    </p>
                  </div>

                  <ul className="px-2.5 py-9 list-disc text-left">
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      All services in the Clean Plan
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Deep cleaning of kitchen appt
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Baseboards, door , & vents
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Organization of closets pantries
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Carpet, upholstery spot cleaning
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Detailed bathroom cleaning
                    </li>
                  </ul>

                  <button className="border border-[#666666] py-5 text-base text-[#111D15] font-normal leading-[120%] w-full rounded-md hover:text-white hover:bg-[#36B864] transition-all duration-300 hover:border-[#36B864]">
                    Book Now
                  </button>
                </div>
              </SwiperSlide>

              {/* CARD - 4 */}

              <SwiperSlide>
                <div className="py-[30px] px-[35px] bg-white rounded-[20px] text-center">
                  <h4 className="text-xl text-[#111D15] font-medium leading-[120%] pb-6">
                    Basic Package
                  </h4>
                  <div className="py-5 bg-[#36B864] text-center rounded-[10px]">
                    <p className="text-white font-vietnam">
                      <span className="text-xl">$</span>
                      <span className="text-3xl font-bold">59.00/</span>
                      <span className="text-xl font-semibold">Monthly</span>
                    </p>
                  </div>

                  <ul className="px-2.5 py-9 list-disc text-left">
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Dusting of all surfaces
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Sweeping and mopping floors
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Vacuuming carpets and rugs
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Cleaning of kitchen surfaces
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Cleaning of bathroom surfaces
                    </li>
                    <li className="text-base text-[#666666] font-normal leading-[300%]">
                      Emptying trash bins
                    </li>
                  </ul>

                  <button className="border border-[#666666] py-5 text-base text-[#111D15] font-normal leading-[120%] w-full rounded-md hover:text-white hover:bg-[#36B864] transition-all duration-300 hover:border-[#36B864]">
                    Book Now
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricePlan;
