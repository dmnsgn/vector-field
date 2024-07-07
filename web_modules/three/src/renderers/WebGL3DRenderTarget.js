import { WebGLRenderTarget } from './WebGLRenderTarget.js';
import { Data3DTexture } from '../textures/Data3DTexture.js';
import '../core/RenderTarget.js';
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

class WebGL3DRenderTarget extends WebGLRenderTarget {
    constructor(width = 1, height = 1, depth = 1, options = {}){
        super(width, height, options);
        this.isWebGL3DRenderTarget = true;
        this.depth = depth;
        this.texture = new Data3DTexture(null, width, height, depth);
        this.texture.isRenderTargetTexture = true;
    }
}

export { WebGL3DRenderTarget };
