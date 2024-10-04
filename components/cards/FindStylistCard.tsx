import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import {Icon} from "@iconify/react"; 
import Image from "next/image";

interface FindStylistCardProps {
  data: any;
  onClick: () => void;
}

const StyledFindStylistCard = styled(Card)(({ theme }) => ({
  "& ._MuiTypography-body1": {
    color: theme.palette.text.secondary,
  },
  "& .__card_image_wrapper": {
    width: "100%",
    minHeight: 250,
    marginBottom: 20,
    position:'relative'
  },
}));

const FindStylistCard = ({ data, onClick }: FindStylistCardProps) => {
  return (
    <StyledFindStylistCard>
      <CardContent>
        <Box component="div" className="__card_image_wrapper">
          <Image objectFit="contain" fill={true} src={data?.image} alt={data?.btnTitle}/>
        </Box>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Grid item>
            <Typography
              gutterBottom
              fontWeight={600}
              textAlign="center"
              variant="h6"
            >
              {data.name}
            </Typography>
            <Typography gutterBottom variant="body1" textAlign="center">
              {data.description}
            </Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <Button size="large" startIcon={<Icon icon={data?.icon}/>} onClick={onClick} variant="contained" color="secondary">
              {data?.btnTitle}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </StyledFindStylistCard>
  );
};

export default FindStylistCard;
