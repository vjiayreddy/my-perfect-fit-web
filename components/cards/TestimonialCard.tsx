import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import Rating from "@mui/material/Rating";

const StyledTestimonialCard = styled(Card)(({ theme }) => ({
  "& .__testimonial_avatar": {
    width: 100,
    minHeight: 100,
    height: "100%",
    backgroundColor: theme.palette.grey[100],
    position: "relative",
    borderRadius: 100,
    overflow: "hidden",
  },
  "& .__testimonial_avatar .next_image": {
    objectFit: "cover",
    objectPosition: "top center",
  },
}));

const TestimonialCard = () => {
  return (
    <StyledTestimonialCard>
      <CardContent>
        <Grid
          container
          direction="column"
          spacing={0}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Box mt={3} mb={2} component="div" className="__testimonial_avatar">
              <Image
                className="next_image"
                alt="client"
                src="https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww"
                layout="fill"
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography fontWeight={700} textAlign="center" variant="subtitle1">
              Rahul Kumar
            </Typography>
            <Typography
              sx={{ display: "block" }}
              textAlign="center"
              variant="caption"
            >
              Excutive Officer
            </Typography>
          </Grid>
          <Grid item>
            <Box p={3}>
              <Typography
                style={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
                textAlign="center"
                variant="body2"
              >
                I recently had the pleasure of shopping at My Perfect Fit
                clothing brand and I must say, their daily wear collection is
                absolutely fantastic.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <img width={80} src="/assets/images/others/google_logo.png" />
          </Grid>
          <Grid item>
            <Grid item>
              <Rating
                size="small"
                name="client-rating"
                value={5}
                precision={0.5}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </StyledTestimonialCard>
  );
};

export default TestimonialCard;
