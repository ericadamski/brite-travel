import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import SearchBar from "./index";

import Wrapper from "../../../.storybook/wrapper";

storiesOf("Search Bar", module).add("Default", () => (
  <Wrapper>
    <SearchBar onSearch={action("Seaching...")} />
  </Wrapper>
));
