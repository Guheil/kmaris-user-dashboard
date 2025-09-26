"use client";

import React from "react";
import { StepperContainer, StepperDot } from "./elements";
import { StepperProps } from "./interface";

export function Stepper({ currentStep, flow }: StepperProps) {
  return (
    <StepperContainer>
      {flow.map((_, index) => (
        <StepperDot
          key={index}
          $active={index <= currentStep} 
        />
      ))}
    </StepperContainer>
  );
}