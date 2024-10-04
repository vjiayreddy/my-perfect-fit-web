"use client";
import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";
import { Icon } from "@iconify/react";

interface StyledAchievementsCardProps {
  id?: number;
  iconifyName: string;
  primaryTitle: string;
  secondaryTitle: string;
}

const StyledAchievementsCard = styled(Card)(({ theme }) => ({
  minHeight: 100,
  height: "100%",
  display: "flex",
  padding: 30,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    fontSize: 100,
    color: theme.palette.primary.main,
  },
}));

/**
 *
 * @param iconifyName
 * @param primaryTitle
 * @param secondaryTitle
 * @returns
 */

const AchievementCard = ({
  iconifyName,
  primaryTitle,
  secondaryTitle,
}: StyledAchievementsCardProps) => {
  return (
    <Grid item xs={6} md={3} lg={3} xl={3} sm={3}>
      <StyledAchievementsCard sx={{ height: "100%" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <Icon icon={iconifyName} />
          </Grid>
          <Grid item>
            <Typography textAlign="center" fontWeight={600} variant="h4">
              {primaryTitle}
            </Typography>
            <Typography textAlign="center" variant="subtitle2">
              {secondaryTitle}
            </Typography>
          </Grid>
        </Grid>
      </StyledAchievementsCard>
    </Grid>
  );
};

export default AchievementCard;
