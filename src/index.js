import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginPage from "./pages/LoginPage";
// import ApplicationPage from "./pages/ApplicationPage";
import AboutUsPage from "./pages/AboutUsPage";
import DashboardPage from "./pages/DashboardPage";
import CurrentMarathonPage from "./pages/CurrentMarathonPage";
import ProfilePage from "./pages/ProfilePage";
import RecommendationPage from "./pages/RecommendationPage";
import ArchivePage from "./pages/ArchivePage";
import UnlistedPage from "./pages/UnlistedPage";
import Store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoute from "./components/Routes/PublicRoute";
import * as serviceWorker from "./serviceWorker";
import "bootstrap-css-only";
import "typeface-roboto";
import PrivateRoute from "./components/Routes/PrivateRoute";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={CurrentMarathonPage} />
          <PublicRoute path="/about-us" exact component={AboutUsPage} />
          <PublicRoute path="/login" component={LoginPage} />
          {/* <PrivateRoute
            path="/current-marathon"
            component={CurrentMarathonPage}
          /> */}
          <PrivateRoute
            path="/recommendations"
            component={RecommendationPage}
          />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/archives/:slugname" component={ArchivePage} />
          <Route exact component={UnlistedPage} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
