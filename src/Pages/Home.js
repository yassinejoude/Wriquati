import React from "react";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import Clouds from "../components/clouds";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./home.css";
import People from "../components/People";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
  },
 title:{
   color:"#FF9B1B",
   fontSize: "60px",
   fontFamily:'Dosis',
   margin: '20px 0'
 },
 text:{
  color:"#2C6776",
  fontSize: "18px",
  fontFamily:'Dosis',
  padding:'15px 0'
 },
 button:{
  backgroundColor: "#FF9B1B",
  borderRadius: "100px",
  color: "white",
  fontSize: "17px",
  fontFamily: "Dosis",
  border: "0px",
  outline: "none",
  width: "auto",
  height: "40px",
  padding: "0px 20px",
  
 },
 headerText:{
   marginTop:'150px',
   marginLeft:"5%"
 }

}));
export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <Header />
        <SearchField />
        <Clouds />
        <div >
          <div>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-end"
            >
              <Grid className={classes.headerText} item xs={4}>
                <h1 className={classes.title}>Lorem Ipsum</h1>
                <p className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <input className={classes.button} type='button' value="I LOST A DOCUMENT"></input>
              </Grid>
            </Grid>
          </div>
          <People />
        </div>
      </div>
    </React.Fragment>
  );
}
