import React, { useState } from "react";
import SearchField from "../components/SearchField";
import SearchAsset from "../components/SearchAsset";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./home.css";
import People from "../components/People";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import DocCard from '../components/DocCard,'

const useStyles = makeStyles(() => ({
  homeContainer: {
    position:'relative',
    height: "100%",
    width:'100%'
    
  },
  searchContainer: {
    backgroundColor: "#74daee",
    height: "100vh",
    width: "100%",
    position: "absolute",
  },
  homeTitle: {
    color: "#FF9B1B",
    fontSize: "45px",
    fontFamily: "Dosis",
    marginLeft: "21%",
    marginBottom: "0px",
    marginTop: "0",
  },
  searchTitle: {
    color: "white",
    fontSize: "45px",
    fontFamily: "Dosis",
    margin: "0 auto",
    width: "480px",
    paddingBottom:''
  },
  text: {
    color: "#2C6776",
    fontSize: "18px",
    fontFamily: "Dosis",
    padding: "15px 0",
    paddingBottom: "0",
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
  const [isInputFocus, SetInputFocus] = useState(false);
  const handleFocus = (x) => {
    SetInputFocus(x);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div
        className={
          isInputFocus ? classes.searchContainer : classes.homeContainer
        }
      >
        <Grid

          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}
          style={{paddingTop:'55px'}}>
            
            {isInputFocus === false && (
              <h1 className={classes.homeTitle}>Did you lost a document?</h1>
            )}
            {isInputFocus && (
              <h1 className={classes.searchTitle}>USE WRIQUATI'S SEARCH</h1>
            )}
          </Grid>
          <Grid item xs={12}>
            <SearchField handleFocus={handleFocus} />
          </Grid>

          <Grid hidden={isInputFocus} item xs={3}>
            <p className={classes.text}>
              if you find a document please click here
            </p>
          </Grid>
          <Grid hidden={isInputFocus} item xs={2}>
            <Link to="./Step">
              <button type="Button" className={classes.button}>
                i found a document
              </button>
            </Link>
          </Grid>
        </Grid>

        <div>
          <Grid
            style={{
              position: "absolute",
              bottom: "0",
              zIndex:'0'
            }}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12}>
              {/* {isInputFocus === false && <People />}
              {isInputFocus && <SearchAsset />} */}
            </Grid>
          </Grid>
              <DocCard></DocCard>
        </div>
      </div>
    </React.Fragment>
  );
}
