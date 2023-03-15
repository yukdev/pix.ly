import "bootswatch/dist/darkly/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./routes/Navigation";
import Routelist from "./routes/RouteList";

/** App: Renders Navigation and RouteList
 *
 * Props: none
 * State: none
 *
 * App -> Navigation, RouteList
 *
 * */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routelist />
      </BrowserRouter>
    </div>
  );
}

export default App;
