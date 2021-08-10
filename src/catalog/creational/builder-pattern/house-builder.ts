import { House } from "./house";
import { BaseBuilder } from "./base-builder";

export class HouseBuilder extends BaseBuilder {
  private house: House;

  constructor() {
    super();
    this.house = new House();
  }

  reset(): void {
    this.house = new House();
  }

  buildWalls(walls: number) {
    this.house.walls = walls;
  }

  buildDoors(doors: number) {
    this.house.doors = doors;
  }

  buildWindows(windows: number) {
    this.house.windows = windows;
  }

  setGarage() {
    this.house.hasGarage = true;
  }

  setRoof() {
    this.house.hasRoof = true;
  }

  getHouse(): House {
    const house = this.house;
    this.reset();

    return house;
  }
}
