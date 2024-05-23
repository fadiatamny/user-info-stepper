import { FC } from "react";
import { UserInfo } from "../types";
import styles from "./steps.module.scss";

interface ReviewStepProps {
  data: UserInfo;
}

export const ReviewStep: FC<ReviewStepProps> = ({ data }) => {
  return (
    <div className={styles.step}>
      <div className={styles.row}>
        <label>
          <span className={styles.title}>First Name:</span>
          <input type="text" value={data.firstName ?? ""} disabled />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          <span className={styles.title}>Last Name:</span>
          <input type="text" value={data.lastName ?? ""} disabled />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          <span className={styles.title}>Age:</span>
          <input type="number" value={data.age ?? 0} disabled />
        </label>
      </div>
    </div>
  );
};
