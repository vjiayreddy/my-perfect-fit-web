import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";

const OrdersPage = () => {
  return (
    <Grid item md={4} xs={6} lg={4} sm={4}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Total Orders
          </Typography>
          <Typography variant="body1">56790</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default OrdersPage;
