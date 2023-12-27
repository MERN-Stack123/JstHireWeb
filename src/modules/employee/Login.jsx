import {
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  InputAdornment,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import { CardContent, CardMedia } from "@mui/material";
import img from "../../assets/images/Login.gif";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import { loginOtpSchema } from "../../validation/loginOtpSchema";
import Footer from "./Footer";
import { loginOtpCustomStyle } from "../../customstyle/loginOtpCustomStyle";
import { useDispatch, useSelector } from "react-redux";
import ButtonUi from "../../components/fields/ButtonUi";
import DialogBox from "../../components/fields/DialogBox";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { FadeLoader } from "react-spinners";
import TextFieldUi from "../../components/fields/TextFieldUi";
import { ButtonUiStyle } from "../../customstyle/ButtonUiStyle";
import { loginUser, verifyOtp } from "../../redux/actions/loginOtpAction";

const Login = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.loginotp.loginStatus);
  const verificationStatus = useSelector(
    (state) => state.loginotp.verificationStatus
  ); 
  const isLoading = useSelector((state) => state.loginotp.loading);
  const error = useSelector((state) => state.loginotp.error);

  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/employee" + "/loginp");
  };
  const navigateToVerify = () => {
    navigate("/employee" + "/verify");
  };
  const navigateToForgotP = () => {
    navigate("/employee" + "/forgotp");
  };

  const navigateToLandPage = () => {
    navigate("/");
    setOpen(false);
  };

  const initialValues = {
    phonenumber: "",
    otp: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginOtpSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginUser(values));
      dispatch(verifyOtp(values));
      formik.resetForm();
    },
  });

  return (
    <Grid>
      <Navbar />
      <Grid container sx={loginOtpCustomStyle.sxContainer}>
        <Grid item xs={12} md={6}>
          {/* left side */}
          <ThemeProvider theme={theme}>
            <Typography sx={loginOtpCustomStyle.sxTypographyh1}>
              Welcome to your professional community
            </Typography>

            <Typography sx={loginOtpCustomStyle.sxTypographyh3}>
              Explore thousands of jobs in one place and get the job your dream.
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <TextFieldUi
                name="phonenumber"
                value={formik.values.phonenumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="phonenumber"
                label="Phone Number"
                placeholder="+91 97914 444941"
                sx={loginOtpCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneOutlinedIcon sx={loginOtpCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.phonenumber && formik.touched.phonenumber ? (
                <Typography sx={loginOtpCustomStyle.sxError}>
                  {formik.errors.phonenumber}
                </Typography>
              ) : null}

              <TextFieldUi
                name="otp"
                value={formik.values.otp}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="OTP"
                placeholder="Placeholder the OTP"
                sx={loginOtpCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <TimelapseOutlinedIcon sx={loginOtpCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
              {formik.errors.otp && formik.touched.otp ? (
                <Typography sx={loginOtpCustomStyle.sxError}>
                  {formik.errors.otp}
                </Typography>
              ) : null}

              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                maxWidth={539}
              >
                <Typography
                  onClick={navigateToVerify}
                  sx={loginOtpCustomStyle.sxForgot}
                >
                  Verify ?
                </Typography>

                <Typography
                  onClick={navigateToForgotP}
                  sx={loginOtpCustomStyle.sxForgot}
                >
                  Forgot Passowrd ?
                </Typography>
              </Grid>

              <Grid container justifyContent="flex-start" alignItems="center">
                <Typography sx={loginOtpCustomStyle.sxOr}>Or,</Typography>

                <Typography
                  onClick={navigateToLogin}
                  sx={loginOtpCustomStyle.sxOtp}
                >
                  Login via Password
                </Typography>
              </Grid>

              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                maxWidth={539}
              >
                <ButtonUi
                  type="submit"
                  sx={loginOtpCustomStyle.sxButtonLogin}
                  disabled={isLoading}
                  onClick={() => setOpen(true)}
                  title={"Login"}
                />
                <DialogBox
                  open={open}
                  onClose={() => setOpen(false)}
                  title={
                    <>
                      {loginStatus === "success" && (
                        <Grid container justifyContent={"center"}>
                          <CheckCircleOutlineRoundedIcon
                            sx={{ fontSize: "100px", color: "#FFFFFF" }}
                          />
                          <Grid
                            container
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              my: 2,
                            }}
                          >
                            <Typography variant="body2">
                              Login successfull !
                            </Typography>
                          </Grid>
                        </Grid>
                      )}

                      {loginStatus === "pending" && (
                        <Grid container justifyContent={"center"}>
                          <FadeLoader
                            sx={{ fontSize: "100px", color: "#FFFFFF" }}
                          />
                          <Grid
                            container
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              my: 2,
                            }}
                          >
                            <Typography variant="body2">
                              Something went worng !
                            </Typography>
                          </Grid>
                        </Grid>
                      )}

                      {loginStatus === "error" && (
                        <Grid container justifyContent={"center"}>
                          <ErrorOutlineRoundedIcon
                            sx={{ fontSize: "100px", color: "#FFFFFF" }}
                          />
                          <Grid
                            container
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              my: 2,
                            }}
                          >
                            <Typography variant="body2">
                              Something went worng !
                            </Typography>
                          </Grid>
                          <Typography variant="body1" color={"error"}>
                            {loginStatus.error}
                          </Typography>
                        </Grid>
                      )}

                      {verificationStatus === "success" && (
                        <Grid container justifyContent={"center"}>
                          <CheckCircleOutlineRoundedIcon
                            sx={{ fontSize: "100px", color: "#FFFFFF" }}
                          />
                          <Grid
                            container
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              my: 2,
                            }}
                          >
                            <Typography variant="body2">
                              Verification successfull !
                            </Typography>
                          </Grid>
                        </Grid>
                      )}

                      {verificationStatus === "pending" && (
                        <Grid container justifyContent={"center"}>
                          <FadeLoader
                            sx={{ fontSize: "100px", color: "#FFFFFF" }}
                          />
                          <Grid
                            container
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              my: 2,
                            }}
                          >
                            <Typography variant="body2">
                              Something went worng !
                            </Typography>
                          </Grid>
                        </Grid>
                      )}

                      {verificationStatus === "error" && (
                        <Grid container justifyContent={"center"}>
                          <ErrorOutlineRoundedIcon
                            sx={{ fontSize: "100px", color: "#FFFFFF" }}
                          />
                          <Grid
                            container
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              my: 2,
                            }}
                          >
                            <Typography variant="body2">
                              verification failed !
                            </Typography>
                          </Grid>
                          <Typography variant="body1" color={"error"}>
                            {verificationStatus.error}
                          </Typography>
                        </Grid>
                      )}
                    </>
                  }
                  content={
                    <DialogContentText>
                      {loginStatus === "success" &&
                        "Login successful! You will be redirected..."}
                      {loginStatus === "pending" && "to be submitted"}
                      {loginStatus === "error" &&
                        "Login failed. Please check your credentials."}
                      {verificationStatus === "success" &&
                        "Verification successful! You will be redirected..."}
                      {verificationStatus === "error" &&
                        "Verification failed. Invalid OTP."}
                      
                    </DialogContentText>
                  }
                  actions={
                    <Grid sx={{ mx: "auto" }}>
                      <ButtonUi
                        onClick={navigateToLandPage}
                        autoFocus
                        sx={ButtonUiStyle}
                        title={"continue"}
                      />
                    </Grid>
                  }
                />
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

export default Login;
