import React from "react";

const LoginPage = () => {
  return (
    <div className="login d-flex flex-column justify-content-center shadow-lg">
      <div className="row">
        <div className="col-lg-6 border">image here</div>
        <div className="col-lg-6">
          <h3 className="text-center">Member Login</h3>
          <form className="login-form">
            <section>
              <label htmlFor="email">Email</label>
              <input name="email" type="email" />
            </section>
            <section>
              <label htmlFor="password">Password</label>
              <input name="password" type="password" />
            </section>
            <input
              type="submit"
              value="Login"
              className="d-flex m-auto btn btn-primary"
            />
          </form>
          <div className="d-flex flex-column align-items-center my-3">
            <a href="#" className="mb-3">
              Forgot Password
            </a>
            <span>
              Dont have an account? <a href="#">Create your account</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
