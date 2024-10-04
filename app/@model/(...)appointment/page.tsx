"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AppointmentModel from "@/containers/models/AppointmentModel";

const AppointmentInterceptView = () => {
  const router = useRouter();
  return <AppointmentModel open={true} onCloseModel={() => router.back()} />;
};

export default AppointmentInterceptView;
