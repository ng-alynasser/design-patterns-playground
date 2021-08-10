import { Transport } from "./transport";
import { RoadLogistics } from "./road-logistics";
import { SeaLogistics } from "./sea-logistics";
import { Logistics } from "./logistics";

export class App {
  private transport: Transport;
  private transportFactor: Logistics;

  constructor(private readonly configuration: { urgent: boolean }) {
    if (this.configuration.urgent) {
      this.transportFactor = new RoadLogistics();
    } else {
      this.transportFactor = new SeaLogistics();
    }

    this.transport = this.transportFactor.createTransport();
  }

  createTransport(): void {
    this.transport = this.transportFactor.createTransport();
  }

  getEstimationTime(): void {
    console.log(this.transportFactor.planDelivery());
  }

  makeTheDeliver(): void {
    this.transport.deliver();
  }
}

const logistics = new App({ urgent: true });

logistics.createTransport();
logistics.getEstimationTime();
logistics.makeTheDeliver();
