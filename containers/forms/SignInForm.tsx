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

const StyledMainBox = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
}));

const SignInForm = () => {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: any) => {
    const response: any = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (response?.error) {
      toast(response?.error, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
    } else {
      router.push(APP_ROUTES.PROTOCOLS);
    }
  };

  return (
    <StyledMainBox>
      <Box mt={3}>
        <Grid container spacing={2}>
          
          {/* <Grid item xs={12}>
            <TextInputFieldComponent
              id="email-input"
              label="Email"
              defaultValue=""
              name="email"
              control={control}
              rules={{
                required: "Email address is required",
                validate: isValidateEmail,
              }}
              textFieldProps={{
                fullWidth: true,
                placeholder: "Email Address",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputFieldComponent
              id="password-input"
              label="Password"
              defaultValue=""
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                validate: isValidPassword,
              }}
              textFieldProps={{
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleToggle}>
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                fullWidth: true,
                type: showPassword ? "text" : "password",
                placeholder: "Password",
              }}
            />
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <Grid item xs>
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: 14,
                  },
                }}
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                  />
                }
                label="Remember Me"
              />
            </Grid>
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
              SIGN IN
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
          </Grid> */}
        </Grid>
      </Box>
    </StyledMainBox>
  );
};

export default SignInForm;
