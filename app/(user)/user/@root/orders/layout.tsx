'use client';
import React, { Fragment } from "react";

interface OrderLayoutProps {
  children: React.ReactNode;
  root: React.ReactNode;
}

const Orderlayout = ({ children, root }: OrderLayoutProps) => {
  return (
    <Fragment>
      {children}
      {root}
    </Fragment>
  );
};

export default Orderlayout;
