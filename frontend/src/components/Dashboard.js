import React, { useEffect, useState } from "react";
import { getUserPositionAndReferrals } from "../services/api";
import { useNavigate } from "react-router-dom";
import Dash from "../images/dash.png";
import apple from "../images/apple.png";
import "../App.css"; 
//Dashboard component
const Dashboard = ({ token }) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserPositionAndReferrals(token);
        setUserData(response.data);
        console.log("Fetched user data:", response.data); // Debug statement
      } catch (error) {
        console.error("Error fetching user data:", error.response ? error.response.data : error.message);
        setError("Error fetching user data. Please try again later.");
      }
    };

    if (token) {
      fetchUserData();
    } else {
      setError("No authentication token found.");
    }
  }, [token]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dashboard  animate-fade-in p-2 mx-auto sm:p-4 text-black-100 dark:text-black-800">
      {/* Banner */}
      <div className="p-6 py-12 bg-red-400 dark:bg-lavender-mist-600 text-black-900 dark:text-black-50 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">Hurry Up !!
              <br className="sm:hidden" />   Join Soon
            </h2>
            <div className="space-x-4 text-center py-2 lg:py-0">
              <span><strong>Share your Unique referral Code :</strong> </span>
              <span className="font-text-lg">{userData.referralCode}</span>
            </div>
            <a href="/register" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-black-50 dark:bg-black-900 text-black-900 dark:text-black-50 border-black-400 dark:border-black-600">Register Now</a>
          </div>
        </div>
      </div>

      <div className="bouncing-card mx-auto max-w-md p-6">
        <h1 className="card-header text-3xl text-center font-bold">Dashboard</h1>
        <img src={Dash} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="card-content text-center user-info mb-4">
          <p><strong>Your Referral Code: </strong>{userData.referralCode}</p>
          <p><strong>Your Position: </strong>{userData.position}</p>
          <p><strong>Your Referrals: </strong>{userData.referrals ? userData.referrals.length : 0}</p>
        </div>
        <div className="text-center px-2 py-2 bg-blue-300 text-black rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <button className="view-queue-button mt-4" onClick={() => navigate('/queue')}>
            View Waiting List
          </button>
        </div>
      </div>
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
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/felix1428"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-lavender-mist-400 dark:bg-lavender-mist-600 text-gray-900 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default Dashboard;
