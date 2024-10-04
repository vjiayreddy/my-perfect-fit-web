"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Button, CardContent, styled } from "@mui/material";
import { HOME_OCCASIONS } from "@/utils/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { shouldForwardProp } from "@/utils/actions";

interface HomeCategoriesContainerProps {
  title: string;
}

const StyledOccasionCard = styled(Card, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<{ backgroundColor: string }>(["backgroundColor"], prop),
})<{ backgroundColor: string }>(({ theme, backgroundColor }) => ({
  position: "relative",
  width: "100%",
  height: 300,
  overflow: "visible",
  border: `5px solid ${theme.palette.common.white}`,
  backgroundColor: backgroundColor || "#f4deba",
  "& .__occasion_card--footer": {
    position: "absolute",
    bottom: -12,
    zIndex: 2,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .__occasion_card--title": {
      padding: `20px 10px`,
      width: 150,
      backgroundColor: theme.palette.common.white,
    },
    "& .MuiButton-containedMilkWhite": {
      minWidth: 150,
      fontSize: 16,
    },
  },
}));

const HomeOccasionContainer = ({ title }: HomeCategoriesContainerProps) => {
  return (
    <Box>
      <Box mb={10}>
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
        <Grid container spacing={4}>
          {HOME_OCCASIONS.map((occasion) => (
            <Grid key={occasion.id} item md={3}>
              <StyledOccasionCard backgroundColor={occasion?.bgColor} elevation={0}>
                <Box component="div" className="__occasion_card--footer">
                  <Button
                    endIcon={<Icon icon="solar:arrow-right-outline" />}
                    variant="contained"
                    size="large"
                    color="milkWhite"
                  >
                    {occasion.title}
                  </Button>
                </Box>
                <Image
                  fill={true}
                  objectFit="contain"
                  blurDataURL={occasion.imageUrl}
                  src={occasion.imageUrl}
                  alt="wedding"
                />
              </StyledOccasionCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeOccasionContainer;
