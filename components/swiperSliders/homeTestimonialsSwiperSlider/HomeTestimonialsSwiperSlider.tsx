import React from "react";
import "swiper/css";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface HomeTestimonialsSliderComponentProps {
  children: React.ReactNode;
}

const HomeTestimonialsSliderComponent = ({
  children,
}: HomeTestimonialsSliderComponentProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      spaceBetween={20}
      slidesPerView={4}
      modules={[Autoplay, Navigation]}
      className="product-swiper_slider"
    >
      {children}
    </Swiper>
  );
};

export default HomeTestimonialsSliderComponent;
