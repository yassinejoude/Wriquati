import React from "react";
import SearchField from "../SearchField/SearchField";
import styles from "./header.module.css";
import { Toolbar } from "@material-ui/core";
import MenuIcon from "../../icons/MenuIcon";
import { motion } from "framer-motion";
import classNames from "classnames/bind";

export default function Header(props) {
  var cx = classNames.bind(styles);

  const showLogo = () => {
    return <h3 className={styles.logoStyle}>WRIQUATI</h3>;
  };

  return (
    <motion.div 
    bgColor={props.headerColor}
      exit={{ opacity: 0.1  }}
      transition={{ duration: 0.2}}
      className={cx(
        { minHeader: !props.fullHeader },
        { fullHeader: props.fullHeader },
        {transparent:props.transparent}
      )}
    >
      <Toolbar className={styles.toolbarStyle}>
        <MenuIcon setMenuIconClicked={props.setMenuIconClicked}></MenuIcon>
        {showLogo()}
        {props.fullHeader && <SearchField></SearchField>}
      </Toolbar>
    </motion.div>
  );
}
