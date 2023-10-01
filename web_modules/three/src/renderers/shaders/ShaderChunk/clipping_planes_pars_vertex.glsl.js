var clipping_planes_pars_vertex = /* glsl */ `
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;

export { clipping_planes_pars_vertex as default };
