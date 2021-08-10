import { Dialog } from "./dialog.interface";

export class WebDialog implements Dialog {
  onDrag() {
    console.log("Web dialog dragged");
  }

  onClick() {
    console.log("Web dialog clicked");
  }

  onResize() {
    console.log("Web dialog resized");
  }
}
