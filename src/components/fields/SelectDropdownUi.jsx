import { FormControl, InputLabel, MenuItem, Select,Grid } from "@mui/material";
import React from "react";

const SelectDropdownUi = ({ label, value, handleChange, options }) => {
  return (
    <Grid item xs={12} mb={3}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((each, idx) => (
            <MenuItem key={idx} value={each.value}>
              {each.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectDropdownUi;
