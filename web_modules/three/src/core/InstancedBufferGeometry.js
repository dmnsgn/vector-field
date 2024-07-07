import { BufferGeometry } from './BufferGeometry.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../math/Vector2.js';
import '../math/Box3.js';
import './EventDispatcher.js';
import './BufferAttribute.js';
import '../constants.js';
import '../extras/DataUtils.js';
import '../utils.js';
import '../math/Sphere.js';
import './Object3D.js';
import '../math/Matrix4.js';
import '../math/Euler.js';
import './Layers.js';
import '../math/Matrix3.js';

class InstancedBufferGeometry extends BufferGeometry {
    constructor(){
        super();
        this.isInstancedBufferGeometry = true;
        this.type = 'InstancedBufferGeometry';
        this.instanceCount = Infinity;
    }
    copy(source) {
        super.copy(source);
        this.instanceCount = source.instanceCount;
        return this;
    }
    toJSON() {
        const data = super.toJSON();
        data.instanceCount = this.instanceCount;
        data.isInstancedBufferGeometry = true;
        return data;
    }
}

export { InstancedBufferGeometry };
