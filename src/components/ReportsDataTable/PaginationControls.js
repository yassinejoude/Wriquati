import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import DocCard from "../DocCard/DocCard";
import styles from "./paginationControls.module.css";
import { Grid } from "@material-ui/core";
const PaginationControls = (props) => {
  const { setPage } = props;
  const [PageOrder, setPageOrder] = useState(1);
  const getReportsFrom = useCallback(
    (index) => {
      var temp = [];
      for (let i = 0; i <= props.maxRows - 1; i++) {
        if (props.reportsArr.length - 1 < index) {
          break;
        }
        temp.push(
          <Grid key={props.reportsArr[index].reportId} item xs={4}>
            <DocCard
              handleReportClick={props.handleReportClick}
              small
              style2={props.style2}
              style1={props.style1}
              report={props.reportsArr[index]}
            />
          </Grid>
        );
        index += 1;
      }
      return temp;
    },
    [
      props.handleReportClick,
      props.maxRows,
      props.reportsArr,
      props.style1,
      props.style2,
    ]
  );

  useEffect(() => {
    setPage(getReportsFrom(0));
  }, [setPage, getReportsFrom]);

  const lastIndex = useRef(0);
  const prevPage = () => {
    props.setPage(getReportsFrom((lastIndex.current -= props.maxRows)));
    setPageOrder((prevOrder) => prevOrder - 1);
  };

  const nextPage = () => {
    props.setPage(getReportsFrom((lastIndex.current += props.maxRows)));
    setPageOrder((prevOrder) => prevOrder + 1);
  };
  return (
    <div className={styles.container}>
      <div className={(styles.pagination, styles.itemsBg)}>
        {lastIndex.current >= props.maxRows && (
          <button onClick={prevPage}>prev</button>
        )}
        <h3 className={(styles.title, styles.itemsBg)}>
          {PageOrder} from{" "}
          {Math.ceil((props.reportsArr.length - 1) / props.maxRows)}
        </h3>
        {lastIndex.current < props.reportsArr.length - props.maxRows && (
          <button onClick={nextPage}>next</button>
        )}
      </div>
    </div>
  );
};

export default PaginationControls;
