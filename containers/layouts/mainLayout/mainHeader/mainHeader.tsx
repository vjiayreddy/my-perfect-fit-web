"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import UserActionComponent from "./userActions";
import NavigationMenuComponent from "./navigationMenu";

const StyledLogoBox = styled(Box)(({ theme }) => ({
  minWidth: 150,
}));
const StyledUserActionBox = styled(Box)(({ theme }) => ({
  minWidth: 150,
}));

const StyledNavigationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
}));

const MainHeaderComponent = () => {
  return (
    <AppBar position="sticky">
      <Container  maxWidth="xl" disableGutters>
        <Toolbar>
          <StyledLogoBox>
            <Typography variant="h6">LOGO</Typography>
          </StyledLogoBox>
          <StyledNavigationBox>
            <NavigationMenuComponent />
          </StyledNavigationBox>
          <StyledUserActionBox>
            <UserActionComponent />
          </StyledUserActionBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainHeaderComponent;
