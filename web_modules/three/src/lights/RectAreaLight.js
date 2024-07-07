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

class RectAreaLight extends Light {
    constructor(color, intensity, width = 10, height = 10){
        super(color, intensity);
        this.isRectAreaLight = true;
        this.type = 'RectAreaLight';
        this.width = width;
        this.height = height;
    }
    get power() {
        // compute the light's luminous power (in lumens) from its intensity (in nits)
        return this.intensity * this.width * this.height * Math.PI;
    }
    set power(power) {
        // set the light's intensity (in nits) from the desired luminous power (in lumens)
        this.intensity = power / (this.width * this.height * Math.PI);
    }
    copy(source) {
        super.copy(source);
        this.width = source.width;
        this.height = source.height;
        return this;
    }
    toJSON(meta) {
        const data = super.toJSON(meta);
        data.object.width = this.width;
        data.object.height = this.height;
        return data;
    }
}

export { RectAreaLight };
