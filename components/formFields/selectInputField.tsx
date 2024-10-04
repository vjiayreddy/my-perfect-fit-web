import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

interface FormSelectInputFieldProps {
  id: string;
  name: string;
  control: Control<FieldValues, object> | any;
  rules?: any;
  label: string;
  defaultValue: string;
  options: any[];
  displayLabel: string;
  targetLabel: string;
  selectFilesProps?: SelectProps;
  size?: "small" | "medium";
}

const FormSelectInputField = ({
  id,
  size = "small",
  name,
  options,
  control,
  rules,
  label,
  targetLabel,
  displayLabel,
  defaultValue,
  selectFilesProps,
}: FormSelectInputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <FormControl sx={{ minWidth: "100%" }} size={size}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
              {...field}
              fullWidth={true}
              labelId={id}
              id={id}
              label={label}
              {...selectFilesProps}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option[targetLabel]}>
                  {option[displayLabel]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {fieldState?.error && (
            <FormHelperText error>{fieldState.error.message}</FormHelperText>
          )}
        </>
      )}
    ></Controller>
  );
};

export default FormSelectInputField;
