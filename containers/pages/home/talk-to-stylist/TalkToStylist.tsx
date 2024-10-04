"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const StyledTalkToStylishContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 500,
  "& .__bg_image": {
    objectFit: "cover",
    filter: `grayscale(100%)`,
    zIndex: -1,
  },
  "& .__content": {
    minWidth: 500,
    maxWidth: 500,
    minHeight: 200,
    backgroundColor: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    "& .MuiTypography-h5": {
      fontSize: 26,
    },
    "& .MuiTypography-body2": {
      color: theme.palette.text.secondary,
    },
  },
}));

const TalkToStylist = () => {
  const router = useRouter();
  const handleTalkToStylist = () => {
    router.push("/appointment");
  };

  return (
    <StyledTalkToStylishContainer maxWidth="xl">
      <Image
        alt="stylist"
        src="/assets/images/others/talk_stylist.webp"
        fill={true}
        className="__bg_image"
      />
      <Box component="div" className="__content">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <Grid item>
            <Typography
              gutterBottom
              textAlign="center"
              variant="h5"
              fontWeight={700}
            >
              Get expert help with your look
            </Typography>
            <Typography gutterBottom textAlign="center" variant="body2">
              Transform your style with expert guidance. Whether it's revamping
              your wardrobe, refining your hairstyle, or mastering makeup, seek
              the wisdom of professionals to unlock your true potential and
              elevate your look to new heights
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={handleTalkToStylist}
              endIcon={<Icon icon="codicon:arrow-right" />}
              size="large"
            >
              Talk To Stylist
            </Button>
          </Grid>
        </Grid>
      </Box>
    </StyledTalkToStylishContainer>
  );
};

export default TalkToStylist;
