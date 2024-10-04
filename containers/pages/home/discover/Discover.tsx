import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";
const StyledHomeDiscoverContainer = styled(Box)(({ theme }) => ({
  "& .image_wrapper": {
    minHeight: 500,
    position: "relative",
    height: "100%",
    backgroundColor: theme.palette.grey[100],
    borderRadius: 5,
    overflow: "hidden",
  },

  "& .MuiTypography-body1": {
    width: "75%",
  },
}));

const HomeDiscoverContainer = () => {
  return (
    <StyledHomeDiscoverContainer>
      <Container maxWidth="md">
        <Typography
          gutterBottom
          sx={(theme) => ({ color: theme.palette.text.secondary })}
          textAlign="center"
          variant="subtitle2"
        >
          Changing the way Men Shop
        </Typography>
        <Typography
          gutterBottom
          textAlign="center"
          variant="h4"
          fontWeight={700}
        >
          Discover a whole new way to <br />
          stay stylish - with My Perfect Fit
        </Typography>
      </Container>
      <Box mt={10}>
        <Grid container alignItems="center" justifyContent="stretch">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box component="div" className="image_wrapper">
              <Image
                objectFit="cover"
                alt="fabric"
                src="/assets/images/discover/fabric.webp"
                fill={true}
                blurDataURL="/assets/images/discover/fabric.webp"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box pl={5}>
              <Typography gutterBottom fontWeight={700} variant="h4">
                Great fabrics, latest designs
              </Typography>
              <Typography variant="body1">
                The perfect outfit demands the best fabrics. Discover a range of
                fabrics that satisfy even the most sophisticated tastes. High
                thread count fabrics, pure wools and cashmeres are just a few
                fabrics among our large collection.
              </Typography>
              <Box mt={4}>
                <Button
                  color="secondary"
                  endIcon={<Icon icon="codicon:arrow-right" />}
                  size="large"
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="stretch">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box pl={5}>
              <Typography gutterBottom fontWeight={700} variant="h4">
                Bespoke experience
              </Typography>
              <Typography variant="body1">
                Feel the joy of a personalised menswear shopping experience.
                Every garment you wear is designed to match your look, the
                occasion, your preferences and skin tone, and is handcrafted to
                give you the perfect fit.
              </Typography>
              <Box mt={4}>
                <Button
                  color="secondary"
                  endIcon={<Icon icon="codicon:arrow-right" />}
                  size="large"
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box component="div" className="image_wrapper">
              <Image
                objectFit="cover"
                alt="fabric"
                src="/assets/images/discover/bespoke.webp"
                fill={true}
                blurDataURL="/assets/images/discover/bespoke.webp"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="stretch">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box component="div" className="image_wrapper">
              <Image
                objectFit="cover"
                alt="fabric"
                src="/assets/images/discover/elite.webp"
                fill={true}
                blurDataURL="/assets/images/discover/elite.webp"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box pl={5}>
              <Typography gutterBottom fontWeight={700} variant="h4">
                Elite service
              </Typography>
              <Typography variant="body1">
                Confused about what to wear? Our experienced stylists will guide
                you at every step from suggesting looks and to fabric
                recommendations to expert styling for special events.
              </Typography>
              <Box mt={4}>
                <Button
                  color="secondary"
                  endIcon={<Icon icon="codicon:arrow-right" />}
                  size="large"
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledHomeDiscoverContainer>
  );
};

export default HomeDiscoverContainer;
