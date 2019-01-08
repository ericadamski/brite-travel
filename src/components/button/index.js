import React from "react";
import { Container } from "./button.styled";

/**
 * <Button onClick={func} disabled={false}>I Cannot Be Clicked </Button>
 *
 * React.createElement(Button, { disabled: false }, ['I Cannot Be Clicked']);
 */

export default function Button(props) {
  /**
   * how do I print disabled 😢
   *
   * console.log(props.disabled);
   */

  return (
    <Container onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </Container>
  );
}

/**
 * Static Property
 *
 * Button.defaultProps = {};
 */
