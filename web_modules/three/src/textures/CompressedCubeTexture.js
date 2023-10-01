import { CubeReflectionMapping } from '../constants.js';
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

class CompressedCubeTexture extends CompressedTexture {
    constructor(images, format, type){
        super(undefined, images[0].width, images[0].height, format, type, CubeReflectionMapping);
        this.isCompressedCubeTexture = true;
        this.isCubeTexture = true;
        this.image = images;
    }
}

export { CompressedCubeTexture };
