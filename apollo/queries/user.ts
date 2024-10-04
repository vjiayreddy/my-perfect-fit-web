import { gql } from "@apollo/client";
import { STYLIST_SCHEMA } from "../fragments";
import { USER_FRAGMENT } from "../fragments/user";

export const GQL_LOGIN_QUERY = gql`
  ${USER_FRAGMENT}
  query Login($source: String!, $password: String!) {
    login(source: $source, password: $password) {
      token
      user {
        ...UserSchema
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  ${USER_FRAGMENT}
  ${STYLIST_SCHEMA}
  query GetUser($userId: ID!) {
    user(id: $userId) {
      _id
      ccDueDate {
        ...DateTime
      }
      cityName
      cityId
      countryCode
      countryName
      createdAt
      customerSegment
      customerSrNo
      customerType
      dateOfBirth {
        ...DateTime
      }
      email
      firstName
      fullName
      gender
      images {
        profile
      }
      isEmailVerified
      isMobileVerified
      lastName
      lastUpdatedAt {
        ...DateTime
      }
      phone
      stylist {
        ...StylistSchema
      }
      aboutMe
    }
  }
`;
