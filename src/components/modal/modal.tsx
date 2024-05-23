import { FC, useState, useEffect } from "react";
import styles from "./modal.module.scss";

export interface ModalStep {
  title: string;
  isValid: () => boolean;
  component: React.ReactNode;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onFinish: () => void;
  steps: ModalStep[];
}

export const Modal: FC<ModalProps> = ({ show, onClose, steps, onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (show) {
      setCurrentStep(0);
    }
  }, [show]);

  useEffect(() => {
    setIsValid(steps[currentStep].isValid());
  }, [currentStep, steps]);

  if (!show) {
    return null;
  }

  const nextStep = () => {
    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h4 style={{ margin: 0 }}>{steps[currentStep].title}</h4>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>

        <div className={styles.body}>{steps[currentStep].component}</div>

        <div className={styles.footer}>
          <button
            className={styles.button}
            style={{ marginRight: 5 }}
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            className={styles.button}
            style={{ backgroundColor: "#716d7c93" }}
            onClick={nextStep}
            disabled={!isValid}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};
