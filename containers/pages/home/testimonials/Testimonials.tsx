import TestimonialCard from "@/components/cards/TestimonialCard";
import HomeTestimonialsSliderComponent from "@/components/swiperSliders/homeTestimonialsSwiperSlider/HomeTestimonialsSwiperSlider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import { SwiperSlide } from "swiper/react";

const HomeTestimonials = () => {
  return (
    <Fragment>
      <Box mb={10}>
        <Typography
          gutterBottom
          textAlign="center"
          fontWeight={700}
          variant="h4"
        >
          Client Testimonials
        </Typography>
      </Box>
      <Box>
        <HomeTestimonialsSliderComponent>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </HomeTestimonialsSliderComponent>
      </Box>
    </Fragment>
  );
};

export default HomeTestimonials;
