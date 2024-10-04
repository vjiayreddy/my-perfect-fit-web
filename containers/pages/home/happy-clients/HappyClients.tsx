import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Grid from "@mui/material/Grid";
import { Button, Card, CardContent } from "@mui/material";

const HappyClients = () => {
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Grid
            spacing={2}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Box mb={2}>
                <AvatarGroup>
                  <Avatar
                    sx={{ width: 75, height: 75 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                  <Avatar
                    sx={{ width: 75, height: 75 }}
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar
                    sx={{ width: 75, height: 75 }}
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    sx={{ width: 75, height: 75 }}
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                  <Avatar
                    sx={{ width: 75, height: 75 }}
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </Box>
              <Typography
                gutterBottom
                textAlign="center"
                fontWeight={700}
                variant="h5"
              >
                12,000+ Happy Clients
              </Typography>
            </Grid>
            <Grid item>
              <Button size="large">Read Reviews</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default HappyClients;
