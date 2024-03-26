"use client";

import { skills } from "@/src/staticData/home/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import CountUp from "react-countup";
import SectionHeading from "../shared/SectionHeading";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Skills = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlideFE, setActiveSlideFE] = useState(0);
  const [activeSlideDB, setActiveSlideDB] = useState(0);
  const [activeSlideMOB, setActiveSlideMOB] = useState(0);
  const [activeSlideCloud, setActiveSlideCloud] = useState(0);
  const swiperRefBackend = useRef(null);
  const swiperRefFrontend = useRef(null);
  const swiperRefDatabase = useRef(null);
  const swiperRefMobile = useRef(null);
  const swiperRefCloud = useRef(null);
  const [change, setChange] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);

  var countCloud = 0;
  var countMobile = 0;
  var countDatabase = 0;
  var countFrameworks = 0;
  var countBackend = 0;

  useEffect(() => {
    setChange(false);
    setCounterStarted(false);
  }, []);

  const navigateToPreviousSlideBE = () => {
    if (swiperRefBackend.current) {
      swiperRefBackend.current.slidePrev();
    }
  };

  const navigateToNextSlideBE = () => {
    if (swiperRefBackend.current) {
      swiperRefBackend.current.slideNext();
    }
  };

  const handleSlideChangeBE = (swiper) => {
    const realIndex =
      swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
    setActiveSlide(realIndex);
  };

  const navigateToPreviousSlideFE = () => {
    if (swiperRefFrontend.current) {
      swiperRefFrontend.current.slidePrev();
    }
  };

  const navigateToNextSlideFE = () => {
    if (swiperRefFrontend.current) {
      swiperRefFrontend.current.slideNext();
    }
  };

  const handleSlideChangeFE = (swiper) => {
    const realIndex =
      swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
    setActiveSlideFE(realIndex);
  };

  
  const navigateToPreviousSlideDB = () => {
    if (swiperRefDatabase.current) {
      swiperRefDatabase.current.slidePrev();
    }
  };

  const navigateToNextSlideDB = () => {
    if (swiperRefDatabase.current) {
      swiperRefDatabase.current.slideNext();
    }
  };

  const handleSlideChangeDB = (swiper) => {
    const realIndex =
      swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
    setActiveSlideDB(realIndex);
  };


  const navigateToPreviousSlideMOB = () => {
    if (swiperRefMobile.current) {
      swiperRefMobile.current.slidePrev();
    }
  };

  const navigateToNextSlideMOB = () => {
    if (swiperRefMobile.current) {
      swiperRefMobile.current.slideNext();
    }
  };

  const handleSlideChangeMOB = (swiper) => {
    const realIndex =
      swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
    setActiveSlideMOB(realIndex);
  };

  const navigateToPreviousSlideCloud = () => {
    if (swiperRefCloud.current) {
      swiperRefCloud.current.slidePrev();
    }
  };

  const navigateToNextSlideCloud = () => {
    if (swiperRefCloud.current) {
      swiperRefCloud.current.slideNext();
    }
  };

  const handleSlideChangeCloud = (swiper) => {
    const realIndex =
      swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
    setActiveSlideCloud(realIndex);
  };

  return (
    <div
      data-scroll-index="3"
      id="skill"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <SectionHeading {...skills?.skillsHeading} />

        <div className="mt-12 skills-slider xl:mt-16">
          <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl text-center">
            BACKEND:
          </h4>

          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                breakpoints={{
                  342: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                  800: {
                    slidesPerView: 4,
                  },
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className={`skillsCircleSlider`}
                style={{ padding: "0 10px" }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                  waitForTransition: false,
                }}
                onSwiper={(swiper) => (swiperRefBackend.current = swiper)}
                onSlideChange={handleSlideChangeBE}
              >
                {skills?.backendSkills?.map((service, i) => (
                  <SwiperSlide key={i}>
                    <div className="space-y-5 text-center swiper-slide">
                      <img src={service.image} alt={service.name} />
                      <div className="text-black dark:text-white name">
                        {service?.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="skills-slider-navigation flex justify-center items-center gap-2.5 mt-12 ">
            <button
              className="group transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Previous"
              onClick={navigateToPreviousSlideBE}
            >
              <BsArrowLeft size={18} className="group-hover:text-white" />
            </button>
            <div className="text-sm font-light text-center text-black dark:text-white counter w-7">
              {activeSlide + 1}/{skills?.backendSkills?.length}
            </div>
            <button
              className="group transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Next"
              onClick={navigateToNextSlideBE}
            >
              <BsArrowRight size={18} className="group-hover:text-white" />
            </button>
          </div>
        </div>
        <br />
        <hr />
        <div className="mt-12 skills-slider xl:mt-16">
          <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl text-center">
            FRAMEWORKS:
          </h4>

          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                breakpoints={{
                  342: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                  800: {
                    slidesPerView: 4,
                  },
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className={`skillsCircleSlider`}
                style={{ padding: "0 10px" }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                  waitForTransition: false,
                }}
                onSwiper={(swiper) => (swiperRefFrontend.current = swiper)}
                onSlideChange={handleSlideChangeFE}
              >
                {skills?.frontendSkills?.map((service, i) => (
                  <SwiperSlide key={i}>
                    <div className="space-y-5 text-center swiper-slide">
                      <img src={service.image} alt={service.name} />
                      <div className="text-black dark:text-white name">
                        {service?.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {
            skills?.frontendSkills?.map(item => {
              if(item.name.length > 0) countFrameworks++;
            })
          }
          { 
          countFrameworks >= 4 ?
          <div className="skills-slider-navigation flex justify-center items-center gap-2.5 mt-12 ">
            <button
              className="group transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Previous"
              onClick={navigateToPreviousSlideFE}
            >
              <BsArrowLeft size={18} className="group-hover:text-white" />
            </button>
            <div className="text-sm font-light text-center text-black dark:text-white counter w-7">
              {activeSlideFE + 1}/{skills?.frontendSkills?.length}
            </div>
            <button
              className="group transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Next"
              onClick={navigateToNextSlideFE}
            >
              <BsArrowRight size={18} className="group-hover:text-white" />
            </button>
          </div>
          : '' }
        </div>

        <br />
        <hr />
        <div className="mt-12 skills-slider xl:mt-16">
          <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl text-center">
            DATABASES:
          </h4>

          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                breakpoints={{
                  342: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                  800: {
                    slidesPerView: 4,
                  },
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className={`skillsCircleSlider`}
                style={{ padding: "0 10px" }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                  waitForTransition: false,
                }}
                onSwiper={(swiper) => (swiperRefDatabase.current = swiper)}
                onSlideChange={handleSlideChangeDB}
              >
                {skills?.databaseSkills?.map((service, i) => (
                  <SwiperSlide key={i}>
                    <div className="space-y-5 text-center swiper-slide">
                      <img src={service.image} alt={service.name} />
                      <div className="text-black dark:text-white name">
                        {service?.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {
            skills?.databaseSkills?.map(item => {
              if (item.name.length > 0 ) countDatabase++;
            })
          }
          {
            countDatabase >= 4 ?
          <div className="skills-slider-navigation flex justify-center items-center gap-2.5 mt-12 ">
            <button
              className="group transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Previous"
              onClick={navigateToPreviousSlideDB}
            >
              <BsArrowLeft size={18} className="group-hover:text-white" />
            </button>
            <div className="text-sm font-light text-center text-black dark:text-white counter w-7">
              {activeSlideDB + 1}/{skills?.databaseSkills?.length}
            </div>
            <button
              className="group transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Next"
              onClick={navigateToNextSlideDB}
            >
              <BsArrowRight size={18} className="group-hover:text-white" />
            </button>
          </div>
          : '' }
        </div>

        <br />
        <hr />
        <div className="mt-12 skills-slider xl:mt-16">
          <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl text-center">
            MOBILE:
          </h4>

          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                breakpoints={{
                  342: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                  800: {
                    slidesPerView: 4,
                  },
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className={`skillsCircleSlider`}
                style={{ padding: "0 10px" }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                  waitForTransition: false,
                }}
                onSwiper={(swiper) => (swiperRefMobile.current = swiper)}
                onSlideChange={handleSlideChangeMOB}
              >
                {skills?.mobileSkills?.map((service, i) => (
                  <SwiperSlide key={i}>
                    <div className="space-y-5 text-center swiper-slide">
                      <img src={service.image} alt={service.name} />
                      <div className="text-black dark:text-white name">
                        {service?.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {
            
            skills?.mobileSkills?.map(item => {
              if(item.name.length > 0) countMobile++;
            })
          }
          {
            countMobile >= 4 ?
          <div className="skills-slider-navigation flex justify-center items-center gap-2.5 mt-12 ">
            <button
              className="group transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Previous"
              onClick={navigateToPreviousSlideMOB}
            >
              <BsArrowLeft size={18} className="group-hover:text-white" />
            </button>
            <div className="text-sm font-light text-center text-black dark:text-white counter w-7">
              {activeSlideDB + 1}/{skills?.databaseSkills?.length}
            </div>
            <button
              className="group transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Next"
              onClick={navigateToNextSlideMOB}
            >
              <BsArrowRight size={18} className="group-hover:text-white" />
            </button>
          </div>
          : ''}
        </div>

        <br />
        <hr />
        <div className="mt-12 skills-slider xl:mt-16">
          <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl text-center">
            CLOUD:
          </h4>

          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                breakpoints={{
                  342: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                  800: {
                    slidesPerView: 4,
                  },
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className={`skillsCircleSlider`}
                style={{ padding: "0 10px" }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                  waitForTransition: false,
                }}
                onSwiper={(swiper) => (swiperRefCloud.current = swiper)}
                onSlideChange={handleSlideChangeCloud}
              >
                {skills?.cloudSkills?.map((service, i) => (
                  <SwiperSlide key={i}>
                    <div className="space-y-5 text-center swiper-slide">
                      <img src={service.image} alt={service.name} />
                      <div className="text-black dark:text-white name">
                        {service?.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {
            
            skills?.cloudSkills?.map(item => {
              if(item.name.length > 0) countCloud++;
            })
          }
          { 
            countCloud >= 4 ?
          
          
          <div  className="skills-slider-navigation flex justify-center items-center gap-2.5 mt-12 ">
            <button
              className="group transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Previous"
              onClick={navigateToPreviousSlideCloud}
            >
              <BsArrowLeft size={18} className="group-hover:text-white" />
            </button>
            <div className="text-sm font-light text-center text-black dark:text-white counter w-7">
              {activeSlideCloud + 1}/{skills?.cloudSkills?.length}
            </div>
            <button
              className="group transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
              aria-label="Next"
              onClick={navigateToNextSlideCloud}
            >
              <BsArrowRight size={18} className="group-hover:text-white" />
            </button>
          </div>
          : '' }
        </div>
      </div>
    </div>
  );
};

export default Skills;
