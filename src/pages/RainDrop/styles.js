import styled, {keyframes} from "styled-components";

const rainDropAnimation = (endY) => keyframes`
  0% {
    top: -50px;
  }
  100% {
    top: ${endY}%;
    opacity: 0;
  }
`;

export const RainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #202020, #111119);
  position: relative;
`;

export const Drop = styled.div`
  width: 1px;
  height: 50px;
  background: #f2f2f2;
  position: absolute;
  top: -50px;
  left: ${props => props.beginX}%;
  animation: ${props => rainDropAnimation(props.endY)} ${props => props.duration}s linear;
  animation-delay: ${props => props.delay}s;
`;