"use client";
import React, { useEffect, useState } from "react";
import TextInputFieldComponent from "@/components/formFields/textInputField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { isValidPassword } from "@/utils/validations";
import FormMobileInput from "@/components/formFields/phoneInput";
import { matchIsValidTel } from "mui-tel-input";
import parsePhoneNumber from "libphonenumber-js";
import { useSignUpUserMutation } from "@/redux/api/authApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import { AUTH_API_STATUS } from "@/utils/constants";

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(18)}`,
  width: "50%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
}));

const StyledLogoBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing(7),
  display: "flex",
  alignItems: "center",
}));

const StyledFormBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  "& .form_heading_label": {
    marginBottom: theme.spacing(3),
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  "& .form_subHeading_label": {
    marginBottom: theme.spacing(1),
    fontWeight: 600,
  },
  "& .form_content_label": {
    marginBottom: theme.spacing(3),
    fontWeight: 500,
  },
}));

const SignUpFormContainer = () => {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [signUpUser, { isLoading, isSuccess, isError, error }] =
    useSignUpUserMutation();
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(AUTH_API_STATUS.USER_REGISTRAION_SUCCESSFULL);
      router.push(APP_ROUTES.LOGIN);
    }
    if (isError) {
      toast.error((error as any).data.message);
    }
  }, [isLoading]);

  const onSubmit = async (data: any) => {
    const phoneNumber = parsePhoneNumber(data.phone);
    await signUpUser({
      ...data,
      mobileNumber: phoneNumber?.nationalNumber,
      gender: "MALE",
    });
  };

  return (
    <StyledMainBox>
      <StyledLogoBox>
        <Typography sx={{ fontWeight: 800 }} variant="h4">
          EloCare
        </Typography>
        {/* <img width={150} alt="logo" src="/assets/images/logo.svg" /> */}
      </StyledLogoBox>
      <StyledFormBox>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className="form_subHeading_label" variant="subtitle1">
                Create a new account
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <TextInputFieldComponent
                id="first-name-input"
                label=""
                defaultValue=""
                name="firstName"
                control={control}
                rules={{
                  required: "First Name is required",
                }}
                textFieldProps={{
                  fullWidth: true,
                  placeholder: "First Name",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextInputFieldComponent
                id="last-name-input"
                label=""
                defaultValue=""
                name="lastName"
                control={control}
                rules={{
                  required: "Last Name is required",
                }}
                textFieldProps={{
                  fullWidth: true,
                  placeholder: "Last Name",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInputFieldComponent
                id="email-input"
                label=""
                defaultValue=""
                name="email"
                control={control}
                rules={{
                  required: "Email address is required",
                }}
                textFieldProps={{
                  fullWidth: true,
                  placeholder: "Email Address",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormMobileInput
                id="phone-input"
                label=""
                defaultValue=""
                name="phone"
                control={control}
                rules={{
                  required: "Phone number is required",
                  validate: matchIsValidTel,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInputFieldComponent
                id="password-input"
                label=""
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

            <Grid item xs={12}>
              <Button
                size="large"
                onClick={handleSubmit(onSubmit)}
                fullWidth={true}
                disabled={isLoading}
              >
                CRETE ACCOUNT
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="body2">
                Already have account? <Button variant="text">Login</Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </StyledFormBox>
    </StyledMainBox>
  );
};

export default SignUpFormContainer;
