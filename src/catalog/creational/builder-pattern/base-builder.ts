export abstract class BaseBuilder {
  abstract reset(): void;
  abstract buildWalls(walls: number): void;
  abstract buildDoors(doors: number): void;
  abstract buildWindows(windows: number): void;
  abstract setGarage(): void;
  abstract setRoof(): void;
}
