import React, { useState } from "react";
import "./styles.css";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Registration onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
