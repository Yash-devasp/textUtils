import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const changeTheme = (color) => {
    if (mode === "light") {
      setMode("dark");
      showAlert("dark mode enabled successfully", "success");
      document.getElementById("flexSwitchCheckDefault").checked = true;
    }
    if (color === "purple") {
      document.body.style.backgroundColor = "#46244c";
      setTheme("purple");
    } else if (color === "blue") {
      document.body.style.backgroundColor = "#064663";
      setTheme("blue");
    } else if (color === "red") {
      document.body.style.backgroundColor = "#420516";
      setTheme("red");
    }
  };

  const toggleMode = () => {
    setTheme(null);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode enabled successfully", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled successfully", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          changeTheme={changeTheme}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Textarea
                heading="Enter Text Below To Analyze"
                mode={mode}
                showAlert={showAlert}
                theme={theme}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
