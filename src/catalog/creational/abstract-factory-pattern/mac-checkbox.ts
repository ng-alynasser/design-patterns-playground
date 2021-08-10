import { CheckBox } from "./checkbox";

export class MacCheckbox implements CheckBox {
  onCheck() {
    console.log("Mac checkbox checked");
  }
}
