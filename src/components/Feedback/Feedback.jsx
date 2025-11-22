import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { IoIosStar } from 'react-icons/io';
import feedBack from '../../assets/Images/feedBack.png'
import feedBack2 from '../../assets/Images/feedBack2.png'
import feedBack3 from '../../assets/Images/feedBack3.png'
import feedBack4 from '../../assets/Images/feedBack4.png'
import { useRef } from 'react'

const Feedback = () => {
  const sliderRef = useRef(null)
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
      <section className="pb-6 pt-[75px] lg:pt-[100px] md:py-[75px]">
        <div className="container px-4 xl:px-0">
          <div className="lg:flex xl:gap-[70px]">
            <div className="xl:w-[500px]">
              <h4 className="font-semibold text-4xl sm:text-[40px] text-[#111D15] leading-[120%] sm:hidden ">
                Feedback About Their Experience With Us
              </h4>
              <h4 className="font-semibold lg:text-3xl xl:text-4xl sm:text-[40px] text-[#111D15] leading-[120%] hidden sm:block">
                Feedback About Their
              </h4>
              <h4 className="font-semibold lg:text-3xl xl:text-4xl sm:text-[40px] text-[#111D15] leading-[120%] hidden sm:block">
                Experience With Us
              </h4>
              <p className="pt-6 pb-9 font-normal text-base text-[#666666] leading-[160%] pr-5">
                Read testimonials from our satisfied clients. See how our
                cleaning services have made a difference in their lives and
                homes
              </p>
              <div className="hidden lg:block">
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className="p-4 text-2xl text-[#36B864] border border-[#36B864] rounded-[10px] hover:bg-[#36B864] hover:text-white transition-all duration-300"
                  >
                    <FiArrowLeft />
                  </button>
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="p-4 text-2xl text-[#36B864] border border-[#36B864] rounded-[10px] hover:bg-[#36B864] hover:text-white transition-all duration-300"
                  >
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[600px] p-5 rounded-[20px] border-[#36b864] border-10 border-l-0 border-b-0 shadow-2xl shadow-[#00000015]">
              <Slider ref={sliderRef} {...settings}>
                <div className="item">
                  <div className="flex gap-6 flex-col sm:flex-row items-center">
                    <div className="sm:w-[170px]">
                      <img src={feedBack} alt="feedBack" className="w-full" />
                    </div>
                    <div className="sm:w-[366px]">
                      <h6 className="font-medium text-xl text-[#111D15] leading-5">
                        Robert Fox
                      </h6>
                      <p className="py-3 text-base text-[#666666] font-normal leading-4">
                        Business Man
                      </p>
                      <div className="flex gap-0.5 text-xl text-[#FF9800]">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                      </div>
                      <p className="pt-4 text-base text-[#666666] font-normal leading-6">
                        Excellent service! The team was punctual, thorough, and
                        left my home sparkling clean. Highly recommend for
                        anyone needing a reliable and detailed cleaning service
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="flex gap-6 flex-col sm:flex-row items-center">
                    <div className="sm:w-[170px]">
                      <img src={feedBack2} alt="feedBack" className="w-full" />
                    </div>
                    <div className="sm:w-[366px]">
                      <h6 className="font-medium text-xl text-[#111D15] leading-5">
                        Selina Mari
                      </h6>
                      <p className="py-3 text-base text-[#666666] font-normal leading-4">
                        Corporate Officer
                      </p>
                      <div className="flex gap-0.5 text-xl text-[#FF9800]">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                      </div>
                      <p className="pt-4 text-base text-[#666666] font-normal leading-6">
                        Writing a review of literature is to provide a critical
                        evaluation of the data available from existing studies.
                        conclusions from the existing data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="flex gap-6 flex-col sm:flex-row items-center">
                    <div className="sm:w-[170px]">
                      <img src={feedBack3} alt="feedBack" className="w-full" />
                    </div>
                    <div className="sm:w-[366px]">
                      <h6 className="font-medium text-xl text-[#111D15] leading-5">
                        Jack Philip
                      </h6>
                      <p className="py-3 text-base text-[#666666] font-normal leading-4">
                        Private Job
                      </p>
                      <div className="flex gap-0.5 text-xl text-[#FF9800]">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                      </div>
                      <p className="pt-4 text-base text-[#666666] font-normal leading-6">
                        It should give an overview of current thinking on the
                        topic. And, unlike an original research article, it will
                        not present new experimental results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="flex gap-6 flex-col sm:flex-row items-center">
                    <div className="sm:w-[170px]">
                      <img src={feedBack4} alt="feedBack" className="w-full" />
                    </div>
                    <div className="sm:w-[366px]">
                      <h6 className="font-medium text-xl text-[#111D15] leading-5">
                        Jeasmen Alis
                      </h6>
                      <p className="py-3 text-base text-[#666666] font-normal leading-4">
                        Job Holder
                      </p>
                      <div className="flex gap-0.5 text-xl text-[#FF9800]">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                      </div>
                      <p className="pt-4 text-base text-[#666666] font-normal leading-6">
                        What is a review article? A review article can also be
                        called a literature review, or a review of literature.
                        It is a survey of previously published research on a
                        topic.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback