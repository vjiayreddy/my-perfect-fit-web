import { gql } from "@apollo/client";
import { DATE_TIME_SCHEMA, STYLIST_SCHEMA } from ".";

export const USER_FRAGMENT = gql`
  ${DATE_TIME_SCHEMA}
  ${STYLIST_SCHEMA}
  fragment UserSchema on User {
    _id
    aboutMe
    cityName
    countryCode
    countryName
    customerSrNo
    customerSegment
    email
    firstName
    lastName
    gender
    isEmailVerified
    isMobileVerified
    phone
    dateOfBirth {
      ...DateTime
    }
    stylist {
      ...StylistSchema
    }
    images {
      cover
      profile
    }
  }
`;
