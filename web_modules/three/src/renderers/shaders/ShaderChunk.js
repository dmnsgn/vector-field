import alphahash_fragment from './ShaderChunk/alphahash_fragment.glsl.js';
import alphahash_pars_fragment from './ShaderChunk/alphahash_pars_fragment.glsl.js';
import alphamap_fragment from './ShaderChunk/alphamap_fragment.glsl.js';
import alphamap_pars_fragment from './ShaderChunk/alphamap_pars_fragment.glsl.js';
import alphatest_fragment from './ShaderChunk/alphatest_fragment.glsl.js';
import alphatest_pars_fragment from './ShaderChunk/alphatest_pars_fragment.glsl.js';
import aomap_fragment from './ShaderChunk/aomap_fragment.glsl.js';
import aomap_pars_fragment from './ShaderChunk/aomap_pars_fragment.glsl.js';
import batching_pars_vertex from './ShaderChunk/batching_pars_vertex.glsl.js';
import batching_vertex from './ShaderChunk/batching_vertex.glsl.js';
import begin_vertex from './ShaderChunk/begin_vertex.glsl.js';
import beginnormal_vertex from './ShaderChunk/beginnormal_vertex.glsl.js';
import bsdfs from './ShaderChunk/bsdfs.glsl.js';
import iridescence_fragment from './ShaderChunk/iridescence_fragment.glsl.js';
import bumpmap_pars_fragment from './ShaderChunk/bumpmap_pars_fragment.glsl.js';
import clipping_planes_fragment from './ShaderChunk/clipping_planes_fragment.glsl.js';
import clipping_planes_pars_fragment from './ShaderChunk/clipping_planes_pars_fragment.glsl.js';
import clipping_planes_pars_vertex from './ShaderChunk/clipping_planes_pars_vertex.glsl.js';
import clipping_planes_vertex from './ShaderChunk/clipping_planes_vertex.glsl.js';
import color_fragment from './ShaderChunk/color_fragment.glsl.js';
import color_pars_fragment from './ShaderChunk/color_pars_fragment.glsl.js';
import color_pars_vertex from './ShaderChunk/color_pars_vertex.glsl.js';
import color_vertex from './ShaderChunk/color_vertex.glsl.js';
import common from './ShaderChunk/common.glsl.js';
import cube_uv_reflection_fragment from './ShaderChunk/cube_uv_reflection_fragment.glsl.js';
import defaultnormal_vertex from './ShaderChunk/defaultnormal_vertex.glsl.js';
import displacementmap_pars_vertex from './ShaderChunk/displacementmap_pars_vertex.glsl.js';
import displacementmap_vertex from './ShaderChunk/displacementmap_vertex.glsl.js';
import emissivemap_fragment from './ShaderChunk/emissivemap_fragment.glsl.js';
import emissivemap_pars_fragment from './ShaderChunk/emissivemap_pars_fragment.glsl.js';
import colorspace_fragment from './ShaderChunk/colorspace_fragment.glsl.js';
import colorspace_pars_fragment from './ShaderChunk/colorspace_pars_fragment.glsl.js';
import envmap_fragment from './ShaderChunk/envmap_fragment.glsl.js';
import envmap_common_pars_fragment from './ShaderChunk/envmap_common_pars_fragment.glsl.js';
import envmap_pars_fragment from './ShaderChunk/envmap_pars_fragment.glsl.js';
import envmap_pars_vertex from './ShaderChunk/envmap_pars_vertex.glsl.js';
import envmap_vertex from './ShaderChunk/envmap_vertex.glsl.js';
import fog_vertex from './ShaderChunk/fog_vertex.glsl.js';
import fog_pars_vertex from './ShaderChunk/fog_pars_vertex.glsl.js';
import fog_fragment from './ShaderChunk/fog_fragment.glsl.js';
import fog_pars_fragment from './ShaderChunk/fog_pars_fragment.glsl.js';
import gradientmap_pars_fragment from './ShaderChunk/gradientmap_pars_fragment.glsl.js';
import lightmap_pars_fragment from './ShaderChunk/lightmap_pars_fragment.glsl.js';
import lights_lambert_fragment from './ShaderChunk/lights_lambert_fragment.glsl.js';
import lights_lambert_pars_fragment from './ShaderChunk/lights_lambert_pars_fragment.glsl.js';
import lights_pars_begin from './ShaderChunk/lights_pars_begin.glsl.js';
import envmap_physical_pars_fragment from './ShaderChunk/envmap_physical_pars_fragment.glsl.js';
import lights_toon_fragment from './ShaderChunk/lights_toon_fragment.glsl.js';
import lights_toon_pars_fragment from './ShaderChunk/lights_toon_pars_fragment.glsl.js';
import lights_phong_fragment from './ShaderChunk/lights_phong_fragment.glsl.js';
import lights_phong_pars_fragment from './ShaderChunk/lights_phong_pars_fragment.glsl.js';
import lights_physical_fragment from './ShaderChunk/lights_physical_fragment.glsl.js';
import lights_physical_pars_fragment from './ShaderChunk/lights_physical_pars_fragment.glsl.js';
import lights_fragment_begin from './ShaderChunk/lights_fragment_begin.glsl.js';
import lights_fragment_maps from './ShaderChunk/lights_fragment_maps.glsl.js';
import lights_fragment_end from './ShaderChunk/lights_fragment_end.glsl.js';
import logdepthbuf_fragment from './ShaderChunk/logdepthbuf_fragment.glsl.js';
import logdepthbuf_pars_fragment from './ShaderChunk/logdepthbuf_pars_fragment.glsl.js';
import logdepthbuf_pars_vertex from './ShaderChunk/logdepthbuf_pars_vertex.glsl.js';
import logdepthbuf_vertex from './ShaderChunk/logdepthbuf_vertex.glsl.js';
import map_fragment from './ShaderChunk/map_fragment.glsl.js';
import map_pars_fragment from './ShaderChunk/map_pars_fragment.glsl.js';
import map_particle_fragment from './ShaderChunk/map_particle_fragment.glsl.js';
import map_particle_pars_fragment from './ShaderChunk/map_particle_pars_fragment.glsl.js';
import metalnessmap_fragment from './ShaderChunk/metalnessmap_fragment.glsl.js';
import metalnessmap_pars_fragment from './ShaderChunk/metalnessmap_pars_fragment.glsl.js';
import morphinstance_vertex from './ShaderChunk/morphinstance_vertex.glsl.js';
import morphcolor_vertex from './ShaderChunk/morphcolor_vertex.glsl.js';
import morphnormal_vertex from './ShaderChunk/morphnormal_vertex.glsl.js';
import morphtarget_pars_vertex from './ShaderChunk/morphtarget_pars_vertex.glsl.js';
import morphtarget_vertex from './ShaderChunk/morphtarget_vertex.glsl.js';
import normal_fragment_begin from './ShaderChunk/normal_fragment_begin.glsl.js';
import normal_fragment_maps from './ShaderChunk/normal_fragment_maps.glsl.js';
import normal_pars_fragment from './ShaderChunk/normal_pars_fragment.glsl.js';
import normal_pars_vertex from './ShaderChunk/normal_pars_vertex.glsl.js';
import normal_vertex from './ShaderChunk/normal_vertex.glsl.js';
import normalmap_pars_fragment from './ShaderChunk/normalmap_pars_fragment.glsl.js';
import clearcoat_normal_fragment_begin from './ShaderChunk/clearcoat_normal_fragment_begin.glsl.js';
import clearcoat_normal_fragment_maps from './ShaderChunk/clearcoat_normal_fragment_maps.glsl.js';
import clearcoat_pars_fragment from './ShaderChunk/clearcoat_pars_fragment.glsl.js';
import iridescence_pars_fragment from './ShaderChunk/iridescence_pars_fragment.glsl.js';
import opaque_fragment from './ShaderChunk/opaque_fragment.glsl.js';
import packing from './ShaderChunk/packing.glsl.js';
import premultiplied_alpha_fragment from './ShaderChunk/premultiplied_alpha_fragment.glsl.js';
import project_vertex from './ShaderChunk/project_vertex.glsl.js';
import dithering_fragment from './ShaderChunk/dithering_fragment.glsl.js';
import dithering_pars_fragment from './ShaderChunk/dithering_pars_fragment.glsl.js';
import roughnessmap_fragment from './ShaderChunk/roughnessmap_fragment.glsl.js';
import roughnessmap_pars_fragment from './ShaderChunk/roughnessmap_pars_fragment.glsl.js';
import shadowmap_pars_fragment from './ShaderChunk/shadowmap_pars_fragment.glsl.js';
import shadowmap_pars_vertex from './ShaderChunk/shadowmap_pars_vertex.glsl.js';
import shadowmap_vertex from './ShaderChunk/shadowmap_vertex.glsl.js';
import shadowmask_pars_fragment from './ShaderChunk/shadowmask_pars_fragment.glsl.js';
import skinbase_vertex from './ShaderChunk/skinbase_vertex.glsl.js';
import skinning_pars_vertex from './ShaderChunk/skinning_pars_vertex.glsl.js';
import skinning_vertex from './ShaderChunk/skinning_vertex.glsl.js';
import skinnormal_vertex from './ShaderChunk/skinnormal_vertex.glsl.js';
import specularmap_fragment from './ShaderChunk/specularmap_fragment.glsl.js';
import specularmap_pars_fragment from './ShaderChunk/specularmap_pars_fragment.glsl.js';
import tonemapping_fragment from './ShaderChunk/tonemapping_fragment.glsl.js';
import tonemapping_pars_fragment from './ShaderChunk/tonemapping_pars_fragment.glsl.js';
import transmission_fragment from './ShaderChunk/transmission_fragment.glsl.js';
import transmission_pars_fragment from './ShaderChunk/transmission_pars_fragment.glsl.js';
import uv_pars_fragment from './ShaderChunk/uv_pars_fragment.glsl.js';
import uv_pars_vertex from './ShaderChunk/uv_pars_vertex.glsl.js';
import uv_vertex from './ShaderChunk/uv_vertex.glsl.js';
import worldpos_vertex from './ShaderChunk/worldpos_vertex.glsl.js';
import { vertex, fragment } from './ShaderLib/background.glsl.js';
import { vertex as vertex$1, fragment as fragment$1 } from './ShaderLib/backgroundCube.glsl.js';
import { vertex as vertex$2, fragment as fragment$2 } from './ShaderLib/cube.glsl.js';
import { vertex as vertex$3, fragment as fragment$3 } from './ShaderLib/depth.glsl.js';
import { vertex as vertex$4, fragment as fragment$4 } from './ShaderLib/distanceRGBA.glsl.js';
import { vertex as vertex$5, fragment as fragment$5 } from './ShaderLib/equirect.glsl.js';
import { vertex as vertex$6, fragment as fragment$6 } from './ShaderLib/linedashed.glsl.js';
import { vertex as vertex$7, fragment as fragment$7 } from './ShaderLib/meshbasic.glsl.js';
import { vertex as vertex$8, fragment as fragment$8 } from './ShaderLib/meshlambert.glsl.js';
import { vertex as vertex$9, fragment as fragment$9 } from './ShaderLib/meshmatcap.glsl.js';
import { vertex as vertex$a, fragment as fragment$a } from './ShaderLib/meshnormal.glsl.js';
import { vertex as vertex$b, fragment as fragment$b } from './ShaderLib/meshphong.glsl.js';
import { vertex as vertex$c, fragment as fragment$c } from './ShaderLib/meshphysical.glsl.js';
import { vertex as vertex$d, fragment as fragment$d } from './ShaderLib/meshtoon.glsl.js';
import { vertex as vertex$e, fragment as fragment$e } from './ShaderLib/points.glsl.js';
import { vertex as vertex$f, fragment as fragment$f } from './ShaderLib/shadow.glsl.js';
import { vertex as vertex$g, fragment as fragment$g } from './ShaderLib/sprite.glsl.js';

