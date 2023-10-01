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

class Group extends Object3D {
    constructor(){
        super();
        this.isGroup = true;
        this.type = 'Group';
    }
}

export { Group };
