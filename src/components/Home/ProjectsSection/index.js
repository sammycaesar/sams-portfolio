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
  Heading,
  SliderItem,
  SliderTech,
  SliderImageBorder,
  SliderImage,
  SliderTitle,
  SliderContent,
  SliderCode,
} from "./ProjectsSectionElements";

SwiperCore.use([Mousewheel, Navigation]);

const ProjectsSection = () => {
  return (
    <>
      <ProjectContainer id='projects'>
        <Heading>projects</Heading>
        <Swiper
          direction={"horizontal"}
          mousewheel={{ sensitivity: 100, forceToAxis: true }}
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          loop={true}
          modules={[{ Navigation, Mousewheel }]}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.20": {
              slidesPerView: 3,
              spaceBetween: 40,
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
                      <img src={data.image} alt='' className='project-images' />
                    </SliderImage>
                  </SliderImageBorder>
                  <SliderContent>
                    <SliderTitle>{data.title}</SliderTitle>
                    <SliderCode>
                      {" "}
                      <a href={data.url} target='_blank' rel='noreferrer' />
                    </SliderCode>
                  </SliderContent>
                </SliderItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ProjectContainer>
    </>
  );
};

export default ProjectsSection;
