"use client";
import React from "react";
import { APP_BAR_SIZE, TOP_INFO_BAR } from "@/utils/constants";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface LoginlayoutProps {
  children: React.ReactNode;
  root: React.ReactNode;
}

const StyledLoginContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  height: `calc(100dvh - ${APP_BAR_SIZE + TOP_INFO_BAR}px)`,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: 100,
  "& .box_1": {
    width: 500,
    backgroundColor: theme.palette.common.white,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 30,
    "& .MuiTypography-h5": {
      fontWeight: 700,
      textAlign: "center",
    },
  },
}));

const Loginlayout = ({ children, root }: LoginlayoutProps) => {
  return (
    <StyledLoginContainer>
      {children}
      {root}
    </StyledLoginContainer>
  );
};

export default Loginlayout;
