import { gql } from "@apollo/client";
import { PRODUCT_ORDER_SCHEMA } from "../fragments";

export const GET_ALL_USER_PRODUCT_ORDERS = gql`
  ${PRODUCT_ORDER_SCHEMA}
  query GetAllUserProductOrders($userId: String!, $page: Int, $limit: Int) {
    getAllUserProductOrders(userId: $userId, page: $page, limit: $limit) {
      ...ProductOrderSchema
    }
  }
`;

export const GET_SINGLE_PRODUCT_ORDER = gql`
  ${PRODUCT_ORDER_SCHEMA}
  query GetSingleProductOrder($orderId: String!) {
    getSingleProductOrder(orderId: $orderId) {
      ...ProductOrderSchema
    }
  }
`;
