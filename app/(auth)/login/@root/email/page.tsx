"use client";
import React from "react";
import FormHeader from "@/containers/forms/FormHeader";
import { Box, Grid } from "@mui/material";
import SignInEmailForm from "@/containers/forms/SignWithEmail";

const EmailLogin = () => {
  return (
    <Box component="div" className="box_1">
      <Grid container>
        <FormHeader title="Sign with Email" />
      </Grid>
      <Box>
        <SignInEmailForm />
      </Box>
    </Box>
  );
};

export default EmailLogin;
