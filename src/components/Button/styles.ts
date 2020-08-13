import styled from "styled-components";
import { theme } from "../../theme/theme";

type BtnStyleType = {
  disabled: boolean;
};
export const Btn = styled.button<BtnStyleType>`
  height: 48px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 8px;
  background: ${({ disabled }) =>
    disabled ? theme.grey : "rgb(" + theme.primary + ")"};
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  border: 0;
  transition: 0.1s;
  &:hover:not(:disabled) {
    background-color: rgba(${theme.primary}, 0.9);
  }
  &:active:not(:disabled) {
    transform: translateY(3px) scale(0.99);
  }
`;
export const BtnContent = styled.span`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  position: relative;
`;