const ShaderChunk = {
    alphahash_fragment: alphahash_fragment,
    alphahash_pars_fragment: alphahash_pars_fragment,
    alphamap_fragment: alphamap_fragment,
    alphamap_pars_fragment: alphamap_pars_fragment,
    alphatest_fragment: alphatest_fragment,
    alphatest_pars_fragment: alphatest_pars_fragment,
    aomap_fragment: aomap_fragment,
    aomap_pars_fragment: aomap_pars_fragment,
    batching_pars_vertex: batching_pars_vertex,
    batching_vertex: batching_vertex,
    begin_vertex: begin_vertex,
    beginnormal_vertex: beginnormal_vertex,
    bsdfs: bsdfs,
    iridescence_fragment: iridescence_fragment,
    bumpmap_pars_fragment: bumpmap_pars_fragment,
    clipping_planes_fragment: clipping_planes_fragment,
    clipping_planes_pars_fragment: clipping_planes_pars_fragment,
    clipping_planes_pars_vertex: clipping_planes_pars_vertex,
    clipping_planes_vertex: clipping_planes_vertex,
    color_fragment: color_fragment,
    color_pars_fragment: color_pars_fragment,
    color_pars_vertex: color_pars_vertex,
    color_vertex: color_vertex,
    common: common,
    cube_uv_reflection_fragment: cube_uv_reflection_fragment,
    defaultnormal_vertex: defaultnormal_vertex,
    displacementmap_pars_vertex: displacementmap_pars_vertex,
    displacementmap_vertex: displacementmap_vertex,
    emissivemap_fragment: emissivemap_fragment,
    emissivemap_pars_fragment: emissivemap_pars_fragment,
    colorspace_fragment: colorspace_fragment,
    colorspace_pars_fragment: colorspace_pars_fragment,
    envmap_fragment: envmap_fragment,
    envmap_common_pars_fragment: envmap_common_pars_fragment,
    envmap_pars_fragment: envmap_pars_fragment,
    envmap_pars_vertex: envmap_pars_vertex,
    envmap_physical_pars_fragment: envmap_physical_pars_fragment,
    envmap_vertex: envmap_vertex,
    fog_vertex: fog_vertex,
    fog_pars_vertex: fog_pars_vertex,
    fog_fragment: fog_fragment,
    fog_pars_fragment: fog_pars_fragment,
    gradientmap_pars_fragment: gradientmap_pars_fragment,
    lightmap_pars_fragment: lightmap_pars_fragment,
    lights_lambert_fragment: lights_lambert_fragment,
    lights_lambert_pars_fragment: lights_lambert_pars_fragment,
    lights_pars_begin: lights_pars_begin,
    lights_toon_fragment: lights_toon_fragment,
    lights_toon_pars_fragment: lights_toon_pars_fragment,
    lights_phong_fragment: lights_phong_fragment,
    lights_phong_pars_fragment: lights_phong_pars_fragment,
    lights_physical_fragment: lights_physical_fragment,
    lights_physical_pars_fragment: lights_physical_pars_fragment,
    lights_fragment_begin: lights_fragment_begin,
    lights_fragment_maps: lights_fragment_maps,
    lights_fragment_end: lights_fragment_end,
    logdepthbuf_fragment: logdepthbuf_fragment,
    logdepthbuf_pars_fragment: logdepthbuf_pars_fragment,
    logdepthbuf_pars_vertex: logdepthbuf_pars_vertex,
    logdepthbuf_vertex: logdepthbuf_vertex,
    map_fragment: map_fragment,
    map_pars_fragment: map_pars_fragment,
    map_particle_fragment: map_particle_fragment,
    map_particle_pars_fragment: map_particle_pars_fragment,
    metalnessmap_fragment: metalnessmap_fragment,
    metalnessmap_pars_fragment: metalnessmap_pars_fragment,
    morphinstance_vertex: morphinstance_vertex,
    morphcolor_vertex: morphcolor_vertex,
    morphnormal_vertex: morphnormal_vertex,
    morphtarget_pars_vertex: morphtarget_pars_vertex,
    morphtarget_vertex: morphtarget_vertex,
    normal_fragment_begin: normal_fragment_begin,
    normal_fragment_maps: normal_fragment_maps,
    normal_pars_fragment: normal_pars_fragment,
    normal_pars_vertex: normal_pars_vertex,
    normal_vertex: normal_vertex,
    normalmap_pars_fragment: normalmap_pars_fragment,
    clearcoat_normal_fragment_begin: clearcoat_normal_fragment_begin,
    clearcoat_normal_fragment_maps: clearcoat_normal_fragment_maps,
    clearcoat_pars_fragment: clearcoat_pars_fragment,
    iridescence_pars_fragment: iridescence_pars_fragment,
    opaque_fragment: opaque_fragment,
    packing: packing,
    premultiplied_alpha_fragment: premultiplied_alpha_fragment,
    project_vertex: project_vertex,
    dithering_fragment: dithering_fragment,
    dithering_pars_fragment: dithering_pars_fragment,
    roughnessmap_fragment: roughnessmap_fragment,
    roughnessmap_pars_fragment: roughnessmap_pars_fragment,
    shadowmap_pars_fragment: shadowmap_pars_fragment,
    shadowmap_pars_vertex: shadowmap_pars_vertex,
    shadowmap_vertex: shadowmap_vertex,
    shadowmask_pars_fragment: shadowmask_pars_fragment,
    skinbase_vertex: skinbase_vertex,
    skinning_pars_vertex: skinning_pars_vertex,
    skinning_vertex: skinning_vertex,
    skinnormal_vertex: skinnormal_vertex,
    specularmap_fragment: specularmap_fragment,
    specularmap_pars_fragment: specularmap_pars_fragment,
    tonemapping_fragment: tonemapping_fragment,
    tonemapping_pars_fragment: tonemapping_pars_fragment,
    transmission_fragment: transmission_fragment,
    transmission_pars_fragment: transmission_pars_fragment,
    uv_pars_fragment: uv_pars_fragment,
    uv_pars_vertex: uv_pars_vertex,
    uv_vertex: uv_vertex,
    worldpos_vertex: worldpos_vertex,
    background_vert: vertex,
    background_frag: fragment,
    backgroundCube_vert: vertex$1,
    backgroundCube_frag: fragment$1,
    cube_vert: vertex$2,
    cube_frag: fragment$2,
    depth_vert: vertex$3,
    depth_frag: fragment$3,
    distanceRGBA_vert: vertex$4,
    distanceRGBA_frag: fragment$4,
    equirect_vert: vertex$5,
    equirect_frag: fragment$5,
    linedashed_vert: vertex$6,
    linedashed_frag: fragment$6,
    meshbasic_vert: vertex$7,
    meshbasic_frag: fragment$7,
    meshlambert_vert: vertex$8,
    meshlambert_frag: fragment$8,
    meshmatcap_vert: vertex$9,
    meshmatcap_frag: fragment$9,
    meshnormal_vert: vertex$a,
    meshnormal_frag: fragment$a,
    meshphong_vert: vertex$b,
    meshphong_frag: fragment$b,
    meshphysical_vert: vertex$c,
    meshphysical_frag: fragment$c,
    meshtoon_vert: vertex$d,
    meshtoon_frag: fragment$d,
    points_vert: vertex$e,
    points_frag: fragment$e,
    shadow_vert: vertex$f,
    shadow_frag: fragment$f,
    sprite_vert: vertex$g,
    sprite_frag: fragment$g
};

export { ShaderChunk };
