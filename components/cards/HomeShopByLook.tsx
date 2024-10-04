import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";

const StyledHomeShopByLookCard = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
  minHeight: 600,
  "& .__next_image": {
    objectFit: "cover",
    zIndex: -1,
  },
  "& .__slider_content": {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.white,
    "& .MuiTypography-h6": {
      fontWeight: 600,
      marginBottom: 20,
      fontSize: 12,
      writingMode: "vertical-rl",
      textOrientation: "upright",
      textTransform: "uppercase",
      letterSpacing: 0,
      wordSpacing: -5,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.text.secondary,
      fontSize: 14,
    },
  },
}));

interface HomeShopByLookCardProps {
  data: any;
}

const HomeShopByLookCard = ({ data }: HomeShopByLookCardProps) => {
  return (
    <StyledHomeShopByLookCard>
      <Image
        className="__next_image"
        layout="fill"
        alt={data.name}
        blurDataURL={data.image}
        src={data?.image}
      />
      <Box component="div" className="__slider_content">
        <Typography textAlign="center" variant="h6">
          {data.name}
        </Typography>
      </Box>
    </StyledHomeShopByLookCard>
  );
};

export default HomeShopByLookCard;
