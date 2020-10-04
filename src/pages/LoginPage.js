import React from "react";
import loginImage from "../assets/login.svg";
import Login from "../components/Login";

const LoginPage = () => {
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };
  return <Login handleSubmit={handleSubmit} />;
};

export default LoginPage;
