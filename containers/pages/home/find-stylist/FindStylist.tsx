import FindStylistCard from "@/components/cards/FindStylistCard";
import { homeFindStylist } from "@/utils/mockData";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";

const HomeFindStylist = () => {
  return (
    <Fragment>
      <Box mb={10}>
        <Typography
          gutterBottom
          textAlign="center"
          fontWeight={700}
          variant="h4"
        >
          Find your style at your convenience
        </Typography>
      </Box>
      <Grid container direction="row" spacing={3}>
        {homeFindStylist.map((item) => (
          <Grid item md={4} key={item._id} xs={12} lg={4} sm={4} xl={4}>
            <FindStylistCard data={item} onClick={() => {}} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default HomeFindStylist;
