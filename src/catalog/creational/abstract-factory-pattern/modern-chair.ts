import { Chair } from "./chair";

export class ModernChair implements Chair {
  hasLegs(): boolean {
    return true;
  }

  sitOn() {
    console.log("Modern chair has been sat on.");
  }
}
