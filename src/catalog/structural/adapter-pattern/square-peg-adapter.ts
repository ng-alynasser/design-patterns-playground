import { RoundPeg } from "./round-peg";
import { SquarePeg } from "./square-peg";

export class SquarePegAdapter extends RoundPeg {
  constructor(
    private readonly squarePeg: SquarePeg,
    private readonly roundPeg: RoundPeg
  ) {
    super(roundPeg.getRadius());
  }

  getRadius(): number {
    return (this.squarePeg.getWidth() * Math.sqrt(2)) / 2;
  }
}
