import React from 'react'
import { LuPhoneCall } from 'react-icons/lu';

const Form = () => {
  return (
    <>
      <section id='contact' className="py-6 sm:py-[75px]">
        <div className="container px-4 xl:px-0">
          <div className="lg:flex lg:gap-9 xl:gap-[70px] items-baseline-last">
            <div className="lg:w-[400px] xl:w-[600px]">
              <h3 className="font-medium text-[40px] text-[#111D15] pb-10">
                Find us
              </h3>
              <div className="flex gap-3 items-center p-5 bg-[#FBFBFB] rounded-xl w-full mb-[30px]">
                <button className="text-2xl text-white p-[15px] bg-[#36B864] rounded-full">
                  <LuPhoneCall />
                </button>
                <div className="text">
                  <p className="font-semibold text-xl text-[#111D15] pb-2">
                    Call Us
                  </p>
                  <p className="text-base text-[#666666] font-normal leading-[120%]">
                    <a href="">+(08) 255 201 888</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center p-5 bg-[#FBFBFB] rounded-xl w-full mb-[30px]">
                <button className="text-2xl text-white p-[15px] bg-[#36B864] rounded-full">
                  <LuPhoneCall />
                </button>
                <div className="text">
                  <p className="font-semibold text-xl text-[#111D15] pb-2">
                    Email Now
                  </p>
                  <p className="text-base text-[#666666] font-normal leading-[120%]">
                    <a href="">Hello@procleaning.com</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center p-5 bg-[#FBFBFB] rounded-xl w-full">
                <button className="text-2xl text-white p-[15px] bg-[#36B864] rounded-full">
                  <LuPhoneCall />
                </button>
                <div className="text">
                  <p className="font-semibold text-xl text-[#111D15] pb-2">
                    Address
                  </p>
                  <p className="text-base text-[#666666] font-normal leading-[120%]">
                    <a href="">7510, Brand Tower, New York, USA</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-[500px] pt-10 lg:pt-0">
              <p className="text-base text-[#111D15] font-normal leading-[120%]">
                Contact info
              </p>
              <h3 className="font-medium text-4xl text-[#111D15] pt-2 leading-[120%]">
                Keep In Touch
              </h3>
              <p className="text-base text-[#666666] font-normal leading-[150%] pt-4 pb-10">
                We prioritize responding to your inquiries promptly to ensure
                you receive the assistance you need in a timely manner
              </p>
              <form>
                <div className="mb-[30px]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="py-[18px] px-5 w-full rounded-sm shadow-2xl shadow-[#F3F3F3] border border-[#F3F3F3] placeholder:text-[#666666] placeholder:font-vietnam"
                  />
                </div>
                <div className="mb-[30px]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-[18px] px-5 w-full rounded-sm shadow-2xl shadow-[#F3F3F3] border border-[#F3F3F3] placeholder:text-[#666666] placeholder:font-vietnam"
                  />
                </div>
                <div className="mb-[30px]">
                  <textarea
                    placeholder="Message"
                    className="py-[18px] px-5 w-full rounded-sm shadow-2xl shadow-[#F3F3F3] border border-[#F3F3F3] placeholder:text-[#666666] placeholder:font-vietnam"
                  ></textarea>
                </div>
                <div>
                  <a
                    href=""
                    className="py-3 px-6 bg-[#36B864] rounded-md text-white text-base font-medium"
                  >
                    Sent Massage
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form