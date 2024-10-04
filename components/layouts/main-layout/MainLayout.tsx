"use client";
import AppHeaderComponent from "@/components/appHeader/appHeader";
import FooterComponent from "@/containers/layouts/mainLayout/footer";
import MainHeaderComponent from "@/containers/layouts/mainLayout/mainHeader/mainHeader";
import TopHeaderComponent from "@/containers/layouts/mainLayout/topHeader/topHeader";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const StyledMainLayout = styled(Box)(({ theme }) => ({
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  "& .__main_content": {
    flexGrow: 1,
    minHeight: theme.breakpoints.values.sm,
  },
}));

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledMainLayout>
      <TopHeaderComponent />
      <MainHeaderComponent />
      <Box component="div" className="__main_content">
        {children}
      </Box>
      <FooterComponent />
    </StyledMainLayout>
  );
};

export default MainLayout;
