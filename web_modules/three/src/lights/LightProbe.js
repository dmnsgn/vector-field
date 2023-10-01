import { SphericalHarmonics3 } from '../math/SphericalHarmonics3.js';
import { Light } from './Light.js';
import '../math/Vector3.js';
import '../math/MathUtils.js';
import '../math/Quaternion.js';
import '../core/Object3D.js';
import '../math/Matrix4.js';
import '../constants.js';
import '../core/EventDispatcher.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../math/Matrix3.js';
import '../math/Color.js';
import '../math/ColorManagement.js';

class LightProbe extends Light {
    copy(source) {
        super.copy(source);
        this.sh.copy(source.sh);
        return this;
    }
    fromJSON(json) {
        this.intensity = json.intensity; // TODO: Move this bit to Light.fromJSON();
        this.sh.fromArray(json.sh);
        return this;
    }
    toJSON(meta) {
        const data = super.toJSON(meta);
        data.object.sh = this.sh.toArray();
        return data;
    }
    constructor(sh = new SphericalHarmonics3(), intensity = 1){
        super(undefined, intensity);
        this.isLightProbe = true;
        this.sh = sh;
    }
}

export { LightProbe };
