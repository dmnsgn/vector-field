var fog_pars_vertex = /* glsl */ `
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;

export { fog_pars_vertex as default };
