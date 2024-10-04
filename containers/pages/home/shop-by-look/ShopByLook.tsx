import HomeShopByLookCard from "@/components/cards/HomeShopByLook";
import LooksSwiperSliderComponent from "@/components/swiperSliders/looksSwiperSlider/LookSwiperSlider";
import { homeLooks } from "@/utils/mockData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import { SwiperSlide } from "swiper/react";

const ShopByLook = () => {
  return (
    <Fragment>
      <Box mb={10}>
        <Typography
          gutterBottom
          textAlign="center"
          fontWeight={700}
          variant="h4"
        >
          Shop the look
        </Typography>
        <Typography
          gutterBottom
          sx={(theme) => ({ color: theme.palette.text.secondary })}
          textAlign="center"
          variant="subtitle2"
        >
          Shop trending looks, curated by the stylists
        </Typography>
      </Box>
      <Box>
        <LooksSwiperSliderComponent>
          {homeLooks.map((look) => (
            <SwiperSlide key={look._id}>
              <HomeShopByLookCard data={look} />
            </SwiperSlide>
          ))}
        </LooksSwiperSliderComponent>
      </Box>
    </Fragment>
  );
};

export default ShopByLook;
