import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

interface ShopCategoryCardProps {
  imageUrl: string;
  category: string;
}

const StyledCategoryCard = styled(Card)(({ theme }) => ({
  position: "relative",
  "& ._card_image": {
    position: "relative",
    width: 200,
    height: 200,
  },
}));

const ShopCategoryCard = ({ category, imageUrl }: ShopCategoryCardProps) => {
  return (
    <StyledCategoryCard elevation={0}>
      <Grid
        container
        rowGap={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Box component="div" className="_card_image">
            <Image
              quality={100}
              blurDataURL={imageUrl}
              layout="fill"
              objectFit="contain"
              src={imageUrl}
              alt="image"
            />
          </Box>
        </Grid>
        <Grid item>
          <Typography fontWeight={500} variant="subtitle1" textAlign="center">
            {category}
          </Typography>
        </Grid>
      </Grid>
    </StyledCategoryCard>
  );
};

export default ShopCategoryCard;
