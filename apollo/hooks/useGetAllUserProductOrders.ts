import { NetworkStatus, useLazyQuery } from "@apollo/client";
import { GET_ALL_USER_PRODUCT_ORDERS } from "../queries/orders";
import { useEffect, useState } from "react";
import { SAMPLE_USER_ID } from "@/utils/constants";
import { API_ERROR, orderType } from "@/typescript/types";
import { ERROR_TYPE } from "@/typescript/enums";
import { getErrorStatusMessage } from "@/utils/actions";

const useGetAllUserProductOrders = () => {
  const [allUserOrders, setAllUserOrders] = useState<orderType[]>([]);
  const [_errorGetAllUserProductOrders, _setErrorGetAllUserProductOrders] =
    useState<API_ERROR | null>(null);
  const [
    GetAllUserProductOrders,
    {
      loading: loadingGetAllUserProductOrders,
      data: dataGetAllUserProductOrders,
      error: errorGetAllUserProductOrders,
      networkStatus,
    },
  ] = useLazyQuery<
    { getAllUserProductOrders: orderType[] },
    { userId: string; page: number; limit: number }
  >(GET_ALL_USER_PRODUCT_ORDERS);

  useEffect(() => {
    GetAllUserProductOrders({
      variables: {
        userId: SAMPLE_USER_ID,
        page: 1,
        limit: 100,
      },
    });
  }, []);

  useEffect(() => {
    if (networkStatus === NetworkStatus.ready) {
      if (dataGetAllUserProductOrders?.getAllUserProductOrders) {
        setAllUserOrders(dataGetAllUserProductOrders?.getAllUserProductOrders);
      }
    }
    if (networkStatus === NetworkStatus.error) {
      if (errorGetAllUserProductOrders?.networkError) {
        const error = getErrorStatusMessage(
          "getAllUserProductOrders",
          ERROR_TYPE.SERVER
        );
        _setErrorGetAllUserProductOrders(error);
      } else {
        const error = getErrorStatusMessage(
          "getAllUserProductOrders",
          ERROR_TYPE.APOLLO
        );
        _setErrorGetAllUserProductOrders(error);
      }
    }
  }, [
    dataGetAllUserProductOrders,
    networkStatus,
    errorGetAllUserProductOrders,
  ]);

  return {
    allUserOrders,
    loadingGetAllUserProductOrders,
    _errorGetAllUserProductOrders,
  };
};

export default useGetAllUserProductOrders;
