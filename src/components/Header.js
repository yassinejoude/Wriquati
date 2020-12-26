import React from "react";
import {
  // eslint-disable-next-line 
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyle = makeStyles(() => ({
  header: {
    backgroundColor: "#9A52E2",
    margin: "0 auto",
    width: "80%",
    left: "10px",
    right: "10px",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    paddingRight: "79px",
    paddingLeft: "79px",
  },
  logo: {
    fontSize: "30px",
    fontFamily:'Dosis',
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    fontFamily:'Dosis',
    size: "18px",
    margin: "15px",
  },
  heroAppBarStyle: {
    margin: "0 auto",
    textAlign: "center",
    color:'#077F88'
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, heroAppBarStyle } = useStyle();

  const GetMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };
// eslint-disable-next-line 
  const displayLayout = () => {
    return (
      <Toolbar className={toolbar}>
        {WriquatiLogo()}
        <div>{GetMenuButtons()}</div>
      </Toolbar>
    );
  };

  const WriquatiLogo = () => {
    return <Typography className={logo}>WRIQUATI</Typography>;
  };

  return (
    <header>
      
       {/* <AppBar className={header}>{displayLayout()}</AppBar>  */}
      <div className={heroAppBarStyle}>{GetMenuButtons()}</div>
    </header>
  );
}

const headersData = [
  {
    label: "I lost a document",
    href: "",
  },
  {
    label: "I found a document",
    href: "",
  },
  {
    label: "Contact Us",
    href: "",
  },
  {
    label: "Home",
    href: "",
  },
];
