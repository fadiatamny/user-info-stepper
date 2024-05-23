import { ChangeEvent, FC, useState } from "react";
import { UserInfo } from "../types";
import styles from "./steps.module.scss";

interface UserInfoStepProps {
  data: UserInfo;
  update: (data: Partial<UserInfo>) => void;
}

export const UserInfoStep: FC<UserInfoStepProps> = ({ data, update }) => {
  const [formData, setFormData] = useState(
    Object.assign({ firstName: "", lastName: "" }, data)
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    update({ ...formData, [name]: value });
  };

  return (
    <div className={styles.step}>
      <div className={styles.row}>
        <label>
          <span className={styles.title}>First Name:</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          <span className={styles.title}>Last Name:</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
};
