import { ChangeEvent, FC, useState } from "react";
import { UserInfo } from "../types";

interface AgeStepProps {
  data: UserInfo;
  update: (data: Partial<UserInfo>) => void;
}

export const AgeStep: FC<AgeStepProps> = ({ data, update }) => {
  const [age, setAge] = useState<number>(data.age || 1);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAge = parseInt(event.target.value);
    setAge(newAge);
    update({ age: newAge });
  };

  return (
    <div>
      <label>
        Age:
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
  );
};
