"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";
import AddressCard from "@/components/cards/AddressCard";
import { Icon } from "@iconify/react";
import { smapleAddresses } from "@/utils/mockData";
import { motion } from "framer-motion";

const RootAddressesView = () => {
  const AddressCardMotion = motion(AddressCard);

  return (
    <Card>
      <CardContent>
        <Box p={2}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography variant="h6">All Addresses</Typography>
            </Grid>
            <Grid item xs={1}>
              <Button
                startIcon={<Icon icon="mingcute:add-line" />}
                size="small"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box p={2}>
          <Grid container spacing={2}>
            {smapleAddresses.map((item) => (
              <Grid item key={item.id} xs={12} sm={4} md={4} lg={4} xl={4}>
                <AddressCardMotion
                  animate={{ x: [0, 50] }}
                  transition={{ ease: "easeInOut", duration: 6 }}
                  fullName={item.fullName}
                  address={item.address}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RootAddressesView;
