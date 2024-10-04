import { dateTimeDataType } from "@/typescript/types";
import apolloClient from "../apolloClient";
import { GQL_LOGIN_QUERY } from "../queries/user";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type userDataType = {
  _id: string;
  aboutMe: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  customerId: string;
  customerSegment: string;
  dateOfBirth: dateTimeDataType;
  lastUpdatedAt: dateTimeDataType;
  stylist: {};
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  isEmailVerified: boolean;
  isMobileVerified: boolean;
  phone: string;
  images: {
    cover: string;
    profile: string;
  };
};

export type loginPayloadType = {
  source: string;
  password: string;
};
export type loginResponseType = {
  isSuspended: Boolean;
  user: userDataType;
  token: string;
};

export const userLogin = async (payload: loginPayloadType) => {
  const response = await apolloClient.query<
    ApolloClient<NormalizedCacheObject>
  >({
    query: GQL_LOGIN_QUERY,
    variables: payload,
  });
  return response;
};
