import { FC } from "react";
import { UserInfo } from "../types";

interface ReviewStepProps {
  data: UserInfo;
}

export const ReviewStep: FC<ReviewStepProps> = ({ data }) => {
  return (
    <div>
      <label>
        First Name:
        <input type="text" value={data.firstName ?? ""} disabled />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={data.lastName ?? ""} disabled />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={data.age ?? 0} disabled />
      </label>
    </div>
  );
};
