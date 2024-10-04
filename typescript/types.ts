export type faqType = {
  _id: any;
  question: string;
  answer: string;
};
export type findStylistCardDataType = {
  _id: any;
  name: string;
  image: string;
  description: string;
  btnTitle: string;
  icon: string;
};
export type looksCardDataType = {
  _id: any;
  name: string;
  image: string;
};
export type mediaDataType = {
  _id: any;
  name: string;
  image: string;
  link: string;
};
export type mostLovedDataType = {
  _id: any;
  totalReviews: number;
  rating: number;
  name: string;
  icon: string;
};

export type dateTimeDataType = {
  timestamp: any;
  datestamp: string;
  day: number;
  hour: number;
  minute: number;
  month: number;
  year: number;
};

/**
 * USER TYPE
 */

export type userDataType = {
  _id: string;
  cityName: string;
  cityId: string;
  createdAt: string;
  customerSegment: string;
  customerSrNo: number;
  customerType: string;
  email: string;
  firstName: string;
  fullName: string;
  gender: string;
  images: {
    profile: string;
  };
  dateOfBirth: dateTimeDataType;
  lastUpdatedAt: dateTimeDataType;
  isEmailVerified: boolean;
  isMobileVerified: boolean;
  lastName: string;
  phone: string;
  countryCode: string;
  aboutMe: string;
  stylist: stylesDataType[];
};

export type addressDateType = {
  _id: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  countryCode: string;
  email: string;
  firstName: string;
  landmark: string;
  lastName: string;
  phone: string;
  postalCode: string;
  state: string;
};

export type stylesDataType = {
  catTag: string;
  image: string;
  label: string;
  name: string;
  value: string;
};

export type stylingDataType = {
  monogram: string;
  note: string;
  styles: [stylesDataType];
};

export type orderCartItemDataType = {
  amount: number;
  catId: string;
  code: string;
  deliveryDays: number;
  disc: number;
  discPrice: number;
  images: [string];
  isPer: boolean;
  itemId: string;
  measurementId: string;
  name: string;
  price: number;
  producttypeId: string;
  qty: number;
  size: string;
  styling: stylingDataType;
};

export type statusDataType = {
  _id: string;
  dateRecorded: dateTimeDataType;
  label: string;
  name: string;
  note: string;
  userId: string;
};

export type API_ERROR = {
  type: string;
  query: string;
  message: string;
};

export type orderType = {
  _id: string;
  address: addressDateType;
  completedDateTime: dateTimeDataType;
  orderDateTime: dateTimeDataType;
  orderTotal: number;
  confDateTime: dateTimeDataType;
  discTotal: number;
  email: string;
  firstName: string;
  isCaptured: boolean;
  isCompleted: boolean;
  isPaid: boolean;
  isPaymentFailed: boolean;
  isReady: boolean;
  paidDateTime: dateTimeDataType;
  phone: string;
  prefix: string;
  razorPayId: string;
  readyDateTime: dateTimeDataType;
  status: [statusDataType];
  items: [orderCartItemDataType];
  orderId: number;
};

export type appointmentDataType = {
  _id: string;
  appointmentDate: dateTimeDataType;
  appointmentId: string;
  email: string;
  phone: string;
  appointmentSelectedTimestamp: string;
  appointmentType: string;
  cityName: string;
  countryCode: string;
  firstName: string;
  lastName: string;
  lookingFor: string;
};
