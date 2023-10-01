var beginnormal_vertex = /* glsl */ `
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;

export { beginnormal_vertex as default };
