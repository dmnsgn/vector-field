import { Color } from '../math/Color.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../constants.js';
import '../math/Matrix3.js';

class Fog {
    clone() {
        return new Fog(this.color, this.near, this.far);
    }
    toJSON() {
        return {
            type: 'Fog',
            name: this.name,
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        };
    }
    constructor(color, near = 1, far = 1000){
        this.isFog = true;
        this.name = '';
        this.color = new Color(color);
        this.near = near;
        this.far = far;
    }
}

export { Fog };
