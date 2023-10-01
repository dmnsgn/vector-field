var roughnessmap_pars_fragment = /* glsl */ `
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;

export { roughnessmap_pars_fragment as default };
