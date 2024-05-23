import { ChangeEvent, FC, useState } from "react";
import { UserInfo } from "../types";
import styles from "./steps.module.scss";

interface AgeStepProps {
  data: UserInfo;
  update: (data: Partial<UserInfo>) => void;
}

export const AgeStep: FC<AgeStepProps> = ({ data, update }) => {
  const [age, setAge] = useState<number | "">(data.age ?? "");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAge =
      event.target.value === "" ? "" : parseInt(event.target.value);
    setAge(newAge);
    update({ age: newAge === "" ? null : newAge });
  };

  return (
    <div className={styles.step}>
      <div className={styles.row}>
        <label>
          <span className={styles.title}>Age:</span>
          <input
            type="number"
            min={1}
            max={120}
            step={1}
            value={age}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
};
