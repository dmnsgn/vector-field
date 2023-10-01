var lightmap_pars_fragment = /* glsl */ `
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;

export { lightmap_pars_fragment as default };
