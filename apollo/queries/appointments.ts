import { gql } from "@apollo/client";
import { APPOINTMENT_SCHEMA } from "../fragments";

export const GET_ALL_APPOINTMENTS = gql`
  ${APPOINTMENT_SCHEMA}
  query GetAllAppointments($params: AppointmentFilterInput!) {
    getAllAppointments(params: $params) {
      appointments {
        ...AppointmentSchema
      }
      totalItemCount
    }
  }
`;

export const GET_SINGLE_APPOINTMENT = gql`
  ${APPOINTMENT_SCHEMA}
  query GetSingleAppointment($appointmentId: String!) {
    getSingleAppointment(appointmentId: $appointmentId) {
      ...AppointmentSchema
    }
  }
`;
