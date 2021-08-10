import { Prototype } from "./prototype";
import { Coordinates, Shape } from "./shape";

export class ShapePrototype implements Prototype<Shape> {
  public coordinates?: Coordinates;
  public color?: string;
  public circularReference?: ShapeWithBackReference;

  clone(): Shape {
    let clone: Shape = {};
    for (let attr in this) {
      clone[attr] = this[attr];
    }

    return clone;
  }
}

export class ShapeWithBackReference {
  constructor(private readonly prototype: ShapePrototype) {}
}
