import React from 'react'
import blog1 from '../../assets/Images/blog1.png';
import blog2 from '../../assets/Images/blog2.png';
import { IoCheckmarkCircle } from 'react-icons/io5';

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container px-4 xl:px-0">
          <div className="py-6 md:py-[75px]">
            <div className="md:flex xl:gap-[110px] justify-between items-center">
              <div className="max-w-[358px] md:w-[478px] h-[421px] relative mb-0 sm:mb-8 md:mb-0 block md:hidden lg:block">
                <div className="absolute top-0 left-0 max-w-[358px] sm:w-[365px] h-[393px] bg-[#36B864] rounded-[20px]">
                  <img src={blog1} alt="" className="p-2 pr-0" />
                </div>
                <div className="absolute bottom-0 right-0 max-w-[230px] h-[265px] bg-white rounded-[20px] z-50">
                  <img src={blog2} alt="" className="p-2 pr-0" />
                </div>
              </div>
              <div className="md:w-[525px] mt-6 sm:mt-0">
                <h1 className="font-semibold text-4xl sm:text-[44px] leading-[120%]">
                  Welcome To Our
                </h1>
                <h1 className="font-semibold text-4xl sm:text-[44px] leading-[120%]">
                  Pro-cleaning Company!
                </h1>
                <p className="font-normal text-xs sm:text-base leading-[160%] text-[#666666] pt-4 pb-8">
                  We make your space shine! Professional and reliable cleaning
                  service company providing top-notch solutions for homes and
                  businesses. Satisfaction guaranteed!"
                </p>
                <div className="pb-[60px] grid grid-cols-2 gap-x-2 sm:gap-x-10 gap-y-4">
                  <div className="flex gap-2 items-center p-2.5 rounded-sm bg-[#F5F4F4]">
                    <IoCheckmarkCircle className="text-xl text-[#36B864]" />
                    <p className="text-base text-[#111D15] font-semibold leading-[120%]">
                      Vetted professionals
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2.5 rounded-sm bg-[#F5F4F4]">
                    <IoCheckmarkCircle className="text-xl text-[#36B864]" />
                    <p className="text-base text-[#111D15] font-semibold leading-[120%]">
                      Affordable Prices
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2.5 rounded-sm bg-[#F5F4F4]">
                    <IoCheckmarkCircle className="text-xl text-[#36B864]" />
                    <p className="text-base text-[#111D15] font-semibold leading-[120%]">
                      Next day availability
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2.5 rounded-sm bg-[#F5F4F4]">
                    <IoCheckmarkCircle className="text-xl text-[#36B864]" />
                    <p className="text-base text-[#111D15] font-semibold leading-[120%]">
                      Best Quality
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2.5 rounded-sm bg-[#F5F4F4]">
                    <IoCheckmarkCircle className="text-xl text-[#36B864]" />
                    <p className="text-base text-[#111D15] font-semibold leading-[120%]">
                      Standard cleaning tasks
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2.5 rounded-sm bg-[#F5F4F4]">
                    <IoCheckmarkCircle className="text-xl text-[#36B864]" />
                    <p className="text-base text-[#111D15] font-semibold leading-[120%]">
                      Affordable Prices
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div>
                    <a
                      href=""
                      className="py-2 sm:py-3 px-4 sm:px-8 bg-[#36B864] rounded-md text-white text-xl font-medium"
                    >
                      Book Now
                    </a>
                  </div>
                  <div>
                    <a
                      href=""
                      className="py-2 sm:py-3 px-4 sm:px-8 bg-transparent rounded-md text-[#111D15] border border-[#666666] text-xl font-medium"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog