"use client";
import React, { Fragment } from "react";
import { Box, Container, Typography, styled } from "@mui/material";

const StyledProductsPageWrapper = styled(Box)(({ theme }) => ({
  "& .__top_header": {
    padding: 24,
    backgroundColor: `${theme.palette.grey[200]}`,
  },
}));

const ProductsPage = () => {
  return (
    <StyledProductsPageWrapper>
      <Container disableGutters maxWidth="xl">
        <Box component="div" className="__top_header">
          <Typography fontWeight={700} variant="h5">Products</Typography>
        </Box>
      </Container>
    </StyledProductsPageWrapper>
  );
};

export default ProductsPage;
