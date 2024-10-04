"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryCardComponent from "@/components/cards/categoryCard";
import ProductSwiperSliderComponent from "@/components/swiperSliders/productSwipeSlider";
import { SwiperSlide } from "swiper/react";
import { HOME_CATEGORIES, PRODUCTS_CATEGORIES } from "@/utils/constants";
import { Card, Grid, styled } from "@mui/material";
import Image from "next/image";
import ShopCategoryCard from "@/components/cards/ShopCategoryCard";

interface HomeCategoriesContainerProps {
  title: string;
}

const StyledCategoryBox = styled(Box)(({ theme }) => ({
  position: "relative",

  "& ._section_wrapper": {
    position: "absolute",
    width: "100%",
    top: -103,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& ._section_title": {
      backgroundColor: "white",
      width:350,
      padding: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom:`5px solid ${theme.palette.primary.main}`,
      borderTopLeftRadius:10,
      borderTopRightRadius:10


    },
  },
}));

const HomeCategoriesContainer = ({ title }: HomeCategoriesContainerProps) => {
  return (
    <StyledCategoryBox>
       <Box mb={15}>
        <Typography
          gutterBottom
          textAlign="center"
          fontWeight={700}
          variant="h4"
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={6}>
          {HOME_CATEGORIES.map((category) => (
            <Grid key={category?.id} item md={3}>
              <ShopCategoryCard {...category} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledCategoryBox>
  );
};

export default HomeCategoriesContainer;
