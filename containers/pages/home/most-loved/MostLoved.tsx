import MostLovedCard from "@/components/cards/MostLovedCard";
import { homeMostLoved } from "@/utils/mockData";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";

const HomeMostLoved = () => {
  return (
    <Fragment>
      <Box mb={10}>
        <Typography
          gutterBottom
          textAlign="center"
          fontWeight={700}
          variant="h4"
        >
          Most Loved <br /> Custom Clothing Brand
        </Typography>
      </Box>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {homeMostLoved.map((data) => (
            <Grid key={data._id} item md={4}>
              <MostLovedCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default HomeMostLoved;
