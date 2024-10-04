"use client";
import FormHeader from "@/containers/forms/FormHeader";
import VerifyOtpForm from "@/containers/forms/VerifyOtpForm";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const VerifyOtp = () => {
  return (
    <Box component="div" className="box_1">
      <Box mb={5}>
        <FormHeader title="Verify OTP" />
      </Box>
      <Box mb={2}>
        <Typography variant="body2">Please enter OTP sent to <b>+919111111121</b></Typography>
      </Box>
      <VerifyOtpForm />
    </Box>
  );
};

export default VerifyOtp;
