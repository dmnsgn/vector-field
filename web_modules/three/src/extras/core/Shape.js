import { Path } from './Path.js';
import { generateUUID } from '../../math/MathUtils.js';
import '../../math/Vector2.js';
import './CurvePath.js';
import './Curve.js';
import '../../math/Vector3.js';
import '../../math/Quaternion.js';
import '../../math/Matrix4.js';
import '../../constants.js';
import '../../../../_chunks/Curves-1010459e.js';
import '../curves/ArcCurve.js';
import '../curves/EllipseCurve.js';
import '../curves/CatmullRomCurve3.js';
import '../curves/CubicBezierCurve.js';
import './Interpolations.js';
import '../curves/CubicBezierCurve3.js';
import '../curves/LineCurve.js';
import '../curves/LineCurve3.js';
import '../curves/QuadraticBezierCurve.js';
import '../curves/QuadraticBezierCurve3.js';
import '../curves/SplineCurve.js';

class Shape extends Path {
    getPointsHoles(divisions) {
        const holesPts = [];
        for(let i = 0, l = this.holes.length; i < l; i++){
            holesPts[i] = this.holes[i].getPoints(divisions);
        }
        return holesPts;
    }
    // get points of shape and holes (keypoints based on segments parameter)
    extractPoints(divisions) {
        return {
            shape: this.getPoints(divisions),
            holes: this.getPointsHoles(divisions)
        };
    }
    copy(source) {
        super.copy(source);
        this.holes = [];
        for(let i = 0, l = source.holes.length; i < l; i++){
            const hole = source.holes[i];
            this.holes.push(hole.clone());
        }
        return this;
    }
    toJSON() {
        const data = super.toJSON();
        data.uuid = this.uuid;
        data.holes = [];
        for(let i = 0, l = this.holes.length; i < l; i++){
            const hole = this.holes[i];
            data.holes.push(hole.toJSON());
        }
        return data;
    }
    fromJSON(json) {
        super.fromJSON(json);
        this.uuid = json.uuid;
        this.holes = [];
        for(let i = 0, l = json.holes.length; i < l; i++){
            const hole = json.holes[i];
            this.holes.push(new Path().fromJSON(hole));
        }
        return this;
    }
    constructor(points){
        super(points);
        this.uuid = generateUUID();
        this.type = 'Shape';
        this.holes = [];
    }
}

export { Shape };
