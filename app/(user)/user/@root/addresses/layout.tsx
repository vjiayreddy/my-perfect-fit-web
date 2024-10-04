"use client";
import React, { Fragment } from "react";

interface AddressLayoutProps {
  children: React.ReactNode;
  root: React.ReactNode;
}

const Addresslayout = ({ children, root }: AddressLayoutProps) => {
  return (
    <Fragment>
      {children}
      {root}
    </Fragment>
  );
};

export default Addresslayout;
