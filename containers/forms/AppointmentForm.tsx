import React from "react";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import TextInputFieldComponent from "@/components/formFields/textInputField";
import FormMobileInput from "@/components/formFields/phoneInput";
import DatePickerInputFieldComponent from "@/components/formFields/datePickerInputField";
import FormTimePickerField from "@/components/formFields/TimePickerField";
import FormSelectInputField from "@/components/formFields/selectInputField";
import { appointmenType } from "@/utils/mockData";
import { Button } from "@mui/material";

interface AppointmentFormProps {
  formFieldsSize?: "small" | "medium";
}

const AppointmentForm = ({
  formFieldsSize = "medium",
}: AppointmentFormProps) => {
  const { control } = useForm();
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6} lg={6} xl={6}>
        <TextInputFieldComponent
          textFieldProps={{
            fullWidth: true,
            placeholder: "Enter Frist Name",
            size: formFieldsSize,
          }}
          defaultValue=""
          label=""
          control={control}
          name="firstName"
          id="form_first_name"
        />
      </Grid>
      <Grid item xs={6} md={6} lg={6} xl={6}>
        <TextInputFieldComponent
          textFieldProps={{
            fullWidth: true,
            placeholder: "Enter Last Name",
            size: formFieldsSize,
          }}
          defaultValue=""
          label=""
          control={control}
          name="lastName"
          id="form_last_name"
        />
      </Grid>
      <Grid item xs={12}>
        <FormMobileInput
          label=""
          size={formFieldsSize}
          name="phone"
          defaultValue=""
          control={control}
          id="form_phone"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputFieldComponent
          textFieldProps={{
            fullWidth: true,
            placeholder: "Enter email address",
            size: formFieldsSize,
          }}
          defaultValue=""
          label=""
          control={control}
          name="email"
          id="form_email"
        />
      </Grid>
      <Grid item xs={6}>
        <DatePickerInputFieldComponent
          control={control}
          name="date"
          id="form_date"
          label=""
          size={formFieldsSize}
          defaultValue=""
        />
      </Grid>
      <Grid item xs={6}>
        <FormTimePickerField
          control={control}
          name="time"
          id="form_time"
          label=""
          size={formFieldsSize}
          defaultValue=""
        />
      </Grid>
      <Grid item xs={6}>
        <TextInputFieldComponent
          textFieldProps={{
            fullWidth: true,
            placeholder: "Enter city name",
            size: formFieldsSize,
          }}
          defaultValue=""
          label=""
          control={control}
          name="city"
          id="form_city"
        />
      </Grid>
      <Grid item xs={6}>
        <FormSelectInputField
          options={appointmenType}
          displayLabel="name"
          targetLabel="value"
          defaultValue=""
          label=""
          control={control}
          size={formFieldsSize}
          name="studioType"
          id="form_studio_type"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputFieldComponent
          textFieldProps={{
            fullWidth: true,
            placeholder: "Enter looking for ",
            size: formFieldsSize,

          }}
          defaultValue=""
          label=""
          control={control}
          name="lookingFor"
          id="form_looking_for"
        />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth={true} size="large" color="secondary">
          Book Appointment
        </Button>
      </Grid>
    </Grid>
  );
};

export default AppointmentForm;
