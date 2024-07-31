// src/components/ResetPassword.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import apple from "../images/apple.png";
import "../App.css"; // Ensure your CSS file is imported for styling

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // State for error message

  const token = searchParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      // Send the POST request to the backend server
      const response = await axios.post('/update-password', { email, token, newPassword: password });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error updating password:', error.response?.data || error.message);
      setError('Failed to reset password. Please try again.');
    }
  };

  useEffect(() => {
    // Apply fade-in effect on component mount
    const resetPasswordSection = document.querySelector('.reset-password');
    if (resetPasswordSection) {
      resetPasswordSection.classList.add('fade-in');
    }
  }, []);

  return (
    <div className="reset-password fade-in">
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className="text-3xl font-bold text-center">Reset Password</h2>
      <form onSubmit={handleSubmit} className="reset-password-box">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            type="email" 
            placeholder="Enter email ID" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
          <input 
            type="password" 
            placeholder="Enter new password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <footer className="py-2 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 fade-in">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 dark:divide-gray-600 md:space-y-12 divide-opacity-50">
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="grid grid-cols-12">
              <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex justify-center space-x-3 md:justify-start"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400 dark:bg-violet-600">
                    <img src={apple} />
                  </div>
                  <span className="self-center text-2xl font-semibold">
                    Apple Inc
                  </span>
                </a>
              </div>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                <span>©2024 All rights reserved</span>
                <a rel="noopener noreferrer" href="#">
                  <span>Developed by </span>
                </a>
                <a rel="noopener noreferrer" href="#">
                  <span>Nathaniel Felix</span>
                </a>
              </div>
              <a
                rel="noopener noreferrer"
                href="mailto:nathanielfelix2003@gmail.com"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://www.linkedin.com/in/nathaniel-felix-1428nd"
                title="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResetPassword;
