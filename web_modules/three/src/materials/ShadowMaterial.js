import { Material } from './Material.js';
import { Color } from '../math/Color.js';
import '../core/EventDispatcher.js';
import '../constants.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../math/Matrix3.js';

class ShadowMaterial extends Material {
    copy(source) {
        super.copy(source);
        this.color.copy(source.color);
        this.fog = source.fog;
        return this;
    }
    constructor(parameters){
        super();
        this.isShadowMaterial = true;
        this.type = 'ShadowMaterial';
        this.color = new Color(0x000000);
        this.transparent = true;
        this.fog = true;
        this.setValues(parameters);
    }
}

export { ShadowMaterial };
