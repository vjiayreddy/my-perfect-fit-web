import React from "react";
import Card from "@mui/material/Card";
import {
  Box,
  CardContent,
  Grid,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import { mostLovedDataType } from "@/typescript/types";

interface MostLovedCardProps {
  data: mostLovedDataType;
}

const StyledMostLovedCard = styled(Card)(({ theme }) => ({
  "& .MuiTypography-subtitle1": {
    fontWeight: 600,
  },
  "& .card-image": {
    width: 100,
    height: 100,
    position: "relative",
    "& .next-image": {
      objectFit: "contain",
    },
  },
}));

const MostLovedCard = ({ data }: MostLovedCardProps) => {
  return (
    <StyledMostLovedCard>
      <CardContent>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          spacing={1}
        >
          <Grid item>
            <Box component="div" className="card-image">
              <Image
                className="next-image"
                alt={data.name}
                blurDataURL={data.icon}
                src={data.icon}
                layout="fill"
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              {data.totalReviews}+ Reviews
            </Typography>
            <Box display="flex" alignItems="center">
              <Rating
                name="size-small"
                readOnly
                defaultValue={data.rating}
                size="small"
              />
              <Typography marginLeft={0.5} variant="caption">
                4.5/5
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </StyledMostLovedCard>
  );
};

export default MostLovedCard;
