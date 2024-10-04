"use client";
import React from "react";
import moment from "moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useGetSingleAppointment from "@/apollo/hooks/useGetSingleAppointment";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import { Icon } from "@iconify/react";
import {useRouter} from "next/navigation";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AppointmentDetailsPage = () => {
  const {
    loadingGetSingleAppointment,
    singleAppointment,
    errorGetSingleAppointment,
  } = useGetSingleAppointment();
  const router  = useRouter();

  return (
    <Card>
      <CardContent>
        <Box p={2}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Button
                onClick={()=>{
                  router.back()
                }}
                color="secondary"
                startIcon={<Icon icon="bitcoin-icons:arrow-left-outline" />}
                size="small"
                variant="text"
              >
                Back
              </Button>
            </Grid>
            <Grid item>
              <Typography>Appointment Details</Typography>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Grid container>
              <Grid item xs={12}>
                <Table size="small">
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>Appointment Id</StyledTableCell>
                      <StyledTableCell>
                        #{singleAppointment?.appointmentId}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell>
                        {`${singleAppointment?.firstName} ${singleAppointment?.lastName}`}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Email</StyledTableCell>
                      <StyledTableCell>{`${
                        singleAppointment?.email || "NA"
                      }`}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Phone</StyledTableCell>
                      <StyledTableCell>
                        {`${singleAppointment?.countryCode || ""} ${
                          singleAppointment?.phone
                        }`}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Appointment Date</StyledTableCell>
                      <StyledTableCell>
                        {moment(
                          new Date(singleAppointment?.appointmentDate.timestamp)
                        ).format("DD-MM-YYYY")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Appointment Time</StyledTableCell>
                      <StyledTableCell>
                        {moment(
                          new Date(
                            singleAppointment?.appointmentSelectedTimestamp as string
                          )
                        ).format("hh:mm a")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Appointment Type</StyledTableCell>
                      <StyledTableCell>
                        {singleAppointment?.appointmentType}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>looking For</StyledTableCell>
                      <StyledTableCell>
                        {singleAppointment?.lookingFor || "NA"}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AppointmentDetailsPage;
