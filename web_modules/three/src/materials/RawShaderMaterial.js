import { ShaderMaterial } from './ShaderMaterial.js';
import './Material.js';
import '../math/Color.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../constants.js';
import '../math/Matrix3.js';
import '../core/EventDispatcher.js';
import '../renderers/shaders/UniformsUtils.js';
import '../renderers/shaders/ShaderChunk/default_vertex.glsl.js';
import '../renderers/shaders/ShaderChunk/default_fragment.glsl.js';

class RawShaderMaterial extends ShaderMaterial {
    constructor(parameters){
        super(parameters);
        this.isRawShaderMaterial = true;
        this.type = 'RawShaderMaterial';
    }
}

export { RawShaderMaterial };
