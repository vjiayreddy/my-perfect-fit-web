import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";

const StyledEventCard = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: 450,
  position: "relative",
  overflow: "hidden",
  borderRadius: 5,
  "& ._event--content": {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTypography-h3": {
      fontWeight: 600,
      border: `1px solid ${theme.palette.common.white}`,
      paddingLeft: 10,
      paddingRight: 10,
      color: theme.palette.common.white,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.common.white,
      letterSpacing: 2,
    },
  },
}));

const HomeEvents = () => {
  return (
    <Fragment>
      <Box mb={10}>
        <Typography
          gutterBottom
          textAlign="center"
          fontWeight={700}
          variant="h4"
        >
           Events
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <StyledEventCard>
            <Image
              alt="img"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/assets/images/events/event_1.webp"
            />
            <Box component="div" className="_event--content">
              <Typography gutterBottom variant="h3">
                FASHION
              </Typography>
              <Typography gutterBottom variant="body1">
                Don't Miss This Chance
              </Typography>
            </Box>
          </StyledEventCard>
        </Grid>
        <Grid item md={6}>
          <StyledEventCard>
            <Image
              alt="img"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/assets/images/events/event_2.webp"
            />
            <Box component="div" className="_event--content">
              <Typography gutterBottom variant="h3">
                FASHION
              </Typography>
              <Typography gutterBottom variant="body1">
                Don't Miss This Chance
              </Typography>
            </Box>
          </StyledEventCard>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomeEvents;
