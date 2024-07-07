import { ShaderChunk } from './ShaderChunk.js';
import { mergeUniforms } from './UniformsUtils.js';
import { Vector2 } from '../../math/Vector2.js';
import { Vector3 } from '../../math/Vector3.js';
import { UniformsLib } from './UniformsLib.js';
import { Color } from '../../math/Color.js';
import { Matrix3 } from '../../math/Matrix3.js';
import './ShaderChunk/alphahash_fragment.glsl.js';
import './ShaderChunk/alphahash_pars_fragment.glsl.js';
import './ShaderChunk/alphamap_fragment.glsl.js';
import './ShaderChunk/alphamap_pars_fragment.glsl.js';
import './ShaderChunk/alphatest_fragment.glsl.js';
import './ShaderChunk/alphatest_pars_fragment.glsl.js';
import './ShaderChunk/aomap_fragment.glsl.js';
import './ShaderChunk/aomap_pars_fragment.glsl.js';
import './ShaderChunk/batching_pars_vertex.glsl.js';
import './ShaderChunk/batching_vertex.glsl.js';
import './ShaderChunk/begin_vertex.glsl.js';
import './ShaderChunk/beginnormal_vertex.glsl.js';
import './ShaderChunk/bsdfs.glsl.js';
import './ShaderChunk/iridescence_fragment.glsl.js';
import './ShaderChunk/bumpmap_pars_fragment.glsl.js';
import './ShaderChunk/clipping_planes_fragment.glsl.js';
import './ShaderChunk/clipping_planes_pars_fragment.glsl.js';
import './ShaderChunk/clipping_planes_pars_vertex.glsl.js';
import './ShaderChunk/clipping_planes_vertex.glsl.js';
import './ShaderChunk/color_fragment.glsl.js';
import './ShaderChunk/color_pars_fragment.glsl.js';
import './ShaderChunk/color_pars_vertex.glsl.js';
import './ShaderChunk/color_vertex.glsl.js';
import './ShaderChunk/common.glsl.js';
import './ShaderChunk/cube_uv_reflection_fragment.glsl.js';
import './ShaderChunk/defaultnormal_vertex.glsl.js';
import './ShaderChunk/displacementmap_pars_vertex.glsl.js';
import './ShaderChunk/displacementmap_vertex.glsl.js';
import './ShaderChunk/emissivemap_fragment.glsl.js';
import './ShaderChunk/emissivemap_pars_fragment.glsl.js';
import './ShaderChunk/colorspace_fragment.glsl.js';
import './ShaderChunk/colorspace_pars_fragment.glsl.js';
import './ShaderChunk/envmap_fragment.glsl.js';
import './ShaderChunk/envmap_common_pars_fragment.glsl.js';
import './ShaderChunk/envmap_pars_fragment.glsl.js';
import './ShaderChunk/envmap_pars_vertex.glsl.js';
import './ShaderChunk/envmap_vertex.glsl.js';
import './ShaderChunk/fog_vertex.glsl.js';
import './ShaderChunk/fog_pars_vertex.glsl.js';
import './ShaderChunk/fog_fragment.glsl.js';
import './ShaderChunk/fog_pars_fragment.glsl.js';
import './ShaderChunk/gradientmap_pars_fragment.glsl.js';
import './ShaderChunk/lightmap_pars_fragment.glsl.js';
import './ShaderChunk/lights_lambert_fragment.glsl.js';
import './ShaderChunk/lights_lambert_pars_fragment.glsl.js';
import './ShaderChunk/lights_pars_begin.glsl.js';
import './ShaderChunk/envmap_physical_pars_fragment.glsl.js';
import './ShaderChunk/lights_toon_fragment.glsl.js';
import './ShaderChunk/lights_toon_pars_fragment.glsl.js';
import './ShaderChunk/lights_phong_fragment.glsl.js';
import './ShaderChunk/lights_phong_pars_fragment.glsl.js';
import './ShaderChunk/lights_physical_fragment.glsl.js';
import './ShaderChunk/lights_physical_pars_fragment.glsl.js';
import './ShaderChunk/lights_fragment_begin.glsl.js';
import './ShaderChunk/lights_fragment_maps.glsl.js';
import './ShaderChunk/lights_fragment_end.glsl.js';
import './ShaderChunk/logdepthbuf_fragment.glsl.js';
import './ShaderChunk/logdepthbuf_pars_fragment.glsl.js';
import './ShaderChunk/logdepthbuf_pars_vertex.glsl.js';
import './ShaderChunk/logdepthbuf_vertex.glsl.js';
import './ShaderChunk/map_fragment.glsl.js';
import './ShaderChunk/map_pars_fragment.glsl.js';
import './ShaderChunk/map_particle_fragment.glsl.js';
import './ShaderChunk/map_particle_pars_fragment.glsl.js';
import './ShaderChunk/metalnessmap_fragment.glsl.js';
import './ShaderChunk/metalnessmap_pars_fragment.glsl.js';
import './ShaderChunk/morphinstance_vertex.glsl.js';
import './ShaderChunk/morphcolor_vertex.glsl.js';
import './ShaderChunk/morphnormal_vertex.glsl.js';
import './ShaderChunk/morphtarget_pars_vertex.glsl.js';
import './ShaderChunk/morphtarget_vertex.glsl.js';
import './ShaderChunk/normal_fragment_begin.glsl.js';
import './ShaderChunk/normal_fragment_maps.glsl.js';
import './ShaderChunk/normal_pars_fragment.glsl.js';
import './ShaderChunk/normal_pars_vertex.glsl.js';
import './ShaderChunk/normal_vertex.glsl.js';
import './ShaderChunk/normalmap_pars_fragment.glsl.js';
import './ShaderChunk/clearcoat_normal_fragment_begin.glsl.js';
import './ShaderChunk/clearcoat_normal_fragment_maps.glsl.js';
import './ShaderChunk/clearcoat_pars_fragment.glsl.js';
import './ShaderChunk/iridescence_pars_fragment.glsl.js';
import './ShaderChunk/opaque_fragment.glsl.js';
import './ShaderChunk/packing.glsl.js';
import './ShaderChunk/premultiplied_alpha_fragment.glsl.js';
import './ShaderChunk/project_vertex.glsl.js';
import './ShaderChunk/dithering_fragment.glsl.js';
import './ShaderChunk/dithering_pars_fragment.glsl.js';
import './ShaderChunk/roughnessmap_fragment.glsl.js';
import './ShaderChunk/roughnessmap_pars_fragment.glsl.js';
import './ShaderChunk/shadowmap_pars_fragment.glsl.js';
import './ShaderChunk/shadowmap_pars_vertex.glsl.js';
import './ShaderChunk/shadowmap_vertex.glsl.js';
import './ShaderChunk/shadowmask_pars_fragment.glsl.js';
import './ShaderChunk/skinbase_vertex.glsl.js';
import './ShaderChunk/skinning_pars_vertex.glsl.js';
import './ShaderChunk/skinning_vertex.glsl.js';
import './ShaderChunk/skinnormal_vertex.glsl.js';
import './ShaderChunk/specularmap_fragment.glsl.js';
import './ShaderChunk/specularmap_pars_fragment.glsl.js';
import './ShaderChunk/tonemapping_fragment.glsl.js';
import './ShaderChunk/tonemapping_pars_fragment.glsl.js';
import './ShaderChunk/transmission_fragment.glsl.js';
import './ShaderChunk/transmission_pars_fragment.glsl.js';
import './ShaderChunk/uv_pars_fragment.glsl.js';
import './ShaderChunk/uv_pars_vertex.glsl.js';
import './ShaderChunk/uv_vertex.glsl.js';
import './ShaderChunk/worldpos_vertex.glsl.js';
import './ShaderLib/background.glsl.js';
import './ShaderLib/backgroundCube.glsl.js';
import './ShaderLib/cube.glsl.js';
import './ShaderLib/depth.glsl.js';
import './ShaderLib/distanceRGBA.glsl.js';
import './ShaderLib/equirect.glsl.js';
import './ShaderLib/linedashed.glsl.js';
import './ShaderLib/meshbasic.glsl.js';
import './ShaderLib/meshlambert.glsl.js';
import './ShaderLib/meshmatcap.glsl.js';
import './ShaderLib/meshnormal.glsl.js';
import './ShaderLib/meshphong.glsl.js';
import './ShaderLib/meshphysical.glsl.js';
import './ShaderLib/meshtoon.glsl.js';
import './ShaderLib/points.glsl.js';
import './ShaderLib/shadow.glsl.js';
import './ShaderLib/sprite.glsl.js';
import '../../math/ColorManagement.js';
import '../../constants.js';
import '../../math/MathUtils.js';
import '../../math/Quaternion.js';

