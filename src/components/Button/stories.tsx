import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./index";
import { IconBase, CartIcon } from "../Icons";
import { action } from "@storybook/addon-actions";

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>До кошика</Button>
  ))
  .add("disabled", () => (
    <Button onClick={action("clicked")} disabled>
      До кошика
    </Button>
  ))
  .add("with loader", () => (
    <Button onClick={action("clicked")} loading>
      {" "}
    </Button>
  ))
  .add("with icon", () => (
    <Button onClick={action("clicked")}>
      <IconBase margin="0 8px 0 0" width="24px" height="24px">
        <CartIcon />
      </IconBase>
      send
    </Button>
  ));
