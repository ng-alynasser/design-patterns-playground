import { Logistics } from "./logistics";
import { Transport } from "./transport";
import { Ship } from "./ship";

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }

  planDelivery() {
    return "A month";
  }
}
