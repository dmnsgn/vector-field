import { RenderTarget } from '../core/RenderTarget.js';
import '../core/EventDispatcher.js';
import '../textures/Texture.js';
import '../constants.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import '../textures/Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';
import '../math/Vector4.js';

class WebGLRenderTarget extends RenderTarget {
    constructor(width = 1, height = 1, options = {}){
        super(width, height, options);
        this.isWebGLRenderTarget = true;
    }
}

export { WebGLRenderTarget };
