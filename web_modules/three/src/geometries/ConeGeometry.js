import { CylinderGeometry } from './CylinderGeometry.js';
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

class ConeGeometry extends CylinderGeometry {
    constructor(radius = 1, height = 1, radialSegments = 32, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2){
        super(0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
        this.type = 'ConeGeometry';
        this.parameters = {
            radius: radius,
            height: height,
            radialSegments: radialSegments,
            heightSegments: heightSegments,
            openEnded: openEnded,
            thetaStart: thetaStart,
            thetaLength: thetaLength
        };
    }
    static fromJSON(data) {
        return new ConeGeometry(data.radius, data.height, data.radialSegments, data.heightSegments, data.openEnded, data.thetaStart, data.thetaLength);
    }
}

export { ConeGeometry };
