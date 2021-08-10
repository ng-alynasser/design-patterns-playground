import { Logistics } from "./logistics";
import { Truck } from "./truck";

export class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  }

  planDelivery() {
    return "10 Hours";
  }
}
