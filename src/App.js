import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import AppWithRouterAccess from "./components/authAdmin/AppWithRouterAccess";
import Footer from "../src/components/layout/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <Switch>
        <div className="App">
          <Route path="/" exact={true} component={Home} />

          <AppWithRouterAccess />
          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
