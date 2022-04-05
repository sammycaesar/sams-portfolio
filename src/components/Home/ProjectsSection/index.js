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
  Project1,
  Project2,
  Project3,
  Project4,
  SliderItem,
  SliderTech,
  SliderImageBorder,
  SliderImage,
  SliderTitle,
  SliderContent,
  SliderCode,
} from "./ProjectsSectionElements";
import { Link } from "react-router-dom";

function ProjectsSection() {
  return (
    <>
      <ProjectContainer id='projects'>
        <ProjectBox>
          <Heading>projects</Heading>

          <Project1></Project1>
          <Project2></Project2>
          <Project3></Project3>
          <Project4></Project4>

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
        </ProjectBox>
      </ProjectContainer>
    </>
  );
}

export default ProjectsSection;
