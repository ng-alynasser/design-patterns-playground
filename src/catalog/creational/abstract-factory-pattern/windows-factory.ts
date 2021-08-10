import { GuiFactory } from "./gui-factory";
import { Button } from "./button";
import { WindowsButton } from "./windows-button";
import { CheckBox } from "./checkbox";
import { WindowsCheckbox } from "./windows-checkbox";

export class WindowsFactory extends GuiFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): CheckBox {
    return new WindowsCheckbox();
  }
}
