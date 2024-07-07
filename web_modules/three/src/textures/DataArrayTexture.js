import { Texture } from './Texture.js';
import { NearestFilter, ClampToEdgeWrapping } from '../constants.js';
import '../core/EventDispatcher.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import './Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';

class DataArrayTexture extends Texture {
    constructor(data = null, width = 1, height = 1, depth = 1){
        super(null);
        this.isDataArrayTexture = true;
        this.image = {
            data,
            width,
            height,
            depth
        };
        this.magFilter = NearestFilter;
        this.minFilter = NearestFilter;
        this.wrapR = ClampToEdgeWrapping;
        this.generateMipmaps = false;
        this.flipY = false;
        this.unpackAlignment = 1;
        this.layerUpdates = new Set();
    }
    addLayerUpdate(layerIndex) {
        this.layerUpdates.add(layerIndex);
    }
    clearLayerUpdates() {
        this.layerUpdates.clear();
    }
}

export { DataArrayTexture };
