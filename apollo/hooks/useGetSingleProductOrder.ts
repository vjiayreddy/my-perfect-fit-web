import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_SINGLE_PRODUCT_ORDER } from "../queries/orders";
import { orderType } from "@/typescript/types";
import { useParams } from "next/navigation";

const useGetSingleProductOrder = () => {
  const params = useParams();
  const [
    GetSingleProductOrder,
    {
      loading: loadingGetSingleProductOrder,
      error: errorGetSingleProductOrder,
      data: dataGetSingleProductOrder,
    },
  ] = useLazyQuery<{ getSingleProductOrder: orderType }, { orderId: string }>(
    GET_SINGLE_PRODUCT_ORDER
  );

  useEffect(() => {
    if (params.orderId) {
      GetSingleProductOrder({
        variables: {
          orderId: params.orderId as string,
        },
      });
    }
  }, [params]);

  return {
    loadingGetSingleProductOrder,
    errorGetSingleProductOrder,
    dataGetSingleProductOrder,
  };
};

export default useGetSingleProductOrder;
