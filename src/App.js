import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Step from "./Pages/Step";
import { useState } from "react";

function App() {
  const [showHeader, SetShowHeader] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        {showHeader && <Header />}
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} showHeader={SetShowHeader} />
          }
        ></Route>

        <Route exact path="/step" component={Step}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
