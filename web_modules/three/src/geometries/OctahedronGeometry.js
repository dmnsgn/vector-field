import { PolyhedronGeometry } from './PolyhedronGeometry.js';
import '../core/BufferGeometry.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../math/Vector2.js';
import '../math/Box3.js';
import '../core/EventDispatcher.js';
import '../core/BufferAttribute.js';
import '../constants.js';
import '../extras/DataUtils.js';
import '../math/Sphere.js';
import '../core/Object3D.js';
import '../math/Matrix4.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../utils.js';

class OctahedronGeometry extends PolyhedronGeometry {
    static fromJSON(data) {
        return new OctahedronGeometry(data.radius, data.detail);
    }
    constructor(radius = 1, detail = 0){
        const vertices = [
            1,
            0,
            0,
            -1,
            0,
            0,
            0,
            1,
            0,
            0,
            -1,
            0,
            0,
            0,
            1,
            0,
            0,
            -1
        ];
        const indices = [
            0,
            2,
            4,
            0,
            4,
            3,
            0,
            3,
            5,
            0,
            5,
            2,
            1,
            2,
            5,
            1,
            5,
            3,
            1,
            3,
            4,
            1,
            4,
            2
        ];
        super(vertices, indices, radius, detail);
        this.type = 'OctahedronGeometry';
        this.parameters = {
            radius: radius,
            detail: detail
        };
    }
}

export { OctahedronGeometry };
