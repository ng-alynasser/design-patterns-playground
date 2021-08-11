import { RoundPeg } from "./round-peg";

export class RoundHole {
  constructor(private readonly radius: number) {}

  getRadius(): number {
    return this.radius;
  }

  fits(peg: RoundPeg) {
    return this.radius >= peg.getRadius();
  }
}
