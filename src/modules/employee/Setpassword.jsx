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
import { CardContent, CardMedia } from "@mui/material";
import img from "../../assets/images/Resetpassword.gif";
import { useNavigate } from "react-router-dom";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { setCustomStyle } from "../../customstyle/setCustomStyle";
import { useFormik } from "formik";
import { setPasswordSchema } from "../../validation/setPasswordSchema";

const Setpassword = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/employee" + "/loginp");
  };

  const initialValues = {
    newpassword: '',
    confirmpassword: '',
  }

  const formik =
    useFormik({
      initialValues:initialValues,
      validationSchema:setPasswordSchema,
      onSubmit: (values) =>{
        console.log(values);
        formik.resetForm();
      }
    });
    
    
  return (
    <Grid>
      <Navbar />
      <Grid container sx={setCustomStyle.sxContainer}>
        <Grid item xs={12} sm={12} md={6}>
          {/* left side */}
          <ThemeProvider theme={theme}>
            <Typography sx={setCustomStyle.sxTypographyh1}>
              Reset your passowrd
            </Typography>

            <Typography sx={setCustomStyle.sxTypographyh3}>
              Secure your account with strong passowrd
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                name="newpassword"
                value={formik.values.newpassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                autoComplete="off"
                type="password"
                variant="standard"
                label="New Password"
                placeholder=" New Password"
                
                sx={setCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon sx={setCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />
              {formik.errors.newpassword && formik.touched.newpassword ? (
                <Typography sx={setCustomStyle.sxError}>
                  {formik.errors.newpassword}
                </Typography>
              ) : null}

              <TextField
                fullWidth
                name="confirmpassword"
                value={formik.values.confirmpassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                autoComplete="off"
                type="password"
                variant="standard"
                label="Confirm Password"
                placeholder="Confirm Password"
                

                sx={setCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon sx={setCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
              {formik.errors.confirmpassword && formik.touched.confirmpassword ? (
                <Typography sx={setCustomStyle.sxError}>
                  {formik.errors.confirmpassword}
                </Typography>
              ) : null}

              <Grid container justifyContent="flex-start" alignItems="center">
                <Typography sx={setCustomStyle.sxTypoAccount}>
                  Already have an account
                </Typography>

                <Typography
                  onClick={navigateToLogin}
                  sx={setCustomStyle.sxTypoLogin}
                >
                  Login
                </Typography>

                <Typography sx={setCustomStyle.sxMark}>?</Typography>
              </Grid>

              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                maxWidth={539}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={setCustomStyle.sxButtonChangePassword}
                >
                  Change Passowrd
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

export default Setpassword;
