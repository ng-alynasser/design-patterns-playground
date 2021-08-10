import { Transport } from "./transport";

export abstract class Logistics {
  abstract planDelivery(): string;
  abstract createTransport(): Transport;
}
