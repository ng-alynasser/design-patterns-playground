import { Dialog } from "./dialog.interface";

/**
 * Concrete Dialogs provide various implementations of the Dialog interface.
 */
export class WindowsDialog implements Dialog {
  onClick() {
    console.log("Windows dialog clicked");
  }

  onResize() {
    console.log("Windows dialog resized");
  }

  onDrag() {
    console.log("Windows dialog dragged");
  }
}
