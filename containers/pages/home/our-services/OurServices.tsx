import React from "react";
import Grid from "@mui/material/Grid";
import ShippingIcon from "../../../../theme/icons/shipping";
import ReturnIcon from "../../../../theme/icons/returnIcon";
import GoalBadge from "../../../../theme/icons/GoalBadge";
import SecureShopping from "../../../../theme/icons/SecureShopping";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { OurServiceCard } from "@/components/cards/OurServiceCard";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding:20
  
}));

export const OurServices = () => {
  const theme = useTheme();
  const isDownSmDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <StyledGridContainer
      sx={{ padding: { md: "20px" } }}
      container
      alignItems={isDownSmDevice ? "flex-start" : "center"}
      justifyContent={isDownSmDevice ? "flex-start" : "center"}
      spacing={isDownSmDevice ? 2 : 1}
    >
      <Grid item xs={6} md={3}>
        <OurServiceCard
          title="FREE SHIPPING"
          subTitle="From all orders over $100"
          icon={<ShippingIcon />}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <OurServiceCard
          title="FREE RETURNS"
          subTitle="Return money within 30 days"
          icon={<ReturnIcon />}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <OurServiceCard
          title="SECURE SHOPPING"
          subTitle="You're in safe hands"
          icon={<SecureShopping />}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <OurServiceCard
          title="OVER 10,000 STYLES"
          subTitle="We have everything you need"
          icon={<GoalBadge />}
        />
      </Grid>
    </StyledGridContainer>
  );
};
