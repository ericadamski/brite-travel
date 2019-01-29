import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./index";

import Wrapper from "../../../.storybook/wrapper";

/**
 * JSX
 *
 * <Button {...props}>{children}</Button>
 * (Babel -> React.createElement) Preact, Inferno
 *
 * React.createElement('button', {...props}, [
 *  React.createElement('span', {}, ['click me']);
 * ]);
 *
 *
 * https://storybook.js.org
 */
storiesOf("Button", module)
  .add("Default", () => {
    // <Button {/* prop space */}>{/* child space */}</Button>

    // button.addEventListener('click', function () {});

    return (
      <Wrapper>
        <Button onClick={action("Clicked Button")}>click me</Button>
      </Wrapper>
    );
  })
  .add("Disabled", () => (
    <Wrapper>
      <Button disabled onClick={action("Clicked Button")}>
        click me
      </Button>
    </Wrapper>
  ));
