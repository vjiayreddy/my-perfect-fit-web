"use client";

import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    name: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  if (params?.name === "notFound") {
    notFound();
  }

  return <div>Shop - {params.name}</div>;
};

export default ProductDetails;
