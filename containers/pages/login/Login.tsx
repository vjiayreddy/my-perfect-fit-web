"use client";
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {signIn, signOut} from "next-auth/react";
import { useSession } from "next-auth/react";

const LoginContainer = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleNavigation = (type: string) => {
    router.push(`/login/${type}`);
  };
  const handleGoogleLogin = () => {
    signIn('google');
  };
  const handleGoogleLogOut = () => {
    signOut();
  };

  return (
    <Box component="div" className="box_1">
      <Box mb={3}>
        <Typography variant="h5">Sign in to your account</Typography>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            onClick={() => handleNavigation("email")}
            variant="contained"
            fullWidth={true}
            size="large"
          >
            Login with email
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="secondary"
            variant="contained"
            fullWidth={true}
            size="large"
            onClick={() => handleNavigation("phone")}
          >
            Login with mobile
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="success"
            variant="contained"
            fullWidth={true}
            size="large"
            onClick={() => handleNavigation("otp")}
          >
            Login with OTP
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="google"
            variant="contained"
            fullWidth={true}
            size="large"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="inherit"
            variant="contained"
            fullWidth={true}
            size="large"
            onClick={handleGoogleLogOut}
          >
            Create New Account
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginContainer;
