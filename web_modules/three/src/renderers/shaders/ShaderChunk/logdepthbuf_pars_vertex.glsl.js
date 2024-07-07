var logdepthbuf_pars_vertex = /* glsl */ `
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;

export { logdepthbuf_pars_vertex as default };
