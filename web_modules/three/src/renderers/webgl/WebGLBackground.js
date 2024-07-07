import { CubeUVReflectionMapping, BackSide, SRGBTransfer, FrontSide } from '../../constants.js';
import { BoxGeometry } from '../../geometries/BoxGeometry.js';
import { PlaneGeometry } from '../../geometries/PlaneGeometry.js';
import { ShaderMaterial } from '../../materials/ShaderMaterial.js';
import { Color } from '../../math/Color.js';
import { ColorManagement } from '../../math/ColorManagement.js';
import { Euler } from '../../math/Euler.js';
import { Matrix4 } from '../../math/Matrix4.js';
import { Mesh } from '../../objects/Mesh.js';
import { ShaderLib } from '../shaders/ShaderLib.js';
import { cloneUniforms, getUnlitUniformColorSpace } from '../shaders/UniformsUtils.js';
import '../../core/BufferGeometry.js';
import '../../math/Vector3.js';
import '../../math/MathUtils.js';
import '../../math/Quaternion.js';
import '../../math/Vector2.js';
import '../../math/Box3.js';
import '../../core/EventDispatcher.js';
import '../../core/BufferAttribute.js';
import '../../extras/DataUtils.js';
import '../../utils.js';
import '../../math/Sphere.js';
import '../../core/Object3D.js';
import '../../core/Layers.js';
import '../../math/Matrix3.js';
import '../../materials/Material.js';
import '../shaders/ShaderChunk/default_vertex.glsl.js';
import '../shaders/ShaderChunk/default_fragment.glsl.js';
import '../../math/Ray.js';
import '../../math/Triangle.js';
import '../../materials/MeshBasicMaterial.js';
import '../shaders/ShaderChunk.js';
import '../shaders/ShaderChunk/alphahash_fragment.glsl.js';
import '../shaders/ShaderChunk/alphahash_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/alphamap_fragment.glsl.js';
import '../shaders/ShaderChunk/alphamap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/alphatest_fragment.glsl.js';
import '../shaders/ShaderChunk/alphatest_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/aomap_fragment.glsl.js';
import '../shaders/ShaderChunk/aomap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/batching_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/batching_vertex.glsl.js';
import '../shaders/ShaderChunk/begin_vertex.glsl.js';
import '../shaders/ShaderChunk/beginnormal_vertex.glsl.js';
import '../shaders/ShaderChunk/bsdfs.glsl.js';
import '../shaders/ShaderChunk/iridescence_fragment.glsl.js';
import '../shaders/ShaderChunk/bumpmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/clipping_planes_fragment.glsl.js';
import '../shaders/ShaderChunk/clipping_planes_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/clipping_planes_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/clipping_planes_vertex.glsl.js';
import '../shaders/ShaderChunk/color_fragment.glsl.js';
import '../shaders/ShaderChunk/color_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/color_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/color_vertex.glsl.js';
import '../shaders/ShaderChunk/common.glsl.js';
import '../shaders/ShaderChunk/cube_uv_reflection_fragment.glsl.js';
import '../shaders/ShaderChunk/defaultnormal_vertex.glsl.js';
import '../shaders/ShaderChunk/displacementmap_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/displacementmap_vertex.glsl.js';
import '../shaders/ShaderChunk/emissivemap_fragment.glsl.js';
import '../shaders/ShaderChunk/emissivemap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/colorspace_fragment.glsl.js';
import '../shaders/ShaderChunk/colorspace_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/envmap_fragment.glsl.js';
import '../shaders/ShaderChunk/envmap_common_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/envmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/envmap_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/envmap_vertex.glsl.js';
import '../shaders/ShaderChunk/fog_vertex.glsl.js';
import '../shaders/ShaderChunk/fog_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/fog_fragment.glsl.js';
import '../shaders/ShaderChunk/fog_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/gradientmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/lightmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_lambert_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_lambert_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_pars_begin.glsl.js';
import '../shaders/ShaderChunk/envmap_physical_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_toon_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_toon_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_phong_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_phong_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_physical_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_physical_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/lights_fragment_begin.glsl.js';
import '../shaders/ShaderChunk/lights_fragment_maps.glsl.js';
import '../shaders/ShaderChunk/lights_fragment_end.glsl.js';
import '../shaders/ShaderChunk/logdepthbuf_fragment.glsl.js';
import '../shaders/ShaderChunk/logdepthbuf_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/logdepthbuf_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/logdepthbuf_vertex.glsl.js';
import '../shaders/ShaderChunk/map_fragment.glsl.js';
import '../shaders/ShaderChunk/map_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/map_particle_fragment.glsl.js';
import '../shaders/ShaderChunk/map_particle_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/metalnessmap_fragment.glsl.js';
import '../shaders/ShaderChunk/metalnessmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/morphinstance_vertex.glsl.js';
import '../shaders/ShaderChunk/morphcolor_vertex.glsl.js';
import '../shaders/ShaderChunk/morphnormal_vertex.glsl.js';
import '../shaders/ShaderChunk/morphtarget_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/morphtarget_vertex.glsl.js';
import '../shaders/ShaderChunk/normal_fragment_begin.glsl.js';
import '../shaders/ShaderChunk/normal_fragment_maps.glsl.js';
import '../shaders/ShaderChunk/normal_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/normal_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/normal_vertex.glsl.js';
import '../shaders/ShaderChunk/normalmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/clearcoat_normal_fragment_begin.glsl.js';
import '../shaders/ShaderChunk/clearcoat_normal_fragment_maps.glsl.js';
import '../shaders/ShaderChunk/clearcoat_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/iridescence_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/opaque_fragment.glsl.js';
import '../shaders/ShaderChunk/packing.glsl.js';
import '../shaders/ShaderChunk/premultiplied_alpha_fragment.glsl.js';
import '../shaders/ShaderChunk/project_vertex.glsl.js';
import '../shaders/ShaderChunk/dithering_fragment.glsl.js';
import '../shaders/ShaderChunk/dithering_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/roughnessmap_fragment.glsl.js';
import '../shaders/ShaderChunk/roughnessmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/shadowmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/shadowmap_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/shadowmap_vertex.glsl.js';
import '../shaders/ShaderChunk/shadowmask_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/skinbase_vertex.glsl.js';
import '../shaders/ShaderChunk/skinning_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/skinning_vertex.glsl.js';
import '../shaders/ShaderChunk/skinnormal_vertex.glsl.js';
import '../shaders/ShaderChunk/specularmap_fragment.glsl.js';
import '../shaders/ShaderChunk/specularmap_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/tonemapping_fragment.glsl.js';
import '../shaders/ShaderChunk/tonemapping_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/transmission_fragment.glsl.js';
import '../shaders/ShaderChunk/transmission_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/uv_pars_fragment.glsl.js';
import '../shaders/ShaderChunk/uv_pars_vertex.glsl.js';
import '../shaders/ShaderChunk/uv_vertex.glsl.js';
import '../shaders/ShaderChunk/worldpos_vertex.glsl.js';
import '../shaders/ShaderLib/background.glsl.js';
import '../shaders/ShaderLib/backgroundCube.glsl.js';
import '../shaders/ShaderLib/cube.glsl.js';
import '../shaders/ShaderLib/depth.glsl.js';
import '../shaders/ShaderLib/distanceRGBA.glsl.js';
import '../shaders/ShaderLib/equirect.glsl.js';
import '../shaders/ShaderLib/linedashed.glsl.js';
import '../shaders/ShaderLib/meshbasic.glsl.js';
import '../shaders/ShaderLib/meshlambert.glsl.js';
import '../shaders/ShaderLib/meshmatcap.glsl.js';
import '../shaders/ShaderLib/meshnormal.glsl.js';
import '../shaders/ShaderLib/meshphong.glsl.js';
import '../shaders/ShaderLib/meshphysical.glsl.js';
import '../shaders/ShaderLib/meshtoon.glsl.js';
import '../shaders/ShaderLib/points.glsl.js';
import '../shaders/ShaderLib/shadow.glsl.js';
import '../shaders/ShaderLib/sprite.glsl.js';
import '../shaders/UniformsLib.js';

