import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api"; //  this is the path for the API to connect the backend
import apple from "../images/apple.png";
import "../App.css"; // Ensure you have the CSS file imported

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // State for success message
  const navigate = useNavigate();

  // Add useEffect to trigger the fade-in animation on mount
  useEffect(() => {
    const registerSection = document.querySelector('.register-section');
    registerSection.classList.add('fade-in');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(""); // Clear success message on new submission

    try {
      const userData = { email, password, referralCode };
      const response = await registerUser(userData);
      const { referralCode: newReferralCode, position } = response.data;
      setSuccess("User registered successfully. Referral Code: " + newReferralCode + ". Position: " + position);
      // Optionally navigate to login after a delay
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      setError("Registration failed. Please check your inputs and try again.");
    }
  };

  return (
    <section className="register-section" style={{ backgroundColor: "#F0EEF8", color: "#000000", minHeight: '100vh', padding: '20px' }}>
      <div className="bg-lavender-mist-400 dark:bg-lavender-mist-600">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl">
            Register for the iPhone Waiting List
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl">
            Sign up now to secure your spot on the iPhone waiting list!
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="registration-box p-12 bg-white shadow-md rounded-lg"> {/* Increased padding here */}
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referralCode">
                    Referral Code (Optional)
                  </label>
                  <input
                    type="text"
                    id="referralCode"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Referral Code"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Register
                  </button>
                </div>
                {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
                {success && <p className="text-green-500 text-xs italic mt-4">{success}</p>}
              </form>
              <div className="links text-center">
                <a href="/login" className="text-black-500">Login / </a>
                <a href="/reset-password" className="text-red-500">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
      <footer className=" Footer py-2 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 fade-in">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 dark:divide-gray-600 md:space-y-12 divide-opacity-50">
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="grid grid-cols-12">
              <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex justify-center space-x-3 md:justify-start"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lavender-mist-400 dark:bg-lavender-mist-600">
                    <img src={apple} alt="Apple" />
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
                className="flex items-center justify-center w-10 h-10 rounded-full bg-lavender-mist-400 dark:bg-lavender-mist-600 text-gray-900 dark:text-gray-50"
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
                className="flex items-center justify-center w-10 h-10 rounded-full bg-lavender-mist-400 dark:bg-lavender-mist-600 text-gray-900 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.558594 44.476563 8.402344 42.128906 8.84375 C 40.238281 6.847656 37.429688 5.625 34.355469 5.625 C 28.707031 5.625 24.214844 10.117188 24.214844 15.765625 C 24.214844 16.570313 24.300781 17.351563 24.46875 18.097656 C 16.015625 17.667969 8.484375 13.621094 3.480469 7.300781 C 2.59375 8.773438 2.078125 10.519531 2.078125 12.375 C 2.078125 15.941406 3.9375 19.066406 6.683594 20.792969 C 4.972656 20.742188 3.371094 20.273438 2.003906 19.488281 C 2.003906 19.523438 2.003906 19.5625 2.003906 19.597656 C 2.003906 24.480469 5.425781 28.503906 10.046875 29.4375 C 9.1875 29.683594 8.277344 29.8125 7.34375 29.8125 C 6.707031 29.8125 6.09375 29.746094 5.503906 29.625 C 6.726563 33.574219 10.398438 36.425781 14.714844 36.503906 C 11.308594 39.140625 6.945313 40.625 2.242188 40.625 C 1.480469 40.625 0.738281 40.582031 0 40.484375 C 4.355469 43.296875 9.527344 45 15.097656 45 C 34.335938 45 44.546875 29.96875 44.546875 17.085938 C 44.546875 16.679688 44.539063 16.28125 44.523438 15.878906 C 46.542969 14.503906 48.277344 12.769531 49.644531 10.800781 Z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://twitter.com"
                title="Twitter"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-lavender-mist-400 dark:bg-lavender-mist-600 text-gray-900 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.558594 44.476563 8.402344 42.128906 8.84375 C 40.238281 6.847656 37.429688 5.625 34.355469 5.625 C 28.707031 5.625 24.214844 10.117188 24.214844 15.765625 C 24.214844 16.570313 24.300781 17.351563 24.46875 18.097656 C 16.015625 17.667969 8.484375 13.621094 3.480469 7.300781 C 2.59375 8.773438 2.078125 10.519531 2.078125 12.375 C 2.078125 15.941406 3.9375 19.066406 6.683594 20.792969 C 4.972656 20.742188 3.371094 20.273438 2.003906 19.488281 C 2.003906 19.523438 2.003906 19.5625 2.003906 19.597656 C 2.003906 24.480469 5.425781 28.503906 10.046875 29.4375 C 9.1875 29.683594 8.277344 29.8125 7.34375 29.8125 C 6.707031 29.8125 6.09375 29.746094 5.503906 29.625 C 6.726563 33.574219 10.398438 36.425781 14.714844 36.503906 C 11.308594 39.140625 6.945313 40.625 2.242188 40.625 C 1.480469 40.625 0.738281 40.582031 0 40.484375 C 4.355469 43.296875 9.527344 45 15.097656 45 C 34.335938 45 44.546875 29.96875 44.546875 17.085938 C 44.546875 16.679688 44.539063 16.28125 44.523438 15.878906 C 46.542969 14.503906 48.277344 12.769531 49.644531 10.800781 Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Register;
