import React from "react";
import { Box, CardContent, CircularProgress, Grid } from "@mui/material";
import Card from "@mui/material/Card";

const LoadingCardComponent = () => {
  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LoadingCardComponent;
