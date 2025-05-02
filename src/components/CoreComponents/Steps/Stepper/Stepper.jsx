import React, { memo } from "react";
import clsx from "classnames";
import { stepperStages } from "../../../../data/realEstateData";

const Stepper = memo(({ currentStep = 1 }) => {

  // 📊 Define the progress bar percentage for each stage
  const stageProgressPercentages = [11, 31, 50, 70, 90, 100];
  const progressWidth = `${stageProgressPercentages[currentStep - 1]}%`;

  return (
    <div className="stepper">
      {/* 🔵 Progress bar container */}
      <div className="stepper__progress">
        {/* 🔹 Dynamic progress indicator */}
        <div
          className="stepper__progress-bar"
          style={{ width: progressWidth }}
        ></div>
        
        {/* 🏆 Step indicators */}
        <div className="stepper__steps">
          {stepperStages.map(({ id, label, icon }) => (
            <div key={id} className="stepper__step">
              {/* 🔘 Step circle with animation */}
              <span
                className={clsx(
                  "stepper__circle",
                  currentStep >= id && "stepper__circle--active"
                )}
              >
                <div
                  className={clsx(
                    "stepper__circle-border",
                    currentStep >= id && "stepper__circle-border--active"
                  )}
                ></div>
                {icon}
              </span>
              
              {/* 🏷️ Step label */}
              <span
                className={clsx(
                  "stepper__label",
                  currentStep >= id && "stepper__label--active"
                )}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Stepper;
