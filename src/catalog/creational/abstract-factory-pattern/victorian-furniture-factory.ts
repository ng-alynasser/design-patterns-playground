import { FurnitureFactory } from "./furniture-factory";
import { VictorianChair } from "./victorian-chair";
import { Chair } from "./chair";
import { VictorianTable } from "./victorian-table";
import { Table } from "./table";

export class VictorianFurnitureFactory extends FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createTable(): Table {
    return new VictorianTable();
  }
}
