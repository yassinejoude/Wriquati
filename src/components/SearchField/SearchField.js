import React, { useState } from "react";
import styles from "./SearchField.module.css";
import { motion } from "framer-motion";
import classNames from "classnames/bind";

const variants = {
  animate: {  width:400, scale: 1,originX:0 },
  initial: {  width: 0, scale: 1 },
};

export default function Home(props) {
  var cx = classNames.bind(styles);
  const [inputValue, setInputValue] = useState();
  const handleSubmit = (e) => {
    props.getInputValue(inputValue);
    e.preventDefault();
  };
  const showSearchField = () => {
    return (
     <div className={cx({container:true},{big:props.big})}>
        <form className={cx({searchForm:true},{big:props.big})} onSubmit={handleSubmit} noValidate autoComplete="off">
        <motion.input
          initial={variants.initial}
          animate={variants.animate}
          transition={{ duration: 0.5}}
          onClick={() => props.handleFocus(true)}
          onChange={(e) => setInputValue(e.target.value)}
          className={cx({searchField:true},{big:props.big})}
          type="text"
          placeholder="I LOST A DOCUMENT"
          value={inputValue}
        ></motion.input>
      </form>
     </div>
    );
  };
  return <>{showSearchField()}</>;
}
