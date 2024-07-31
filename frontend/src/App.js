import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import UserQueue from "./components/UserQueue"; 
import Navbar from "./components/Navbar";

const App = () => {
  // State to store authentication token
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="App">
        {/* Navbar component that appears on all pages */}
        <Navbar />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          {/* User registration route */}
          <Route path="/register" element={<Register />} />
          {/* User login route; pass setToken function to handle authentication */}
          <Route path="/login" element={<Login setToken={setToken} />} />
          {/* Dashboard route; pass token to the Dashboard component */}
          <Route path="/dashboard" element={<Dashboard token={token} />} />
          {/* Password reset request route */}
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* Forgot password route */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Update password route */}
          <Route path="/update-password" element={<UpdatePassword />} />
          {/* User queue route; pass token to UserQueue component */}
          <Route path="/queue" element={<UserQueue token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
