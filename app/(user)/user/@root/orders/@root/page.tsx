import React from "react";
import OrdersTable from "@/components/data-tables/OrdersTable";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const OrdersRootPage = () => {
  return (
    <Card>
      <CardContent>
        <Box p={2}>
          <Typography variant="h6">All Orders</Typography>
        </Box>
        <Box p={2} sx={{ height: 500 }}>
          <OrdersTable />
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrdersRootPage;
