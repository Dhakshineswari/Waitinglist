import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apple from "../images/apple.png";
import imageLeft from "../images/imageLeft.png";
import imageReft from "../images/imageRight.png";
import imagee from "../images/imagee.png";
import imageee from "../images/imageee.png";
import image from "../images/image.png";
import "../App.css";

// Home page component
const Home = () => {
  const images = [imageLeft, imageReft, imagee, imageee, image]; // array to store the images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="home overflow-hidden">
      <div className="bg-lavender-mist-400 dark:bg-lavender-mist-600 fade-in">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900 dark:text-gray-50">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900 dark:text-gray-50 fade-in">
            Welcome to the iPhone waitlist
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900 dark:text-gray-50 fade-in">
            Please register or login to manage your position on the waiting
            list.
          </p>
          <div className="relative flex items-center justify-center w-full text-gray-50 dark:text-gray-900">
            <button
              aria-label="Slide back"
              type="button"
              className="bt absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:dark:ring-gray-600 bg-gray-900 dark:bg-gray-50"
              onClick={handlePrevImage}
            >
              <svg
                width="8"
                height="14"
                fill="none"
                viewBox="0 0 8 14"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
              <img
                className="object-cover object-center bg-lavender-mist-500 dark:bg-lavender-mist-500 h-50 w-50 sm:h-96 sm:w-96 aspect-square rounded-lg fade-in animate-move"
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
              />
            </div>
            <button
              aria-label="Slide forward"
              type="button"
              className="bt absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:dark:ring-gray-600 bg-gray-900 dark:bg-gray-50"
              onClick={handleNextImage}
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="bt px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 fade-in"
            >
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="fixed-image w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40 fade-in"
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
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400 dark:bg-violet-600">
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
              <a
                rel="noopener noreferrer"
                href="https://github.com/felix1428"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1 c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6 C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6 c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Home;
