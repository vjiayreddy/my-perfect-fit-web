"use client";
import React, { useState } from "react";
import TextInputFieldComponent from "@/components/formFields/textInputField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { isValidPassword, isValidateEmail } from "@/utils/validations";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import FormMobileInput from "@/components/formFields/phoneInput";

const StyledMainBox = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
}));

const OtpSiginForm = () => {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: any) => {
    router.push('/login/verifyOtp')
    // const response: any = await signIn("credentials", {
    //   email: data.email,
    //   password: data.password,
    //   redirect: false,
    // });
    // if (response?.error) {
    //   toast(response?.error, {
    //     hideProgressBar: true,
    //     autoClose: 2000,
    //     type: "success",
    //   });
    // } else {
    //   router.push(APP_ROUTES.PROTOCOLS);
    // }
  };

  return (
    <StyledMainBox>
      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormMobileInput
              id="email-input"
              label=""
              defaultValue=""
              name="email"
              size="medium"
              control={control}
              placeholder="Phone Number"
              rules={{
                required: true,
              }}
            />
          </Grid>

          <Grid item xs={12} container alignItems="center">
            <Grid item xs></Grid>
            <Grid item>
              <Button size="small" color="error" variant="text">
                Reset Password
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              onClick={handleSubmit(onSubmit)}
              fullWidth={true}
            >
              SUBMIT
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="body2">
              Don't have an account ?{" "}
              <Button
                onClick={() => router.push(APP_ROUTES.REGISTRATION)}
                variant="text"
              >
                Register
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyledMainBox>
  );
};

export default OtpSiginForm;
