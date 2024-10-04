"use client";
import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MainContainerComponentProps {
  children: React.ReactNode;
}

const StyledMainContainer = styled("main")(({ theme }) => ({
  minHeight: `calc(100vh)`,
  display: "flex",
  flexDirection: "column",
}));

const MainContainerComponent = ({ children }: MainContainerComponentProps) => {
  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <StyledMainContainer>{children}</StyledMainContainer>
    </Fragment>
  );
};

export default MainContainerComponent;
