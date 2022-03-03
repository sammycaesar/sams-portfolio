// eslint-disable-next-line
import React, { useRef, useState } from "react";

import { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import {
  ProjectContainer,
  Heading,
  SliderItem,
  SliderTech,
  SliderImage,
  SliderTitle,
} from "./ProjectsSectionElements";

const ProjectsSection = ({ id, title, technology, image }) => {
  return (
    <>
      <ProjectContainer>
        <Heading>projects</Heading>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[{ Pagination, Navigation }]}
        >
          <SwiperSlide>
            {" "}
            <SliderItem id={id}>
              {" "}
              <SliderTech>{technology}</SliderTech>
              <SliderImage>{image}</SliderImage>
              <SliderTitle>{title}</SliderTitle>Slide 1
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SliderItem id={id}>
              <SliderTech>{technology}</SliderTech>
              <SliderImage>{image}</SliderImage>
              <SliderTitle>{title}</SliderTitle> Slide 2
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SliderItem id={id}>
              <SliderTech>{technology}</SliderTech>
              <SliderImage>{image}</SliderImage>
              <SliderTitle>{title}</SliderTitle> Slide 3
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SliderItem id={id}>
              <SliderTech>{technology}</SliderTech>
              <SliderImage>{image}</SliderImage>
              <SliderTitle>{title}</SliderTitle> Slide 4
            </SliderItem>
          </SwiperSlide>
        </Swiper>
      </ProjectContainer>
    </>
  );
};

export default ProjectsSection;
