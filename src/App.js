import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Step from "./Pages/Step";
import { useState } from "react";
import { motion } from "framer-motion";
import SideBar from "./components/SideBar";

function App() {
  const [isMenuIconClicked, setMenuIconClicked] = useState(false);
  return (
    <BrowserRouter>
      <div className="app">
        {isMenuIconClicked && (
          <SideBar setMenuIconClicked={setMenuIconClicked} />
        )}
        <motion.div
          className="appContainer"
          animate={isMenuIconClicked ? { x: 200} : { x: 0 }}
        >
         {isMenuIconClicked &&<div className="blurStyle"></div>} 

          {!isMenuIconClicked && (
            <Header setMenuIconClicked={setMenuIconClicked} />
          )}
<div className='routesContainerStyle' onClick={isMenuIconClicked? (()=>{setMenuIconClicked(false)}) : {}} >

          <Route exact path="/" render={(props) => <Home {...props} />}></Route>

          <Route exact path="/step" component={Step}></Route>
      </div> 
        </motion.div>
</div>
    </BrowserRouter>
  );
}

export default App;
