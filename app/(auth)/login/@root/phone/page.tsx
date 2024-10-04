"use client";
import FormHeader from "@/containers/forms/FormHeader";
import SignWithPhoneForm from "@/containers/forms/SignInWithMobile";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

const PhoneLogin = () => {
  return (
    <Box component="div" className="box_1">
      <Grid container>
        <FormHeader title="Sign with Mobile" />
      </Grid>
      <Box>
        <SignWithPhoneForm />
      </Box>
    </Box>
  );
};

export default PhoneLogin;
