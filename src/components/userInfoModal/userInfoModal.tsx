import { FC, useState } from "react";
import { Modal } from "../modal";

interface UserInfoModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export const UserInfoModal: FC<UserInfoModalProps> = ({
  isModalOpen,
  closeModal,
}) => {
  const [stepValidity, setStepValidity] = useState([false, false, false]);

  const onFinish = async () => {
    console.log("Finish");

    await localStorage.setItem(
      "userInfo",
      JSON.stringify({ name: "John Doe" })
    );

    closeModal();
  };

  const steps = [
    {
      title: "Step 1",
      isValid: () => true,
      component: <div> hi </div>,
    },
    {
      title: "Step 2",
      isValid: () => true,
      component: <div> hi </div>,
    },
    {
      title: "Step 3",
      isValid: () => true,
      component: <div> hi </div>,
    },
  ];

  //   const updateStepValidity = (step: number, isValid: boolean) => {
  //     setStepValidity((prev) => {
  //       const newValidity = [...prev];
  //       newValidity[step] = isValid;
  //       return newValidity;
  //     });
  //   };

  return (
    <Modal
      show={isModalOpen}
      onClose={closeModal}
      onFinish={onFinish}
      steps={steps}
    />
  );
};
