import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../modules/employee/Login";
import HrLogin from "../modules/hr/HrLogin";
import HrRegister from "../modules/hr/HrRegister";
import Register from "../modules/employee/Register";
import Loginpassword from "../modules/employee/Loginpassword";
import Forgotpassword from "../modules/employee/Forgotpassword";
import Nopage from "../modules/employee/Nopage";
import Setpassword from "../modules/employee/Setpassword";
import Postjob from "../modules/employee/Postjob";
import Verification from "../modules/employee/Verification";
import Otp from "../modules/employee/Otp";
import EmployeeDashboard from "../modules/employee/EmployeeDashboard";


/**
 * HR routes
 */
const HRRoutes = (
  <Route path="/hr">
    <Route path="hrloginO" element={<HrLogin />} />
    <Route path="hrregister" element={<HrRegister />} />
  </Route>
);

/**
 *
 */

const SuperAdminRoutes = (
  <Route path="/admin">
    <Route path="login" element={<h1>Admin Login</h1>} />
  </Route>
);

/**
 *
 */

const EmployeeRoutes = (
  <Route path="/employee">
    <Route path="loginO" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="loginp" element={<Loginpassword />} />
    <Route path="forgotp" element={<Forgotpassword />} />
    <Route path="setp" element={<Setpassword />} />
    <Route path="employer" element={<Postjob />} />
    <Route path="verify" element={<Verification />} />
    <Route path="otp" element={<Otp />} />
    <Route path="dashboard" element={<EmployeeDashboard />} />
    <Route path="*" element={<Nopage />} />
  </Route>
);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {EmployeeRoutes}
        {HRRoutes}
        {SuperAdminRoutes}

        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
