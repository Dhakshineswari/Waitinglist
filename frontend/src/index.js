import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/index.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of the animation in milliseconds
  easing: 'ease-in-out', // Easing function
  once: true, // Whether animation should happen only once - while scrolling down
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
