import { Line } from './Line.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../math/Ray.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../core/Object3D.js';
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
import '../core/BufferAttribute.js';
import '../extras/DataUtils.js';
import '../utils.js';

class LineLoop extends Line {
    constructor(geometry, material){
        super(geometry, material);
        this.isLineLoop = true;
        this.type = 'LineLoop';
    }
}

export { LineLoop };
