import { LineBasicMaterial } from './LineBasicMaterial.js';
import './Material.js';
import '../core/EventDispatcher.js';
import '../constants.js';
import '../math/MathUtils.js';
import '../math/Color.js';
import '../math/ColorManagement.js';
import '../math/Matrix3.js';

class LineDashedMaterial extends LineBasicMaterial {
    copy(source) {
        super.copy(source);
        this.scale = source.scale;
        this.dashSize = source.dashSize;
        this.gapSize = source.gapSize;
        return this;
    }
    constructor(parameters){
        super();
        this.isLineDashedMaterial = true;
        this.type = 'LineDashedMaterial';
        this.scale = 1;
        this.dashSize = 3;
        this.gapSize = 1;
        this.setValues(parameters);
    }
}

export { LineDashedMaterial };
