"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ReactFlagsSelect from "react-flags-select";
import { CURRENCIES } from "@/utils/constants";
import { Typography } from "@mui/material";

const StyledTopHeaderComponent = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: 5,
  backgroundColor:theme.palette.common.black,
  color:theme.palette.common.white
}));

const TopHeaderComponent = () => {
  const [selected, setSelected] = useState("IN");
  return (
    <StyledTopHeaderComponent>
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="caption">Call Us : +9390442674</Typography>
          </Grid>
          <Grid item>
            <ReactFlagsSelect
              searchable={false}
              countries={CURRENCIES.COUNTRIES}
              customLabels={CURRENCIES.CUSTOMLABELS}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Currency"
            />
          </Grid>
        </Grid>
      </Container>
    </StyledTopHeaderComponent>
  );
};

export default TopHeaderComponent;
