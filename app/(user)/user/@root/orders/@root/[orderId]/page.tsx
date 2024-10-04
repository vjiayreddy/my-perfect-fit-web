"use client";
import React from "react";
import { Icon } from "@iconify/react";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  Stepper,
  Step,
  StepButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import useGetSingleProductOrder from "@/apollo/hooks/useGetSingleProductOrder";
import moment from "moment";
import { APP_ROUTES } from "@/utils/routes";
import ProductOrderCard from "@/components/cards/ProductOrderCard";

const steps = [
  "Order Confirmed",
  "Add Measurements",
  "Stitching In Progress",
  "Order Shipped",
];

const OrderDetailsPage = () => {
  const router = useRouter();
  const {
    loadingGetSingleProductOrder,
    errorGetSingleProductOrder,
    dataGetSingleProductOrder,
  } = useGetSingleProductOrder();
  return (
    <Card>
      <CardContent>
        <Box p={2}>
          <Grid container>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link
                component={NextLink}
                underline="hover"
                color="inherit"
                href={APP_ROUTES.USER_ORDERS}
              >
                My Orders
              </Link>
              <Link underline="hover" color="inherit">
                #{dataGetSingleProductOrder?.getSingleProductOrder?.orderId}
              </Link>
            </Breadcrumbs>
          </Grid>
          <Box mt={2} mb={4}>
            <Grid container>
              <Grid item xs={12}>
                <Typography gutterBottom fontWeight={600} variant="h5">
                  Order Summary
                </Typography>
                <Typography
                  sx={(theme) => ({ color: theme.palette.text.secondary })}
                  variant="body2"
                >
                  This order was placed on{" "}
                  {moment(
                    new Date(
                      dataGetSingleProductOrder?.getSingleProductOrder.orderDateTime.timestamp
                    )
                  ).format("DD/MM/YYYY")}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography gutterBottom fontWeight={600} variant="subtitle1">
                  Tracking
                </Typography>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={12}>
                  <Box
                    pt={4}
                    pb={4}
                    sx={(theme) => ({
                      borderRadius: 1,
                      border: `1px solid  ${theme.palette.divider}`,
                    })}
                  >
                    <Stepper nonLinear activeStep={1} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label} completed={true}>
                          <StepButton color="inherit">{label}</StepButton>
                        </Step>
                      ))}
                    </Stepper>
                    <Box pl={4} pr={4} pt={2}>
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.text.secondary,
                        })}
                        variant="body2"
                        textAlign="center"
                      >
                        our measurements have been added successfully and the
                        stitching process has been initiated. Please contact
                        your stylist in case you want to update your
                        measurements.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom fontWeight={600} variant="subtitle1">
                  Ordered Items
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Table
                  size="medium"
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Image</TableCell>
                      <TableCell align="left">Product</TableCell>
                      <TableCell align="left">Price</TableCell>
                      <TableCell align="left">Qty</TableCell>
                      <TableCell align="left">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataGetSingleProductOrder?.getSingleProductOrder.items.map(
                      (orderItem) => (
                        <TableRow
                          key={orderItem.itemId}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left" scope="row">
                            <Avatar
                              sx={{
                                width: 70,
                                height: 70,
                                "& .MuiAvatar-img": {
                                  objectFit: "contain",
                                },
                              }}
                              src={orderItem.images[0]}
                              variant="square"
                            />
                          </TableCell>
                          <TableCell align="left">{orderItem.name}</TableCell>
                          <TableCell align="left">{orderItem.price.toFixed(2)}</TableCell>
                          <TableCell align="left">{orderItem.qty}</TableCell>
                          <TableCell align="left">
                            {(Number(orderItem.qty) * Number(orderItem.price)).toFixed(2)}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                    <TableRow>
                      <TableCell component="th" colSpan={4}>
                        <b>Total</b>
                      </TableCell>
                      <TableCell component="th">
                        <b>
                          {
                            dataGetSingleProductOrder?.getSingleProductOrder
                              ?.orderTotal?.toFixed(2)
                          }
                        </b>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom fontWeight={600} variant="subtitle1">
                  Shipping Address
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box
                  p={4}
                  sx={(theme) => ({
                    borderRadius: 1,
                    border: `1px solid  ${theme.palette.divider}`,
                  })}
                >
                  <Typography gutterBottom variant="body1" fontWeight={600}>
                    {`${dataGetSingleProductOrder?.getSingleProductOrder.address.firstName} ${dataGetSingleProductOrder?.getSingleProductOrder.address.lastName}`}
                  </Typography>
                  <Typography variant="body2" fontWeight={400}>
                    {`${dataGetSingleProductOrder?.getSingleProductOrder.address.address1} , ${dataGetSingleProductOrder?.getSingleProductOrder.address.address2}`}
                    ,
                  </Typography>
                  <Typography variant="body2" fontWeight={400}>
                    {`${dataGetSingleProductOrder?.getSingleProductOrder.address.city} , ${dataGetSingleProductOrder?.getSingleProductOrder.address.state} , ${dataGetSingleProductOrder?.getSingleProductOrder.address.country} , ${dataGetSingleProductOrder?.getSingleProductOrder.address.postalCode}`}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderDetailsPage;
