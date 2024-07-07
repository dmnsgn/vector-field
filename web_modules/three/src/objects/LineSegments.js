import { Line } from './Line.js';
import { Vector3 } from '../math/Vector3.js';
import { Float32BufferAttribute } from '../core/BufferAttribute.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Ray.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../core/Object3D.js';
import '../math/Quaternion.js';
import '../math/MathUtils.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../materials/LineBasicMaterial.js';
import '../materials/Material.js';
import '../math/Color.js';
import '../math/ColorManagement.js';
import '../core/BufferGeometry.js';
import '../math/Vector2.js';
import '../utils.js';
import '../extras/DataUtils.js';

const _start = /*@__PURE__*/ new Vector3();
const _end = /*@__PURE__*/ new Vector3();
class LineSegments extends Line {
    constructor(geometry, material){
        super(geometry, material);
        this.isLineSegments = true;
        this.type = 'LineSegments';
    }
    computeLineDistances() {
        const geometry = this.geometry;
        // we assume non-indexed geometry
        if (geometry.index === null) {
            const positionAttribute = geometry.attributes.position;
            const lineDistances = [];
            for(let i = 0, l = positionAttribute.count; i < l; i += 2){
                _start.fromBufferAttribute(positionAttribute, i);
                _end.fromBufferAttribute(positionAttribute, i + 1);
                lineDistances[i] = i === 0 ? 0 : lineDistances[i - 1];
                lineDistances[i + 1] = lineDistances[i] + _start.distanceTo(_end);
            }
            geometry.setAttribute('lineDistance', new Float32BufferAttribute(lineDistances, 1));
        } else {
            console.warn('THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.');
        }
        return this;
    }
}

export { LineSegments };
