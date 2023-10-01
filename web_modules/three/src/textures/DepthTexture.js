import { Texture } from './Texture.js';
import { DepthFormat, DepthStencilFormat, NearestFilter, UnsignedIntType, UnsignedInt248Type } from '../constants.js';
import '../core/EventDispatcher.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import './Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';

class DepthTexture extends Texture {
    copy(source) {
        super.copy(source);
        this.compareFunction = source.compareFunction;
        return this;
    }
    toJSON(meta) {
        const data = super.toJSON(meta);
        if (this.compareFunction !== null) data.compareFunction = this.compareFunction;
        return data;
    }
    constructor(width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format){
        format = format !== undefined ? format : DepthFormat;
        if (format !== DepthFormat && format !== DepthStencilFormat) {
            throw new Error('DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat');
        }
        if (type === undefined && format === DepthFormat) type = UnsignedIntType;
        if (type === undefined && format === DepthStencilFormat) type = UnsignedInt248Type;
        super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
        this.isDepthTexture = true;
        this.image = {
            width: width,
            height: height
        };
        this.magFilter = magFilter !== undefined ? magFilter : NearestFilter;
        this.minFilter = minFilter !== undefined ? minFilter : NearestFilter;
        this.flipY = false;
        this.generateMipmaps = false;
        this.compareFunction = null;
    }
}

export { DepthTexture };
