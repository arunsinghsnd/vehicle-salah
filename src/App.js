import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "../src/components/layout/SearchAppBar";
import Home from "./components/pages/Home";
import AppWithRouterAccess from "./components/authAdmin/AppWithRouterAccess";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <SearchBar /> */}
        <Route path="/" exact={true} component={Home} />
        <AppWithRouterAccess />
      </div>
    </Router>
  );
};

export default App;
