# vector-field [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm version](https://badge.fury.io/js/vector-field.svg)](https://www.npmjs.com/package/vector-field)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A data structure and lookup for 3D vector fields (flow fields).

![](https://raw.githubusercontent.com/dmnsgn/vector-field/master/screenshot.gif)

## Installation

```bash
npm install vector-field
```

[![NPM](https://nodei.co/npm/vector-field.png)](https://nodei.co/npm/vector-field/)

## Usage

See [demo](https://dmnsgn.github.io/vector-field/).

```js
import VectorField from "vector-field";

let time = 0;
const directionFn = ([x, y, z]) => {
  const n = myNoise4D(x, y, z, time);
  const theta = n;
  const phi = n;

  return [
    Math.sin(theta) * Math.sin(phi),
    Math.cos(theta),
    Math.sin(theta) * Math.cos(phi)
  ];
};
const vectorField = new VectorField(directionFn, [12, 6, 6], 1);

const frame = () => {
  time += 0.001;
  vectorField.update();
  requestAnimationFrame(frame);
};

requestAnimationFrame(() => {
  frame();
});
```

## API

```ts
type VectorFieldCell {
	position: [number, number, number]
	direction: [number, number, number]
}
```

### `new VectorField(directionFn: Function, steps: number | [number, number, number], bounds: number | [number, number, number])`

| Option          | Default | Description                                                                                                                                |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **directionFn** |         | The custom function to compute the cell direction (often a noise function).                                                                |
| **steps**       | 10      | The number of steps on each dimension (all positive integer). Use integer for identical dimensions.                                        |
| **bounds**      | 1       | The size of a containing box for the field. Is divided into steps for each dimension (all positive). Use integer for identical dimensions. |

### `vectorField.update(): void`

Create/update the field according to the provided noise function.

### `vectorField.lookup([x: number, y: number, z: number]): VectorFieldCell | undefined`

Find a `VectorFieldCell` at specified position. Useful to compute a particle's velocity for instance.

## License

MIT. See [license file](https://github.com/dmnsgn/vector-field/blob/master/LICENSE.md).
