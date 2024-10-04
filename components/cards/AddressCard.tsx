"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, styled } from "@mui/material";

const StyledAddressCard = styled(Card)(({ theme }) => ({
  height: "100%",
  border: `1px solid ${theme.palette.divider}`,
}));

interface AddressCardProps {
  fullName: string;
  address: string;
}

const AddressCard = ({ fullName, address }: AddressCardProps) => {
  return (
    <StyledAddressCard elevation={0}>
      <CardContent>
        <Typography gutterBottom fontWeight={600} variant="body1">
          {fullName}
        </Typography>
        <Typography variant="body2">{address}</Typography>
      </CardContent>
    </StyledAddressCard>
  );
};

export default AddressCard;
