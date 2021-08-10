import { GuiFactory } from "./catalog/creational/abstract-factory-pattern/gui-factory";
import { WindowsFactory } from "./catalog/creational/abstract-factory-pattern/windows-factory";
import { MacFactory } from "./catalog/creational/abstract-factory-pattern/mac-factory";
import { Button } from "./catalog/creational/abstract-factory-pattern/button";
import { CheckBox } from "./catalog/creational/abstract-factory-pattern/checkbox";
/**
 * Abstract Factory Pattern Usage
 *
 * The application picks the factory type depending on the current configuration or the environment
 * and creates it at runtime.
 */

// let guiFactory: GuiFactory;
// let button: Button;
// let checkbox: CheckBox;
//
// if (configuration.os === "windows") {
//   guiFactory = new WindowsFactory();
// } else {
//   guiFactory = new MacFactory();
// }
//
// button = guiFactory.createButton();
// checkbox = guiFactory.createCheckbox();
// button.onClick();
// checkbox.onCheck();
