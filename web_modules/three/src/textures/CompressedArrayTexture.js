import { ClampToEdgeWrapping } from '../constants.js';
import { CompressedTexture } from './CompressedTexture.js';
import './Texture.js';
import '../core/EventDispatcher.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import './Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';

class CompressedArrayTexture extends CompressedTexture {
    constructor(mipmaps, width, height, depth, format, type){
        super(mipmaps, width, height, format, type);
        this.isCompressedArrayTexture = true;
        this.image.depth = depth;
        this.wrapR = ClampToEdgeWrapping;
        this.layerUpdates = new Set();
    }
    addLayerUpdate(layerIndex) {
        this.layerUpdates.add(layerIndex);
    }
    clearLayerUpdates() {
        this.layerUpdates.clear();
    }
}

export { CompressedArrayTexture };
