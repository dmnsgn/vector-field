import { Path } from '../extras/core/Path.js';
import { LatheGeometry } from './LatheGeometry.js';
import '../math/Vector2.js';
import '../math/MathUtils.js';
import '../extras/core/CurvePath.js';
import '../extras/core/Curve.js';
import '../math/Vector3.js';
import '../math/Quaternion.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../../../_chunks/Curves-1010459e.js';
import '../extras/curves/ArcCurve.js';
import '../extras/curves/EllipseCurve.js';
import '../extras/curves/CatmullRomCurve3.js';
import '../extras/curves/CubicBezierCurve.js';
import '../extras/core/Interpolations.js';
import '../extras/curves/CubicBezierCurve3.js';
import '../extras/curves/LineCurve.js';
import '../extras/curves/LineCurve3.js';
import '../extras/curves/QuadraticBezierCurve.js';
import '../extras/curves/QuadraticBezierCurve3.js';
import '../extras/curves/SplineCurve.js';
import '../core/BufferAttribute.js';
import '../extras/DataUtils.js';
import '../core/BufferGeometry.js';
import '../math/Box3.js';
import '../core/EventDispatcher.js';
import '../math/Sphere.js';
import '../core/Object3D.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../utils.js';

class CapsuleGeometry extends LatheGeometry {
    static fromJSON(data) {
        return new CapsuleGeometry(data.radius, data.length, data.capSegments, data.radialSegments);
    }
    constructor(radius = 1, length = 1, capSegments = 4, radialSegments = 8){
        const path = new Path();
        path.absarc(0, -length / 2, radius, Math.PI * 1.5, 0);
        path.absarc(0, length / 2, radius, 0, Math.PI * 0.5);
        super(path.getPoints(capSegments), radialSegments);
        this.type = 'CapsuleGeometry';
        this.parameters = {
            radius: radius,
            length: length,
            capSegments: capSegments,
            radialSegments: radialSegments
        };
    }
}

export { CapsuleGeometry };
