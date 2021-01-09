import React from "react";
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
  const classes = useStyles();

  const showSearchField = () => {
    return (
      <form  className={classes.searchForm} noValidate autoComplete="off">
        <input
       
onChange={() => {
  props.handleFocus(true);
}}
          className={classes.searchField}
          type="text"
          placeholder="I LOST A DOCUMENT"
        ></input>
      </form>
    );
  };
  return (
    <motion.div style={{
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
