import React from "react";
import styles from "./DocCardStyles.module.css";
import { ReactComponent as VerifiedIcon } from "../icons/verified.svg";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { ReactComponent as LocationIcon } from "../icons/googleMaps.svg";
import { ReactComponent as CheckIcon } from "../icons/check.svg";
import classNames from 'classnames/bind';


export default function DocCard(props) {

var cx = classNames.bind(styles);

  return (
    <div className={ cx({docCard:true},{style2:props.style2},{style1:props.style1},{bigSize:props.big},{smallSize:props.small })}>
      <div className={cx({title:true},{style2:props.style2},{style1:props.style1})}>
        <h1>
          {props.report.ReportId} <CheckIcon />
        </h1>
      </div>
      <div className={cx({primaryInfos:true},{style2:props.style2},{style1:props.style1})}>
        <ul>
          <li>
            <UserIcon />
            <h3>Khalid Mourabit</h3>
          </li>
          <li>
            <LocationIcon />
            <h3>Mohammedia</h3>
          </li>
        </ul>
      </div>
      <div className={styles.secondaryInfos}>
        <p> il ya un jour</p>
        <h3>
          Yassine Ejjoud <VerifiedIcon />
        </h3>
      </div>
    </div>
  );
}
