import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface LooksSwiperSliderComponentProps {
  children: React.ReactNode;
}

const LooksSwiperSliderComponent = ({
  children,
}: LooksSwiperSliderComponentProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      spaceBetween={1}
      slidesPerView={4}
      modules={[Autoplay, Navigation]}
      className="product-swiper_slider"
    >
      {children}
    </Swiper>
  );
};

export default LooksSwiperSliderComponent;
