import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../sass/swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HomeSwiperSlideComponent from "./slide/slide";
import { HOME_BANNER } from "@/utils/constants";

const HomeSwiperSliderComponent = () => {
  return (
    <div className="home-banner-swiper">
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {HOME_BANNER.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HomeSwiperSlideComponent title={slide.title} imgUrl={slide.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiperSliderComponent;
