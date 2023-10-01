import { WebGLRenderTarget } from './WebGLRenderTarget.js';
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

class WebGLMultipleRenderTargets extends WebGLRenderTarget {
    setSize(width, height, depth) {
        if (depth === void 0) depth = 1;
        if (this.width !== width || this.height !== height || this.depth !== depth) {
            this.width = width;
            this.height = height;
            this.depth = depth;
            for(let i = 0, il = this.texture.length; i < il; i++){
                this.texture[i].image.width = width;
                this.texture[i].image.height = height;
                this.texture[i].image.depth = depth;
            }
            this.dispose();
        }
        this.viewport.set(0, 0, width, height);
        this.scissor.set(0, 0, width, height);
    }
    copy(source) {
        this.dispose();
        this.width = source.width;
        this.height = source.height;
        this.depth = source.depth;
        this.scissor.copy(source.scissor);
        this.scissorTest = source.scissorTest;
        this.viewport.copy(source.viewport);
        this.depthBuffer = source.depthBuffer;
        this.stencilBuffer = source.stencilBuffer;
        if (source.depthTexture !== null) this.depthTexture = source.depthTexture.clone();
        this.texture.length = 0;
        for(let i = 0, il = source.texture.length; i < il; i++){
            this.texture[i] = source.texture[i].clone();
            this.texture[i].isRenderTargetTexture = true;
        }
        return this;
    }
    constructor(width = 1, height = 1, count = 1, options = {}){
        super(width, height, options);
        this.isWebGLMultipleRenderTargets = true;
        const texture = this.texture;
        this.texture = [];
        for(let i = 0; i < count; i++){
            this.texture[i] = texture.clone();
            this.texture[i].isRenderTargetTexture = true;
        }
    }
}

export { WebGLMultipleRenderTargets };
