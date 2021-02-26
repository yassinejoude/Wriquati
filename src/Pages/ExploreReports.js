import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./ExploreReports.module.css";
import ReportsDataTable from "../components/ReportsDataTable/ReportsDataTable";
import reports from "../FakeData";
import DocCard from "../components/DocCard/DocCard";
import Button from "../components/Button/Button";
import NoResults from "../components/NoResults/NoResults";
import classNames from "classnames/bind";
import axios from "axios";

const ExploreReports = ({ setIsFullHeader, setHeaderTransparency }) => {
  var cx = classNames.bind(styles);
  const [reports, setReports] = useState();
  useEffect(() => {
    axios
      .get("https://mockend.com/org/repo/SearchResults")
      .then((res) => {
        setReports(res.data);
      })
      .catch((er) => {
        alert(er);
      });
  }, [0]);
  useLayoutEffect(() => {
    setIsFullHeader(true);
    setHeaderTransparency(false);
  }, [setIsFullHeader]);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedReport, setSelectedReport] = useState();
  const handleReportClick = (report) => {
    setSelectedReport(report);
    setIsSelected(true);
    setIsFullHeader(false);
  };
  handleNoResults = () => {
    setHeaderTransparency(true);
  };
  return (
    <>
      {/* {isSelected && (
        <div className={styles.layer}>
          <div className={styles.selectedReport}>
            <DocCard small style1 report={selectedReport} />
            <div className={styles.text}>
              <p>It is yours? </p> <Button value='Yes'/> <Button value='No'/>
            </div>
          </div>
        </div>
      )}
    
      <div className={styles.container}>
        <ReportsDataTable
          maxRows={12}
          reportsArr={reports}
          style1
          pagination
          handleReportClick={handleReportClick}
        />
      </div> */}
      {
        <div className={cx({ layer: true }, { noResults: true })}>
          <NoResults />
        </div>
      }
    </>
  );
};

export default ExploreReports;
