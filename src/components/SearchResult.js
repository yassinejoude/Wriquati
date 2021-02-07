import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./searchResultStyles.module.css";
import DocCard from "./DocCard,";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const SearchResult = (props) => {
  const [page, setPage] = useState();
  const lastIndex = useRef(0);

  useEffect(() => {
    setPage(getResults(0));
  }, []);
  const getResults = (index) => {
    var temp = [];
    for (let i = 0; i <= 1; i++) {
      if (props.resultsArr.length - 1 < index) {
        console.log("i break");
        break;
      }
      temp.push(
        <Grid key={props.resultsArr[index].ReportId} item xs={4}>
          <DocCard big style1 report={props.resultsArr[index]} />
        </Grid>
      );
      
    }
    return temp;
  };
  const prevPage = () => {
    setPage(getResults((lastIndex.current -= 2)));
  };

  const nextPage = () => {
    setPage(getResults((lastIndex.current += 2)));
    console.log(lastIndex.current);
  };
  return (
    <div className={styles.container}>
      <Grid
        className={styles.gridContainer}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <h3 className={styles.title}>Search results</h3>
          <div className={styles.title}>
            {lastIndex.current >= 2 && <button onClick={prevPage}>prev</button>}
            
            {lastIndex.current < props.resultsArr.length - 2 && (
              <button onClick={nextPage}>next</button>
            )}
          </div>
        </Grid>
        {page}
      </Grid>
    </div>
  );
};

export default SearchResult;
