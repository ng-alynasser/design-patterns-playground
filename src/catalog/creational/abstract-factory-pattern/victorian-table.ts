import { Table } from "./table";

export class VictorianTable implements Table {
  getNumberOfLegs() {
    return 4;
  }

  getShape(): string {
    return "semi-square";
  }
}
