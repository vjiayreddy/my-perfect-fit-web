import React from "react";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";

const customers: any[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipcode: "12345",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    address: {
      street: "456 Oak Ave",
      city: "Sometown",
      state: "NY",
      zipcode: "54321",
      country: "USA",
    },
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-123-4567",
    address: {
      street: "789 Elm St",
      city: "Villagetown",
      state: "TX",
      zipcode: "67890",
      country: "USA",
    },
  },
];

const CustomersPage = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={
            <Grid container>
              <Grid item xs>
                <Typography variant="h6">Prime Customers</Typography>
              </Grid>
              <Grid item>
                <Link href="/dashboard">Dashboard</Link>
              </Grid>
            </Grid>
          }
        />
        <CardContent>
          <List>
            {customers.map((customer) => (
              <ListItem>
                <ListItemText
                  primary={customer.name}
                  secondary={customer.email}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CustomersPage;