const ShaderLib = {
    basic: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.specularmap,
            UniformsLib.envmap,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.fog
        ]),
        vertexShader: ShaderChunk.meshbasic_vert,
        fragmentShader: ShaderChunk.meshbasic_frag
    },
    lambert: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.specularmap,
            UniformsLib.envmap,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
                emissive: {
                    value: /*@__PURE__*/ new Color(0x000000)
                }
            }
        ]),
        vertexShader: ShaderChunk.meshlambert_vert,
        fragmentShader: ShaderChunk.meshlambert_frag
    },
    phong: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.specularmap,
            UniformsLib.envmap,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
                emissive: {
                    value: /*@__PURE__*/ new Color(0x000000)
                },
                specular: {
                    value: /*@__PURE__*/ new Color(0x111111)
                },
                shininess: {
                    value: 30
                }
            }
        ]),
        vertexShader: ShaderChunk.meshphong_vert,
        fragmentShader: ShaderChunk.meshphong_frag
    },
    standard: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.envmap,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.roughnessmap,
            UniformsLib.metalnessmap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
                emissive: {
                    value: /*@__PURE__*/ new Color(0x000000)
                },
                roughness: {
                    value: 1.0
                },
                metalness: {
                    value: 0.0
                },
                envMapIntensity: {
                    value: 1
                }
            }
        ]),
        vertexShader: ShaderChunk.meshphysical_vert,
        fragmentShader: ShaderChunk.meshphysical_frag
    },
    toon: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.gradientmap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
                emissive: {
                    value: /*@__PURE__*/ new Color(0x000000)
                }
            }
        ]),
        vertexShader: ShaderChunk.meshtoon_vert,
        fragmentShader: ShaderChunk.meshtoon_frag
    },
    matcap: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.fog,
            {
                matcap: {
                    value: null
                }
            }
        ]),
        vertexShader: ShaderChunk.meshmatcap_vert,
        fragmentShader: ShaderChunk.meshmatcap_frag
    },
    points: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.points,
            UniformsLib.fog
        ]),
        vertexShader: ShaderChunk.points_vert,
        fragmentShader: ShaderChunk.points_frag
    },
    dashed: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.fog,
            {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }
        ]),
        vertexShader: ShaderChunk.linedashed_vert,
        fragmentShader: ShaderChunk.linedashed_frag
    },
    depth: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.displacementmap
        ]),
        vertexShader: ShaderChunk.depth_vert,
        fragmentShader: ShaderChunk.depth_frag
    },
    normal: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            {
                opacity: {
                    value: 1.0
                }
            }
        ]),
        vertexShader: ShaderChunk.meshnormal_vert,
        fragmentShader: ShaderChunk.meshnormal_frag
    },
    sprite: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.sprite,
            UniformsLib.fog
        ]),
        vertexShader: ShaderChunk.sprite_vert,
        fragmentShader: ShaderChunk.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: ShaderChunk.background_vert,
        fragmentShader: ShaderChunk.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: /*@__PURE__*/ new Matrix3()
            }
        },
        vertexShader: ShaderChunk.backgroundCube_vert,
        fragmentShader: ShaderChunk.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1.0
            }
        },
        vertexShader: ShaderChunk.cube_vert,
        fragmentShader: ShaderChunk.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: ShaderChunk.equirect_vert,
        fragmentShader: ShaderChunk.equirect_frag
    },
    distanceRGBA: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.common,
            UniformsLib.displacementmap,
            {
                referencePosition: {
                    value: /*@__PURE__*/ new Vector3()
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1000
                }
            }
        ]),
        vertexShader: ShaderChunk.distanceRGBA_vert,
        fragmentShader: ShaderChunk.distanceRGBA_frag
    },
    shadow: {
        uniforms: /*@__PURE__*/ mergeUniforms([
            UniformsLib.lights,
            UniformsLib.fog,
            {
                color: {
                    value: /*@__PURE__*/ new Color(0x00000)
                },
                opacity: {
                    value: 1.0
                }
            }
        ]),
        vertexShader: ShaderChunk.shadow_vert,
        fragmentShader: ShaderChunk.shadow_frag
    }
};
ShaderLib.physical = {
    uniforms: /*@__PURE__*/ mergeUniforms([
        ShaderLib.standard.uniforms,
        {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            clearcoatNormalMap: {
                value: null
            },
            clearcoatNormalMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            clearcoatNormalScale: {
                value: /*@__PURE__*/ new Vector2(1, 1)
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatRoughnessMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            dispersion: {
                value: 0
            },
            iridescence: {
                value: 0
            },
            iridescenceMap: {
                value: null
            },
            iridescenceMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            iridescenceIOR: {
                value: 1.3
            },
            iridescenceThicknessMinimum: {
                value: 100
            },
            iridescenceThicknessMaximum: {
                value: 400
            },
            iridescenceThicknessMap: {
                value: null
            },
            iridescenceThicknessMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            sheen: {
                value: 0
            },
            sheenColor: {
                value: /*@__PURE__*/ new Color(0x000000)
            },
            sheenColorMap: {
                value: null
            },
            sheenColorMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            sheenRoughness: {
                value: 1
            },
            sheenRoughnessMap: {
                value: null
            },
            sheenRoughnessMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            },
            transmissionMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            transmissionSamplerSize: {
                value: /*@__PURE__*/ new Vector2()
            },
            transmissionSamplerMap: {
                value: null
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            thicknessMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            attenuationDistance: {
                value: 0
            },
            attenuationColor: {
                value: /*@__PURE__*/ new Color(0x000000)
            },
            specularColor: {
                value: /*@__PURE__*/ new Color(1, 1, 1)
            },
            specularColorMap: {
                value: null
            },
            specularColorMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            specularIntensity: {
                value: 1
            },
            specularIntensityMap: {
                value: null
            },
            specularIntensityMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            },
            anisotropyVector: {
                value: /*@__PURE__*/ new Vector2()
            },
            anisotropyMap: {
                value: null
            },
            anisotropyMapTransform: {
                value: /*@__PURE__*/ new Matrix3()
            }
        }
    ]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
};

export { ShaderLib };
