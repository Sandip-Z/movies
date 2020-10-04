import React from "react";
import { Redirect, Route } from "react-router-dom";
import PrivateLayout from "../Layout/PrivateLayout";
import isLoggedin from "../../utils/isLoggedIn";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const isLoggedin = () => {
  //   return true;
  // };

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin() ? (
          <PrivateLayout>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
