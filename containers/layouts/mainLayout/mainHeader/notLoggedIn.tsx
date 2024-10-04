'use client';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledMainBox = styled(Box)(({ theme }) => ({
  minWidth: 200,
  padding: `10px 10px`,
}));

const NotLoggedInComponent = () => {
  return (
    <StyledMainBox>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item>
          <Avatar alt="Remy Sharp" sx={{ width: 75, height: 75 }} />
        </Grid>
        <Grid
          mt={1}
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
        >
          <Grid item>
            <Button size="small">Login</Button>
          </Grid>
          <Grid item>
            <Button color="inherit" size="small">
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default NotLoggedInComponent;
