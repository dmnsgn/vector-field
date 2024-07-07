import { ColorManagement } from '../../math/ColorManagement.js';
import '../../constants.js';
import '../../math/Matrix3.js';

/**
 * Uniform Utilities
 */ function cloneUniforms(src) {
    const dst = {};
    for(const u in src){
        dst[u] = {};
        for(const p in src[u]){
            const property = src[u][p];
            if (property && (property.isColor || property.isMatrix3 || property.isMatrix4 || property.isVector2 || property.isVector3 || property.isVector4 || property.isTexture || property.isQuaternion)) {
                if (property.isRenderTargetTexture) {
                    console.warn('UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().');
                    dst[u][p] = null;
                } else {
                    dst[u][p] = property.clone();
                }
            } else if (Array.isArray(property)) {
                dst[u][p] = property.slice();
            } else {
                dst[u][p] = property;
            }
        }
    }
    return dst;
}
function mergeUniforms(uniforms) {
    const merged = {};
    for(let u = 0; u < uniforms.length; u++){
        const tmp = cloneUniforms(uniforms[u]);
        for(const p in tmp){
            merged[p] = tmp[p];
        }
    }
    return merged;
}
function cloneUniformsGroups(src) {
    const dst = [];
    for(let u = 0; u < src.length; u++){
        dst.push(src[u].clone());
    }
    return dst;
}
function getUnlitUniformColorSpace(renderer) {
    const currentRenderTarget = renderer.getRenderTarget();
    if (currentRenderTarget === null) {
        // https://github.com/mrdoob/three.js/pull/23937#issuecomment-1111067398
        return renderer.outputColorSpace;
    }
    // https://github.com/mrdoob/three.js/issues/27868
    if (currentRenderTarget.isXRRenderTarget === true) {
        return currentRenderTarget.texture.colorSpace;
    }
    return ColorManagement.workingColorSpace;
}
// Legacy
const UniformsUtils = {
    clone: cloneUniforms,
    merge: mergeUniforms
};

export { UniformsUtils, cloneUniforms, cloneUniformsGroups, getUnlitUniformColorSpace, mergeUniforms };
