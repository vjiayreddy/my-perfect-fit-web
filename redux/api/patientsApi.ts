import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "./routers";
import _ from "lodash";

export const patientApi = createApi({
  reducerPath: "patientsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    filterPatients: builder.query({
      query: () => API_ROUTES.FILTER_PATIENTS,
      transformResponse: (response: any) => {
        if (response?.data?.length > 0) {
          const patients = _.filter(response?.data, (item: any) =>
            _.hasIn(item, "firstName")
          );
          return {
            data: _.uniqBy(patients, "firstName"),
          };
        }
        return {
          data: [],
        };
      },
    }),
  }),
});

export const {
  useFilterPatientsQuery,
  useLazyFilterPatientsQuery,
  usePrefetch,
} = patientApi;
