import { Light } from './Light.js';
import '../core/Object3D.js';
import '../math/Quaternion.js';
import '../math/MathUtils.js';
import '../math/Vector3.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../math/Color.js';
import '../math/ColorManagement.js';

class AmbientLight extends Light {
    constructor(color, intensity){
        super(color, intensity);
        this.isAmbientLight = true;
        this.type = 'AmbientLight';
    }
}

export { AmbientLight };
