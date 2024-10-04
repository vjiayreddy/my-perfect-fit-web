"use client";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

interface Props {
  error: any;
  reset: any;
}

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Alert
            severity="error"
            action={
              <Button onClick={() => reset()} size="small">
                Try again
              </Button>
            }
          >
            <Typography variant="body1">Something went wrong!</Typography>
            <Typography variant="body2">Reason:{error?.message}</Typography>
          </Alert>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Error;
