import { Button} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../modules/employee/Navbar";



const LandingPage = () => {
  const navigate = useNavigate();
  
  const navigateToLogin = () => {
    navigate("/employee"+"/loginp");
  };
  const navigateToRegister = () => {
    navigate("/employee"+"/Register");
  }
  return (
    <div>
    <Navbar/>
    <h1>Landing Page</h1>
    <Button 
    variant="contained"
    color="primary"
    size="large"
    onClick={navigateToLogin}>login</Button>
    <Button 
    variant="contained"
    color="primary"
    size="large"
    onClick={navigateToRegister}>Register</Button>
    </div>

  )
}

export default LandingPage