import React from "react";
import styles from "./DocCardStyles.module.css";
import { ReactComponent as VerifiedIcon } from "../icons/verified.svg";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { ReactComponent as LocationIcon } from "../icons/googleMaps.svg";
import { ReactComponent as CheckIcon } from "../icons/check.svg";


export default function DocCard() {
  return (
    <div className={styles.bg}>
      <div className={styles.titleBg}>
        <h1>
          Diplome Technicien Superieur <CheckIcon />
        </h1>
      </div>
      <div className={styles.docInfos1}>
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
      <div className={styles.docInfos2}>
        <p> il ya un jour</p>
        <h3>
          Yassine Ejjoud <VerifiedIcon />
        </h3>
      </div>
    </div>
  );
}
