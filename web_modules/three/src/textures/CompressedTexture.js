import { Texture } from './Texture.js';
import '../core/EventDispatcher.js';
import '../constants.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import './Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';

class CompressedTexture extends Texture {
    constructor(mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, colorSpace){
        super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace);
        this.isCompressedTexture = true;
        this.image = {
            width: width,
            height: height
        };
        this.mipmaps = mipmaps;
        // no flipping for cube textures
        // (also flipping doesn't work for compressed textures )
        this.flipY = false;
        // can't generate mipmaps for compressed textures
        // mips must be embedded in DDS files
        this.generateMipmaps = false;
    }
}

export { CompressedTexture };
