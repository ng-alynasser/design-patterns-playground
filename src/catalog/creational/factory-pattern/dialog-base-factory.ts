import { Dialog } from "./dialog.interface";

/**
 * The Dialog class declares the factory method that is supposed to return an object of Dialog class.
 * The Dialog's subclasses usually provide the implementation of this method.
 */
export abstract class DialogBaseFactory {
  abstract createDialog(): Dialog;

  /**
   * Also note that, the Dialog's primary responsibility is not creating dialogs. Usually, it contains
   * some core business logic that relies on Dialog objects, returned by the createDialog method.
   * Subclasses can indirectly change that business logic by overriding the createDialog method and
   * returning a different type of dialog from it.
   */
}
