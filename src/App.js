import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Step from "./Pages/Step";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideBar from "./components/SideBar/SideBar";
import ExploreReports from "./Pages/ExploreReports";
import Signing from "./Pages/Signing";


function App() {
  const [isMenuIconClicked, setMenuIconClicked] = useState(false);
  const [isFullHeader, setIsFullHeader] = useState(false);
  const [IsHeaderTransparent, setHeaderTransparency] = useState(false);
  return (
    <BrowserRouter>
      <div className="app">
        {isMenuIconClicked && (
          <SideBar setMenuIconClicked={setMenuIconClicked} />
        )}
        <motion.div
          className="appContainer"
          animate={isMenuIconClicked ? { x: 200 } : { x: 0 }}
        >
          {isMenuIconClicked && <div className="blurStyle"></div>}
          <AnimatePresence>
            {!isMenuIconClicked && (
              <Header setMenuIconClicked={setMenuIconClicked} fullHeader={isFullHeader} transparent={IsHeaderTransparent} />
            )}
          </AnimatePresence>
          <div
            className="routesContainerStyle"
            onClick={
              isMenuIconClicked
                ? () => {
                    setMenuIconClicked(false);
                  }
                : undefined
            }
          >
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} />}
            ></Route>

            <Route exact path="/step" component={Step}></Route>
            <Route exact path="/signing" component={Signing}></Route>
            <Route
              exact
              path="/reports"
              render={(props) => (
                <ExploreReports
                  {...props}
                  isMenuIconClicked={isMenuIconClicked}
                  setMenuIconClicked={setMenuIconClicked}
                  setIsFullHeader={setIsFullHeader}
                  setHeaderTransparency={setHeaderTransparency}
                />
              )}
            ></Route>
          </div>
        </motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;
