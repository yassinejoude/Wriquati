import React from "react";
import CancelIcon from "../../icons/CancelIcon";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";


const useStyle = makeStyles(() => ({
  menuButtonStyle: {
    fontFamily: "Dosis",
    size: "18px",
    margin: "15px",
    display: "block",
  },
  sideBarStyle: {
    width: "20%",
    position: "fixed",
    zIndex: "2",
    textAlign: "center",
    color: "#077F88",
    height: "100%",
    backgroundColor: "#e0e0e0",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
  },
}));

const SideBar = (props) => {
  const classes = useStyle();

  const GetMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          className={classes.menuButton}
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.menuButtonStyle,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <div className={classes.sideBarStyle} >
      <CancelIcon setMenuIconClicked={props.setMenuIconClicked} />
      <div>
        <img
          width="100px"
          height="100px"
          src={require("../../icons/user.png")}
          alt="profile"
        ></img>
        <h1>Sign in</h1>
      </div>
      {GetMenuButtons()}
    </div>
  );
};
const headersData = [
  {
    label: "I lost a document",
    href: "./",
  },
  {
    label: "I found a document",
    href: "./",
  },
  {
    label: "Contact Us",
    href: "./",
  },
  {
    label: "Home",
    href: './',
  },
];
export default SideBar;
