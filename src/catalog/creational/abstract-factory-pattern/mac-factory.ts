import { GuiFactory } from "./gui-factory";
import { Button } from "./button";
import { MacButton } from "./mac-button";
import { MacCheckbox } from "./mac-checkbox";
import { CheckBox } from "./checkbox";

export class MacFactory extends GuiFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): CheckBox {
    return new MacCheckbox();
  }
}
