import React from "react";
import clsx from "classnames";
import { Home, Image, Location, NoteText, RulerPen, Setting2 } from "iconsax-react";

export default function Stepper({ currentStep = 1 }) {
  // 🏁 Define the steps of the stepper
  const steps = [
    { label: "موقعیت", id: 1, icon: <Location className="!w-4 !h-4 xl:!w-6 xl:!h-6"  color="#FFFFFF" /> },
    { label: "نوع ملک", id: 2, icon: <Home className="!w-4 !h-4 xl:!w-6 xl:!h-6"  color="#FFFFFF" /> },
    { label: "ابعاد", id: 3, icon: <RulerPen className="!w-4 !h-4 xl:!w-6 xl:!h-6"  color="#FFFFFF" /> },
    { label: "امکانات", id: 4, icon: <Setting2 className="!w-4 !h-4 xl:!w-6 xl:!h-6" color="#FFFFFF" /> },
    { label: "توضیحات", id: 5, icon: <NoteText className="!w-4 !h-4 xl:!w-6 xl:!h-6"  color="#FFFFFF" /> },
    { label: "رسانه", id: 6, icon: <Image className="!w-4 !h-4 xl:!w-6 xl:!h-6"  color="#FFFFFF" /> },
  ];

  // 📊 Define the progress bar width for each step
  const progressWidths = [11, 31, 50, 70, 90, 100];
  const progressWidth = `${progressWidths[currentStep - 1]}%`;

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
          {steps.map(({ id, label, icon }) => (
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
}
