// eslint-disable-next-line
import React, { useRef, useState } from "react";

import SwiperCore, { Navigation, Mousewheel } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.css";
import { projectData } from "./data";

import {
  ProjectContainer,
  ProjectBox,
  Heading,
  SliderItem,
  SliderTech,
  SliderImageBorder,
  SliderImage,
  SliderTitle,
  SliderContent,
  SliderCode,
} from "./ProjectsSectionElements";
import { Link } from "react-router-dom";

SwiperCore.use([Mousewheel, Navigation]);

function ProjectsSection() {
  return (
    <>
      <ProjectContainer id='projects'>
        <ProjectBox>
          <Heading>projects</Heading>
          <Swiper
            direction={"horizontal"}
            mousewheel={{ sensitivity: 100, forceToAxis: true }}
            slidesPerView={3}
            spaceBetween={50}
            navigation={true}
            loop={true}
            modules={[{ Navigation, Mousewheel }]}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              "@0.10": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@1.10": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.30": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {projectData.map((data, i) => {
              return (
                <SwiperSlide>
                  <SliderItem key={i}>
                    <SliderTech>{data.technology}</SliderTech>
                    <SliderImageBorder>
                      <SliderImage>
                        <img
                          src={data.image}
                          alt=''
                          className='project-images'
                        />
                      </SliderImage>
                    </SliderImageBorder>
                    <SliderContent>
                      <SliderTitle>{data.title}</SliderTitle>
                      <Link
                        to={data.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <SliderCode />
                      </Link>
                    </SliderContent>
                  </SliderItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ProjectBox>
      </ProjectContainer>
    </>
  );
}

export default ProjectsSection;
