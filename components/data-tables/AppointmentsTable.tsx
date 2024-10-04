import useGetAllAppointments from "@/apollo/hooks/useGetAllAppointments";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models";
import React, { Fragment } from "react";
import moment from "moment";
import { Button, Chip } from "@mui/material";
import Link from "next/link";
import { APP_ROUTES } from "@/utils/routes";
import { appointmentDataType } from "@/typescript/types";

interface AppointmentsTableProps {
  onClickEdit?: (appointmentData: appointmentDataType) => void;
}

const AppointmentsTable = ({ onClickEdit }: AppointmentsTableProps) => {
  const {
    allAppointments,
    loadingGetAllAppointments,
    errorGetAllAppointments,
    totalAppointmentsCount,
  } = useGetAllAppointments();

  const columns: GridColDef<(typeof allAppointments)[number]>[] = [
    {
      field: "appointmentId",
      headerName: "Appointment Id",
      width: 150,
      valueGetter: (value, row) => `#${row.appointmentId}`,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      valueGetter: (value, row) =>
        `${moment(row.appointmentDate.timestamp).format("DD/MM/YYYY")}`,
    },
    {
      field: "time",
      headerName: "Time",
      width: 110,
      valueGetter: (value, row) =>
        `${moment(row.appointmentSelectedTimestamp).format("hh:mm a")}`,
    },
    {
      field: "name",
      headerName: "Name",
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "appointmentType",
      headerName: "Type",
      renderCell: ({ row }) => (
        <Chip
          color={row?.appointmentType === "online" ? "success" : "warning"}
          variant="filled"
          size="small"
          label={row.appointmentType}
        />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: ({ row }) => (
        <Button
          LinkComponent={Link}
          href={`${APP_ROUTES.USER_APPOINTMENTS}/${row._id}`}
          variant="text"
          size="small"
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <Fragment>
      <DataGrid
        density="compact"
        rows={allAppointments}
        loading={loadingGetAllAppointments}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[50]}
        checkboxSelection={false}
        disableRowSelectionOnClick
      />
    </Fragment>
  );
};

export default AppointmentsTable;
