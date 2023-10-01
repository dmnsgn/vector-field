import { Texture } from './Texture.js';
import { NearestFilter, ClampToEdgeWrapping } from '../constants.js';
import '../core/EventDispatcher.js';
import '../math/MathUtils.js';
import '../math/Vector2.js';
import '../math/Matrix3.js';
import './Source.js';
import '../extras/ImageUtils.js';
import '../utils.js';
import '../math/ColorManagement.js';

class Data3DTexture extends Texture {
    constructor(data = null, width = 1, height = 1, depth = 1){
        // We're going to add .setXXX() methods for setting properties later.
        // Users can still set in DataTexture3D directly.
        //
        //	const texture = new THREE.DataTexture3D( data, width, height, depth );
        // 	texture.anisotropy = 16;
        //
        // See #14839
        super(null);
        this.isData3DTexture = true;
        this.image = {
            data,
            width,
            height,
            depth
        };
        this.magFilter = NearestFilter;
        this.minFilter = NearestFilter;
        this.wrapR = ClampToEdgeWrapping;
        this.generateMipmaps = false;
        this.flipY = false;
        this.unpackAlignment = 1;
    }
}

export { Data3DTexture };
