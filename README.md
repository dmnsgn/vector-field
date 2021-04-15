# vector-field

[![npm version](https://img.shields.io/npm/v/vector-field)](https://www.npmjs.com/package/vector-field)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/vector-field)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/vector-field)](https://www.npmjs.com/package/vector-field)
[![dependencies](https://img.shields.io/david/dmnsgn/vector-field)](https://github.com/dmnsgn/vector-field/blob/main/package.json)
[![types](https://img.shields.io/npm/types/vector-field)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/vector-field)](https://github.com/dmnsgn/vector-field/blob/main/LICENSE.md)

A data structure and lookup for 3D vector fields (flow fields).

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/vector-field/main/screenshot.gif)

See the [example](https://dmnsgn.github.io/vector-field/) and its [source](index.html).

## Installation

```bash
npm install vector-field
```

## Usage

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
    Math.sin(theta) * Math.cos(phi),
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

<!-- api-start -->

Auto-generated API content.

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/vector-field/blob/main/LICENSE.md).
