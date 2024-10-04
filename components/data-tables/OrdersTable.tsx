"use client";
import React from "react";
import useGetAllUserProductOrders from "@/apollo/hooks/useGetAllUserProductOrders";
import { Button, Chip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import moment from "moment";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const OrdersTable = () => {
  const { loadingGetAllUserProductOrders, allUserOrders } =
    useGetAllUserProductOrders();

  const columns: GridColDef<(typeof allUserOrders)[number]>[] = [
    {
      field: "orderId",
      headerName: "Order ID",
      width: 150,
      editable: false,
      valueGetter: (value, row) => `#${row.orderId}`,
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      width: 150,
      editable: false,
      valueGetter: (value, row) =>
        `${moment(new Date(row?.orderDateTime.timestamp)).format(
          "DD-MMM-YYYY"
        )}`,
    },
    {
      field: "orderTotal",
      headerName: "Order Total",
      type: "number",
      width: 110,
      editable: false,
      valueGetter: (value, row) => `₹${row.orderTotal}`,
    },
    {
      field: "orderStatus",
      headerName: "Order Status",
      sortable: false,
      width: 160,
      renderCell: () => <Chip size="small" label="Pending" />,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 160,
      renderCell: ({ row }) => (
        <Button
          href={`/user/orders/${row._id}`}
          LinkComponent={Link}
          variant="text"
          size="small"
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <DataGrid
      density="compact"
      rows={allUserOrders}
      loading={loadingGetAllUserProductOrders}
      columns={columns}
      getRowId={(row) => row._id}
      initialState={{
        columns: {
          columnVisibilityModel: {
            id: false,
            traderName: false,
          },
        },
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
  );
};

export default OrdersTable;
