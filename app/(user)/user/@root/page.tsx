"use client";
import React, { Fragment } from "react";
import useGetUserById from "@/apollo/hooks/useGetUserById";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  FormLabel,
  Button,
} from "@mui/material";
import moment from "moment";
import Loading from "./loading";
import { Icon } from "@iconify/react";

const RootPage = () => {
  const { dataGetUser, errorGetUser, loadingGetUser } = useGetUserById();
  if (errorGetUser && !dataGetUser) {
    throw new Error(errorGetUser.message);
  }
  if (loadingGetUser && !dataGetUser) {
    return <Loading />;
  }
  if (!loadingGetUser && dataGetUser) {
    return (
      <Card>
        <CardContent>
          <Box p={4}>
            <Grid container>
              <Grid item xs={12}>
                <Box mb={2}>
                  <Typography fontWeight={600} variant="h6">
                    User Information
                  </Typography>
                </Box>
              </Grid>
              <Grid container item xs={12} spacing={1}>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>First Name</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.firstName}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Last Name</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.lastName}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Email</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.email}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Phone</FormLabel>
                  <Typography fontWeight={600}>
                    +{dataGetUser?.user.countryCode} {dataGetUser?.user.phone}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Date Of Birth</FormLabel>
                  <Typography fontWeight={600}>
                    {moment(
                      new Date(dataGetUser?.user.dateOfBirth.timestamp)
                    ).format("DD/MM/YYYY")}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Gender</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.gender
                      ? dataGetUser?.user?.gender
                      : "NA"}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Registred By</FormLabel>
                  <Typography fontWeight={600}>
                    {moment(new Date(dataGetUser?.user.createdAt)).format(
                      "DD/MM/YYYY"
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Customer Type</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.customerType}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Email Verified</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.isEmailVerified ? "Yes" : "No"}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Mobile Verified</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.isMobileVerified ? "Yes" : "No"}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={4} xl={4} sm={6}>
                  <FormLabel>Customer No</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.customerSrNo}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel>About Us</FormLabel>
                  <Typography fontWeight={600}>
                    {dataGetUser?.user.aboutMe
                      ? dataGetUser?.user.aboutMe
                      : "NA"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Grid container item xs={12} spacing={3}>
                <Grid item>
                  <Button endIcon={<Icon icon="gravity-ui:arrow-right" />}>
                    Update Profile
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    endIcon={<Icon icon="gravity-ui:arrow-right" />}
                    color="secondary"
                    variant="contained"
                  >
                    Account Settings
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }
  return <Fragment />;
};

export default RootPage;
