"use client";
import FormHeader from "@/containers/forms/FormHeader";
import OtpSiginForm from "@/containers/forms/OtpSiginForm";
import { Box } from "@mui/material";
import React from "react";

const OtpLogin = () => {
  return (
    <Box component="div" className="box_1">
      <FormHeader title="Sign with OTP" />
      <Box>
        <OtpSiginForm />
      </Box>
    </Box>
  );
};

export default OtpLogin;
