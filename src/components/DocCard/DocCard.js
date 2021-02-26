import React from "react";
import styles from "./DocCardStyles.module.css";
import { ReactComponent as VerifiedIcon } from "../../icons/verified.svg";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import { ReactComponent as LocationIcon } from "../../icons/googleMaps.svg";
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
export default function DocCard(props) {
  var cx = classNames.bind(styles);

  return (
    <motion.div
    onClick={()=>props.handleReportClick(props.report)}
      className={cx(
        { docCard: true },
        { style2: props.style2 },
        { style1: props.style1 },
        { bigSize: props.big },
        { smallSize: props.small }
      )}
    >
      <div
        className={cx(
          { title: true },
          { style2: props.style2 },
          { style1: props.style1 }
        )}
      >
        <h1>
          {props.report.foundDocs[0].docType} <CheckIcon />
        </h1>
      </div>
      <div
        className={cx(
          { primaryInfos: true },
          { style2: props.style2 },
          { style1: props.style1 }
        )}
      >
        <ul>
          <li>
            <UserIcon />
            <h3>{props.report.foundDocs[0].docOwner}</h3>
          </li>
          <li>
            <LocationIcon />
            <h3>{props.report.findingCity}</h3>
          </li>
        </ul>
      </div>
      <div className={styles.secondaryInfos}>
        <p> il ya un jour</p>
        <h3>
          {props.report.foundDocs[0].docFinder.UserName} <VerifiedIcon />
        </h3>
      </div>
    </motion.div>
  );
}
