"use client";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const StyledMainBox = styled(Box)(({ theme }) => ({
  paddingTop: 100,
  paddingBottom: 100,
  flexGrow: 1,
}));

const StyledTable = styled("table")(({ theme }) => ({
  width: "70%",
  "& .left": {
    color: theme.palette.grey[500],
    fontWeight: 600,
  },
  "& .right": {
    fontWeight: 600,
  },
}));

const StyledProductViewBox = styled(Box)(({ theme }) => ({
  height: 500
}))

const ShopContainer = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <StyledMainBox>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <StyledProductViewBox>
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product_view_slider"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product_view_thumb_slider"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </StyledProductViewBox>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Silver Pilot 12 Pro Airbrush Spray Gun, Stainless Steel
                    Nozzle
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="primary" variant="h4">
                    ₹ 764.00 ( Per bottel)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    PilSilver Pilot, Model No 15 Pro,Airbrush, Pengun Cup 15 ML,
                    Stainless Steel Nozzle,
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontWeight={600} variant="subtitle1">
                    Product Details
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <StyledTable>
                    <tr>
                      <td className="left">Model Name/Number </td>
                      <td className="right">AB-12pro</td>
                    </tr>
                    <tr>
                      <td className="left">Brand</td>
                      <td className="right">Pilot</td>
                    </tr>
                    <tr>
                      <td className="left">Nozzle Size</td>
                      <td className="right">0.3 mm</td>
                    </tr>
                    <tr>
                      <td className="left">Body Material</td>
                      <td className="right">Stainless Steel</td>
                    </tr>
                    <tr>
                      <td className="left">Color</td>
                      <td className="right">Silver</td>
                    </tr>
                    <tr>
                      <td className="left">Product Type</td>
                      <td className="right">Air Brush Pengun</td>
                    </tr>
                  </StyledTable>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledMainBox>
  );
};

export default ShopContainer;
