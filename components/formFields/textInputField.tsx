import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";

interface TextInputFieldComponentProps {
  id: string;
  name: string;
  control: Control<FieldValues, object> | any;
  rules?: any;
  label: string;
  defaultValue: string;
  textFieldProps: TextFieldProps;
}

const TextInputFieldComponent = ({
  id,
  name,
  control,
  rules,
  label,
  defaultValue,
  textFieldProps,
}: TextInputFieldComponentProps) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => {
          return (
            <>
              <TextField
                id={id}
                variant="outlined"
                label={label}
                {...field}
                {...textFieldProps}
                error={!!fieldState?.error}
                margin="none"
              />
              {!!fieldState?.error && (
                <FormHelperText sx={{ marginLeft: 0 }} error={true}>
                  {fieldState?.error?.message}
                </FormHelperText>
              )}
            </>
          );
        }}
      />
    </FormControl>
  );
};

export default TextInputFieldComponent;
