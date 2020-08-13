import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Radio } from "./index";

storiesOf("Radio", module)
  .add("Selected", () => (
    <Radio
      label="500 г"
      value="500 г"
      selected="500 г"
      onChange={action("clicked")}
    />
  ))
  .add("Unselected", () => (
    <Radio
      label="300 г"
      value="300 г"
      selected="second"
      onChange={action("clicked")}
    />
  ));
// .add("with some emoji", () => <Radio>);
export function qqq() {
  alert("qwe");
}
