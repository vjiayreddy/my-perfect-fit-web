"use client";
import ErrorCard from "@/components/cards/ErrorCard";
import React from "react";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <ErrorCard />;
};

export default ErrorBoundary;
