import { Grid, Button } from "@mui/material";
import React from "react";

const ButtonUi = ({
  title,
  onClick,
  endIcon,
  color,
  variant,
  sx,
  disabled,
  startIcon,
  size,
  ...rest
}) => {
  return (
    <Grid item xs={12} mb={2} >
      <Button
        color={color}
        variant={variant}
        onClick={onClick}
        endIcon={endIcon}
        disabled={disabled}
        startIcon={startIcon}
        sx={sx}
        size={size}
        {...rest}
      >
        {title}
      </Button>
    </Grid>
  );
};

export default ButtonUi;
