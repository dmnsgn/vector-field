import { Texture } from './Texture.js';
import { CubeReflectionMapping } from '../constants.js';
import '../core/EventDispatcher.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import './Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';

class CubeTexture extends Texture {
    get images() {
        return this.image;
    }
    set images(value) {
        this.image = value;
    }
    constructor(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace){
        images = images !== undefined ? images : [];
        mapping = mapping !== undefined ? mapping : CubeReflectionMapping;
        super(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace);
        this.isCubeTexture = true;
        this.flipY = false;
    }
}

export { CubeTexture };
