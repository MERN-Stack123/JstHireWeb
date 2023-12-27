import {
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  InputAdornment,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { CardContent, CardMedia } from "@mui/material";
import img from "../../assets/images/register.gif";

import { useNavigate } from "react-router-dom";
import Navbar from "../employee/Navbar";
import { useFormik } from "formik";
import React, { useState } from "react";
import { hrRegisterSchema } from "../../validation/hrRegisterSchema";
import Footer from "../employee/Footer";
import { registerCustomStyle } from "../../customstyle/reigsterCustomStyle";
import { useDispatch, useSelector } from "react-redux";
import { hrFetchDataAction } from "../../redux/actions/hrRegisterAction";
import ButtonUi from "../../components/fields/ButtonUi";
import DialogBox from "../../components/fields/DialogBox";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { FadeLoader } from "react-spinners";
import TextFieldUi from "../../components/fields/TextFieldUi";
import { ButtonUiStyle } from "../../customstyle/ButtonUiStyle";
import AddressArea from "../../components/fields/AddressArea";

const HrRegister = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const registerStatus = useSelector((state) => state.hrregister.status);
  const isLoading = useSelector((state) => state.hrregister.loading);

  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  const navigate = useNavigate();
  const navigateToHrLogin = () => {
    navigate("/hr" + "/hrloginO");
  };

  const navigateToLandPage = () => {
    navigate("/");
    setOpen(false);
  };

  const initialValues = {
    username: "",
    companyemailid: "",
    phonenumber: "",
    companyname: "",
    addressarea: "",
    locationcitystate: "",
    password: "",
    confirmpassword: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: hrRegisterSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(hrFetchDataAction(values));
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
              Hr profess...hr can register
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
                placeholder="Robin victory"
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
                name="companyemailid"
                value={formik.values.companyemailid}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="Company Email id"
                placeholder="Robinvictory@company.com"
                sx={registerCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlinedIcon sx={registerCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.companyemailid && formik.touched.companyemailid ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.companyemailid}
                </Typography>
              ) : null}

              <TextFieldUi
                name="phonenumber"
                value={formik.values.phonenumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="tel"
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
              />

              {formik.errors.phonenumber && formik.touched.phonenumber ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.phonenumber}
                </Typography>
              ) : null}

              <TextFieldUi
                name="companyname"
                value={formik.values.companyname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="Company Name"
                placeholder="XYZ Company Inc"
                sx={registerCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BusinessIcon sx={registerCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.companyname && formik.touched.companyname ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.companyname}
                </Typography>
              ) : null}

              <AddressArea
                name="addressarea"
                multiline
                rows={2}
                aria-label="maximum height"
                value={formik.values.addressarea}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="Address with Pincode"
                placeholder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
                sx={registerCustomStyle.sxAreaField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <HomeOutlinedIcon sx={registerCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.addressarea && formik.touched.addressarea ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.addressarea}
                </Typography>
              ) : null}

              <TextFieldUi
                name="locationcitystate"
                value={formik.values.locationcitystate}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                label="Location, City, State"
                placeholder="Bangalore"
                sx={registerCustomStyle.sxTextfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LocationOnOutlinedIcon sx={registerCustomStyle.sxIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {formik.errors.locationcitystate &&
              formik.touched.locationcitystate ? (
                <Typography sx={registerCustomStyle.sxError}>
                  {formik.errors.locationcitystate}
                </Typography>
              ) : null}

              <TextFieldUi
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type={"password"}
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
                type={"password"}
                label="Confirm Password"
                placeholder="Confirm password"
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
                  onClick={navigateToHrLogin}
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

export default HrRegister;
