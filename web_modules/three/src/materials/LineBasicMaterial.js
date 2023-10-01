import { Material } from './Material.js';
import { Color } from '../math/Color.js';
import '../core/EventDispatcher.js';
import '../constants.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../math/Matrix3.js';

class LineBasicMaterial extends Material {
    copy(source) {
        super.copy(source);
        this.color.copy(source.color);
        this.map = source.map;
        this.linewidth = source.linewidth;
        this.linecap = source.linecap;
        this.linejoin = source.linejoin;
        this.fog = source.fog;
        return this;
    }
    constructor(parameters){
        super();
        this.isLineBasicMaterial = true;
        this.type = 'LineBasicMaterial';
        this.color = new Color(0xffffff);
        this.map = null;
        this.linewidth = 1;
        this.linecap = 'round';
        this.linejoin = 'round';
        this.fog = true;
        this.setValues(parameters);
    }
}

export { LineBasicMaterial };
