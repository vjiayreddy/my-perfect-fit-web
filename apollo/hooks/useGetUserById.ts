import { useLazyQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../queries/user";
import { useEffect } from "react";
import { SAMPLE_USER_ID } from "@/utils/constants";
import { userDataType } from "@/typescript/types";

const useGetUserById = () => {
  /**
   * Apollo client query
   */
  const [
    GetUser,
    {
      loading: loadingGetUser,
      data: dataGetUser,
      error: errorGetUser,
      networkStatus,
    },
  ] = useLazyQuery<{ user: userDataType }, { userId: string }>(GET_USER_BY_ID);
  /**
   * Get User Data form Database
   */
  useEffect(() => {
    const getUserById = async () => {
      await GetUser({ variables: { userId: SAMPLE_USER_ID } });
    };
    getUserById();
  }, []);

  return {
    loadingGetUser,
    errorGetUser,
    dataGetUser,
  };
};

export default useGetUserById;
