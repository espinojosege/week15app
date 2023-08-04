import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";
import Video from "./components/video";

const navbar = ReactDOM.createRoot(document.getElementById("navbar"));
const root = ReactDOM.createRoot(document.getElementById("root"));

function handleCodingAssignment() {
  console.log("This will render coding Assignment");
  root.render(
    <Weather />

    /*<React.StrictMode>
      <App />
    </React.StrictMode>*/
  );
}

function handleAssignmentVideo() {
  console.log("This will render Assignment Video.");
  root.render(<Video />);
}

navbar.render(
  <Navbar
    codingAssignment={handleCodingAssignment}
    assignmentVideo={handleAssignmentVideo}
  />
);

root.render(
  <Weather />

  /*<React.StrictMode>
      <App />
    </React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
