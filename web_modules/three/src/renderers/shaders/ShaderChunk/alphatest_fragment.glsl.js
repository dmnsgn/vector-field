var alphatest_fragment = /* glsl */ `
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`;

export { alphatest_fragment as default };
