import React from 'react'
import quote1 from '../../assets/Images/quote1corp.png'
import quote2 from '../../assets/Images/quote2corp.png'

const GetQuote = () => {
  return (
    <>
      <section>
        <div className="container px-4 xl:px-0">
          <div className="py-9 md:py-[75px]">
            <div className="md:flex lg:gap-[165px] justify-between items-center mb-6 sm:b-0">
              <div className="sm:w-[527px] mb-6 sm:mb-8 md:mb-0">
                <p className="font-normal text-xl text-[#111D15] pb-6">
                  Affordable cleaning solutions
                </p>
                <h1 className="font-semibold text-[40px] leading-[120%]">
                  High-Quality and Friendly Services at Fair Prices
                </h1>
                <p className="font-normal text-lg text-[#666666] leading-[30px] pt-8 pb-[68px]">
                  We provide comprehensive cleaning services tailored to your
                  needs. From residential cleaning services
                </p>
                <div>
                  <a
                    href=""
                    className="py-3 px-8 bg-[#36B864] rounded-md text-white text-base font-medium"
                  >
                    Get a quote
                  </a>
                </div>
              </div>
              <div className="max-w-[358px] sm:w-[478px] h-[421px] relative">
                <div className="absolute top-0 right-0 max-w-[358px] sm:w-[378px] h-[379px] bg-[#36B864] rounded-[20px]">
                  <img src={quote1} alt="" className="p-2 w-full h-full" />
                </div>
                <div className="absolute bottom-0 left-0 w-[236px] h-[270px] bg-white rounded-[20px] z-50">
                  <img src={quote2} alt="" className="p-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetQuote