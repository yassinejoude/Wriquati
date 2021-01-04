import React from "react";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import Clouds from "../components/clouds";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./home.css";
import People from "../components/People";
import Grid from "@material-ui/core/Grid";
import Cards from "../components/Cards";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
   
  },
  title: {
    color: "#FF9B1B",
    fontSize: "45px",
    fontFamily: "Dosis",
    marginLeft: "21%",
    marginBottom: "0px",
    marginTop:"0"
  },
  text: {
    color: "#2C6776",
    fontSize: "18px",
    fontFamily: "Dosis",
    padding: "15px 0",
    paddingBottom:'0',
    marginLeft: "10%",
     
  },
  button: {
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
    marginLeft: "14%",
  
  },
  headerText: {
    marginTop: "150px",
    marginLeft: "5%",
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        
        <Grid
            
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
   <Grid item xs={12}>
          <h1 className={classes.title}>Did you lost a document?</h1>
        </Grid>
        <Grid item xs={12}>
          <SearchField />
        </Grid>
        <Grid item xs={3}>
          <p className={classes.text}>
            if you find a document please click here
          </p>
       
        </Grid>
        <Grid item xs={2}>
          <Link to="./Step1">
             <input
            type="Button"
            
            className={classes.button}
            value="i found a document"
            ></input>
            </Link>
        </Grid>
          </Grid>
     

        <div>
          <Grid
            style={{
              position: "absolute",
              bottom: "0",
            }}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12}>
              <People />
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}
