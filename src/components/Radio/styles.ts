import styled from "styled-components";
import { theme } from "../../theme/theme";

type RadioStyleType = {
  selected: boolean;
};

export const RadioOuter = styled.div<RadioStyleType>`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border: ${({ selected }) =>
    !selected
      ? "1px solid rgba(" + theme.primary + ")"
      : "1px solid " + theme.grey};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  transition: all 0.1s linear;
`;
export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: 0.4s;
  &:hover ${RadioOuter} {
    box-shadow: 0px 0 5px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const RadioInner = styled.div<RadioStyleType>`
  width: ${({ selected }) => (!selected ? "8px" : "0")};
  height: ${({ selected }) => (!selected ? "8px" : "0")};
  border-radius: 50%;
  background-color: rgb(${theme.primary});
  transition: all 0.1s linear;
`;
export const RadioText = styled.div<RadioStyleType>`
  color: ${({ selected }) => (!selected ? "#000" : theme.grey)};
  font-size: 16px;
`;
