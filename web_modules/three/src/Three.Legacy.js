import { WebGLRenderTarget } from './renderers/WebGLRenderTarget.js';
import './core/RenderTarget.js';
import './core/EventDispatcher.js';
import './textures/Texture.js';
import './constants.js';
import './math/MathUtils.js';
import './math/Vector2.js';
import './math/Matrix3.js';
import './textures/Source.js';
import './extras/ImageUtils.js';
import './utils.js';
import './math/ColorManagement.js';
import './math/Vector4.js';

class WebGLMultipleRenderTargets extends WebGLRenderTarget {
    constructor(width = 1, height = 1, count = 1, options = {}){
        console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.');
        super(width, height, {
            ...options,
            count
        });
        this.isWebGLMultipleRenderTargets = true;
    }
    get texture() {
        return this.textures;
    }
}

export { WebGLMultipleRenderTargets };
