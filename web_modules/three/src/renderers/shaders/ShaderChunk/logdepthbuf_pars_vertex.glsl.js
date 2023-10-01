var logdepthbuf_pars_vertex = /* glsl */ `
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`;

export { logdepthbuf_pars_vertex as default };
