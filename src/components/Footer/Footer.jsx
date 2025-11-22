import React from 'react'
import footerLogo from '../../assets/Images/footerLogo.png'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111D15] pt-10 md:pt-[100px]">
        <div className="container px-4 xl:px-0">
          <div className="lg:flex lg:gap-14 xl:gap-[95px] items-center pb-[34px]">
            <div className="sm:w-[356px] py-3.5">
              <img src={footerLogo} alt="footerLogo" className="w-[203px]" />
              <p className="text-[14px] text-white font-light leading-[160%] pt-6">
                Stay updated with our latest cleaning tips, service updates, and
                helpful articles on maintaining a spotless home.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 3xl:gap-[95px] justify-between mt-6 sm:mt-0">
              <div className="">
                <h5 className="text-white text-xl font-bold">Company</h5>
                <div className="flex flex-col gap-6 text-white pt-9">
                  <a href="" className="inline-block">
                    About Us
                  </a>
                  <a href="" className="inline-block">
                    Services
                  </a>
                  <a href="" className="inline-block">
                    Our Team
                  </a>
                </div>
              </div>
              <div className="">
                <h5 className="text-white text-xl font-bold">Know More</h5>
                <div className="flex flex-col gap-6 text-white pt-9">
                  <a href="" className="inline-block">
                    Support
                  </a>
                  <a href="" className="inline-block">
                    Privacy Policy
                  </a>
                  <a href="" className="inline-block">
                    Terms & conditions
                  </a>
                </div>
              </div>
              <div className="py-[7.5px] hidden sm:block">
                <h5 className="text-white text-xl font-bold pb-9">
                  Newsletter
                </h5>
                <form>
                  <div className="mb-[26px]">
                    <input
                      type="email"
                      placeholder="Email Goes here"
                      className="w-full py-2.5 px-4 border border-[#808080] rounded-md placeholder:text-[#9E9E9E] placeholder:text-base placeholder:font-normal placeholder:font-vietnam"
                    />
                  </div>
                  <button className="py-4 px-7 rounded-md text-white font-bold bg-[#36B864]">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="py-[7.5px] relative sm:hidden">
            <h5 className="text-white text-xl font-bold pb-9">Newsletter</h5>
            <form>
              <div className="mb-[26px]">
                <input
                  type="email"
                  placeholder="Email Goes here"
                  className="w-full py-2.5 px-4 border border-[#808080] rounded-md placeholder:text-[#9E9E9E] placeholder:text-base placeholder:font-normal placeholder:font-vietnam relative"
                />
              </div>
              <button className="absolute top-[48%] right-0 py-2.5 px-7 rounded-md text-white font-bold bg-[#36B864]">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="container border-t border-t-[#D9D9D9] px-4 xl:px-0">
          <div className="pt-6 pb-5 text-center">
            <p className="text-base text-white font-normal leading-[120%]">
              2024 “Procleaning” All Rights Received
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer