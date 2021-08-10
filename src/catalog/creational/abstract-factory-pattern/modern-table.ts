import { Table } from "./table";

export class ModernTable implements Table {
  getNumberOfLegs() {
    return 2;
  }

  getShape(): string {
    return "circle";
  }
}
