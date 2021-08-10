import { Chair } from "./chair";
import { Table } from "./table";

export abstract class FurnitureFactory {
  abstract createChair(): Chair;
  abstract createTable(): Table;
}
