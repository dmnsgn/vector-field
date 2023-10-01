import { ClampToEdgeWrapping, LinearFilter, LinearMipmapLinearFilter } from '../constants.js';
import { FileLoader } from './FileLoader.js';
import { DataTexture } from '../textures/DataTexture.js';
import { Loader } from './Loader.js';
import './Cache.js';
import './LoadingManager.js';
import '../textures/Texture.js';
import '../core/EventDispatcher.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import '../textures/Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';

/**
 * Abstract Base class to load generic binary textures formats (rgbe, hdr, ...)
 *
 * Sub classes have to implement the parse() method which will be used in load().
 */ class DataTextureLoader extends Loader {
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        const texture = new DataTexture();
        const loader = new FileLoader(this.manager);
        loader.setResponseType('arraybuffer');
        loader.setRequestHeader(this.requestHeader);
        loader.setPath(this.path);
        loader.setWithCredentials(scope.withCredentials);
        loader.load(url, function(buffer) {
            let texData;
            try {
                texData = scope.parse(buffer);
            } catch (error) {
                if (onError !== undefined) {
                    onError(error);
                } else {
                    console.error(error);
                    return;
                }
            }
            if (texData.image !== undefined) {
                texture.image = texData.image;
            } else if (texData.data !== undefined) {
                texture.image.width = texData.width;
                texture.image.height = texData.height;
                texture.image.data = texData.data;
            }
            texture.wrapS = texData.wrapS !== undefined ? texData.wrapS : ClampToEdgeWrapping;
            texture.wrapT = texData.wrapT !== undefined ? texData.wrapT : ClampToEdgeWrapping;
            texture.magFilter = texData.magFilter !== undefined ? texData.magFilter : LinearFilter;
            texture.minFilter = texData.minFilter !== undefined ? texData.minFilter : LinearFilter;
            texture.anisotropy = texData.anisotropy !== undefined ? texData.anisotropy : 1;
            if (texData.colorSpace !== undefined) {
                texture.colorSpace = texData.colorSpace;
            } else if (texData.encoding !== undefined) {
                texture.encoding = texData.encoding;
            }
            if (texData.flipY !== undefined) {
                texture.flipY = texData.flipY;
            }
            if (texData.format !== undefined) {
                texture.format = texData.format;
            }
            if (texData.type !== undefined) {
                texture.type = texData.type;
            }
            if (texData.mipmaps !== undefined) {
                texture.mipmaps = texData.mipmaps;
                texture.minFilter = LinearMipmapLinearFilter; // presumably...
            }
            if (texData.mipmapCount === 1) {
                texture.minFilter = LinearFilter;
            }
            if (texData.generateMipmaps !== undefined) {
                texture.generateMipmaps = texData.generateMipmaps;
            }
            texture.needsUpdate = true;
            if (onLoad) onLoad(texture, texData);
        }, onProgress, onError);
        return texture;
    }
    constructor(manager){
        super(manager);
    }
}

export { DataTextureLoader };
