import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  FormControlLabel,
  TextField,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { LuSearch } from "react-icons/lu";
import React from "react";

const StyledLabel = styled("label")({
  fontSize: "12px",
  fontWeight: 500,
});
const StyledTypography = styled(Typography)({
  fontSize: "12px",
  fontWeight: 500,
  color: "#B6B6B6",
  textTransform: "lowercase",
  ml: "auto",
});
const StyledButton = styled(Button)({
  fontSize: "12px",
  fontWeight: 500,
  color: "#22EFB1",
  textTransform: "initial",
  variant: "text",
});
const StyledTypographyEx = styled(Typography)({
  fontSize: "14px",
  fontWeight: 500,
  color: "#14C38E",
});
const StyledCheckBox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    fontSize: "18px",
  },
  "& .MuiIconButton-root": {
    alignItems: "center",
  },
  "&.Mui-checked": {
    color: "#14C38E", 
  },
});
const StyledGrid = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledGridSerach = styled(Grid)({
  backgroundColor: "#F8FAFC",
  borderRadius: "5px",
  paddingTop: 4,
  paddingBottom: 4,
});
const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontSize: "13px",
  },
});
const StyledLuSearch = styled(LuSearch)({
  fontSize: "18px",
  color: "#B4B4B4",
});
const StyledCardContent = styled(CardContent)({
  marginTop: "-7px",
  marginBottom: "-13px",
});

const JobLocation = () => {
  return (
    <Grid>
      <Card elevation={0}>
        <StyledCardContent>
          <StyledGrid container>
            <StyledTypographyEx>Job Location</StyledTypographyEx>
            <StyledButton type="submit">Clear</StyledButton>
          </StyledGrid>
          {/* on site start */}
          <StyledGrid container>
            <FormControlLabel
              control={<StyledCheckBox name="checkbox1" />}
              label={<StyledLabel>On Site</StyledLabel>}
            />
            <StyledTypography>255 jobs</StyledTypography>
          </StyledGrid>
          {/* on site end */}

          {/* search bar start */}
          <StyledGrid container>
            <Grid container>
              <StyledGridSerach xs={12} item>
                <StyledTextField
                  type="text"
                  name="search"
                  // value={formik.values.search}
                  // onBlur={formik.handleBlur}
                  // onChange={formik.handleChange}
                  autoComplete="off"
                  variant="standard"
                  fullWidth
                  placeholder="Search by loaction"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <IconButton>
                        <StyledLuSearch />
                      </IconButton>
                    ),
                  }}
                />
              </StyledGridSerach>
            </Grid>

            {/* {formik.errors.search && formik.touched.search ? (
                  <Typography sx={{ color: "red", fontSize: 13, marginTop:-1,}}>
                    {formik.errors.search}
                  </Typography>
                ) : null} */}
          </StyledGrid>
          {/* search bar end */}

          {/* remote start */}
          <StyledGrid container>
            <FormControlLabel
              control={<StyledCheckBox name="checkbox3" />}
              label={<StyledLabel>Reomte</StyledLabel>}
            />
            <StyledTypography>404 jobs</StyledTypography>
          </StyledGrid>
          {/* remote end */}
        </StyledCardContent>
      </Card>
    </Grid>
  );
};

export default JobLocation;
