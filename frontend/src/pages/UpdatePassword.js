import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { updatePassword } from '../services/api'; // Ensure this path is correct
import "../App.css"; // Ensure your CSS file is imported for styling

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    setToken(token);
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await updatePassword({ token, newPassword });
      setMessage("Password has been reset successfully.");
    } catch (error) {
      setError("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="reset-password fade-in">
      <h2 className="text-3xl font-bold">Reset Password</h2>
      <form onSubmit={handleSubmit} className="reset-password-box">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ResetPassword;
