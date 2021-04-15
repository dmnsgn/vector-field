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

## Classes

<dl>
<dt><a href="#VectorField">VectorField</a></dt>
<dd><p>A data structure and lookup for 3D vector fields (flow fields).</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#vec3">vec3</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#VectorFieldCell">VectorFieldCell</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#VectorFieldDirectionFn">VectorFieldDirectionFn</a> : <code>function</code></dt>
<dd><p>The custom function to compute the cell direction (often a noise function)</p>
</dd>
</dl>

<a name="VectorField"></a>

## VectorField

A data structure and lookup for 3D vector fields (flow fields).

**Kind**: global class  
**Properties**

| Name        | Type                                                           |
| ----------- | -------------------------------------------------------------- |
| directionFn | [<code>VectorFieldDirectionFn</code>](#VectorFieldDirectionFn) |
| steps       | [<code>vec3</code>](#vec3)                                     |
| bounds      | [<code>vec3</code>](#vec3)                                     |
| halfBounds  | [<code>vec3</code>](#vec3)                                     |
| field       | [<code>Array.&lt;VectorFieldCell&gt;</code>](#VectorFieldCell) |

- [VectorField](#VectorField)
  - [new VectorField(directionFn, [steps], [bounds])](#new_VectorField_new)
  - [.update()](#VectorField+update)
  - [.lookup(cell)](#VectorField+lookup) ⇒ [<code>VectorFieldCell</code>](#VectorFieldCell) \| <code>undefined</code>

<a name="new_VectorField_new"></a>

### new VectorField(directionFn, [steps], [bounds])

Creates an instance of VectorField.

| Param       | Type                                                           | Default         | Description                                                                                                                                |
| ----------- | -------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| directionFn | [<code>VectorFieldDirectionFn</code>](#VectorFieldDirectionFn) |                 | The custom function to compute the cell direction (often a noise function)                                                                 |
| [steps]     | <code>number</code> \| [<code>vec3</code>](#vec3)              | <code>10</code> | The number of steps on each dimension (all positive integer). Use integer for identical dimensions.                                        |
| [bounds]    | <code>number</code> \| [<code>vec3</code>](#vec3)              | <code>1</code>  | The size of a containing box for the field. Is divided into steps for each dimension (all positive). Use integer for identical dimensions. |

<a name="VectorField+update"></a>

### vectorField.update()

Create/update the field according to the provided noise function.

**Kind**: instance method of [<code>VectorField</code>](#VectorField)  
<a name="VectorField+lookup"></a>

### vectorField.lookup(cell) ⇒ [<code>VectorFieldCell</code>](#VectorFieldCell) \| <code>undefined</code>

Find a `VectorFieldCell` at specified position. Useful to compute a particle's velocity for instance.

**Kind**: instance method of [<code>VectorField</code>](#VectorField)

| Param | Type                       | Description  |
| ----- | -------------------------- | ------------ |
| cell  | [<code>vec3</code>](#vec3) | [cx, cy, cz] |

<a name="vec3"></a>

## vec3 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef  
<a name="VectorFieldCell"></a>

## VectorFieldCell : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name      | Type                       |
| --------- | -------------------------- |
| position  | [<code>vec3</code>](#vec3) |
| direction | [<code>vec3</code>](#vec3) |

<a name="VectorFieldDirectionFn"></a>

## VectorFieldDirectionFn : <code>function</code>

The custom function to compute the cell direction (often a noise function)

**Kind**: global typedef

| Param        | Type                       |
| ------------ | -------------------------- |
| position     | [<code>vec3</code>](#vec3) |
| stepPosition | [<code>vec3</code>](#vec3) |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/vector-field/blob/main/LICENSE.md).
