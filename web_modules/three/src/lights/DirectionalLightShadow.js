import { LightShadow } from './LightShadow.js';
import { OrthographicCamera } from '../cameras/OrthographicCamera.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
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

class DirectionalLightShadow extends LightShadow {
    constructor(){
        super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
        this.isDirectionalLightShadow = true;
    }
}

export { DirectionalLightShadow };
