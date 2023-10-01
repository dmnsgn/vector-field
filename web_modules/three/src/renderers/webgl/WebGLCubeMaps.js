import { EquirectangularReflectionMapping, EquirectangularRefractionMapping, CubeReflectionMapping, CubeRefractionMapping } from '../../constants.js';
import { WebGLCubeRenderTarget } from '../WebGLCubeRenderTarget.js';
import '../../objects/Mesh.js';
import '../../math/Vector3.js';
import '../../math/MathUtils.js';
import '../../math/Quaternion.js';
import '../../math/Vector2.js';
import '../../math/Sphere.js';
import '../../math/Box3.js';
import '../../math/Ray.js';
import '../../math/Matrix4.js';
import '../../core/Object3D.js';
import '../../core/EventDispatcher.js';
import '../../math/Euler.js';
import '../../core/Layers.js';
import '../../math/Matrix3.js';
import '../../math/Triangle.js';
import '../../materials/MeshBasicMaterial.js';
import '../../materials/Material.js';
import '../../math/Color.js';
import '../../math/ColorManagement.js';
import '../../core/BufferGeometry.js';
import '../../core/BufferAttribute.js';
import '../../extras/DataUtils.js';
import '../../utils.js';
import '../../geometries/BoxGeometry.js';
import '../../materials/ShaderMaterial.js';
import '../shaders/UniformsUtils.js';
import '../shaders/ShaderChunk/default_vertex.glsl.js';
import '../shaders/ShaderChunk/default_fragment.glsl.js';
import '../WebGLRenderTarget.js';
import '../../core/RenderTarget.js';
import '../../textures/Texture.js';
import '../../textures/Source.js';
import '../../extras/ImageUtils.js';
import '../../math/Vector4.js';
import '../../cameras/CubeCamera.js';
import '../../cameras/PerspectiveCamera.js';
import '../../cameras/Camera.js';
import '../../textures/CubeTexture.js';

function WebGLCubeMaps(renderer) {
    let cubemaps = new WeakMap();
    function mapTextureMapping(texture, mapping) {
        if (mapping === EquirectangularReflectionMapping) {
            texture.mapping = CubeReflectionMapping;
        } else if (mapping === EquirectangularRefractionMapping) {
            texture.mapping = CubeRefractionMapping;
        }
        return texture;
    }
    function get(texture) {
        if (texture && texture.isTexture && texture.isRenderTargetTexture === false) {
            const mapping = texture.mapping;
            if (mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping) {
                if (cubemaps.has(texture)) {
                    const cubemap = cubemaps.get(texture).texture;
                    return mapTextureMapping(cubemap, texture.mapping);
                } else {
                    const image = texture.image;
                    if (image && image.height > 0) {
                        const renderTarget = new WebGLCubeRenderTarget(image.height / 2);
                        renderTarget.fromEquirectangularTexture(renderer, texture);
                        cubemaps.set(texture, renderTarget);
                        texture.addEventListener('dispose', onTextureDispose);
                        return mapTextureMapping(renderTarget.texture, texture.mapping);
                    } else {
                        // image not yet ready. try the conversion next frame
                        return null;
                    }
                }
            }
        }
        return texture;
    }
    function onTextureDispose(event) {
        const texture = event.target;
        texture.removeEventListener('dispose', onTextureDispose);
        const cubemap = cubemaps.get(texture);
        if (cubemap !== undefined) {
            cubemaps.delete(texture);
            cubemap.dispose();
        }
    }
    function dispose() {
        cubemaps = new WeakMap();
    }
    return {
        get: get,
        dispose: dispose
    };
}

export { WebGLCubeMaps };