const _rgb = {
    r: 0,
    b: 0,
    g: 0
};
const _e1 = /*@__PURE__*/ new Euler();
const _m1 = /*@__PURE__*/ new Matrix4();
function WebGLBackground(renderer, cubemaps, cubeuvmaps, state, objects, alpha, premultipliedAlpha) {
    const clearColor = new Color(0x000000);
    let clearAlpha = alpha === true ? 0 : 1;
    let planeMesh;
    let boxMesh;
    let currentBackground = null;
    let currentBackgroundVersion = 0;
    let currentTonemapping = null;
    function getBackground(scene) {
        let background = scene.isScene === true ? scene.background : null;
        if (background && background.isTexture) {
            const usePMREM = scene.backgroundBlurriness > 0; // use PMREM if the user wants to blur the background
            background = (usePMREM ? cubeuvmaps : cubemaps).get(background);
        }
        return background;
    }
    function render(scene) {
        let forceClear = false;
        const background = getBackground(scene);
        if (background === null) {
            setClear(clearColor, clearAlpha);
        } else if (background && background.isColor) {
            setClear(background, 1);
            forceClear = true;
        }
        const environmentBlendMode = renderer.xr.getEnvironmentBlendMode();
        if (environmentBlendMode === 'additive') {
            state.buffers.color.setClear(0, 0, 0, 1, premultipliedAlpha);
        } else if (environmentBlendMode === 'alpha-blend') {
            state.buffers.color.setClear(0, 0, 0, 0, premultipliedAlpha);
        }
        if (renderer.autoClear || forceClear) {
            // buffers might not be writable which is required to ensure a correct clear
            state.buffers.depth.setTest(true);
            state.buffers.depth.setMask(true);
            state.buffers.color.setMask(true);
            renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
        }
    }
    function addToRenderList(renderList, scene) {
        const background = getBackground(scene);
        if (background && (background.isCubeTexture || background.mapping === CubeUVReflectionMapping)) {
            if (boxMesh === undefined) {
                boxMesh = new Mesh(new BoxGeometry(1, 1, 1), new ShaderMaterial({
                    name: 'BackgroundCubeMaterial',
                    uniforms: cloneUniforms(ShaderLib.backgroundCube.uniforms),
                    vertexShader: ShaderLib.backgroundCube.vertexShader,
                    fragmentShader: ShaderLib.backgroundCube.fragmentShader,
                    side: BackSide,
                    depthTest: false,
                    depthWrite: false,
                    fog: false
                }));
                boxMesh.geometry.deleteAttribute('normal');
                boxMesh.geometry.deleteAttribute('uv');
                boxMesh.onBeforeRender = function(renderer, scene, camera) {
                    this.matrixWorld.copyPosition(camera.matrixWorld);
                };
                // add "envMap" material property so the renderer can evaluate it like for built-in materials
                Object.defineProperty(boxMesh.material, 'envMap', {
                    get: function() {
                        return this.uniforms.envMap.value;
                    }
                });
                objects.update(boxMesh);
            }
            _e1.copy(scene.backgroundRotation);
            // accommodate left-handed frame
            _e1.x *= -1;
            _e1.y *= -1;
            _e1.z *= -1;
            if (background.isCubeTexture && background.isRenderTargetTexture === false) {
                // environment maps which are not cube render targets or PMREMs follow a different convention
                _e1.y *= -1;
                _e1.z *= -1;
            }
            boxMesh.material.uniforms.envMap.value = background;
            boxMesh.material.uniforms.flipEnvMap.value = background.isCubeTexture && background.isRenderTargetTexture === false ? -1 : 1;
            boxMesh.material.uniforms.backgroundBlurriness.value = scene.backgroundBlurriness;
            boxMesh.material.uniforms.backgroundIntensity.value = scene.backgroundIntensity;
            boxMesh.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1));
            boxMesh.material.toneMapped = ColorManagement.getTransfer(background.colorSpace) !== SRGBTransfer;
            if (currentBackground !== background || currentBackgroundVersion !== background.version || currentTonemapping !== renderer.toneMapping) {
                boxMesh.material.needsUpdate = true;
                currentBackground = background;
                currentBackgroundVersion = background.version;
                currentTonemapping = renderer.toneMapping;
            }
            boxMesh.layers.enableAll();
            // push to the pre-sorted opaque render list
            renderList.unshift(boxMesh, boxMesh.geometry, boxMesh.material, 0, 0, null);
        } else if (background && background.isTexture) {
            if (planeMesh === undefined) {
                planeMesh = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({
                    name: 'BackgroundMaterial',
                    uniforms: cloneUniforms(ShaderLib.background.uniforms),
                    vertexShader: ShaderLib.background.vertexShader,
                    fragmentShader: ShaderLib.background.fragmentShader,
                    side: FrontSide,
                    depthTest: false,
                    depthWrite: false,
                    fog: false
                }));
                planeMesh.geometry.deleteAttribute('normal');
                // add "map" material property so the renderer can evaluate it like for built-in materials
                Object.defineProperty(planeMesh.material, 'map', {
                    get: function() {
                        return this.uniforms.t2D.value;
                    }
                });
                objects.update(planeMesh);
            }
            planeMesh.material.uniforms.t2D.value = background;
            planeMesh.material.uniforms.backgroundIntensity.value = scene.backgroundIntensity;
            planeMesh.material.toneMapped = ColorManagement.getTransfer(background.colorSpace) !== SRGBTransfer;
            if (background.matrixAutoUpdate === true) {
                background.updateMatrix();
            }
            planeMesh.material.uniforms.uvTransform.value.copy(background.matrix);
            if (currentBackground !== background || currentBackgroundVersion !== background.version || currentTonemapping !== renderer.toneMapping) {
                planeMesh.material.needsUpdate = true;
                currentBackground = background;
                currentBackgroundVersion = background.version;
                currentTonemapping = renderer.toneMapping;
            }
            planeMesh.layers.enableAll();
            // push to the pre-sorted opaque render list
            renderList.unshift(planeMesh, planeMesh.geometry, planeMesh.material, 0, 0, null);
        }
    }
    function setClear(color, alpha) {
        color.getRGB(_rgb, getUnlitUniformColorSpace(renderer));
        state.buffers.color.setClear(_rgb.r, _rgb.g, _rgb.b, alpha, premultipliedAlpha);
    }
    return {
        getClearColor: function() {
            return clearColor;
        },
        setClearColor: function(color, alpha) {
            if (alpha === void 0) alpha = 1;
            clearColor.set(color);
            clearAlpha = alpha;
            setClear(clearColor, clearAlpha);
        },
        getClearAlpha: function() {
            return clearAlpha;
        },
        setClearAlpha: function(alpha) {
            clearAlpha = alpha;
            setClear(clearColor, clearAlpha);
        },
        render: render,
        addToRenderList: addToRenderList
    };
}

export { WebGLBackground };
