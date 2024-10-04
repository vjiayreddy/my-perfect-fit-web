"use client";
import React, { Fragment } from "react";

interface AppointmentslayoutProps {
  children: React.ReactNode;
  root: React.ReactNode;
}

const Appointmentslayout = ({ children, root }: AppointmentslayoutProps) => {
  return (
    <Fragment>
      {children}
      {root}
    </Fragment>
  );
};

export default Appointmentslayout;
