import {
  Button,
  Grid,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
  InputAdornment,
} from "@mui/material";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import { CardContent, CardMedia } from "@mui/material";
import img from "../../assets/images/Acard.gif";
import { useNavigate } from "react-router-dom";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { verificationCustomStyle } from "../../customstyle/verificationCustomStyle";
import { useFormik } from "formik";
import { verificationSchema } from "../../validation/verificationSchema";

const Verification = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  const navigate = useNavigate();
  const navigateToOtp = () => {
    navigate("/employee" + "/otp");
  };
  // const navigateToLogin = () =>{
  //   navigate("/employee"+"/loginp")
  // };

  const initialValues = {
    aadhaarNumber:'',
  }
  const formik =useFormik({
    initialValues:initialValues,
    validationSchema:verificationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigateToOtp();
    }
  });
  


  return (
    <Grid>
      <Navbar />
        <Grid
          container sx={verificationCustomStyle.sxContainer}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* left side */}
            <ThemeProvider theme={theme}>
              <Typography sx={verificationCustomStyle.sxTypographyh1}>
                Verification your identity documents
              </Typography>

              <Typography sx={verificationCustomStyle.sxTypographyh3}>
                To verify the authenticity of an applicant's passport,
              </Typography>

              <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                name="aadhaarNumber"
                value={formik.values.aadhaarNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                variant="standard"
                label="Aadhaar Card"
                placeholder="Eneter your aadhaar no"
                sx={verificationCustomStyle.sxTextfield}
                
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AddCardOutlinedIcon sx={verificationCustomStyle.sxIcon}/>
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
              {formik.errors.aadhaarNumber && formik.touched.aadhaarNumber ? (
                <Typography sx={verificationCustomStyle.sxError}>
                  {formik.errors.aadhaarNumber}
                </Typography>
              ) : null}


              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                maxWidth={539}
                py={4}
              >
                <Button
                  type="submit"
                  fullWidth
                  //onClick={navigateToOtp}
                  variant="contained"
                  sx={verificationCustomStyle.sxButtonNext}
                >
                  Next
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
            lg={6}
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
      <Footer/>
    </Grid>
  );
};

export default Verification;
