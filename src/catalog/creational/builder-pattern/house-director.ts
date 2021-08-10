import { BaseBuilder } from "./base-builder";
import { House } from "./house";

export class HouseDirector {
  constructor(private readonly houseBuilder: BaseBuilder) {}

  buildMinimalHouse(): void {
    this.houseBuilder.buildWalls(2);
    this.houseBuilder.buildDoors(1);
    this.houseBuilder.buildWindows(2);
    this.houseBuilder.setRoof();
  }

  buildFullFeaturedHouse(): void {
    this.houseBuilder.buildWalls(8);
    this.houseBuilder.buildDoors(4);
    this.houseBuilder.buildWindows(6);
    this.houseBuilder.setGarage();
    this.houseBuilder.setRoof();
  }
}
