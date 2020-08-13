import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/theme/global";

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
