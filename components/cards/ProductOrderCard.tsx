import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const ProductOrderCard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar variant="rounded" sx={{ width: 100, height: 100 }} />
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
};

export default ProductOrderCard;
