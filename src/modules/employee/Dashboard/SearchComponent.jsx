import React from "react";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { LuSearch } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { useFormik } from "formik";
import { searchSchema } from "./dashboardValidation/searchSchema";

const StyledTypography = styled(Typography)({
  fontSize: "26px",
  fontWeight: 500,
});
const StyledLuSearch = styled(LuSearch)({
  fontSize: "25px",
  color: "#B4B4B4",
});
const StyledSlLocation = styled(SlLocationPin)({
  fontSize: "24px",
  color: "#B4B4B4",
});
const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontSize: "16px",
  },
});
const StyledButtonFind = styled(Button)({
  fontSize: "14px",
  backgroundColor: "#14C38E",
  "&:hover": { backgroundColor: "#14C38E" },
  textTransform: "capitalize",
  borderRadius: "10px",
});
const StyledButtonLuSerach = styled(LuSearch)({
  fontSize: "16px",
});
const StyledTypographyLast = styled(Typography)({
  color: "#14C38E",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  
});

const SearchComponent = () => {
  const initialValues = {
    search: "",
    location: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: searchSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  

  return (
    <Grid>
      {/* searchbar start */}
      <Card elevation={0}>
        <CardContent>
          <StyledTypography>Hello Andre Salmanan</StyledTypography>

          {/* desktop screen start */}
          <form onSubmit={formik.handleSubmit}>
            <Grid sx={{ display: { xs: "none", lg: "block" } }}>
              <Grid
                container
                sx={{
                  bgcolor: "#F8FAFC",
                  paddingY: 0.9,
                  borderRadius: 2,
                  marginY: 2,
                }}
              >
                {/* Search bar */}
                <Grid item>
                  <StyledTextField
                    type="text"
                    value={formik.values.search}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    variant="standard"
                    fullWidth
                    placeholder="Search"
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <IconButton>
                          <StyledLuSearch />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>

                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  mx={"auto"}
                />
                {/* location */}
                <Grid item>
                  <StyledTextField
                    type="text"
                    name="location"
                    value={formik.values.location}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    variant="standard"
                    fullWidth
                    placeholder="Any location"
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <IconButton>
                          <StyledSlLocation />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>

                <Grid item mx={"auto"} alignItems={"center"}>
                  <StyledButtonFind
                    type="submit"
                    variant="contained"
                    startIcon={<StyledButtonLuSerach />}
                    fullWidth
                    elevation={0.1}
                  >
                    Find jobs
                  </StyledButtonFind>
                </Grid>
              </Grid>
              <Grid
                container
                maxWidth={500}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid item mx={"auto"}>
                  {formik.errors.search && formik.touched.search ? (
                    <Typography
                      sx={{ color: "red", fontSize: 13, marginTop: -2 }}
                    >
                      {formik.errors.search}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item mx={"auto"}>
                  {formik.errors.location && formik.touched.location ? (
                    <Typography
                      sx={{ color: "red", fontSize: 13, marginTop: -2 }}
                    >
                      {formik.errors.location}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>

            {/* desktop screen end */}

            {/* mobile, tab screen start*/}
            <Grid sx={{ display: { xs: "block", lg: "none" } }}>
              <Grid container>
                {/* Search bar */}
                <Grid
                  xs={12}
                  item
                  bgcolor={"#F8FAFC"}
                  sx={{
                    borderRadius: 2,
                    marginY: 1,
                  }}
                >
                  <TextField
                    type="text"
                    name="search"
                    value={formik.values.search}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    variant="standard"
                    fullWidth
                    placeholder="Search"
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <IconButton>
                          <LuSearch sx={{ height: "full", width: "full" }} />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                {formik.errors.search && formik.touched.search ? (
                  <Typography
                    sx={{ color: "red", fontSize: 13, marginTop: -1 }}
                  >
                    {formik.errors.search}
                  </Typography>
                ) : null}

                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  mx={"auto"}
                  sx={{ display: { xs: "none" } }}
                />
                {/* location */}
                <Grid
                  xs={12}
                  item
                  bgcolor={"#F8FAFC"}
                  sx={{
                    borderRadius: 2,
                  }}
                >
                  <TextField
                    type="text"
                    name="location"
                    value={formik.values.location}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    variant="standard"
                    fullWidth
                    placeholder="Any location"
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <IconButton>
                          <SlLocationPin sx={{ height: 40, width: 40 }} />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                {formik.errors.location && formik.touched.location ? (
                  <Typography
                    sx={{ color: "red", fontSize: 13, marginBottom: -2 }}
                  >
                    {formik.errors.location}
                  </Typography>
                ) : null}

                <Grid item xs={12} mx={"auto"} alignItems={"center"}>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<LuSearch />}
                    fullWidth
                    elevation={0.1}
                    sx={{
                      bgcolor: "#14C38E",
                      "&:hover": { bgcolor: "#14C38E" },
                      textTransform: "capitalize",
                      borderRadius: 2,
                      marginY: 2,
                    }}
                  >
                    Find jobs
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
          {/* mobile, tab screen end */}

          <Grid
            item
            sx={{
              bgcolor: "#E6FFE2",
              borderRadius: 2,
              paddingY:1.4,
            }}
          >
            <StyledTypographyLast>55 jobs</StyledTypographyLast>
          </Grid>
        </CardContent>
      </Card>
      {/* searchbar end */}
    </Grid>
  );
};

export default SearchComponent;
