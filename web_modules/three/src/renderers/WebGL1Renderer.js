import { WebGLRenderer } from './WebGLRenderer.js';
import '../constants.js';
import '../math/Color.js';
import '../math/MathUtils.js';
import '../math/ColorManagement.js';
import '../math/Matrix3.js';
import '../math/Frustum.js';
import '../math/Vector3.js';
import '../math/Quaternion.js';
import '../math/Sphere.js';
import '../math/Box3.js';
import '../math/Plane.js';
import '../math/Matrix4.js';
import '../math/Vector2.js';
import '../math/Vector4.js';
import './webgl/WebGLAnimation.js';
import './webgl/WebGLAttributes.js';
import './webgl/WebGLBackground.js';
import '../geometries/BoxGeometry.js';
import '../core/BufferGeometry.js';
import '../core/EventDispatcher.js';
import '../core/BufferAttribute.js';
import '../extras/DataUtils.js';
import '../core/Object3D.js';
import '../math/Euler.js';
import '../core/Layers.js';
import '../utils.js';
import '../geometries/PlaneGeometry.js';
import '../materials/ShaderMaterial.js';
import '../materials/Material.js';
import './shaders/UniformsUtils.js';
import './shaders/ShaderChunk/default_vertex.glsl.js';
import './shaders/ShaderChunk/default_fragment.glsl.js';
import '../objects/Mesh.js';
import '../math/Ray.js';
import '../math/Triangle.js';
import '../materials/MeshBasicMaterial.js';
import './shaders/ShaderLib.js';
import './shaders/ShaderChunk.js';
import './shaders/ShaderChunk/alphahash_fragment.glsl.js';
import './shaders/ShaderChunk/alphahash_pars_fragment.glsl.js';
import './shaders/ShaderChunk/alphamap_fragment.glsl.js';
import './shaders/ShaderChunk/alphamap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/alphatest_fragment.glsl.js';
import './shaders/ShaderChunk/alphatest_pars_fragment.glsl.js';
import './shaders/ShaderChunk/aomap_fragment.glsl.js';
import './shaders/ShaderChunk/aomap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/begin_vertex.glsl.js';
import './shaders/ShaderChunk/beginnormal_vertex.glsl.js';
import './shaders/ShaderChunk/bsdfs.glsl.js';
import './shaders/ShaderChunk/iridescence_fragment.glsl.js';
import './shaders/ShaderChunk/bumpmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/clipping_planes_fragment.glsl.js';
import './shaders/ShaderChunk/clipping_planes_pars_fragment.glsl.js';
import './shaders/ShaderChunk/clipping_planes_pars_vertex.glsl.js';
import './shaders/ShaderChunk/clipping_planes_vertex.glsl.js';
import './shaders/ShaderChunk/color_fragment.glsl.js';
import './shaders/ShaderChunk/color_pars_fragment.glsl.js';
import './shaders/ShaderChunk/color_pars_vertex.glsl.js';
import './shaders/ShaderChunk/color_vertex.glsl.js';
import './shaders/ShaderChunk/common.glsl.js';
import './shaders/ShaderChunk/cube_uv_reflection_fragment.glsl.js';
import './shaders/ShaderChunk/defaultnormal_vertex.glsl.js';
import './shaders/ShaderChunk/displacementmap_pars_vertex.glsl.js';
import './shaders/ShaderChunk/displacementmap_vertex.glsl.js';
import './shaders/ShaderChunk/emissivemap_fragment.glsl.js';
import './shaders/ShaderChunk/emissivemap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/colorspace_fragment.glsl.js';
import './shaders/ShaderChunk/colorspace_pars_fragment.glsl.js';
import './shaders/ShaderChunk/envmap_fragment.glsl.js';
import './shaders/ShaderChunk/envmap_common_pars_fragment.glsl.js';
import './shaders/ShaderChunk/envmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/envmap_pars_vertex.glsl.js';
import './shaders/ShaderChunk/envmap_vertex.glsl.js';
import './shaders/ShaderChunk/fog_vertex.glsl.js';
import './shaders/ShaderChunk/fog_pars_vertex.glsl.js';
import './shaders/ShaderChunk/fog_fragment.glsl.js';
import './shaders/ShaderChunk/fog_pars_fragment.glsl.js';
import './shaders/ShaderChunk/gradientmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/lightmap_fragment.glsl.js';
import './shaders/ShaderChunk/lightmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/lights_lambert_fragment.glsl.js';
import './shaders/ShaderChunk/lights_lambert_pars_fragment.glsl.js';
import './shaders/ShaderChunk/lights_pars_begin.glsl.js';
import './shaders/ShaderChunk/envmap_physical_pars_fragment.glsl.js';
import './shaders/ShaderChunk/lights_toon_fragment.glsl.js';
import './shaders/ShaderChunk/lights_toon_pars_fragment.glsl.js';
import './shaders/ShaderChunk/lights_phong_fragment.glsl.js';
import './shaders/ShaderChunk/lights_phong_pars_fragment.glsl.js';
import './shaders/ShaderChunk/lights_physical_fragment.glsl.js';
import './shaders/ShaderChunk/lights_physical_pars_fragment.glsl.js';
import './shaders/ShaderChunk/lights_fragment_begin.glsl.js';
import './shaders/ShaderChunk/lights_fragment_maps.glsl.js';
import './shaders/ShaderChunk/lights_fragment_end.glsl.js';
import './shaders/ShaderChunk/logdepthbuf_fragment.glsl.js';
import './shaders/ShaderChunk/logdepthbuf_pars_fragment.glsl.js';
import './shaders/ShaderChunk/logdepthbuf_pars_vertex.glsl.js';
import './shaders/ShaderChunk/logdepthbuf_vertex.glsl.js';
import './shaders/ShaderChunk/map_fragment.glsl.js';
import './shaders/ShaderChunk/map_pars_fragment.glsl.js';
import './shaders/ShaderChunk/map_particle_fragment.glsl.js';
import './shaders/ShaderChunk/map_particle_pars_fragment.glsl.js';
import './shaders/ShaderChunk/metalnessmap_fragment.glsl.js';
import './shaders/ShaderChunk/metalnessmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/morphcolor_vertex.glsl.js';
import './shaders/ShaderChunk/morphnormal_vertex.glsl.js';
import './shaders/ShaderChunk/morphtarget_pars_vertex.glsl.js';
import './shaders/ShaderChunk/morphtarget_vertex.glsl.js';
import './shaders/ShaderChunk/normal_fragment_begin.glsl.js';
import './shaders/ShaderChunk/normal_fragment_maps.glsl.js';
import './shaders/ShaderChunk/normal_pars_fragment.glsl.js';
import './shaders/ShaderChunk/normal_pars_vertex.glsl.js';
import './shaders/ShaderChunk/normal_vertex.glsl.js';
import './shaders/ShaderChunk/normalmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/clearcoat_normal_fragment_begin.glsl.js';
import './shaders/ShaderChunk/clearcoat_normal_fragment_maps.glsl.js';
import './shaders/ShaderChunk/clearcoat_pars_fragment.glsl.js';
import './shaders/ShaderChunk/iridescence_pars_fragment.glsl.js';
import './shaders/ShaderChunk/opaque_fragment.glsl.js';
import './shaders/ShaderChunk/packing.glsl.js';
import './shaders/ShaderChunk/premultiplied_alpha_fragment.glsl.js';
import './shaders/ShaderChunk/project_vertex.glsl.js';
import './shaders/ShaderChunk/dithering_fragment.glsl.js';
import './shaders/ShaderChunk/dithering_pars_fragment.glsl.js';
import './shaders/ShaderChunk/roughnessmap_fragment.glsl.js';
import './shaders/ShaderChunk/roughnessmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/shadowmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/shadowmap_pars_vertex.glsl.js';
import './shaders/ShaderChunk/shadowmap_vertex.glsl.js';
import './shaders/ShaderChunk/shadowmask_pars_fragment.glsl.js';
import './shaders/ShaderChunk/skinbase_vertex.glsl.js';
import './shaders/ShaderChunk/skinning_pars_vertex.glsl.js';
import './shaders/ShaderChunk/skinning_vertex.glsl.js';
import './shaders/ShaderChunk/skinnormal_vertex.glsl.js';
import './shaders/ShaderChunk/specularmap_fragment.glsl.js';
import './shaders/ShaderChunk/specularmap_pars_fragment.glsl.js';
import './shaders/ShaderChunk/tonemapping_fragment.glsl.js';
import './shaders/ShaderChunk/tonemapping_pars_fragment.glsl.js';
import './shaders/ShaderChunk/transmission_fragment.glsl.js';
import './shaders/ShaderChunk/transmission_pars_fragment.glsl.js';
import './shaders/ShaderChunk/uv_pars_fragment.glsl.js';
import './shaders/ShaderChunk/uv_pars_vertex.glsl.js';
import './shaders/ShaderChunk/uv_vertex.glsl.js';
import './shaders/ShaderChunk/worldpos_vertex.glsl.js';
import './shaders/ShaderLib/background.glsl.js';
import './shaders/ShaderLib/backgroundCube.glsl.js';
import './shaders/ShaderLib/cube.glsl.js';
import './shaders/ShaderLib/depth.glsl.js';
import './shaders/ShaderLib/distanceRGBA.glsl.js';
import './shaders/ShaderLib/equirect.glsl.js';
import './shaders/ShaderLib/linedashed.glsl.js';
import './shaders/ShaderLib/meshbasic.glsl.js';
import './shaders/ShaderLib/meshlambert.glsl.js';
import './shaders/ShaderLib/meshmatcap.glsl.js';
import './shaders/ShaderLib/meshnormal.glsl.js';
import './shaders/ShaderLib/meshphong.glsl.js';
import './shaders/ShaderLib/meshphysical.glsl.js';
import './shaders/ShaderLib/meshtoon.glsl.js';
import './shaders/ShaderLib/points.glsl.js';
import './shaders/ShaderLib/shadow.glsl.js';
import './shaders/ShaderLib/sprite.glsl.js';
import './shaders/UniformsLib.js';
import './webgl/WebGLBindingStates.js';
import './webgl/WebGLBufferRenderer.js';
import './webgl/WebGLCapabilities.js';
import './webgl/WebGLClipping.js';
import './webgl/WebGLCubeMaps.js';
import './WebGLCubeRenderTarget.js';
import './WebGLRenderTarget.js';
import '../core/RenderTarget.js';
import '../textures/Texture.js';
import '../textures/Source.js';
import '../extras/ImageUtils.js';
import '../cameras/CubeCamera.js';
import '../cameras/PerspectiveCamera.js';
import '../cameras/Camera.js';
import '../textures/CubeTexture.js';
import './webgl/WebGLCubeUVMaps.js';
import '../extras/PMREMGenerator.js';
import '../cameras/OrthographicCamera.js';
import './webgl/WebGLExtensions.js';
import './webgl/WebGLGeometries.js';
import './webgl/WebGLIndexedBufferRenderer.js';
import './webgl/WebGLInfo.js';
import './webgl/WebGLMorphtargets.js';
import '../textures/DataArrayTexture.js';
import './webgl/WebGLObjects.js';
import './webgl/WebGLPrograms.js';
import './webgl/WebGLProgram.js';
import './webgl/WebGLUniforms.js';
import '../textures/Data3DTexture.js';
import './webgl/WebGLShader.js';
import './webgl/WebGLShaderCache.js';
import './webgl/WebGLProperties.js';
import './webgl/WebGLRenderLists.js';
import './webgl/WebGLRenderStates.js';
import './webgl/WebGLLights.js';
import './webgl/WebGLShadowMap.js';
import '../materials/MeshDepthMaterial.js';
import '../materials/MeshDistanceMaterial.js';
import './shaders/ShaderLib/vsm.glsl.js';
import './webgl/WebGLState.js';
import './webgl/WebGLTextures.js';
import './webgl/WebGLUtils.js';
import './webxr/WebXRManager.js';
import '../cameras/ArrayCamera.js';
import './webxr/WebXRController.js';
import '../objects/Group.js';
import '../textures/DepthTexture.js';
import './webgl/WebGLMaterials.js';
import './webgl/WebGLUniformsGroups.js';

class WebGL1Renderer extends WebGLRenderer {
}
WebGL1Renderer.prototype.isWebGL1Renderer = true;

export { WebGL1Renderer };
