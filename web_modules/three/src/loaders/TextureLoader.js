import { ImageLoader } from './ImageLoader.js';
import { Texture } from '../textures/Texture.js';
import { Loader } from './Loader.js';
import './Cache.js';
import '../utils.js';
import '../core/EventDispatcher.js';
import '../constants.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import '../textures/Source.js';
import '../extras/ImageUtils.js';
import '../math/ColorManagement.js';
import './LoadingManager.js';

class TextureLoader extends Loader {
    constructor(manager){
        super(manager);
    }
    load(url, onLoad, onProgress, onError) {
        const texture = new Texture();
        const loader = new ImageLoader(this.manager);
        loader.setCrossOrigin(this.crossOrigin);
        loader.setPath(this.path);
        loader.load(url, function(image) {
            texture.image = image;
            texture.needsUpdate = true;
            if (onLoad !== undefined) {
                onLoad(texture);
            }
        }, onProgress, onError);
        return texture;
    }
}

export { TextureLoader };
