"use client";
import React from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AchievementCard from "@/components/cards/AchivementCard";
import { homeAchivements } from "@/utils/mockData";

const StyledAchievements = styled(Box)(({ theme }) => ({
  "& svg": {
    fontSize: 100,
    color: theme.palette.primary.main,
  },
  "& .MuiTypography-h6": {
    fontWeight: 400,
  },
}));

const Achievements = () => {
  return (
    <Container maxWidth="lg">
      <StyledAchievements>
        <Box pl={20} pr={20} mb={8}>
          <Typography textAlign="center" variant="h6">
            Looking your best gets easy with <b>My Perfect Fit</b> by your side.
            Discover a whole new way to shop for menswear with custom clothing,
            stylist assistance, premium fabrics, online measurements and so much
            more. Begin your journey to a perfectly styled future today.
          </Typography>
        </Box>
        <Grid container alignItems="stretch" spacing={2}>
          {homeAchivements.map((achievement) => (
            <AchievementCard key={achievement?.id} {...achievement} />
          ))}
        </Grid>
      </StyledAchievements>
    </Container>
  );
};

export default Achievements;
