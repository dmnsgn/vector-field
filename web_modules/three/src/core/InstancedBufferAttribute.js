import { BufferAttribute } from './BufferAttribute.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../math/Vector2.js';
import '../constants.js';
import '../extras/DataUtils.js';

class InstancedBufferAttribute extends BufferAttribute {
    copy(source) {
        super.copy(source);
        this.meshPerAttribute = source.meshPerAttribute;
        return this;
    }
    toJSON() {
        const data = super.toJSON();
        data.meshPerAttribute = this.meshPerAttribute;
        data.isInstancedBufferAttribute = true;
        return data;
    }
    constructor(array, itemSize, normalized, meshPerAttribute = 1){
        super(array, itemSize, normalized);
        this.isInstancedBufferAttribute = true;
        this.meshPerAttribute = meshPerAttribute;
    }
}

export { InstancedBufferAttribute };
