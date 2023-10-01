var map_pars_fragment = /* glsl */ `
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;

export { map_pars_fragment as default };
