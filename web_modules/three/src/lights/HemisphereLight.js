import { Light } from './Light.js';
import { Color } from '../math/Color.js';
import { Object3D } from '../core/Object3D.js';
import '../math/Quaternion.js';
import '../math/MathUtils.js';
import '../math/Vector3.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../math/ColorManagement.js';

class HemisphereLight extends Light {
    copy(source, recursive) {
        super.copy(source, recursive);
        this.groundColor.copy(source.groundColor);
        return this;
    }
    constructor(skyColor, groundColor, intensity){
        super(skyColor, intensity);
        this.isHemisphereLight = true;
        this.type = 'HemisphereLight';
        this.position.copy(Object3D.DEFAULT_UP);
        this.updateMatrix();
        this.groundColor = new Color(groundColor);
    }
}

export { HemisphereLight };
