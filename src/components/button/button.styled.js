import styled from "styled-components";
import Colors from "../utils/colors";

/**
 * class="container"
 */
export const Container = styled.button`
  background-color: ${Colors.geranium};
  border: 1px solid ${Colors.geranium};
  border-radius: 4px;
  padding: 0.5rem 2rem;
  color: ${Colors.white};
  text-transform: capitalize;
  transition: opacity 0.2s ease;
  will-change: opacity;

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

/**
 * button.css
 *
 *
 * .container {
 *  // nonsense
 * }
 *
 * .container:hover {
 *  // nonsense
 * }
 *
 * .container:focus {
 *  // nonsense
 * }
 *
 * .container:focus span {
 *  // nonsense
 * }
 */
