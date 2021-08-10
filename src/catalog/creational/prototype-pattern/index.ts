import { ShapePrototype, ShapeWithBackReference } from "./shape-prototype";

const shapePrototype = new ShapePrototype();
shapePrototype.coordinates = { x: 1, y: 2 };
shapePrototype.color = "red";
shapePrototype.circularReference = new ShapeWithBackReference(shapePrototype);

const clone = shapePrototype.clone();

console.log(shapePrototype);
console.log(clone);
