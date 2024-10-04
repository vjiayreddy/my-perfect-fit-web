import { useEffect, useState } from "react";
import { NetworkStatus, useLazyQuery } from "@apollo/client";
import { GET_ALL_APPOINTMENTS } from "../queries/appointments";
import { appointmentDataType } from "@/typescript/types";
import { SAMPLE_USER_ID } from "@/utils/constants";
import _ from "lodash";

type appointmentParamsType = {
  page: number;
  limit: number;
  params: {
    userId: string;
    appointmentId?: number;
    searchTerm?: string;
  };
};

const useGetAllAppointments = () => {
  const [allAppointments, setAllAppointments] = useState<appointmentDataType[]>(
    []
  );
  const [totalAppointmentsCount, setTotalAppointmentsCount] =
    useState<number>(0);
  const [
    GetAllAppointments,
    {
      loading: loadingGetAllAppointments,
      error: errorGetAllAppointments,
      data: dataGetAllAppointments,
      networkStatus,
    },
  ] = useLazyQuery<
    {
      getAllAppointments: {
        appointments: appointmentDataType[];
        totalItemCount: number;
      };
    },
    appointmentParamsType
  >(GET_ALL_APPOINTMENTS);

  useEffect(() => {
    GetAllAppointments({
      variables: {
        limit: 100,
        page: 1,
        params: {
          userId: SAMPLE_USER_ID,
        },
      },
    });
  }, []);

  useEffect(() => {
    if (
      networkStatus === NetworkStatus.ready &&
      !_.isEmpty(dataGetAllAppointments)
    ) {
      setAllAppointments(
        dataGetAllAppointments.getAllAppointments.appointments
      );
      setTotalAppointmentsCount(
        dataGetAllAppointments.getAllAppointments.totalItemCount
      );
    }
    if (networkStatus === NetworkStatus.error && !dataGetAllAppointments) {
      console.log(errorGetAllAppointments);
    }
  }, [networkStatus, dataGetAllAppointments, errorGetAllAppointments]);

  return {
    totalAppointmentsCount,
    allAppointments,
    loadingGetAllAppointments,
    errorGetAllAppointments,
  };
};

export default useGetAllAppointments;
