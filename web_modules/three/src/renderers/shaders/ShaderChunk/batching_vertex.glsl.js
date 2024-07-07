var batching_vertex = /* glsl */ `
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;

export { batching_vertex as default };
