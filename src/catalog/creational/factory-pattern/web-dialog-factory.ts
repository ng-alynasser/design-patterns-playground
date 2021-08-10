import { DialogBaseFactory } from "./dialog-base-factory";
import { WebDialog } from "./web-dialog";
import { Dialog } from "./dialog.interface";

/**
 * Concrete Dialogs override the factory method in order to change the
 * resulting dialog's type.
 */

export class WebDialogFactory extends DialogBaseFactory {
  /**
   * Note that the signature of the method still uses the abstract dialog
   * type, even though the concrete dialog is actually returned from the
   * method. This way the Dialog can stay independent of concrete dialog
   * classes.
   */
  createDialog(): Dialog {
    return new WebDialog();
  }
}
