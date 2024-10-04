import ProductCardComponent from "@/components/cards/productCard";
import ProductSwiperSliderComponent from "@/components/swiperSliders/productSwipeSlider";
import { PRODUCTS_CATEGORIES } from "@/utils/constants";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { SwiperSlide } from "swiper/react";

interface ProductsSliderComponentProps {
  title: string;
  data: any[];
  
}

const ProductsSliderComponent = ({ title }: ProductsSliderComponentProps) => {
  return (
    <Box mb={5}>
      <Box mt={5} mb={5}>
        <Typography fontWeight={700} variant="h4">
          {title}
        </Typography>
      </Box>
      <Box>
        <ProductSwiperSliderComponent>
          {PRODUCTS_CATEGORIES.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCardComponent />
            </SwiperSlide>
          ))}
        </ProductSwiperSliderComponent>
      </Box>
    </Box>
  );
};

export default ProductsSliderComponent;
