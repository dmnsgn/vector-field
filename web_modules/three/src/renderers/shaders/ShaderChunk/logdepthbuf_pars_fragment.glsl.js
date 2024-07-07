var logdepthbuf_pars_fragment = /* glsl */ `
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;

export { logdepthbuf_pars_fragment as default };
