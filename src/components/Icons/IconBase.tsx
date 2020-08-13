import React from "react";
import styled from "styled-components";

interface IconPropsIterface {
  children: React.ReactNode | React.ReactNode[];
  width: string;
  height: string;
  margin: string;
}
type IconStyleType = {
  margin: string;
};
const Icon = styled.svg<IconStyleType>`
  margin: ${({ margin }) => (margin ? margin : "0")};
`;

export const IconBase: React.FC<IconPropsIterface> = ({
  children,
  width,
  height,
  margin,
}) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="currentColor"
      width={width}
      height={height}
      margin={margin}
    >
      {children}
    </Icon>
  );
};
