import { Transport } from "./transport";

export class Ship implements Transport {
  deliver() {
    console.log("Will be delivered by a ship.");
  }
}
