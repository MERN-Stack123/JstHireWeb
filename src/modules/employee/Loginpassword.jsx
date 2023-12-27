import {
  Button,
  Grid,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
  InputAdornment,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { CardContent, CardMedia } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import img from "../../assets/images/Login.gif";
import { useNavigate } from "react-router-dom";

import React from "react";
import Navbar from "./Navbar";
import { useFormik, Field } from "formik";
import { loginPasswordSchema } from "../../validation/loginPasswordSchema";
import Footer from "./Footer";
import { loginPasswordCustomStyle } from "../../customstyle/loginPasswordCustomStyle";

const Loginpassword = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/employee" + "/loginO");
  };

  const navigateToForgotP = () => {
    navigate("/employee" + "/forgotp");
  };

  const initialValues = {
    email: "",
    password: "",
    check: false,
  };

  const formik =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginPasswordSchema,
      onSubmit: (values) => {
        console.log(values);
        formik.resetForm();
      },
    });
  

  return (
    <Grid>
      <Navbar />
      <Grid container sx={loginPasswordCustomStyle.sxContainer}>
        <Grid item xs={12} sm={12} md={6}>
          {/* left side */}
          <ThemeProvider theme={theme}>
            <Typography sx={loginPasswordCustomStyle.sxTypographyh1}>
              Welcome to your professional community
            </Typography>

            <Typography sx={loginPasswordCustomStyle.sxTypographyh3}>
              Explore thousands of jobs in one place and get the job your dream.
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                autoComplete="off"
                type="email"
                variant="standard"
                label="Email"
                placeholder="Andresalmanan@outlook.com"
                sx={loginPasswordCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlinedIcon sx={loginPasswordCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.email && formik.touched.email ? (
                <Typography sx={loginPasswordCustomStyle.sxError}>
                  {formik.errors.email}
                </Typography>
              ) : null}

              <TextField
                fullWidth
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                autoComplete="off"
                type="password"
                variant="standard"
                label="Password"
                placeholder="Placeholder the Passowrd"
                sx={loginPasswordCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon sx={loginPasswordCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />

              {formik.errors.password && formik.touched.password ? (
                <Typography sx={loginPasswordCustomStyle.sxError}>
                  {formik.errors.password}
                </Typography>
              ) : null}

              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                maxWidth={539}
              >
                <FormGroup>
                  <FormControlLabel
                    name="check"
                    value={formik.values.check}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    control={<Checkbox sx={loginPasswordCustomStyle.sxCheck} />}
                    label="Remember Me"
                    bgcolor="#14C38E"
                  />
                </FormGroup>

                {formik.errors.check && formik.touched.check ? (
                  <Typography sx={loginPasswordCustomStyle.sxError}>
                    {formik.errors.check}
                  </Typography>
                ) : null}

                {/* forgot password */}
                <Typography
                  onClick={navigateToForgotP}
                  sx={loginPasswordCustomStyle.sxForgot}
                >
                  Forgot Passowrd ?
                </Typography>
              </Grid>

              <Grid container justifyContent="flex-start" alignItems="center">
                <Typography sx={loginPasswordCustomStyle.sxOr}>Or,</Typography>
                <Typography
                  onClick={navigateToLogin}
                  sx={loginPasswordCustomStyle.sxOtp}
                >
                  Login via OTP
                </Typography>
              </Grid>

              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                maxWidth={539}
              >
                <Button
                  type="submit"
                  sx={loginPasswordCustomStyle.sxButtonLogin}
                >
                  Login
                </Button>
              </Grid>
            </form>
          </ThemeProvider>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          justifyContent="center"
          alignItems="center"
        >
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
export default Loginpassword;
