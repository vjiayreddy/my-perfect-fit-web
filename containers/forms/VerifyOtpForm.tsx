"use client";
import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Button, Grid, Typography } from "@mui/material";

const VerifyOtpForm = () => {
  const [otp, setOtp] = React.useState<string>("");
  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <MuiOtpInput value={otp} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <Button size="large" fullWidth={true}>
          SIGN IN
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="body2">
          Don't have an account ?{" "}
          <Button
            //onClick={() => router.push(APP_ROUTES.REGISTRATION)}
            variant="text"
          >
            Register
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VerifyOtpForm;
