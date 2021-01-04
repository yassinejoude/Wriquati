import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Step1 from "./Pages/Step1";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Step from "./Pages/Step";
import Step3 from "./Pages/Step3";
import Step4 from "./Pages/Step4";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
        
        }}
        className="App"
      >
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/step1" component={Step1}></Route>
        <Route exact path="/step" component={Step}></Route>
        <Route exact path="/step3" component={Step3}></Route>
        <Route exact path="/step4" component={Step4}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
