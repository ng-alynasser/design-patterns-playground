import { FurnitureFactory } from "./furniture-factory";
import { Chair } from "./chair";
import { ModernChair } from "./modern-chair";
import { ModernTable } from "./modern-table";
import { Table } from "./table";

export class ModernFurnitureFactory extends FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createTable(): Table {
    return new ModernTable();
  }
}
