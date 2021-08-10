import { Button } from "./button";
import { CheckBox } from "./checkbox";

export abstract class GuiFactory {
  abstract createButton(): Button;
  abstract createCheckbox(): CheckBox;
}
