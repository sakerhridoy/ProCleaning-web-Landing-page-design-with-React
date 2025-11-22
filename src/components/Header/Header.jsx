import React, { useEffect, useState } from 'react'
import logo from '../../assets/Images/logo.png'
import ScrollSpy from 'react-scrollspy-navigation'
import { FaBars } from 'react-icons/fa6';
import { CgCloseR } from 'react-icons/cg';

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false)
  
  const handleChange = () => {
    setMenuShow(true)
  }
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
    }
    window.addEventListener('scroll', handleScroll);
},[])

  return (
    <>
      <ScrollSpy activeClass="nav-active">
        <nav
          className={`${
            isScroll
              ? 'fixed py-3 bg-[rgb(247,250,248)] w-full z-50 duration-500'
              : 'duration-500 py-6'
          }`}
        >
          <div className="container px-4 xl:px-0">
            <div className="flex 3xl:gap-[202px] justify-between items-center">
              <div className="logo">
                <a href="#">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[150px] lg:w-[204px]"
                  />
                </a>
              </div>
              <div className="bar">
                <FaBars
                  onClick={() => setMenuShow(true)}
                  className="text-3xl text-[#36B864] md:hidden cursor-pointer"
                />
              </div>
              <div
                className={`mobileMenu w-full fixed top-0 right-0 h-full bg-[#137537cf] backdrop-blur-md flex flex-col justify-center items-center gap-6 z-10 md:hidden
    ${menuShow ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    transition-all duration-500`}
              >
                <CgCloseR
                  onClick={() => setMenuShow(false)}
                  className="absolute top-10 right-7 text-white text-4xl cursor-pointer"
                />
                <ul>
                  <li className="pb-4">
                    <a
                      href="#home"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMenuShow(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="pb-4">
                    <a
                      href="#about"
                      onClick={e => {
                        e.preventDefault();
                        const section = document.querySelector('#about');
                        section?.scrollIntoView({ behavior: 'smooth' });
                        setMenuShow(false);
                      }}
                    >
                      About us
                    </a>
                  </li>
                  <li className="pb-4">
                    <a
                      href="#service"
                      onClick={e => {
                        e.preventDefault();
                        const section = document.querySelector('#service');
                        section?.scrollIntoView({ behavior: 'smooth' });
                        setMenuShow(false);
                      }}
                    >
                      Service
                    </a>
                  </li>
                  <li className="pb-4">
                    <a
                      href="#blog"
                      onClick={e => {
                        e.preventDefault();
                        const section = document.querySelector('#blog');
                        section?.scrollIntoView({ behavior: 'smooth' });
                        setMenuShow(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="pb-4">
                    <a
                      href="#contact"
                      onClick={e => {
                        e.preventDefault();
                        const section = document.querySelector('#contact');
                        section?.scrollIntoView({ behavior: 'smooth' });
                        setMenuShow(false);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu hidden md:block">
                <ul className="flex gap-[29px] justify-between items-center">
                  <li>
                    <a
                      href="#home"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#service">Service</a>
                  </li>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="md:py-2.5 lg:py-3 md:px-5 lg:px-8 bg-[#36B864] rounded-md text-white text-base font-medium hidden md:block">
                <a href="">Get a quote</a>
              </div>
            </div>
          </div>
        </nav>
      </ScrollSpy>
    </>
  );
}

export default Header