var specularmap_pars_fragment = /* glsl */ `
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;

export { specularmap_pars_fragment as default };
