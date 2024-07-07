import { LightShadow } from './LightShadow.js';
import { RAD2DEG } from '../math/MathUtils.js';
import { PerspectiveCamera } from '../cameras/PerspectiveCamera.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../math/Vector3.js';
import '../math/Quaternion.js';
import '../math/Vector2.js';
import '../math/Vector4.js';
import '../math/Frustum.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Plane.js';
import '../math/Matrix3.js';
import '../cameras/Camera.js';
import '../core/Object3D.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';

class SpotLightShadow extends LightShadow {
    constructor(){
        super(new PerspectiveCamera(50, 1, 0.5, 500));
        this.isSpotLightShadow = true;
        this.focus = 1;
    }
    updateMatrices(light) {
        const camera = this.camera;
        const fov = RAD2DEG * 2 * light.angle * this.focus;
        const aspect = this.mapSize.width / this.mapSize.height;
        const far = light.distance || camera.far;
        if (fov !== camera.fov || aspect !== camera.aspect || far !== camera.far) {
            camera.fov = fov;
            camera.aspect = aspect;
            camera.far = far;
            camera.updateProjectionMatrix();
        }
        super.updateMatrices(light);
    }
    copy(source) {
        super.copy(source);
        this.focus = source.focus;
        return this;
    }
}

export { SpotLightShadow };
