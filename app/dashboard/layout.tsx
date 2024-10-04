"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {
  children: React.ReactNode;
  balance: React.ReactNode;
  orders: React.ReactNode;
  profits: React.ReactNode;
  customers: React.ReactNode;
}

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "This is main dashboard",
// };

const DashboardLayout = ({
  children,
  balance,
  orders,
  profits,
  customers,
}: Props) => {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  return (
    <Box p={2}>
      {children}
      <Grid container spacing={3}>
        {balance}
        {orders}
        {profits}
        {customers}
      </Grid>
    </Box>
  );
};

export default DashboardLayout;
