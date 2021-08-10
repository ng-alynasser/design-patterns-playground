import { Button } from "./button";

export class WindowsButton implements Button {
  onClick() {
    console.log("Windows button clicked");
  }
}
