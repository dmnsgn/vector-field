var clipping_planes_vertex = /* glsl */ `
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;

export { clipping_planes_vertex as default };
