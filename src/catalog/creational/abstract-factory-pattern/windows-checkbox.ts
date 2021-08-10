import { CheckBox } from "./checkbox";

export class WindowsCheckbox implements CheckBox {
  onCheck() {
    console.log("Windows checkbox checked");
  }
}
