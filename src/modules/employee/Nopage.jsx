import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { nopageCustomStyle } from "../../customstyle/nopageCustomStyle";

const Nopage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/employee" + "/register");
  };

  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <Button sx={nopageCustomStyle.sxButtonGoback} onClick={navigateToHome}>
          Go back
        </Button>
      </Grid>
    </div>
  );
};

export default Nopage;
