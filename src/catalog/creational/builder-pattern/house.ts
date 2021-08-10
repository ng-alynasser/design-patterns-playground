export class House {
  walls: number;
  doors: number;
  windows: number;
  hasRoof: boolean;
  hasGarage: boolean;

  constructor() {
    this.walls = 0;
    this.doors = 0;
    this.windows = 0;
    this.hasRoof = false;
    this.hasGarage = false;
  }
}
