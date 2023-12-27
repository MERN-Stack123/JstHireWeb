import { Grid, TextField } from "@mui/material";
import React from "react";

const TextFieldUi = ({
  startAdornment,
  endAdornment,
  type,
  name,
  autoComplete,
  variant,
  label,
  placeholder,
  sx,
  inputMode,
  inputProps,
  ...rest
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        type={type || "text"}
        name={name}
        autoComplete={autoComplete || "off"}
        variant={variant || "standard"}
        label={label}
        placeholder={placeholder}
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
    </Grid>
  );
};

export default TextFieldUi;
