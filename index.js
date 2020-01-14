const remap = (n, from1, to1, from2, to2) =>
  from2 + ((to2 - from2) * (n - from1)) / (to1 - from1);

export default class VectorField {
  constructor(directionFn, steps = 10, bounds = 1) {
    this.directionFn = directionFn;
    this.steps = Array.isArray(steps) ? steps : [steps, steps, steps];
    this.bounds = Array.isArray(bounds) ? bounds : [bounds, bounds, bounds];
    this.halfBounds = this.bounds.map(bound => bound * 0.5);
    this.field = [];
  }

  update() {
    for (let x = 0; x < this.steps[0]; x++) {
      this.field[x] = this.field[x] || [];

      for (let y = 0; y < this.steps[1]; y++) {
        this.field[x][y] = this.field[x][y] || [];

        for (let z = 0; z < this.steps[2]; z++) {
          this.field[x][y][z] = this.field[x][y][z] || {};

          this.field[x][y][z].position = [
            this.bounds[0] * (x / this.steps[0]),
            this.bounds[1] * (y / this.steps[1]),
            this.bounds[2] * (z / this.steps[2])
          ];
          this.field[x][y][z].direction = this.directionFn(
            this.field[x][y][z].position,
            [x, y, z]
          );
        }
      }
    }
  }

  lookup([cx, cy, cz]) {
    const x = Math.round(
      remap(cx, -this.halfBounds[0], this.halfBounds[0], 0, this.steps[0])
    );
    const y = Math.round(
      remap(cy, -this.halfBounds[1], this.halfBounds[1], 0, this.steps[1])
    );
    const z = Math.round(
      remap(cz, -this.halfBounds[2], this.halfBounds[2], 0, this.steps[2])
    );

    return this.field[x] && this.field[x][y] && this.field[x][y][z]
      ? this.field[x][y][z]
      : undefined;
  }
}
