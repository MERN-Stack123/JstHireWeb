import React from "react";
import TextField from "@mui/material/TextField";

const AddressArea = ({
  startAdornment,
  endAdornment,
  type,
  name,
  autoComplete,
  variant,
  label,
  sx,
  inputMode,
  inputProps,
  rows,
  ...rest
}) => {
  return (
    <TextField
      fullWidth
      multiline
      minRows={rows || 2}
      maxRows={10}
      type={type || "text"}
      name={name}
      autoComplete={autoComplete || "off"}
      variant={variant || "standard"}
      label={label}
      sx={sx}
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
      inputProps={inputProps}
      {...rest}
    />
  );
};

export default AddressArea;
