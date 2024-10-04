import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import images from "../../public/assets/images/products/product_1.webp";
import Grid from "@mui/material/Grid";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";


const StyledProductCardMainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: 200,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 10,
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: 170,
  position: "relative",
}));

const StyledBox_2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 20,
}));

const StyledCartTile = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
}));

const StyledCartPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const ProductCardComponent = () => {
  return (
    <StyledProductCardMainBox>
      <StyledBox_2>
        <StyledImageBox mb={1}>
          <Image
            alt="product-1"
            src="/assets/images/products/product_1.webp"
            fill
            sizes="(max-width:786px) 100vw, (max-width:1200) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </StyledImageBox>
        <Box>
          <StyledCartTile gutterBottom variant="subtitle2">
            Silver Pilot 12 Pro Airbrush Spray Gun, Stainless Steel Nozzle
          </StyledCartTile>
        </Box>
        <Box pt={1} sx={{ width: "100%" }}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <StyledCartPrice variant="h5">₹ 260</StyledCartPrice>
            </Grid>
            <Grid item>
              <IconButton sx={{ padding: 0 }} size="small">
                <AiOutlineHeart />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={{ padding: 0 }} size="small">
                <HiOutlineShoppingBag />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </StyledBox_2>
    </StyledProductCardMainBox>
  );
};

export default ProductCardComponent;
