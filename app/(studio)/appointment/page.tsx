"use client";
import React from "react";
import AppointmentForm from "@/containers/forms/AppointmentForm";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  styled,
} from "@mui/material";
import { APP_BAR_SIZE, TOP_INFO_BAR } from "@/utils/constants";
const StyledAppointmentPage = styled(Container)(({ theme }) => ({
  minHeight: `calc(100dvh - ${APP_BAR_SIZE + TOP_INFO_BAR}px)`,
  backgroundColor: theme.palette.grey[100],

  paddingBottom: 150,
  "& .appointment--header": {
    width: "100%",
    height: 400,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .MuiTypography-h4": {
      fontWeight: 600,
    },
  },
  "& .appointment--form-wrapper": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .appointment--form": {
      width: 500,
      marginTop: -75,
    },
  },
  "& .appointment_hero_image": {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  "& .appointment_form": {
    backgroundColor: theme.palette.common.white,
    padding: 50,
    height: "100%",
  },
}));

const StudioAppointmentPage = () => {
  return (
    <StyledAppointmentPage maxWidth="xl" disableGutters>
      <Box component="div" className="appointment--header">
        <Box mb={5}>
          <Typography gutterBottom textAlign="center" variant="body1">
            Get your free Consultation now
          </Typography>
          <Typography gutterBottom textAlign="center" variant="h4">
            Personal Stylist Appointment & <br />
            Consultation Booking
          </Typography>
          <Typography textAlign="center" variant="body2">
            Discover your signature style with our personalized styling
            <br />
            sessions. Book now for a wardrobe refresh and confidence boost
          </Typography>
        </Box>
      </Box>
      <Box component="div" className="appointment--form-wrapper">
        <Box component="div" className="appointment--form">
          <Card>
            <CardContent sx={{ padding: 3 }}>
              <AppointmentForm />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </StyledAppointmentPage>
  );
};

export default StudioAppointmentPage;
