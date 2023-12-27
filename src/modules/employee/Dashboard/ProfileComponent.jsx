import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useFormik } from "formik";
import { profileSchema } from "./dashboardValidation/profileSchema";

const StyledCardContent = styled(CardContent)({
  marginTop: 2,
});
const StyledAvatarMain = styled(Avatar)({
  height: "100px",
  width: "100px",
  marginTop:-0.8,
  position: "relative",
});
const StyledAvatarCameraIcon = styled(Avatar)({
  height: 20,
  width: 20,
  position: "absolute",
  left: 70,
  top: 70,
});

const ProfileComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const handleFileSelect = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };
  // const handleUpload = () => {
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append("avatar", selectedFile);
  //     axios
  //       .post("your-upload-url", formData)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };

  const initialValues = {
    profilePhoto: null,
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: profileSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Grid>
      {/* profile card start*/}
      <form onSubmit={formik.handleSubmit}>
        <Card elevation={0}>
          <StyledCardContent>
            <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
              <StyledAvatarMain
                alt="Avatar-main"
                src={selectedFile ? URL.createObjectURL(selectedFile) : ""}
              >
                <StyledAvatarCameraIcon>
                  <TextField
                    accept="image/*"
                    id="avatar-upload"
                    type="file"
                    name="profilePhoto"
                    onChange={(event) => {
                      setSelectedFile(event.currentTarget.files[0]);
                      formik.setFieldValue(
                        "profilePhoto",
                        event.currentTarget.files[0]
                      );
                    }}
                    sx={{ display: "none" }}
                  />
                  <label htmlFor="avatar-upload">
                    <Button
                      variant="contained"
                      component="span"
                      sx={{
                        bgcolor: "#14C38E",
                        "&:hover": { bgcolor: "#14C38E" },
                      }}
                    >
                      <CameraAltIcon
                        sx={{ height: 15, width: 15, zIndex: 1 }}
                      />
                    </Button>
                  </label>
                </StyledAvatarCameraIcon>
              </StyledAvatarMain>
              {formik.errors.profilePhoto && formik.touched.profilePhoto ? (
                <Typography sx={{ color: "red", fontSize: 13 }}>
                  {formik.errors.profilePhoto}
                </Typography>
              ) : null}
              {/* <Button type="submit" variant="contained" color="primary">
              Submit
            </Button> */}
            </Stack>

            <Stack>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "24px",
                  textAlign: "center",
                  alignItems: "center",
                  marginTop:1,
                }}
              >
                Andre Salmanan
                <VerifiedIcon sx={{ color: "#6495ED" }} />
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#727272",
                  textAlign: "center",
                }}
              >
                College Student
              </Typography>
            </Stack>
          </StyledCardContent>
        </Card>
      </form>
      {/* profile card end */}
    </Grid>
  );
};

export default ProfileComponent;
