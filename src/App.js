import React, { useState } from "react";
import "./App.css";
import "./components/Lr.css";
import Login from "./components/Login";
import Register from "./components/Register";
import logo from "./components/logo/logo.png";
import Showcase from "./Showcase";
import { ApiClient } from "./apiClient";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [token, changeToken] = useState(undefined);
  const client = new ApiClient(
    () => token,
    () => logout()
  );

  const logout = () => {
    changeToken(undefined);
  };

  const login = (authToken) => {
    changeToken(authToken);
  };

  const toggleForm = (forEmail) => {
    setCurrentForm(forEmail);
  };

  return (
    <div className="App">
      <img src={logo} alt="" />

      {/* {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} */}

      {/* if token ? dash page : public */}
      {/* public  */}
      {/* if you want to login ? Login : Register */}
      {token ? <Showcase client={client} /> : <Login loggedIn={(token) => login(token)} client={client} />}
    </div>
  );
}

export default App;
