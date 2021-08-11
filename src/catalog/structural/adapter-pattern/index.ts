import { RoundHole } from "./round-hole";
import { RoundPeg } from "./round-peg";
import { SquarePeg } from "./square-peg";
import { SquarePegAdapter } from "./square-peg-adapter";

const roundHole = new RoundHole(5);
const roundPeg = new RoundPeg(5);

console.log(roundHole.fits(roundPeg));

const smallSquarePeg = new SquarePeg(5);
const bigSquarePeg = new SquarePeg(10);

const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg, roundPeg);
const bigSquarePegAdapter = new SquarePegAdapter(bigSquarePeg, roundPeg);

console.log(roundHole.fits(smallSquarePegAdapter));
console.log(roundHole.fits(bigSquarePegAdapter));
