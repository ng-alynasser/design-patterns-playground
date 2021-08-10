import { Dialog } from "./catalog/creational/factory-pattern/dialog.interface";
import { WebDialogFactory } from "./catalog/creational/factory-pattern/web-dialog-factory";
import { WindowsDialogFactory } from "./catalog/creational/factory-pattern/windows-dialog-factory";

/**
 * Factory Method Pattern Usage
 *
 * The Application picks a dialog's type depending on the configuration or environment.
 */
const configuration = {
  webApp: true,
};

let dialog: Dialog;

if (configuration.webApp) {
  dialog = new WebDialogFactory().createDialog();
} else {
  dialog = new WindowsDialogFactory().createDialog();
}

dialog.onClick();
dialog.onDrag();
dialog.onResize();
