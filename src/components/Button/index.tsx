import React from "react";
import { Btn, BtnContent } from "./styles";
import { Loader } from "../Loader";
interface IButtonProps {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
  loading?: boolean;
}
export const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  disabled,
  loading,
}) => {
  return (
    <Btn disabled={disabled ? disabled : false} onClick={onClick}>
      {!disabled && loading ? <Loader /> : <BtnContent>{children}</BtnContent>}
    </Btn>
  );
};
