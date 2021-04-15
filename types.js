/**
 * @typedef {number[]} vec3
 */

/**
 * @typedef {Object} VectorFieldCell
 * @property {vec3} position
 * @property {vec3} direction
 */

/**
 * The custom function to compute the cell direction (often a noise function)
 *
 * @callback VectorFieldDirectionFn
 * @param {vec3} position
 * @param {vec3} stepPosition
 */

export {};
