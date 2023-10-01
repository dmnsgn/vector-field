import { Texture } from './Texture.js';
import { NearestFilter } from '../constants.js';
import '../core/EventDispatcher.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import './Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';

class DataTexture extends Texture {
    constructor(data = null, width = 1, height = 1, format, type, mapping, wrapS, wrapT, magFilter = NearestFilter, minFilter = NearestFilter, anisotropy, colorSpace){
        super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace);
        this.isDataTexture = true;
        this.image = {
            data: data,
            width: width,
            height: height
        };
        this.generateMipmaps = false;
        this.flipY = false;
        this.unpackAlignment = 1;
    }
}

export { DataTexture };
