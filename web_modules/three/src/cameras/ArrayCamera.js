import { PerspectiveCamera } from './PerspectiveCamera.js';
import './Camera.js';
import '../constants.js';
import '../math/Matrix4.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../core/Object3D.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../math/Vector2.js';

class ArrayCamera extends PerspectiveCamera {
    constructor(array = []){
        super();
        this.isArrayCamera = true;
        this.cameras = array;
    }
}

export { ArrayCamera };
