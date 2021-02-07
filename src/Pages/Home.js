import React, { useState } from "react";
import SearchField from "../components/SearchField";
import SearchAsset from "../components/SearchAsset";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./home.css";
import People from "../components/People";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import SearchResult from "../components/SearchResult";

const useStyles = makeStyles(() => ({
  homeContainer: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  searchContainer: {
    backgroundColor: "#ff952e54",
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
    paddingBottom: "",
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
var searchResults=[
  {
    ReportId: "1",
    findingDate: "04/03/2020",
    findingCity: "Mohammedia",
    FoundDocs: [
      {
        docId: "1",
        docType: "Diplome Technicien Superieur",
        docOwner: "Yassine Ejjoud",
        docFinder: {
          Cin: "T298910",
          UserName: "Yassine",
          UserLastName: "Ejjoud",
          UserCity: "Mohammedia",
          userAdress: "Mohammedia Beniyakhlef Karama N23",
        },
      },
    ],
  },
  {
    ReportId: "2",
    findingDate: "04/07/2020",
    findingCity: "Marrakech",
    FoundDocs: [
      {
        docId: "2",
        docType: "Diplome Technicien Superieur",
        docOwner: "Khalid Ejjoud",
        docFinder: {
          Cin: "T298910",
          UserName: "Yassine",
          UserLastName: "Ejjoud",
          UserCity: "Ain Sebaa",
          userAdress: "Ain sebaa Barnousi saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "3",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "3",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "4",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "4",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "5",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "5",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "6",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "6",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "7",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "7",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "8",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "8",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "9",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "9",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "10",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "10",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "11",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "11",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "12",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "12",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "13",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "13",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
  {
    ReportId: "14",
    findingDate: "08/07/2020",
    findingCity: "Rabat",
    FoundDocs: [
      {
        docId: "14",
        docType: "Diplome Technicien Superieur",
        docOwner: "Said wazani",
        docFinder: {
          Cin: "F295210",
          UserName: "Hamid",
          UserLastName: "Miloudi",
          UserCity: "Rabat",
          userAdress: "Rabat Lwifak saada N23 IMM 08",
        },
      },
    ],
  },
]
export default function Home() {
  const classes = useStyles();
  const [isInputFocus, SetInputFocus] = useState(true);
  const handleFocus = (x) => {
    SetInputFocus(x);
  };
  const getInputValue = (value) => {
    console.log(value);
    return value;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div
        className={
          isInputFocus ? classes.searchContainer : classes.homeContainer
        }
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} style={{ paddingTop: "55px" }}>
            {isInputFocus === false && (
              <h1 className={classes.homeTitle}>Did you lost a document?</h1>
            )}
            {isInputFocus && (
              <h1 className={classes.searchTitle}>USE WRIQUATI'S SEARCH</h1>
            )}
          </Grid>
          <Grid item xs={12}>
            <SearchField
              handleFocus={handleFocus}
              getInputValue={getInputValue}
            />
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

        {/* <div>
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
              {isInputFocus === false && <People />}
              {isInputFocus && <SearchResult />}
            </Grid>
          </Grid>
             
        </div> */}
        <SearchResult resultsArr={searchResults} />
      </div>
    </React.Fragment>
  );
}
