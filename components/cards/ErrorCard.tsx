import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ErrorCard = () => {
  return (
    <Card>
      <CardContent>
        <Box p={4}>
          <Grid spacing={3} container direction="column" alignItems="center" justifyContent="center">
            <Grid item>
              <Typography fontWeight={600} variant="h4" textAlign="center">
                Uh Oh
              </Typography>
              <Typography textAlign="center">
                It's looks like server is too busy
              </Typography>
            </Grid>
            <Grid item>
              <Button>Try Again</Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ErrorCard;
