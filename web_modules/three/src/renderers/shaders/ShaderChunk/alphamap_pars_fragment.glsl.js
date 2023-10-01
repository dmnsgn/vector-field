var alphamap_pars_fragment = /* glsl */ `
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;

export { alphamap_pars_fragment as default };
