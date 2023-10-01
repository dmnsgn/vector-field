import { Material } from './Material.js';
import { Color } from '../math/Color.js';
import '../core/EventDispatcher.js';
import '../constants.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../math/Matrix3.js';

class SpriteMaterial extends Material {
    copy(source) {
        super.copy(source);
        this.color.copy(source.color);
        this.map = source.map;
        this.alphaMap = source.alphaMap;
        this.rotation = source.rotation;
        this.sizeAttenuation = source.sizeAttenuation;
        this.fog = source.fog;
        return this;
    }
    constructor(parameters){
        super();
        this.isSpriteMaterial = true;
        this.type = 'SpriteMaterial';
        this.color = new Color(0xffffff);
        this.map = null;
        this.alphaMap = null;
        this.rotation = 0;
        this.sizeAttenuation = true;
        this.transparent = true;
        this.fog = true;
        this.setValues(parameters);
    }
}

export { SpriteMaterial };
