var fog_vertex = /* glsl */ `
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;

export { fog_vertex as default };
