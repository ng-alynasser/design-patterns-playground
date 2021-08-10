import { DialogBaseFactory } from "./dialog-base-factory";
import { Dialog } from "./dialog.interface";
import { WindowsDialog } from "./windows-dialog";

/**
 * Concrete Dialogs override the factory method in order to change the
 * resulting product's type.
 */

export class WindowsDialogFactory extends DialogBaseFactory {
  /**
   * Note that the signature of the method still uses the abstract dialog
   * type, even though the concrete dialog is actually returned from the
   * method. This way the Dialog can stay independent of concrete dialog
   * classes.
   */
  createDialog(): Dialog {
    return new WindowsDialog();
  }
}
