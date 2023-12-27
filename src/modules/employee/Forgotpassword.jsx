import {
  Button,
  Grid,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
  InputAdornment,
} from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { CardContent, CardMedia } from "@mui/material";
import img from "../../assets/images/Forgotpassword.gif";
import { useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../../validation/forgotPasswordSchema";

import React from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import Footer from "./Footer";
import { forgotCustomStyle } from "../../customstyle/forgotCustomStyle";

const Forgotpassword = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  const navigate = useNavigate();
  const navigateToSet = () => {
    navigate("/employee" + "/setp");
  };
  const navigateToLogin = () => {
    navigate("/employee" + "/loginp");
  };

  const initialValues = {
    email: "",
  };

  const formik =
    useFormik({
      initialValues: initialValues,
      validationSchema: forgotPasswordSchema,
      onSubmit: (values) => {
        console.log(values);
        navigateToSet();
      },
    });

  return (
    <Grid>
      <Navbar />
      <Grid container sx={forgotCustomStyle.sxContainer}>
        <Grid item xs={12} sm={12} md={6}>
          {/* left side */}
          <ThemeProvider theme={theme}>
            <Typography sx={forgotCustomStyle.sxTypographyh1}>
              Forgot your passowrd
            </Typography>

            <Typography sx={forgotCustomStyle.sxTypographyh3}>
              Enter your email to forgot your password
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
                sx={forgotCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlinedIcon sx={forgotCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
              {formik.errors.email && formik.touched.email ? (
                <Typography sx={forgotCustomStyle.sxError}>
                  {formik.errors.email}
                </Typography>
              ) : null}

              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                maxWidth={539}
              >
                <Button
                  type="submit"
                  fullWidth
                  //onClick={navigateToSet}
                  variant="contained"
                  sx={forgotCustomStyle.sxForgot}
                >
                  Forgot Passowrd
                </Button>
              </Grid>
            </form>

            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              maxWidth={539}
            >
              <Button
                fullWidth
                onClick={navigateToLogin}
                variant="contained"
                sx={forgotCustomStyle.sxButtonLogin}
              >
                Login
              </Button>
            </Grid>
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

export default Forgotpassword;
