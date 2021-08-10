import { Chair } from "./chair";

export class VictorianChair implements Chair {
  hasLegs(): boolean {
    return true;
  }

  sitOn() {
    console.log("Victorian chair has been sat on.");
  }
}
