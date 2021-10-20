import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "../src/components/layout/SearchAppBar";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";

import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

function onAuthRequired({ history }) {
  history.push("/login");
}

const App = () => {
  return (
    <Security
      issuer="https://dev-409495.oktapreview.com/oauth2/default"
      client_id="0oafhkg1yupTnPW9z0h7"
      redirect_uri={window.location.origin + "/implicit/callback"}
      onAuthRequired={onAuthRequired}
    >
      <Router>
        <div className="App">
          <SearchBar />
          <Route path="/" exact={true} component={Home} />
          <Route
            path="/login"
            render={() => (
              <Login baseUrl="https://dev-409495.oktapreview.com" />
            )}
          />
          {/* <Route path="/implicit/callback" component={ImplicitCallback} /> */}
        </div>
      </Router>
    </Security>
  );
};

export default App;
