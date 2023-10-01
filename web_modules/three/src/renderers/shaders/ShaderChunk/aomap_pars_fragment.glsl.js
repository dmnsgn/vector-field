var aomap_pars_fragment = /* glsl */ `
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;

export { aomap_pars_fragment as default };
