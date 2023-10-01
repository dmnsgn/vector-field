import { Object3D } from '../core/Object3D.js';
import { Color } from '../math/Color.js';
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

class Light extends Object3D {
    dispose() {
    // Empty here in base class; some subclasses override.
    }
    copy(source, recursive) {
        super.copy(source, recursive);
        this.color.copy(source.color);
        this.intensity = source.intensity;
        return this;
    }
    toJSON(meta) {
        const data = super.toJSON(meta);
        data.object.color = this.color.getHex();
        data.object.intensity = this.intensity;
        if (this.groundColor !== undefined) data.object.groundColor = this.groundColor.getHex();
        if (this.distance !== undefined) data.object.distance = this.distance;
        if (this.angle !== undefined) data.object.angle = this.angle;
        if (this.decay !== undefined) data.object.decay = this.decay;
        if (this.penumbra !== undefined) data.object.penumbra = this.penumbra;
        if (this.shadow !== undefined) data.object.shadow = this.shadow.toJSON();
        return data;
    }
    constructor(color, intensity = 1){
        super();
        this.isLight = true;
        this.type = 'Light';
        this.color = new Color(color);
        this.intensity = intensity;
    }
}

export { Light };
