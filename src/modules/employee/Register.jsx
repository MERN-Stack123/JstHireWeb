import {
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  InputAdornment,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { CardContent, CardMedia } from "@mui/material";
import img from "../../assets/images/register.gif";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import React, { useState } from "react";
import { registerSchema } from "../../validation/registerSchema";
import Footer from "./Footer";
import { registerCustomStyle } from "../../customstyle/reigsterCustomStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction } from "../../redux/actions/registerAction";
import ButtonUi from "../../components/fields/ButtonUi";
import DialogBox from "../../components/fields/DialogBox";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { FadeLoader } from "react-spinners";
import TextFieldUi from "../../components/fields/TextFieldUi";
import { ButtonUiStyle } from "../../customstyle/ButtonUiStyle";

const Register = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const registerStatus = useSelector((state) => state.register.status);
  const isLoading = useSelector((state) => state.register.loading);

  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/employee" + "/loginO");
  };

  const navigateToLandPage = () => {
    navigate("/");
    setOpen(false)
  };

  const initialValues = {
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(fetchDataAction(values));
      formik.resetForm();
    },
  });

  return (
    <Grid>
      <Navbar />
      <Grid container sx={registerCustomStyle.sxContainer}>
        <Grid item xs={12} sm={12} md={6}>
          {/* left side */}
          <ThemeProvider theme={theme}>
            <Typography sx={registerCustomStyle.sxTypographyh1}>
              Find your dream job and grown your career
            </Typography>
            
            <Typography sx={registerCustomStyle.sxTypographyh6}>
              Explore thousands of jobs in one place and get the job your dream.
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <TextFieldUi
                name="username"
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="User Name"
                placeholder="Andre Salmanan"
                sx={registerCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonOutlineOutlinedIcon
                        sx={registerCustomStyle.sxIcon}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.username && formik.touched.username ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.username}
                </Typography>
              ) : null}

              <TextFieldUi
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="Email id"
                placeholder="Andresalmanan@outlook.com"
                sx={registerCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlinedIcon sx={registerCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.email && formik.touched.email ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.email}
                </Typography>
              ) : null}

              <TextFieldUi
                name="phonenumber"
                type={'tel'}
                value={formik.values.phonenumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="Phone Number"
                placeholder="+91 97914 444941"
                sx={registerCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneOutlinedIcon sx={registerCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
                inputProps={{ inputMode: 'numeric' }} 
              />

              {formik.errors.phonenumber && formik.touched.phonenumber ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.phonenumber}
                </Typography>
              ) : null}

              <TextFieldUi
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="Password"
                placeholder="Password"
                sx={registerCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon sx={registerCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.password && formik.touched.password ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.password}
                </Typography>
              ) : null}

              <TextFieldUi
                name="confirmpassword"
                value={formik.values.confirmpassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="Confirm Password"
                placeholder="Confirm Password"
                sx={registerCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon sx={registerCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />

              {formik.errors.confirmpassword &&
              formik.touched.confirmpassword ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.confirmpassword}
                </Typography>
              ) : null}

              <Grid container justifyContent="flex-start" alignItems="center">
                <Typography sx={registerCustomStyle.sxTypoAccount}>
                  Already have an account
                </Typography>

                <Typography
                  onClick={navigateToLogin}
                  sx={registerCustomStyle.sxTypoLogin}
                >
                  Login
                </Typography>

                <Typography sx={registerCustomStyle.sxMark}>?</Typography>
              
              </Grid>


              <Grid container sx={registerCustomStyle.sxButtonGrid}>
                <ButtonUi
                  type="submit"
                  sx={registerCustomStyle.sxButtonRegister}
                  disabled={isLoading}
                  onClick={() => setOpen(true)}
                  title={"Register Now"}
                />
                <DialogBox
                  open={open}
                  onClose={() => setOpen(false)}
                  title={
                    <>
                      {registerStatus === "success" && (
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
                              Registration successfull !
                            </Typography>
                          </Grid>
                        </Grid>
                      )}
                      {registerStatus === "pending" && (
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
                      {registerStatus === "error" && (
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
                            {registerStatus.error}
                          </Typography>
                        </Grid>
                      )}
                    </>
                  }
                  content={
                    <DialogContentText>
                      {registerStatus === "success" &&
                        "Congratulations! your account has been successfully created,"}
                      {registerStatus === "pending" && "to be submitted"}
                      {registerStatus === "error" &&
                        "Oops, something went worng. Please try again later"}
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
              height={"full"}
              width={"full"}
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

export default Register;
