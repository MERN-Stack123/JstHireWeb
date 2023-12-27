import React, { useState } from "react";
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
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import { CardContent, CardMedia } from "@mui/material";
import img from "../../assets/images/Login.gif";
import { useNavigate } from "react-router-dom";
import Navbar from "../employee/Navbar";
import { useFormik } from "formik";
import { hrEmailSchema } from "../../validation/hrEmailSchema";
import Footer from "../employee/Footer";
import { loginOtpCustomStyle } from "../../customstyle/loginOtpCustomStyle";
import TextFieldUi from "../../components/fields/TextFieldUi";
import { useDispatch, useSelector } from "react-redux";
import { hrLoginUser } from "../../redux/actions/hrLoginAction";
import ButtonUi from "../../components/fields/ButtonUi";
import DialogBox from "../../components/fields/DialogBox";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { FadeLoader } from "react-spinners";
import { ButtonUiStyle } from "../../customstyle/ButtonUiStyle";

const HrLogin = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const hrloginStatus = useSelector((state) => state.hrlogin.hrloginStatus);
  const isLoading = useSelector((state) => state.hrlogin.loading);

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
    email: "",
    otp: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: hrEmailSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(hrLoginUser(values));
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
              Welcome to your HR professional community
            </Typography>

            <Typography sx={loginOtpCustomStyle.sxTypographyh3}>
              Explore thousands of jobs in one place and get the job your dream.
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <TextFieldUi
                name="email"
                value={formik.values.phonenumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                label="Email"
                placeholder="Andresalmanan@outlook.com"
                sx={loginOtpCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlinedIcon sx={loginOtpCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.email && formik.touched.email ? (
                <Typography sx={loginOtpCustomStyle.sxError}>
                  {formik.errors.email}
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
                  // onClick={navigateToVerify}
                  sx={loginOtpCustomStyle.sxForgot}
                >
                  Verify ?
                </Typography>

                <Typography
                  // onClick={navigateToForgotP}
                  sx={loginOtpCustomStyle.sxForgot}
                >
                  Forgot Passowrd ?
                </Typography>
              </Grid>

              <Grid container justifyContent="flex-start" alignItems="center">
                <Typography sx={loginOtpCustomStyle.sxOr}>Or,</Typography>

                <Typography
                  // onClick={navigateToLogin}
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
                      {hrloginStatus === "success" && (
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

                      {hrloginStatus === "pending" && (
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

                      {hrloginStatus === "error" && (
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
                            {hrloginStatus.error}
                          </Typography>
                        </Grid>
                      )}
                    </>
                  }
                  content={
                    <DialogContentText>
                      {hrloginStatus === "success" &&
                        "Login successful! You will be redirected..."}
                      {hrloginStatus === "pending" && "to be submitted"}
                      {hrloginStatus === "error" &&
                        "Login failed. Please check your credentials."}
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

export default HrLogin;
