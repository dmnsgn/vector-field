import { EllipseCurve } from './EllipseCurve.js';
import '../core/Curve.js';
import '../../math/MathUtils.js';
import '../../math/Vector2.js';
import '../../math/Vector3.js';
import '../../math/Quaternion.js';
import '../../math/Matrix4.js';
import '../../constants.js';

class ArcCurve extends EllipseCurve {
    constructor(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise){
        super(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
        this.isArcCurve = true;
        this.type = 'ArcCurve';
    }
}

export { ArcCurve };
