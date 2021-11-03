import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AppWithRouterAccess from "./components/authAdmin/AppWithRouterAccess";
import Footer from "../src/components/layout/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact={true} component={Home} />
        <AppWithRouterAccess />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
