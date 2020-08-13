import React from "react";
import { RadioContainer, RadioInner, RadioOuter, RadioText } from "./styles";

type RadioValueType = string | object | number;

interface IRadioProps {
  value: RadioValueType;
  label: string;
  selected: RadioValueType;
  onChange: (e: React.MouseEvent) => void;
}

export const Radio: React.FC<IRadioProps> = ({
  value,
  label,
  selected,
  onChange,
}) => {
  const isSelected = value !== selected;
  return (
    <RadioContainer onClick={onChange}>
      <RadioOuter selected={isSelected}>
        <RadioInner selected={isSelected}></RadioInner>
      </RadioOuter>
      <RadioText selected={isSelected}>{label}</RadioText>
    </RadioContainer>
  );
};
