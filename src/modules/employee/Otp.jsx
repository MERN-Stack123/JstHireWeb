import {
  Button,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  InputAdornment,
} from "@mui/material";
import { CardContent, CardMedia } from "@mui/material";
import img from "../../assets/images/Otp1.gif";
// import { useNavigate } from "react-router-dom";

import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { MuiOtpInput } from "mui-one-time-password-input";

import { Box } from "@mui/system";
import Footer from "./Footer";
import { otpCustomStyle } from "../../customstyle/otpCustomStyle";
import { useFormik } from "formik";
import { otpSchema } from "../../validation/otpSchema";

const Otp = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  // const navigate = useNavigate();
  // const navigateToSet = () => {
  //   navigate("/employee"+"/setp");
  // };

  
  const initialValues = {
    otp: "",
  };

  const formik =
    useFormik({
      initialValues: initialValues,
      validationSchema: otpSchema,
      onSubmit: (values) => {
        console.log(values);
        formik.resetForm();
      },
    });

  const handleChange = (value) => {
    formik.setFieldValue('otp', value)
  };
//   const handleReset = () => {
//     formik.resetForm();
//   };

  return (
    <Grid>
      <Navbar />
      <Grid container sx={otpCustomStyle.sxContainer}>
        <Grid item xs={12} md={6}>
          {/* left side */}
          <ThemeProvider theme={theme}>
            <Typography sx={otpCustomStyle.sxTypographyh1}>
              Verification Code
            </Typography>

            <Typography sx={otpCustomStyle.sxTypographyh3}>
              Please enter the 6 digit verification code
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Box>
                <MuiOtpInput
                  name="otp"
                  value={formik.values.otp}
                  onBlur={formik.handleBlur}
                  onChange={handleChange}
                  length={6}
                  sx={otpCustomStyle.sxMenuIcon}
                />
              </Box>
              {formik.errors.otp && formik.touched.otp ? (
                <Typography sx={otpCustomStyle.sxError}>
                  {formik.errors.otp}
                </Typography>
              ) : null}

              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                maxWidth={539}
                py={4}
              >
                <Button fullWidth type="submit" sx={otpCustomStyle.sxButton}>
                  Submit
                </Button>
              </Grid>
            </form>
          </ThemeProvider>
        </Grid>

        <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
          {/* right side */}
          <CardContent>
            <CardMedia
              component="img"
              alt="im_error"
              height="full"
              width="full"
              src={img}
              title="Image Title"
            />
          </CardContent>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Otp;
