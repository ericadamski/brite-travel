import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./index";

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

    return <Button onClick={action("Clicked Button")}>click me</Button>;
  })
  .add("Disabled", () => (
    <Button disabled onClick={action("Clicked Button")}>
      click me
    </Button>
  ));
