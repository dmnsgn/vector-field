import { Material } from './Material.js';
import '../core/EventDispatcher.js';
import '../constants.js';
import '../math/MathUtils.js';

class MeshDistanceMaterial extends Material {
    copy(source) {
        super.copy(source);
        this.map = source.map;
        this.alphaMap = source.alphaMap;
        this.displacementMap = source.displacementMap;
        this.displacementScale = source.displacementScale;
        this.displacementBias = source.displacementBias;
        return this;
    }
    constructor(parameters){
        super();
        this.isMeshDistanceMaterial = true;
        this.type = 'MeshDistanceMaterial';
        this.map = null;
        this.alphaMap = null;
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.setValues(parameters);
    }
}

export { MeshDistanceMaterial };
