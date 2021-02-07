import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./SearchField.css";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  searchForm: {
    margin: "0 auto",
    textAlign: "center",
    color: "red",
  },
  searchField: {
    backgroundColor: "#FF9B1B",
    borderRadius: "100px",
    color: "white",
    fontSize: "20px",
    fontFamily: "Dosis",
    border: "0px",
    outline: "none",
    width: "60%",
    height: "50px",
    caretColor: "black",
    padding: "0px 20px",
  },
}));
const variants = {
  hidden: { opacity: 1, y: -1000 },
  visible: { opacity: 1, y: 0 },
};
export default function Home(props) {
  const [inputValue, setInputValue] = useState();
  const classes = useStyles();
  const handleSubmit = (e) => {
    props.getInputValue(inputValue);
    e.preventDefault();
  };
  const showSearchField = () => {
    return (
      <form
        onSubmit={handleSubmit}
        className={classes.searchForm}
        noValidate
        autoComplete="off"
      >
        <input
          onClick={() => props.handleFocus(true)}
          onChange={(e) => setInputValue(e.target.value)}
          className={classes.searchField}
          type="text"
          placeholder="I LOST A DOCUMENT"
          value={inputValue}
        ></input>
      </form>
    );
  };
  return (
    <motion.div
      style={{
        position: "",
        top: "30",
      }}
      initial={variants.hidden}
      animate={variants.visible}
      transition={{ duration: 0.2 }}
    >
      {showSearchField()}
    </motion.div>
  );
}
