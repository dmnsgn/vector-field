import { b as objectCreate, z as typedArrayConstructor } from './es.typed-array.uint8-array-b4b7675f.js';
import { w as wellKnownSymbol, a as objectDefineProperty, d as descriptors, x as toObject, D as toLength, f as fails, _ as _export } from './get-iterator-method-a5a16e8a.js';
import { c as stringMultibyte, k as collectionDeleteAll, g as isPure } from './esnext.map.update-5f2eca80.js';

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
typedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
typedArrayConstructor('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
typedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
typedArrayConstructor('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
typedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
typedArrayConstructor('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
typedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var defineProperty = objectDefineProperty.f;

// `Array.prototype.lastIndex` getter
// https://github.com/keithamus/proposal-array-last
if (descriptors && !('lastIndex' in [])) {
  defineProperty(Array.prototype, 'lastIndex', {
    configurable: true,
    get: function lastIndex() {
      var O = toObject(this);
      var len = toLength(O.length);
      return len == 0 ? 0 : len - 1;
    }
  });

  addToUnscopables('lastIndex');
}

var charAt = stringMultibyte.charAt;


var FORCED = fails(function () {
  return '𠮷'.at(0) !== '𠮷';
});

// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
_export({ target: 'String', proto: true, forced: FORCED }, {
  at: function at(pos) {
    return charAt(this, pos);
  }
});

// `WeakMap.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'WeakMap', proto: true, real: true, forced: isPure }, {
  deleteAll: function deleteAll(/* ...elements */) {
    return collectionDeleteAll.apply(this, arguments);
  }
});

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
_export({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});

export { addToUnscopables as a };
