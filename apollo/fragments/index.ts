import { gql } from "@apollo/client";

export const CREDITED_SALES_TEAM_SCHEMA = gql`
  fragment CreditedSalesTeamSchema on SalesTeam {
    _id
    email
    image
    note
    phone
  }
`;

export const DATE_TIME_SCHEMA = gql`
  fragment DateTime on DateTimeSchema {
    datestamp
    day
    hour
    minute
    month
    timestamp
    year
  }
`;
export const STYLIST_SCHEMA = gql`
  fragment StylistSchema on Stylist {
    email
    image
    _id
    name
    phone
    note
  }
`;
export const USER_ADDRESS = gql`
  fragment UserAddressSchema on UserAddress {
    _id
    address1
    address2
    city
    country
    countryCode
    email
    firstName
    landmark
    lastName
    phone
    postalCode
    state
  }
`;
export const STATUS_SCHEMA = gql`
  ${DATE_TIME_SCHEMA}
  fragment StatusSchema on StatusSchema {
    _id
    dateRecorded {
      ...DateTime
    }
    label
    name
    note
    userId
  }
`;
export const STYLING_SCHEMA = gql`
  fragment Styling on Styling {
    monogram
    note
    styles {
      catTag
      image
      label
      name
      value
    }
  }
`;
export const CART_SCHEMA = gql`
  ${STYLING_SCHEMA}
  fragment CartItemSchema on CartItem {
    catId
    code
    deliveryDays
    disc
    discPrice
    images
    isPer
    itemId
    measurementId
    name
    producttypeId
    qty
    size
    price
    styling {
      ...Styling
    }
  }
`;
export const PRODUCT_ORDER_SCHEMA = gql`
  ${USER_ADDRESS}
  ${DATE_TIME_SCHEMA}
  ${STATUS_SCHEMA}
  ${CART_SCHEMA}
  fragment ProductOrderSchema on ProductOrder {
    _id
    address {
      ...UserAddressSchema
    }
    completedDateTime {
      ...DateTime
    }
    confDateTime {
      ...DateTime
    }
    discTotal
    email
    firstName
    isCaptured
    isCompleted
    isPaid
    isPaymentFailed
    isReady
    items {
      ...CartItemSchema
    }
    lastName
    note
    orderDateTime {
      ...DateTime
    }
    orderId
    orderTotal
    paidDateTime {
      ...DateTime
    }
    phone
    prefix
    razorPayId
    readyDateTime {
      ...DateTime
    }
    status {
      ...StatusSchema
    }
  }
`;
export const APPOINTMENT_SCHEMA = gql`
  ${DATE_TIME_SCHEMA}
  fragment AppointmentSchema on Appointment {
    _id
    appointmentId
    appointmentSelectedTimestamp
    appointmentType
    cityName
    countryCode
    phone
    currentStatus
    email
    firstName
    lastName
    lookingFor
    appointmentDate {
      ...DateTime
    }
    dateRecorded {
      ...DateTime
    }
    followUpDate {
      ...DateTime
    }
  }
`;
