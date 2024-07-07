import { Light } from './Light.js';
import { PointLightShadow } from './PointLightShadow.js';
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
import './LightShadow.js';
import '../math/Vector2.js';
import '../math/Vector4.js';
import '../math/Frustum.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Plane.js';
import '../cameras/PerspectiveCamera.js';
import '../cameras/Camera.js';

class PointLight extends Light {
    constructor(color, intensity, distance = 0, decay = 2){
        super(color, intensity);
        this.isPointLight = true;
        this.type = 'PointLight';
        this.distance = distance;
        this.decay = decay;
        this.shadow = new PointLightShadow();
    }
    get power() {
        // compute the light's luminous power (in lumens) from its intensity (in candela)
        // for an isotropic light source, luminous power (lm) = 4 π luminous intensity (cd)
        return this.intensity * 4 * Math.PI;
    }
    set power(power) {
        // set the light's intensity (in candela) from the desired luminous power (in lumens)
        this.intensity = power / (4 * Math.PI);
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(source, recursive) {
        super.copy(source, recursive);
        this.distance = source.distance;
        this.decay = source.decay;
        this.shadow = source.shadow.clone();
        return this;
    }
}

export { PointLight };
