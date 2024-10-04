import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";

const ProfitPage = () => {
  return (
    <Grid item md={4} xs={6} lg={4} sm={4}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Profits
          </Typography>
          <Typography variant="body1">$34567.000</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProfitPage;
