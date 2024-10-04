import { NetworkStatus, useLazyQuery } from "@apollo/client";
import { GET_SINGLE_APPOINTMENT } from "../queries/appointments";
import { use, useEffect, useState } from "react";
import { API_ERROR, appointmentDataType } from "@/typescript/types";
import { useParams } from "next/navigation";

const useGetSingleAppointment = () => {
  const [singleAppointment, setSingleAppointment] =
    useState<appointmentDataType>();
  const [_errorGetSingleAppointment, _setErrorGetSingleAppointment] =
    useState<API_ERROR | null>();
  const params = useParams();
  const [
    GetSingleAppointment,
    {
      loading: loadingGetSingleAppointment,
      data: dataGetSingleAppointment,
      error: errorGetSingleAppointment,
      networkStatus,
    },
  ] = useLazyQuery<
    { getSingleAppointment: appointmentDataType },
    { appointmentId: string }
  >(GET_SINGLE_APPOINTMENT);

  useEffect(() => {
    if (params?.appointmentId) {
      GetSingleAppointment({
        variables: {
          appointmentId: params?.appointmentId as string,
        },
      });
    }
  }, [params]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.ready) {
      setSingleAppointment(dataGetSingleAppointment?.getSingleAppointment);
    }
    if (networkStatus === NetworkStatus.error) {
      console.log(errorGetSingleAppointment);
    }
  }, [dataGetSingleAppointment, networkStatus, errorGetSingleAppointment]);

  return {
    loadingGetSingleAppointment,
    singleAppointment,
    errorGetSingleAppointment,
  };
};

export default useGetSingleAppointment;
