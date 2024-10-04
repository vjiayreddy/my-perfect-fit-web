import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Typography } from "@mui/material";

const StyledCategoryCardMainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: 200,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 10,
  flexDirection: "column",
}));

interface CategoryCardComponentProps {
  data: any;
}

const CategoryCardComponent = ({ data }: CategoryCardComponentProps) => {
  return (
    <>
      <StyledCategoryCardMainBox>
        <Box p={2}>
          <Image width={150} height={150} alt={data.name} src={data?.image} />
        </Box>
        <Box p={2}>
          <Typography fontWeight={600} textAlign="center" variant="h6">
            {data.name}
          </Typography>
        </Box>
      </StyledCategoryCardMainBox>
    </>
  );
};

export default CategoryCardComponent;
