import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./ReportsDataTableStyles.module.css";
import PaginationControls from "./PaginationControls";

const ReportsDataTable = (props) => {
  const [page, setPage] = useState();
  

  return (
    <div className={styles.container}>
      
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        {page}
      </Grid>
        <Grid hidden={!props.pagination} item xs={12}>
          <PaginationControls {...props} setPage={setPage} />
        </Grid>
    </div>
  );
};

export default ReportsDataTable;
