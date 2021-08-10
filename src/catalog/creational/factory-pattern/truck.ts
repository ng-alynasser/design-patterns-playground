import { Transport } from "./transport";

export class Truck implements Transport {
  deliver() {
    console.log("Will be delivered by a truck.");
  }
}
