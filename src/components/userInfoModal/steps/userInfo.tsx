import { ChangeEvent, FC, useState } from "react";
import { UserInfo } from "../types";

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
    <div>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};
