import { ShapeWithBackReference } from "./shape-prototype";

export interface Coordinates {
  x: number;
  y: number;
}

export interface Shape {
  coordinates?: Coordinates;
  color?: string;
  [key: string]: any;
}
