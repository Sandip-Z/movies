import React from "react";

const Login = ({ handleSubmit }) => {
  return (
    <div className="login">
      <div className="row">
        <div className="col-lg-6 login-image-wrapper">
          <h5 className="my-3">KEEP TRACK OF MOVIES YOU WATCH</h5>
          <h4 className="my-3">CLONE YOUR FRIENDS WATCH LIST</h4>
          <h3 className="my-3">ARCHIEVE YOUR WATCHED LIST</h3>
          <h2 className="my-3">OFCOURSE ITS FUN!!</h2>
        </div>
        <div className="col-lg-6">
          <h3 className="text-center font-weight-bold">Member Login</h3>
          <form className="login-form" method="post" onSubmit={handleSubmit}>
            <section>
              <label htmlFor="email">Email</label>
              <input name="email" type="email" placeholder="Email" />
            </section>
            <section>
              <label htmlFor="password">Password</label>
              <input name="password" type="password" placeholder="Password" />
            </section>
            <input
              type="submit"
              value="Login"
              onClick={handleSubmit}
              className="d-flex m-auto btn header-button header-button-dark"
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

export default Login;
