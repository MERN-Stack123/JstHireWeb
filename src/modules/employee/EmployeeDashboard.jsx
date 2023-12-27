import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import ProfileComponent from "./Dashboard/ProfileComponent";
import SearchComponent from "./Dashboard/SearchComponent";
import JobFilter from "./Dashboard/JobFilter";
import ExperienceLevel from "./Dashboard/ExperienceLevel";
import JobLocation from "./Dashboard/JobLocation";
import JobType from "./Dashboard/JobType";
import Posted from "./Dashboard/Posted";

const EmployeeDashboard = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });

  return (
    <Grid
      container
      spacing={4}
      bgcolor={"#14C38E"}
      paddingX={8}
      paddingY={4}
      height={"full"}
      justifyContent={"center"}
    >
      <ThemeProvider theme={theme}>
        <Grid item xs={12} md={3}>
          {/* left side */}
          <Stack spacing={1}>
            {/* prfile card start */}
            <ProfileComponent />
            {/* profile crad end */}

            <Card elevation={0}>
              <CardContent>
                <Typography>Andre Salmanan</Typography>
                <Typography>College Student</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} >
          {/* mid side */}
          <Stack spacing={1}>
            {/* searchbar start */}
            <SearchComponent />
            {/* searchbar end */}

            <Card elevation={0}>
              <CardContent>
                <Typography>Andre Salmanan</Typography>
                <Typography>College Student</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3} >
          {/* right side */}
          <Stack spacing={1}>
            {/* job filter start */}
            <JobFilter/>
            {/* job filter end */}

            {/* experience level start */}
            <ExperienceLevel/>
            {/* experience level end */}

            {/* job location start */}
            <JobLocation/>
            {/* job location end */}

            {/* job type start */}
            <JobType/>
            {/* job type end */}

            {/* posted start */}
            <Posted/>
            {/* posted end */}
          </Stack>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
};

export default EmployeeDashboard;
