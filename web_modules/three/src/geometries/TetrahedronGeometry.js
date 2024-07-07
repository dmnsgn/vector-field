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
import '../utils.js';
import '../math/Sphere.js';
import '../core/Object3D.js';
import '../math/Matrix4.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';

class TetrahedronGeometry extends PolyhedronGeometry {
    constructor(radius = 1, detail = 0){
        const vertices = [
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            1,
            -1,
            -1
        ];
        const indices = [
            2,
            1,
            0,
            0,
            3,
            2,
            1,
            3,
            0,
            2,
            3,
            1
        ];
        super(vertices, indices, radius, detail);
        this.type = 'TetrahedronGeometry';
        this.parameters = {
            radius: radius,
            detail: detail
        };
    }
    static fromJSON(data) {
        return new TetrahedronGeometry(data.radius, data.detail);
    }
}

export { TetrahedronGeometry };
