"use client";
import React, { Fragment, useState } from "react";
import AppointmentsTable from "@/components/data-tables/AppointmentsTable";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import AppointmentForm from "@/containers/forms/AppointmentForm";
import AppointmentModel from "@/containers/models/AppointmentModel";

const AppointmentsRootPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenAppointmentForm = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Box p={2}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography variant="h6">All Appointments</Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleOpenAppointmentForm}
                  variant="outlined"
                  size="small"
                  startIcon={<Icon icon="ph:calendar-dots-duotone" />}
                  color="secondary"
                >
                  Book an Appointment
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box p={2} sx={{ height: 500 }}>
            <AppointmentsTable />
          </Box>
        </CardContent>
      </Card>
      {open && (
        <AppointmentModel
          open={open}
          onCloseModel={handleOpenAppointmentForm}
        />
      )}
    </Fragment>
  );
};

export default AppointmentsRootPage;
