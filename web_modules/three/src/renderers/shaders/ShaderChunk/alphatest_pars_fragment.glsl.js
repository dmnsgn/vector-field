var alphatest_pars_fragment = /* glsl */ `
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;

export { alphatest_pars_fragment as default };
