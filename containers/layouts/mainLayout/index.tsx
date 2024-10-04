import React, { Fragment } from "react";
import TopHeaderComponent from "./topHeader/topHeader";
import MainHeaderComponent from "./mainHeader/mainHeader";
import FooterComponent from "./footer";

interface MainLayoutContainerProps {
  children: React.ReactNode;
}

const MainLayoutContainer = ({ children }: MainLayoutContainerProps) => {
  return (
    <>
      <TopHeaderComponent />
      <MainHeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default MainLayoutContainer;
