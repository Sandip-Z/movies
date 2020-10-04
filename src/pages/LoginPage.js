import React from "react";
import loginImage from "../assets/login.svg";
import Login from "../components/Login";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    localStorage.setItem("loggedin", "true");
    history.push("/");
  };
  return <Login handleSubmit={handleSubmit} />;
};

export default LoginPage;
