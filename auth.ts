import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userLogin } from "./apollo/actions/auth";
import { userDataType } from "./typescript/types";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {},
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const response: any = await userLogin({
          source: credentials?.source as string,
          password: credentials?.password as string,
        });
        console.log(credentials);
        console.log(response);
        if (response?.data?.login) {
          const user = response?.data?.login?.user as userDataType;
          return {
            id: user._id,
            name: user.fullName,
            email: user.email,
            image: user.images.profile,
            firstName: user.firstName,
            lastName: user.lastName,
            mobileNumber: user.phone,
            isEmailVerified: user.isEmailVerified,
            isMobileVerified: user.isMobileVerified,
            token: response?.data?.login?.token,
            dateOfBirth: user.dateOfBirth?.timestamp,
            stylist: user.stylist,
            countryCode: user.countryCode,
          };
        } else {
          return new Error("Something went wrong....");
        }
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      console.log(token, user, trigger, session);
      // if (user) {
      //   token = updateToken(token, user);
      // }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token?._id as string;
        session.user.name = token?.name as string;
        session.user.token = token?.token as string;
        session.user.email = token.email as string;
        session.user.isMobileVerified = token?.isMobileVerified as boolean;
      }
      return Promise.resolve(session);
    },
  },
});
