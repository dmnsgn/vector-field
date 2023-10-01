var displacementmap_pars_vertex = /* glsl */ `
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;

export { displacementmap_pars_vertex as default };
