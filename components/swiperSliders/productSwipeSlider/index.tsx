import React from "react";
import "swiper/css";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface ProductSwiperSliderComponentProps {
  children: React.ReactNode;
}

const ProductSwiperSliderComponent = ({
  children,
}: ProductSwiperSliderComponentProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      spaceBetween={20}
      slidesPerView={3}
      modules={[Autoplay, Navigation]}
      className="product-swiper_slider"
    >
      {children}
    </Swiper>
  );
};

export default ProductSwiperSliderComponent;
