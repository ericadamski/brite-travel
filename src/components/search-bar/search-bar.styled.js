import styled, { keyframes } from "styled-components";
import Colors from "../utils/colors";

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
`;

export const Icon = styled.i`
  margin-left: 0.25rem;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  border: 2px solid ${Colors.black};
  height: 25px;
  min-width: 250px;
  border-radius: 4px;
  padding: 0.5rem;
  transition: all 0.2s ease;
  transition-delay: 0.1s;
  transform: scale(0.95);
  height: 50px;

  box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.3);

  &:focus-within {
    outline: none;
    transform: scale(1);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.3);

    ${Icon} {
      animation: 0.2s ${Rotate} ease;
    }
  }
`;

export const Label = styled.label`
  margin: 0 0.25rem;
  position: absolute;
  pointer-events: none;
  transition: all 0.2s ease;
  user-select: none;
  background-color: ${Colors.saffron};
`;

export const Search = styled.input.attrs(() => ({
  required: true
}))`
  height: 100%;
  border: none;
  background: transparent;
  flex-grow: 1;
  padding: 0;

  &:focus,
  &:active,
  &:valid {
    outline: none;

    & ~ ${Label} {
      transform: translateY(-85%);
    }
  }
`;
