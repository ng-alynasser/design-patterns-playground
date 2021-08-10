import { Button } from "./button";

export class MacButton implements Button {
  onClick() {
    console.log("Mac button clicked");
  }
}
