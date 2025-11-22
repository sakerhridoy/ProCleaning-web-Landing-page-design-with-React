import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section id="home">
        <div
          className='h-screen 
      bg-no-repeat 
      bg-cover 
      bg-center 
      md:bg-position-[center_right_-150px] 
      bg-[url("/src/assets/Images/banner-mobile.png")]
      sm:bg-[url("/src/assets/Images/banner-tab.png")]
      md:bg-[url("/src/assets/Images/banner.png")] mb-[75px]'
        >
          <div className="container px-4 xl:px-0 backdrop-blur-[2px] md:backdrop-blur-none">
            <div className="lg:w-[610px] py-[104px]">
              <div className="slider-container">
                <Slider {...settings}>
                  <div className="item">
                    <p className="font-normal text-base md:text-xl text-[#111D15] pb-3">
                      Quality cleaning at a fair price.
                    </p>
                    <h1 className="font-bold text-[36px] md:text-[52px] leading-[115%] pr-0 sm:pr-16 md:pr-0">
                      Specialized, efficient, and thorough cleaning services
                    </h1>
                    <p className="font-medium md:font-normal text-base md:text-lg text-black md:text-[#666666] leading-[30px] pt-8 pb-[57px] pr-0 sm:pr-16 md:pr-0">
                      We provide Performing cleaning tasks using the least
                      amount of time, energy, and money.
                    </p>
                  </div>
                  <div className="item">
                    <p className="font-normal text-base md:text-xl text-[#111D15] pb-3">
                      Professional Cleaners in Ayrshire.
                    </p>
                    <h1 className="font-bold text-[36px] md:text-[52px] leading-[115%] pr-0 sm:pr-16 md:pr-0">
                      Looking for reliable cleaners in Ayrshire?
                    </h1>
                    <p className="font-medium md:font-normal text-base md:text-lg text-black md:text-[#666666] leading-[30px] pt-8 pb-[57px] pr-0 sm:pr-16 md:pr-0">
                      Our fully insured team ensures your home, office, or
                      business space remains spotless and hygienic.
                    </p>
                  </div>
                  <div className="item">
                    <p className="font-normal text-base md:text-xl text-[#111D15] pb-3">
                      Domestic and commercial cleaning services.
                    </p>
                    <h1 className="font-bold text-[36px] md:text-[52px] leading-[115%] pr-0 sm:pr-16 md:pr-0">
                      Affordable and flexible cleaning services
                    </h1>
                    <p className="font-medium md:font-normal text-base md:text-lg text-black md:text-[#666666] leading-[30px] pt-8 pb-[57px] pr-0 sm:pr-16 md:pr-0">
                      Find out more about our cleaning services and how we can
                      help. Our team ensures your home.
                    </p>
                  </div>
                </Slider>
              </div>
              <div className="flex gap-6">
                <div className="py-3 sm:py-4 px-4 sm:px-8 bg-[#36B864] rounded-md">
                  <a
                    href=""
                    className="text-white text-xs sm:text-base font-medium"
                  >
                    Get Start Now
                  </a>
                </div>
                <div className="py-3 sm:py-4 px-4 sm:px-8 bg-transparent rounded-md border border-black md:border-[#666666]">
                  <a
                    href=""
                    className="text-[#111D15] text-xs sm:text-base font-semibold md:font-medium"
                  >
                    View all Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner