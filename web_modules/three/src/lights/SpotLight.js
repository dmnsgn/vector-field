import { Light } from './Light.js';
import { SpotLightShadow } from './SpotLightShadow.js';
import { Object3D } from '../core/Object3D.js';
import '../math/Color.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../constants.js';
import '../math/Matrix3.js';
import './LightShadow.js';
import '../math/Matrix4.js';
import '../math/Vector3.js';
import '../math/Quaternion.js';
import '../math/Vector2.js';
import '../math/Vector4.js';
import '../math/Frustum.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Plane.js';
import '../cameras/PerspectiveCamera.js';
import '../cameras/Camera.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';

class SpotLight extends Light {
    get power() {
        // compute the light's luminous power (in lumens) from its intensity (in candela)
        // by convention for a spotlight, luminous power (lm) = π * luminous intensity (cd)
        return this.intensity * Math.PI;
    }
    set power(power) {
        // set the light's intensity (in candela) from the desired luminous power (in lumens)
        this.intensity = power / Math.PI;
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(source, recursive) {
        super.copy(source, recursive);
        this.distance = source.distance;
        this.angle = source.angle;
        this.penumbra = source.penumbra;
        this.decay = source.decay;
        this.target = source.target.clone();
        this.shadow = source.shadow.clone();
        return this;
    }
    constructor(color, intensity, distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 2){
        super(color, intensity);
        this.isSpotLight = true;
        this.type = 'SpotLight';
        this.position.copy(Object3D.DEFAULT_UP);
        this.updateMatrix();
        this.target = new Object3D();
        this.distance = distance;
        this.angle = angle;
        this.penumbra = penumbra;
        this.decay = decay;
        this.map = null;
        this.shadow = new SpotLightShadow();
    }
}

export { SpotLight };
