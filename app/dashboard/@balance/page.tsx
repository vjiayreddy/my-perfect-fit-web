import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

const BalancePage = () => {
  return (
    <Grid item md={4} xs={6} lg={4} sm={4}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Current Balance
          </Typography>
          <Typography variant="body1">$69098.00</Typography>
          <Link href="/dashboard/details">Details</Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BalancePage;
