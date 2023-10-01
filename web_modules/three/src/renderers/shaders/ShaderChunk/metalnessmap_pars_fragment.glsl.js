var metalnessmap_pars_fragment = /* glsl */ `
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;

export { metalnessmap_pars_fragment as default };
