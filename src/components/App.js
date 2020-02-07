import React from "react";

import Header from "./common/Header.js";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import { func } from "prop-types";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
