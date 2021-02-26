import React from "react";
import NoResultsAsset from "../../Assets/NoResultsAsset";
import Button from "../Button/Button";
import styles from "./NoResults.module.css";
const NoResults = () => {
  return (
    <div className={styles.container}>
      <div className={styles.assetContainer}>
        <NoResultsAsset />
      </div>
      <div className={styles.invitation}>
        <div>
          <h1>No Results</h1>
          <p>
            We dont have Your documents yet,Please report your loss and come back
            to check later, We will send you an email when someone Finds them 
          </p>
          <Button value="Report" />
        </div>
      </div>
    </div>
  );
};

export default NoResults;
