import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Card } from "./index";

const prices = [
  {
    value: "500 г",
    text: "500 грн",
  },
  {
    value: "300 г",
    text: "300 грн",
  },
  {
    value: "50 г",
    text: "90 грн",
  },
];
storiesOf("Card", module).add("Default", () => (
  <Card priceList={prices} onSubmit={action("Value: ")} />
));
