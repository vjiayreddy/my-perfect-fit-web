import NextAuth, { DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { dateOfBirthType } from "./apollo/types/global";

declare module "next-auth" {
  interface User extends DefaultUser {
    name?: string;
    firstName?: string;
    lastName?: string;
    mobileNumber?: string;
    gender?: string;
    isEmailVerified?: boolean;
    isMobileVerified?: boolean;
    token?: string;
    dateOfBirth?: string;
    stylist?: stylistDataType;
    countryCode?: string;
  }

  interface Session {
    user: {
      id?: string;
      name?: string;
      firstName?: string;
      lastName?: string;
      mobileNumber?: string;
      email: ?string;
      gender?: string;
      isEmailVerified?: boolean;
      isMobileVerified?: boolean;
      token?: string;
      dateOfBirth?: string;
      stylist?: stylistDataType;
      countryCode?: string;
    };
  }
}
