//entry level
import React from "react"; //for implementing react features to app
import ReactDOM from "react-dom/client"; //to interact with dom + to render the component
import { BrowserRouter } from "react-router-dom";
import App from "./App"; ///app component
import "./index.css"; //css for entire app
// ReactDOM.createRoot to create a root for the React application.
// root is where the entire React component tree will be mounted in the DOM
// document.getElementById("root") selects the DOM element with the ID "root," which will serve as the container for the React application.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>{" "}
  </React.StrictMode>
);
// StrictMode Wrapper:
// The JSX code inside ReactDOM.createRoot is wrapped in React.StrictMode tags. This is a component provided by React that enables additional checks and warnings in the development mode to help identify potential issues and deprecated features.
