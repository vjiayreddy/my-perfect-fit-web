"use client";
import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Grid, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { Icon } from "@iconify/react";

const StyledSlideBox = styled(Box)(({ theme }) => ({
  minHeight: "calc(100dvh - 199.5px)",
  width: "100%",
  position: "relative",
  backgroundColor: theme.palette.common.black,
  borderRadius: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundPosition: "top center",
  [theme.breakpoints.only("xs")]: {
    minHeight: 200,
  },
  "& .MuiTypography-h3": {
    fontSize: 38,
    border: `1px solid ${theme.palette.common.white}`,
    paddingLeft: 20,
    paddingRight: 20,
  },
  "& .MuiTypography-body1": {
    paddingLeft: 20,
    paddingRight: 20,
    letterSpacing: 2,
  },
  "& ._content_wrapper": {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    "& ._footer": {
      minHeight: 120,
      "& .MuiButton-containedMilkWhite": {
        minWidth: 150,
      },
    },
  },
}));

interface HomeSwiperSlideComponentProps {
  title: string;
  imgUrl: string;
}

const HomeSwiperSlideComponent = ({
  title,
  imgUrl,
}: HomeSwiperSlideComponentProps) => {
  return (
    <StyledSlideBox>
      <Box component="div" className="_content_wrapper">
        <Box
          flexGrow={1}
          flexDirection="column"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid flexGrow={1} item xs>
              <Typography
                mt={3}
                gutterBottom
                textTransform="uppercase"
                textAlign="center"
                color="white"
                fontWeight={300}
                variant="body1"
              >
                MPF NEW COLLECTIONS
              </Typography>
              <Typography
                textTransform="uppercase"
                textAlign="center"
                color="white"
                fontWeight={700}
                variant="h3"
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="div" className="_footer">
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <Button
                endIcon={<Icon icon="ph:arrow-right-thin" />}
                color="milkWhite"
                variant="contained"
                size="large"
              >
                Shop Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Image
        objectFit="cover"
        fill
        blurDataURL={imgUrl}
        style={{
          filter: `brightness(70%)`,
        }}
        src={imgUrl}
        alt="suit"
      />
    </StyledSlideBox>
  );
};

export default HomeSwiperSlideComponent;
