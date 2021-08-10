import { HouseBuilder } from "./house-builder";
import { HouseDirector } from "./house-director";

const houseBuilder = new HouseBuilder();
const houseDirector = new HouseDirector(houseBuilder);

houseDirector.buildFullFeaturedHouse();
const fullFeaturedHouse = houseBuilder.getHouse();

houseDirector.buildMinimalHouse();
const minimalHouse = houseBuilder.getHouse();

console.log(fullFeaturedHouse);
console.log(" ");
console.log(minimalHouse);
