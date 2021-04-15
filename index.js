/**
 * Remap number
 *
 * @private
 * @param {number} n
 * @param {number} from1
 * @param {number} to1
 * @param {number} from2
 * @param {number} to2
 * @returns {number}
 */
const remap = (n, from1, to1, from2, to2) =>
  from2 + ((to2 - from2) * (n - from1)) / (to1 - from1);

/**
 * A data structure and lookup for 3D vector fields (flow fields).
 *
 * @property {import("./types.js").VectorFieldDirectionFn} directionFn
 * @property {import("./types.js").vec3} steps
 * @property {import("./types.js").vec3} bounds
 * @property {import("./types.js").vec3} halfBounds
 * @property {import("./types.js").VectorFieldCell[]} field
 */
class VectorField {
  /**
   * Creates an instance of VectorField.
   * @param {import("./types.js").VectorFieldDirectionFn} directionFn The custom function to compute the cell direction (often a noise function)
   * @param {number|import("./types.js").vec3} [steps=10] The number of steps on each dimension (all positive integer). Use integer for identical dimensions.
   * @param {number|import("./types.js").vec3} [bounds=1] The size of a containing box for the field. Is divided into steps for each dimension (all positive). Use integer for identical dimensions.
   */
  constructor(directionFn, steps = 10, bounds = 1) {
    this.directionFn = directionFn;
    this.steps = Array.isArray(steps) ? steps : [steps, steps, steps];
    this.bounds = Array.isArray(bounds) ? bounds : [bounds, bounds, bounds];
    this.halfBounds = this.bounds.map((bound) => bound * 0.5);
    this.field = [];
  }

  /**
   * Create/update the field according to the provided noise function.
   */
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
            this.bounds[2] * (z / this.steps[2]),
          ];
          this.field[x][y][z].direction = this.directionFn(
            this.field[x][y][z].position,
            [x, y, z]
          );
        }
      }
    }
  }

  /**
   * Find a `VectorFieldCell` at specified position. Useful to compute a particle's velocity for instance.
   *
   * @param {import("./types.js").vec3} cell [cx, cy, cz]
   * @returns {VectorFieldCell|undefined}
   */
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

export default VectorField;
