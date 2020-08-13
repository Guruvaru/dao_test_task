import styled, { keyframes } from "styled-components";

const elipsis1 = keyframes`
0% {
  transform: scale(0);
}
100% {
  transform: scale(1);
}
`;
const elipsis2 = keyframes`
0% {
  transform: translate(0, 0);
}
100% {
  transform: translate(24px, 0);
}`;
const elipsis3 = keyframes`
0% {
  transform: scale(1);
}
100% {
  transform: scale(0);
}`;
export const LoaderContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 80px;
  height: 25px;
  div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${elipsis1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${elipsis2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${elipsis2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${elipsis3} 0.6s infinite;
  }
`;
