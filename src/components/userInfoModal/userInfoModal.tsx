import { FC, useState } from "react";
import { isEmpty, isInteger, isString } from "lodash";
import { Modal, ModalStep } from "../modal";
import { UserInfoModalProps, UserInfo } from "./types";
import { UserInfoStep } from "./steps/userInfo";
import { AgeStep } from "./steps/age";
import { ReviewStep } from "./steps/review";

export const UserInfoModal: FC<UserInfoModalProps> = ({
  isModalOpen,
  closeModal,
}) => {
  const [stepData, setStepData] = useState<UserInfo>({
    firstName: null,
    lastName: null,
    age: null,
  });

  const cleanupData = () => {
    setStepData({
      firstName: null,
      lastName: null,
      age: null,
    });
  };

  const onFinish = async () => {
    await localStorage.setItem("userInfo", JSON.stringify(stepData));

    cleanupData();
    closeModal();
  };

  const updateStepData = (data: Partial<UserInfo>) => {
    setStepData({ ...stepData, ...data });
  };

  const steps: ModalStep[] = [
    {
      title: "Personal Info",
      isValid: () => {
        return (
          isString(stepData.firstName) &&
          isString(stepData.lastName) &&
          !isEmpty(stepData.firstName) &&
          !isEmpty(stepData.lastName)
        );
      },
      component: <UserInfoStep data={stepData} update={updateStepData} />,
    },
    {
      title: "Age",
      isValid: () => {
        return !!stepData.age && isInteger(stepData.age);
      },
      component: <AgeStep data={stepData} update={updateStepData} />,
    },
    {
      title: "Review",
      isValid: () => true,
      component: <ReviewStep data={stepData} />,
    },
  ];

  return (
    <Modal
      show={isModalOpen}
      onClose={closeModal}
      onFinish={onFinish}
      steps={steps}
    />
  );
};
