import { LineBasicMaterial } from './LineBasicMaterial.js';
import './Material.js';
import '../math/Color.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../constants.js';
import '../math/Matrix3.js';
import '../core/EventDispatcher.js';

class LineDashedMaterial extends LineBasicMaterial {
    constructor(parameters){
        super();
        this.isLineDashedMaterial = true;
        this.type = 'LineDashedMaterial';
        this.scale = 1;
        this.dashSize = 3;
        this.gapSize = 1;
        this.setValues(parameters);
    }
    copy(source) {
        super.copy(source);
        this.scale = source.scale;
        this.dashSize = source.dashSize;
        this.gapSize = source.gapSize;
        return this;
    }
}

export { LineDashedMaterial };
