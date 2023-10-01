import { WebGLRenderTarget } from './WebGLRenderTarget.js';
import { DataArrayTexture } from '../textures/DataArrayTexture.js';
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

class WebGLArrayRenderTarget extends WebGLRenderTarget {
    constructor(width = 1, height = 1, depth = 1){
        super(width, height);
        this.isWebGLArrayRenderTarget = true;
        this.depth = depth;
        this.texture = new DataArrayTexture(null, width, height, depth);
        this.texture.isRenderTargetTexture = true;
    }
}

export { WebGLArrayRenderTarget };
