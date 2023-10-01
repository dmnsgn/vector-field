var emissivemap_pars_fragment = /* glsl */ `
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;

export { emissivemap_pars_fragment as default };
