import React from "react";
import { useState } from "react";

import { Toolbar, Typography, makeStyles } from "@material-ui/core";

import MenuIcon from "./MenuIcon";

const useStyle = makeStyles(() => ({
  toolbarStyle: {
    backgroundColor: "transparent",
    position: "fixed",
    zIndex: "2",
  },
  logoStyle: {
    fontSize: "30px",
    fontFamily: "Dosis",
    color: "orange",
    marginLeft: "20px",
  },
}));

export default function Header(props) {
 
  const classes = useStyle();

  const showLogo = () => {
    return <Typography className={classes.logoStyle}>WRIQUATI</Typography>;
  };

  return(<div className={classes.appBarStyle}>
      <Toolbar className={classes.toolbarStyle}>
        <MenuIcon setMenuIconClicked={props.setMenuIconClicked}></MenuIcon>
        {showLogo()}
      </Toolbar>
    </div>)
}
