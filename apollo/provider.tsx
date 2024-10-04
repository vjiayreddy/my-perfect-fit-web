"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";

interface ApolloClientProviderProps {
  children: React.ReactNode;
}

const ApolloClientProvider = ({ children }: ApolloClientProviderProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
