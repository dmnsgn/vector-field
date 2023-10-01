import { Light } from './Light.js';
import { DirectionalLightShadow } from './DirectionalLightShadow.js';
import { Object3D } from '../core/Object3D.js';
import '../math/Color.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../constants.js';
import '../math/Matrix3.js';
import '../math/Quaternion.js';
import '../math/Vector3.js';
import '../math/Matrix4.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import './LightShadow.js';
import '../math/Vector2.js';
import '../math/Vector4.js';
import '../math/Frustum.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Plane.js';
import '../cameras/OrthographicCamera.js';
import '../cameras/Camera.js';

class DirectionalLight extends Light {
    dispose() {
        this.shadow.dispose();
    }
    copy(source) {
        super.copy(source);
        this.target = source.target.clone();
        this.shadow = source.shadow.clone();
        return this;
    }
    constructor(color, intensity){
        super(color, intensity);
        this.isDirectionalLight = true;
        this.type = 'DirectionalLight';
        this.position.copy(Object3D.DEFAULT_UP);
        this.updateMatrix();
        this.target = new Object3D();
        this.shadow = new DirectionalLightShadow();
    }
}

export { DirectionalLight };
