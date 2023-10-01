import { InterleavedBuffer } from './InterleavedBuffer.js';
import '../math/MathUtils.js';
import '../constants.js';

class InstancedInterleavedBuffer extends InterleavedBuffer {
    copy(source) {
        super.copy(source);
        this.meshPerAttribute = source.meshPerAttribute;
        return this;
    }
    clone(data) {
        const ib = super.clone(data);
        ib.meshPerAttribute = this.meshPerAttribute;
        return ib;
    }
    toJSON(data) {
        const json = super.toJSON(data);
        json.isInstancedInterleavedBuffer = true;
        json.meshPerAttribute = this.meshPerAttribute;
        return json;
    }
    constructor(array, stride, meshPerAttribute = 1){
        super(array, stride);
        this.isInstancedInterleavedBuffer = true;
        this.meshPerAttribute = meshPerAttribute;
    }
}

export { InstancedInterleavedBuffer };
