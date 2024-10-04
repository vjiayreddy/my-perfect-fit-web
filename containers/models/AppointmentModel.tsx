"use client";
import React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import { Grid, Typography, styled, IconButton } from "@mui/material";
import AppointmentForm from "../forms/AppointmentForm";
import { Icon } from "@iconify/react";

interface AppointmentModelProps extends DialogProps {
  onCloseModel: () => void;
}

const StyledAppointmentModel = styled(Box)(({ theme }) => ({
  width: theme.breakpoints.values.md,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& .model--image-wrapper": {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
  },
  "& .model--close-wrapper": {
    position: "absolute",
    top: 5,
    right: 5,
  },
}));

const AppointmentModel = ({
  onCloseModel,
  ...props
}: AppointmentModelProps) => {
  return (
    <Dialog maxWidth="md" {...props}>
      <StyledAppointmentModel>
        <Box>
          <Grid container>
            <Grid item md={6}>
              <Box p={6} component="div" className="model--image-wrapper">
                <Typography gutterBottom fontWeight={700} variant="h4">
                  Meet the best <br />
                  Persoanl Stylist
                </Typography>
                <Typography fontWeight={300} variant="body1">
                  Discover your signature style with our personalized styling
                  sessions. Book now for a wardrobe refresh and confidence boost
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box p={6}>
                <AppointmentForm formFieldsSize="small" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box component="div" className="model--close-wrapper">
          <IconButton onClick={onCloseModel}>
            <Icon icon="ic:round-close" />
          </IconButton>
        </Box>
      </StyledAppointmentModel>
    </Dialog>
  );
};

export default AppointmentModel;
