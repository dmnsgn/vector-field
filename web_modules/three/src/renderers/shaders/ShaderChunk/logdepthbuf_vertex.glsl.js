var logdepthbuf_vertex = /* glsl */ `
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;

export { logdepthbuf_vertex as default };
